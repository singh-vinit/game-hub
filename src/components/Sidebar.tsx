import { useGenres } from "../hooks/useGenres";
import { BiLoaderCircle } from "react-icons/bi";
interface Props {
  onSelectGenre: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ onSelectGenre }: Props) => {
  const { genres, loading } = useGenres();
  return (
    <div className="p-2 h-screen col-span-1">
      <div className="text-2xl font-bold p-4">Genres</div>
      {loading ? (
        <div>
          <BiLoaderCircle className="ml-12 text-5xl text-slate-700 animate-spin" />
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
                onClick={() => onSelectGenre(genre.slug)}
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
