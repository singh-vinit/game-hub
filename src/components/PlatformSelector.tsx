import { usePlatforms } from "../hooks/usePlatforms";
interface Props {
  onSelectPlatform: React.Dispatch<React.SetStateAction<string>>;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const platforms = usePlatforms();
  return (
    <div>
      <select
        name="platforms"
        className="border border-black rounded-md text-lg font-medium p-1"
        onChange={(e) => onSelectPlatform(e.target.value)}
      >
        <option value="">platforms</option>
        {platforms.map((platform) => (
          <option key={platform.id} value={platform.id}>
            {platform.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlatformSelector;
