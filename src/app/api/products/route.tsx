import getProduitWithMarqueAndCategorie from "@/api/getProduitWithMarqueAndCategorie";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await getProduitWithMarqueAndCategorie();
    return NextResponse.json(result);
  } catch (err) {
    console.log(err);
  }
}

