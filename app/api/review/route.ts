import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json({ success: false, error: "Missing RESEND_API_KEY" }, { status: 500 });
    }
    const { name, role, review } = await req.json();

    if (!name || !role || !review) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "R U O’Cake <onboarding@resend.dev>", // use a verified domain in prod
      to: ["nguyentranminhthu.65@gmail.com"],
      subject: "R U O’Cake — Listener Review",
      html: `
        <h3>New listener review</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Role:</strong> ${escapeHtml(role)}</p>
        <p><strong>Review:</strong></p>
        <p>${escapeHtml(review).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message || JSON.stringify(error) },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id ?? null });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message ?? "Server error" },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[
      c as "&" | "<" | ">" | '"' | "'"
    ] as string)
  );
}
