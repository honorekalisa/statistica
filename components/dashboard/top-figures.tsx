import { ArrowRight } from "lucide-react";

const TopFigures = () => {
  return (
      <div className="bg-white w-full h-full p-4 rounded-md flex flex-col gap-6 items-start">
        <div className="space-y-2 w-full">
          <p className="text-sm font-medium">National income (billions)</p>
          <div className="flex items-center justify-between gap-3">
            <div className="rounded-lg bg-[#6425FE] font-medium text-white py-4 pl-5 w-full">
              RF 13,428
            </div>
            <div className="bg-[#C7FFA5] rounded-lg text-[#2C2C2C] px-2 py-4">
              <p>+5.63%</p>
            </div>
          </div>
        </div>
        <div className="space-y-2 w-full relative">
          <p className="text-sm font-medium">GDP per head (2022)</p>
          <div className="rounded-lg bg-[#2C2C2C] font-medium text-white py-4 pl-5">
            $ 1,004
          </div>
          <div className="rounded-lg bg-[#6425FE] absolute right-2 bottom-[10px] text-white p-2">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
        {/* <div className="space-y-2 w-full">
            <p className="text-sm font-medium">Top Stocks</p>
        </div> */}
      </div>
  );
};

export default TopFigures;
