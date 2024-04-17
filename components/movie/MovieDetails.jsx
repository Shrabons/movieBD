import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import { getMovieData } from "@/app/[lang]/movies/allmovies";
import Image from "next/image";

const MovieDetails = async ({ id, lang }) => {
  const data = await getMovieData();
  const detailsData = data.results.find((item) => item.id === parseInt(id));
  const dict = await getDictionary(lang);

  return (
    <section>
      <div>
        <Image
          height={550}
          width={850}
          className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={detailsData?.poster_path}
          alt=""
        />
      </div>

      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image
            src={detailsData?.poster_path}
            alt=""
            height={350}
            width={250}
          />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">
            {detailsData?.title}
          </h2>
          <p className="my-2 text-slate-400 italic">{detailsData?.overview}</p>
          <ul className="text-slate-300 space-y-2 my-8">
            <li>
              {dict.releaseDate} : {detailsData?.release_date}
            </li>
            <li>
              {dict.Average} : {detailsData?.vote_average}
            </li>
            <li>
              {dict.vote} : {detailsData?.vote_count}
            </li>
            <li>
              {dict.popularity} : {detailsData?.popularity}
            </li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dict.stream}
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dict.download}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
