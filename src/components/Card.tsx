interface props {
  url: string;
  name: string;
}

const Card = ({ url, name }: props) => {
  return (
    <div className="max-w-72 shadow-md rounded-xl">
      <img src={url} className="rounded-t-xl" />
      <div className="p-4 text-xl font-bold">{name}</div>
    </div>
  );
};

export default Card;
