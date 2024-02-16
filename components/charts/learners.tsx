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
import { Check, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { formatData } from "@/lib/utils";
import { PieChartType } from "@/lib/data";
import ErrorAlert from "@/components/ui/error";

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
    return <ErrorAlert message={error.message} />;
  }

  return (
    <div className="rounded-lg px-4 py-4 mb-2 w-full h-full">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="text-sm font-medium flex items-center gap-1">
            Education
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-3 w-3 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Gender representation in schools</p>
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
                dataKey="percentage"
                nameKey="gender"
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
        <div className="grid grid-cols-3 gap-y-4 w-full mt-4 md:mt-0">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-[#6425FE] h-3 w-3" />
            <p className="text-sm ">Female</p>
          </div>
          <p className="text-sm font-semibold text-center">
            {filteredData?.data[0].percentage}%
          </p>
          <p className="text-sm font-semibold text-right">
            {filteredData?.data[0].value.toLocaleString()}
          </p>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-[#00C49F] h-3 w-3" />
            <p className="text-sm">Male</p>
          </div>
          <p className="text-sm font-semibold text-center">
            {filteredData?.data[1].percentage}%
          </p>
          <p className="text-sm font-semibold text-right">
            {filteredData?.data[1].value.toLocaleString()}
          </p>
          <div className="flex items-center gap-4 justify-center col-span-3">
            <p className="text-sm">Total</p>
            <p className="text-sm font-semibold text-center">
              {filteredData?.data
                .reduce((sum, item) => sum + item.value, 0)
                .toLocaleString()}
            </p>
          </div>
        </div>
      </div>
        <p className="text-xs text-center">Source: School census, Ministry of Education</p>
    </div>
  );
}
