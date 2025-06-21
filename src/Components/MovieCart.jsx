import  {useState} from "react";
import MovieDetails from "./MovieDetails";
import Ratings from "./Ratings";
import { getImageUrl } from "./Utils/Cine-utility";

export default function MovieCart({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectMovie, setSelectMovie] = useState(null);

  function handleClose() {
    setSelectMovie(null);
    setShowModal(false);
  }

  function handleMovieSelection(movie) {
    setSelectMovie(movie);
    setShowModal(true);
  }

  return (
    <>
      {showModal && <MovieDetails movie={selectMovie} onClose={handleClose} />}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full max-h-[400px] object-contain"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Ratings value={movie.rating} />
            </div>
            <a
              className="primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>{movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
