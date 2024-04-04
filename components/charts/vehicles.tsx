"use client";
import ErrorAlert from "@/components/ui/error";
import { VehiclesTooltip } from "@/components/ui/vehicles-tooltip";
import {
  AreaChart,
  Line,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { PostgrestError } from "@supabase/supabase-js";
import Export from "../export";

export default function RegisteredVehicles({
  data,
  error,
}: {
  data: RegisteredVehiclesData | null;
  error?: PostgrestError | null;
}) {
  if (error) {
    return <ErrorAlert message={error.message} />;
  }
  return (
    <div className="bg-white p-4 rounded-md w-full">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-4">
        <h4 className="text-sm font-medium">
          Registered Vehicles in Rwanda
        </h4>
        <Export data={data} filename={"registered-vehicles.csv"} />
      </div>

      {data ? (
        <>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart
              width={500}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6425FE" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6425FE" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" tickLine={false} fontSize={12} />
              <YAxis dataKey={"value"} tickLine={false} fontSize={12} />
              {/* @ts-ignore */}
              <Tooltip content={<VehiclesTooltip />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#6425FE"
                fill="#00C49F"
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#6425FE"
                strokeWidth={2}
                fillOpacity={1}
                fill={"url(#colorUv)"}
              />
            </AreaChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-700 text-center mt-2">
            Hover over the chart to view the actual figure
          </p>
          <p className="text-xs text-gray-700 text-center mt-1">Source: RRA</p>
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
