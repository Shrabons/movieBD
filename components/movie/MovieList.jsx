import { getMovieData } from "@/app/[lang]/movies/allmovies";
import MovieCard from "./MovieCard";

const MovieList = async ({ lang }) => {
  const movieData = await getMovieData();

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {movieData?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} lang={lang} />
      ))}
    </div>
  );
};

export default MovieList;
