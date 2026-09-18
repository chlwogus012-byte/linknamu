import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import type { LinkClickDoc } from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const collection = client
    .db("linknamu")
    .collection<LinkClickDoc>("linkClicks");

  const docs = await collection.find().toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return NextResponse.json(counts);
}
