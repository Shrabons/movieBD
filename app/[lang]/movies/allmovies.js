import "server-only";

const data = () => import("./Movie-data.json").then((module) => module.default);

export const getMovieData = async () => data();
