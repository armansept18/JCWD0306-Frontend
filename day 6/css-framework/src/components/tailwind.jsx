const TailwindExample = () => {
  return (
    <div className="bg-black h-12 text-white flex justify-center md:bg-slate-400">
      <div className=" max-w-7xl w-full flex items-center font-bold text-lg uppercase gap-5">
        <div>HOME</div>
        <div>profile</div>
        <div>settings</div>
        <div>
          <input type="file" />
          <button> input file here</button>
        </div>
      </div>
    </div>
  );
};

export default TailwindExample;
