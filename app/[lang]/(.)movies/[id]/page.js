import Modal from "@/components/movie/Modal";
import MovieDetails from "@/components/movie/MovieDetails";

const MoviesModal = ({ params: { id, lang } }) => {
  return (
    <Modal>
      <MovieDetails id={id} lang={lang} />
    </Modal>
  );
};

export default MoviesModal;
