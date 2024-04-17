import { getAllMovies, getMovieById } from "@/lib/movie-data";
import { NextResponse } from "next/server";

// get
export async function GET(request, { params: { id } }) {
  const data = await getMovieById(id);

  return NextResponse.json(data);
}

// patch
export async function PATCH(request, { params: { id } }) {
  const movie = await request.json();
  let movieId = await getMovieById(id);
  movieId.title = movie.title;
  return NextResponse.json(movieId);
}

// Delete
export async function DELETE(request, { params: { id } }) {
  const allMovie = await getAllMovies();
  let removeMovie = allMovie.results.filter(
    (movie) => movie.id !== parseInt(id)
  );
  return NextResponse.json(removeMovie);
}
