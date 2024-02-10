import type { Database } from "@/lib/database.types";


declare global {
  type PieChartData =
    Database["public"]["Tables"]["school_gender_stats"]["Row"][];
}

declare global {
  type RegisteredVehiclesData =
    Database["public"]["Tables"]["registered_vehicles"]["Row"][];
}