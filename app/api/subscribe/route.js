import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // TODO: Use SendGrid or another service here
    const result = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        list_ids: [process.env.SENDGRID_DEEB_DIVE_LIST],
        contacts: [{ email }],
      }),
    });

    if (!result.ok) {
      const error = await result.json();
      console.error("SendGrid error:", error);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ message: "Success" });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
