import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing URL" }, { status: 400 });
  }

  const fullUrl = `${process.env.API_URL}/${url}`;

  try {
    const response = await fetch(fullUrl, {
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": process.env.API_KEY!,
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch from CoinGecko" },
      { status: 500 }
    );
  }
}
