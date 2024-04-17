import MovieDetails from "@/components/movie/MovieDetails";
import { notFound } from "next/navigation";
import { getMovieData } from "../allmovies";

const MovieDetailsPage = async ({ params: { id, lang } }) => {
  const data = await getMovieData();
  const detailsData = data.results.find((item) => item.id === parseInt(id));
  if (detailsData === undefined) {
    notFound();
  }
  return <MovieDetails id={id} lang={lang} />;
};

export default MovieDetailsPage;
