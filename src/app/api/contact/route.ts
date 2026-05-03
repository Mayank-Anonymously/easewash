import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, address, service, message } = await req.json();

    // Check if required environment variables are set
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP configuration is missing in environment variables');
      console.log('Lead details:', { name, email, phone, address, service, message });
      return NextResponse.json({ message: 'SMTP configuration missing' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Email to the Business Owner
    const ownerMailOptions = {
      from: `"EaseWash Lead Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Lead: ${service} from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px 20px; background-color: #f0f4f8; color: #001e40;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; shadow: 0 10px 30px rgba(0,30,64,0.1); border: 1px solid #e1e8ed;">
            <div style="background: linear-gradient(135deg, #001e40 0%, #00677d 100%); padding: 30px; text-align: center;">
              <img src="https://easewash.in/logo.png" alt="EaseWash Logo" style="height: 60px; margin-bottom: 15px; filter: brightness(0) invert(1);">
              <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">New Service Request</h1>
              <p style="color: #50d9fe; margin: 10px 0 0 0; font-weight: 600; text-transform: uppercase; font-size: 12px; tracking-widest: 2px;">Lead Notification</p>
            </div>
            <div style="padding: 40px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f8; color: #00677d; font-weight: 700; width: 140px;">Customer Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f8; font-weight: 500;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f8; color: #00677d; font-weight: 700;">Phone Number</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f8; font-weight: 500;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f8; color: #00677d; font-weight: 700;">Email Address</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f8; font-weight: 500;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f8; color: #00677d; font-weight: 700;">Service Type</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f8;"><span style="background-color: #50d9fe; color: #001e40; padding: 4px 12px; border-radius: 20px; font-weight: 800; font-size: 12px;">${service.toUpperCase()}</span></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f8; color: #00677d; font-weight: 700;">Pickup Address</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f8; line-height: 1.5; font-weight: 500;">${address}</td>
                </tr>
              </table>
              <div style="margin-top: 30px; background-color: #f7f9fb; padding: 25px; border-radius: 16px; border-left: 4px solid #00677d;">
                <p style="margin: 0 0 10px 0; font-weight: 800; color: #001e40; font-size: 14px;">Additional Instructions:</p>
                <p style="margin: 0; line-height: 1.6; color: #43474f;">${message || 'No specific instructions provided.'}</p>
              </div>
              <div style="margin-top: 40px; text-align: center;">
                <a href="tel:${phone}" style="display: inline-block; background-color: #001e40; color: #ffffff; padding: 15px 35px; border-radius: 50px; text-decoration: none; font-weight: 800; font-size: 16px; shadow: 0 4px 15px rgba(0,30,64,0.2);">Call Customer Now</a>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    // 2. Confirmation Email to the Customer
    const customerMailOptions = {
      from: `"EaseWash Laundry" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We've Received Your Request - EaseWash Laundry`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px 20px; background-color: #f7f9fb; color: #001e40;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; shadow: 0 10px 40px rgba(0,0,0,0.05);">
            <div style="background: linear-gradient(135deg, #00677d 0%, #001e40 100%); padding: 40px; text-align: center; position: relative;">
              <img src="https://easewash.in/logo.png" alt="EaseWash Logo" style="height: 80px; margin-bottom: 20px; filter: brightness(0) invert(1);">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800;">Thank You, ${name.split(' ')[0]}!</h1>
              <p style="color: #50d9fe; margin: 10px 0 0 0; font-size: 16px; font-weight: 500;">Your laundry is in professional hands.</p>
            </div>
            <div style="padding: 40px;">
              <p style="font-size: 17px; line-height: 1.6; margin-bottom: 25px;">We've received your request for <strong>${service}</strong>. Our professional fleet is being assigned to your location.</p>
              
              <div style="background-color: #f0f4f8; padding: 25px; border-radius: 20px; margin-bottom: 30px;">
                <p style="margin: 0 0 5px 0; color: #00677d; font-weight: 800; text-transform: uppercase; font-size: 11px; tracking-widest: 1px;">Scheduled Pickup At:</p>
                <p style="margin: 0; font-size: 16px; font-weight: 600; line-height: 1.5;">${address}</p>
              </div>

              ${message ? `
              <div style="margin-bottom: 30px; padding: 0 10px;">
                <p style="margin: 0 0 5px 0; color: #43474f; font-weight: 700; font-size: 13px;">Your Special Instructions:</p>
                <p style="margin: 0; font-style: italic; color: #5f6368;">"${message}"</p>
              </div>
              ` : ''}

              <p style="font-size: 16px; color: #43474f; margin-bottom: 35px;">Our team will call you at <strong>${phone}</strong> within the next 30 minutes to confirm the exact pickup time.</p>
              
              <div style="border-top: 1px solid #eceef0; padding-top: 35px; text-align: center;">
                <p style="font-weight: 800; margin-bottom: 20px; color: #001e40;">Need to change something?</p>
                <div style="display: flex; justify-content: center; gap: 15px;">
                  <a href="https://wa.me/919817866657" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 12px 25px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 14px; margin-right: 10px;">WhatsApp Us</a>
                  <a href="tel:+919817866657" style="display: inline-block; background-color: #001e40; color: #ffffff; padding: 12px 25px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 14px;">Call Support</a>
                </div>
              </div>
            </div>
            <div style="background-color: #001e40; padding: 20px; text-align: center; color: #ffffff; font-size: 12px;">
              <p style="margin: 0;">EaseWash Laundry Service | Kharar • Chandigarh • Mohali</p>
              <p style="margin: 5px 0 0 0; opacity: 0.6;">Liquid Precision in Garment Care</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
