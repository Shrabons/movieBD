import MovieList from "@/components/movie/MovieList";

export default function Home({ params: { lang } }) {
  return (
    <div>
      <MovieList lang={lang} />
    </div>
  );
}
