import React, {useState} from "react";
import MPopular from "../components/Movies/MPopular";
import Playing from "../components/Movies/Playing";
import Upcoming from "../components/Movies/Upcoming";
import MovieSearchResults from "../components/Movies/MovieSearchResults";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="w-[70%] mx-auto mt-2">
        <p className="text-center text-3xl py-10">Movies</p>
        <input
          type="text"
          placeholder="Search movies..."
          className="p-2 border border-gray-300 rounded-2xl mb-4 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchTerm ? (
        <MovieSearchResults query={searchTerm} />
      ) : (
        <>
          <Playing />
          <MPopular />
          <Upcoming />
        </>
      )}
    </div>
  );
}

export default Movies;
