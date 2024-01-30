import Image from "next/image";
import { RiHandCoinFill } from "react-icons/ri";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaPersonCane } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

const KeyFigures = () => {
  return (
    <div className="bg-white rounded-md p-3 grid md:grid-cols-2 xl:grid-cols-4 place-content-center-center gap-3">
      <div className="flex items-start justify-between gap-10 bg-secondary rounded-md py-2 px-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-700">
            <RiHandCoinFill className="w-5 h-5" />
            <p className="text-sm">GDP</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Current Value</p>
            <p className="text-[10px] text-gray-500">(RWF Billions)</p>
            <p className="text-base font-semibold">
              <span className="text-xs">RF </span>2,909.6
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-5">
          <div>
            <p className="text-xs text-gray-500">2023 Q3</p>
            <p className="text-xs text-green-500 text-center">+7.46 %</p>
          </div>
          <Image
            unoptimized
            height={60}
            width={60}
            src="/assets/up-graph.png"
            alt="gdp"
          />
        </div>
      </div>
      <div className="flex items-start justify-between gap-10 bg-[#B79BFF] text-gray-100 rounded-md py-2 px-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <IoIosPeople className="w-5 h-5" />
            <p className="text-sm">Population</p>
          </div>
          <div>
            <p className="text-xs">Current Value</p>
            <p className="text-[10px]">(Number)</p>
            <p className="text-base font-semibold">13,246,394</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-5">
          <div>
            <p className="text-xs">2023 Q3</p>
            <p className="text-xs text-green-600 text-center">+2.24 %</p>
          </div>
          <Image
            unoptimized
            height={60}
            width={60}
            src="/assets/up-graph.png"
            alt="gdp"
          />
        </div>
      </div>
      <div className="flex items-start justify-between gap-10 bg-[#FFE5A5] rounded-md py-2 px-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-700">
            <FaMoneyBillTrendUp className="w-5 h-5" />
            <p className="text-sm">CPI</p>
          </div>
          <div className="text-gray-500">
            <p className="text-xs">Current Value</p>
            <p className="text-[10px]">(Price index)</p>
            <p className="text-base font-semibold">167.93</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-5">
          <div>
            <p className="text-xs text-gray-500">2023 Q3</p>
            <p className="text-xs text-green-500 text-center">+6.45 %</p>
          </div>
          <Image
            unoptimized
            height={60}
            width={60}
            src="/assets/up-graph.png"
            alt="gdp"
          />
        </div>
      </div>
      <div className="flex items-start justify-between gap-10 bg-[#C7FFA5] rounded-md py-2 px-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-700">
            <FaPersonCane className="w-5 h-5" />
            <p className="text-sm">Life XP</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Current Value</p>
            <p className="text-[10px] text-gray-500">(Years at birth)</p>
            <p className="text-base font-semibold">69.6</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-5">
          <div>
            <p className="text-xs text-gray-500">2023 Q3</p>
            <p className="text-xs text-green-500 text-center">+7.91 %</p>
          </div>
          <Image
            unoptimized
            height={60}
            width={60}
            src="/assets/up-graph.png"
            alt="gdp"
          />
        </div>
      </div>
    </div>
  );
};

export default KeyFigures;
