import { useGenres } from "../hooks/useGenres";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  setCurrentGenre: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ setCurrentGenre }: Props) => {
  const { genres, loading } = useGenres();
  return (
    <div className="p-2 h-screen col-span-1">
      <div className="text-2xl font-bold p-4">Genres</div>
      {loading ? (
        <div className="p-4">
          <GenreSkeleton />
          <GenreSkeleton />
          <GenreSkeleton />
          <GenreSkeleton />
          <GenreSkeleton />
          <div>hi</div>
        </div>
      ) : (
        <div className="p-4">
          {genres.map((genre) => (
            <div key={genre.id} className="flex gap-x-4 mb-4">
              <img
                src={genre.image_background}
                style={{ width: "42px", height: "42px", borderRadius: "20%" }}
              />
              <button
                className="text-left font-medium text-sm hover:underline"
                onClick={() => setCurrentGenre(genre.slug)}
              >
                {genre.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
