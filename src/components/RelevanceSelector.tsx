interface Props {
  onSelectOrder: React.Dispatch<React.SetStateAction<string>>;
}

const RelevanceSelector = ({ onSelectOrder }: Props) => {
  return (
    <div>
      <select
        name="platforms"
        className="border border-black rounded-md text-lg font-medium p-1"
        onChange={(e) => onSelectOrder(e.target.value)}
      >
        <option value="">order by: Relevance</option>
        <option value="name">Name</option>
        <option value="released">Released Date</option>
        <option value="added">Date Added</option>
        <option value="rating">Rating</option>
        <option value="metacritic">Critic Score</option>
      </select>
    </div>
  );
};

export default RelevanceSelector;
