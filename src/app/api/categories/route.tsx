import { getAllCategories } from "@/api/getAllCategories";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await getAllCategories();
    return NextResponse.json(result);
  } catch (err) {
    console.log(err);
  }
}
