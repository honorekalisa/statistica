"use client";
import { PostgrestError } from "@supabase/supabase-js";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ErrorAlert from "@/components/ui/error";
import { RoadsTooltip } from "@/components/ui/roads-tooltip";
import { Button } from "@/components/ui/button";
import { CiExport } from "react-icons/ci";
import Export from "../export";

const RoadsClassification = ({
  data,
  error,
}: {
  data: RoadsClassificationData | null;
  error?: PostgrestError | null;
}) => {
  if (error) {
    return <ErrorAlert message={error.message} />;
  }
  return (
    <div className="p-4 bg-white rounded-lg w-full">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium">Classification of Roads (km)</h4>
        <Export data={data} filename="classification_of_roads_report" />
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          width={500}
          height={300}
          data={data || []}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" tickLine={false} fontSize={12} />
          <YAxis tickLine={false} fontSize={12} />
          {/* @ts-ignore */}
          <Tooltip content={<RoadsTooltip />} />
          <Bar
            dataKey="paved"
            radius={10}
            barSize={10}
            fill="#00C49F"
            activeBar={<Rectangle />}
          />
          <Bar
            dataKey="unpaved"
            radius={10}
            barSize={10}
            fill="#6425FE"
            activeBar={<Rectangle />}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-8 mt-2">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-secondary rounded-full"></div>
          <p className="text-xs">Paved</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-[#6425FE] rounded-full"></div>
          <p className="text-xs">Unpaved</p>
        </div>
      </div>
      <p className="text-xs text-gray-700 text-center mt-2">Source: RTDA</p>
    </div>
  );
};

export default RoadsClassification;
