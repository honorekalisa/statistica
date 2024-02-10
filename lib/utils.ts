import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PieChartType } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatData(inputArray: PieChartData | null) {
  const formattedData: PieChartType[] = [];

  // Create a map to group by year
  const map = new Map();

  inputArray?.forEach((item) => {
    if (!map.has(item.year)) {
      map.set(item.year, []);
    }
    map
      .get(item.year)
      .push({
        gender: item.gender,
        percentage: item.percentage,
        value: item.value,
      });
  });

  // Convert the map into the required format
  map.forEach((value, key) => {
    formattedData.push({
      year: key,
      data: value,
    });
  });

  return formattedData;
}

export function getGreeting() {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12) return "Good Morning";
  if (hours < 18) return "Good Afternoon";
  return "Good Evening";
}
