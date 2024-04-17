import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Image from "next/image";
import Link from "next/link";

const MovieCard = async ({ movie, lang }) => {
  let { title, poster_path } = movie;
  const dict = await getDictionary(lang);
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        className="w-full object-cover"
        width={500}
        height={300}
        src={poster_path}
        alt={title}
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div className="flex items-center space-x-1 mb-5">
          <Image src="./star.svg" width={24} height={24} alt="" />
          <Image src="./star.svg" width={24} height={24} alt="" />
          <Image src="./star.svg" width={24} height={24} alt="" />
          <Image src="./star.svg" width={24} height={24} alt="" />
          <Image src="./star.svg" width={24} height={24} alt="" />
        </div>
        <Link
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href={`movies/${movie.id}`}
        >
          <Image src="./tag.svg" width={24} height={24} alt="" />
          <span>{dict.details}</span>
        </Link>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
