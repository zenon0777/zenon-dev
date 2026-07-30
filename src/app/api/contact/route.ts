import { NextRequest, NextResponse, after } from "next/server";
import { transporter, CONTACT_EMAIL } from "@/lib/nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  businessType: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.businessType || !body.message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Send email in the background so the user isn't kept waiting
    after(async () => {
      try {
        await transporter.sendMail({
          from: `"Zenon Dev Website" <${CONTACT_EMAIL}>`,
          to: CONTACT_EMAIL,
          replyTo: body.email,
          subject: `New Inquiry from ${body.name} — ${body.businessType}`,
          html: `
            <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0A0A0A; color: #D1D5DB; padding: 40px; border-radius: 16px; border: 1px solid #374151;">
              <div style="text-align: center; margin-bottom: 32px;">
                <h1 style="color: #C8A74E; font-size: 24px; margin: 0;">New Contact Inquiry</h1>
                <p style="color: #6B7280; font-size: 14px; margin-top: 8px;">via Zenon Dev Website</p>
              </div>
              
              <div style="background-color: #111111; border-radius: 12px; padding: 24px; margin-bottom: 24px; border: 1px solid #1F2937;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1F2937; color: #6B7280; font-size: 14px; width: 120px;">Name</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1F2937; color: #FFFFFF; font-size: 14px; font-weight: 600;">${body.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1F2937; color: #6B7280; font-size: 14px;">Email</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1F2937; color: #C8A74E; font-size: 14px;">
                      <a href="mailto:${body.email}" style="color: #C8A74E; text-decoration: none;">${body.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1F2937; color: #6B7280; font-size: 14px;">Phone</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1F2937; color: #FFFFFF; font-size: 14px;">${body.phone || "Not provided"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #6B7280; font-size: 14px;">Business</td>
                    <td style="padding: 12px 0; color: #FFFFFF; font-size: 14px;">${body.businessType}</td>
                  </tr>
                </table>
              </div>
              
              <div style="background-color: #111111; border-radius: 12px; padding: 24px; border: 1px solid #1F2937;">
                <h3 style="color: #C8A74E; font-size: 14px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
                <p style="color: #D1D5DB; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${body.message}</p>
              </div>
              
              <div style="text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid #1F2937;">
                <p style="color: #6B7280; font-size: 12px; margin: 0;">© ${new Date().getFullYear()} Zenon Dev. All Rights Reserved.</p>
              </div>
            </div>
          `,
        });
      } catch (err) {
        console.error("Background email error:", err);
      }
    });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
