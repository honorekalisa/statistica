"use client";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import type { PostgrestError } from "@supabase/supabase-js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FaAngleDown } from "react-icons/fa6";
import { Check, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { formatData } from "@/lib/utils";
import { PieChartType } from "@/lib/data";

export default function Learners({
  data,
  error,
}: {
  data: PieChartData | null;
  error?: PostgrestError | null;
}) {
  const formattedData: PieChartType[] = formatData(data);

  const recentYear = formattedData[formattedData.length - 1]?.year;

  const [selectedYear, setSelectedYear] = useState(recentYear);
  const filteredData = formattedData.find(
    (dataItem) => dataItem.year === selectedYear
  );
  const COLORS = ["#6425FE", "#00C49F"];

  if (error) {
    return (
      <div className="rounded-lg bg-white px-4 py-4 mb-2 w-full flex items-center justify-center">
        <p className="text-red-500 text-sm font-semibold">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white px-4 py-4 mb-2 w-full">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="text-sm font-medium flex items-center gap-1">
            Education
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-3 w-3 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Gender representation in schools</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-lg flex items-center gap-2"
            >
              {selectedYear}
              <FaAngleDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by year</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {formattedData.map((yearItem, index) => (
              <DropdownMenuItem
                onClick={() => setSelectedYear(yearItem.year)}
                key={index}
              >
                {yearItem.year}
                {selectedYear === yearItem.year && (
                  <Check className="ml-auto h-4 w-4" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col xl:flex-row items-center">
        {filteredData && (
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={filteredData.data}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
              >
                {filteredData.data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        )}
        <div className="flex flex-col items-center gap-6 mt-4 w-full">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-[#6425FE] h-3 w-3" />
              <p className="text-sm font-medium">Female</p>
            </div>
            <p className="text-sm font-semibold">
              {filteredData?.data[0].value}%
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-[#00C49F] h-3 w-3" />
              <p className="text-sm font-medium">Male</p>
            </div>
            <p className="text-sm font-semibold mr-auto">
              {filteredData?.data[1].value}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
