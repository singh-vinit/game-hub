const CardSkeleton = () => {
  return (
    <div className="max-w-72 shadow-md rounded-xl">
      <div className="animate-pulse">
        <div className="rounded-t-xl bg-slate-700 w-full h-44"></div>
        <div className="p-4">
          <div className="rounded bg-slate-700 h-4 w-full mb-3"></div>
          <div className="rounded bg-slate-700 h-4 w-full mb-3"></div>
          <div className="rounded bg-slate-700 h-8 w-8"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
