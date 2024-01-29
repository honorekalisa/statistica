import Image from "next/image";

const ThoughtsTip = () => {
  return (
    <div className="rounded-md bg-[#C7FFA5]/40 px-4 pt-12 pb-4 flex flex-col gap-2 items-center w-60 relative">
      <span className="text-xs text-[#838383]">Daily Tip</span>
      <p className="text-sm text-gray-700 text-center text-wrap">
        If you aren’t willing to own a stock for 10 years, don’t even think
        about owning it for 10 minutes.
      </p>
      <div className="rounded-full w-16 h-16 bg-[#C7FFA5]/40 flex items-center justify-center absolute -top-7">
        <Image height={100} width={100} src="/assets/bulb.png" alt="tip" className="z-10" />
      </div>
    </div>
  );
};

export default ThoughtsTip;
