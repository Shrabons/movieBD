import { getAllMovies } from "@/lib/movie-data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getAllMovies();
  return NextResponse.json(data);
}
