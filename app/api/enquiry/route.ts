import * as nodemailer from "nodemailer";
import { NextRequest } from "next/server";
import { validateEnquiry } from "./validate";

// Force Node.js runtime — nodemailer doesn't work on Edge
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const errors = validateEnquiry(data);
    if (errors.length > 0) {
      return Response.json({ success: false, errors }, { status: 400 });
    }

    const { service, location, name, email, phone, date, time, tests } = data;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error("Missing email env vars: EMAIL_USER, EMAIL_PASS, or EMAIL_TO");
      return Response.json({ success: false, message: "Email configuration missing" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Enquiry Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Enquiry Received",
      html: `
        <h2>New Enquiry</h2>
        <h3>Service Details</h3>
        <p><b>Service:</b> ${service}</p>
        <p><b>Location:</b> ${location}</p>
        <h3>User Details</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <h3>Schedule</h3>
        <p><b>Date:</b> ${date || "Not specified"}</p>
        <p><b>Time:</b> ${time || "Not specified"}</p>
        <h3>Tests Required</h3>
        <p>${tests || "None selected"}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Enquiry API error:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return Response.json({ success: false, message }, { status: 500 });
  }
}
