import RoadsClassification from "@/components/charts/roads-classification";
import RegisteredVehicles from "@/components/charts/vehicles";
import useDashboard from "@/hooks/useDashboard";
import supabase from "@/supabaseClient";
import React from "react";

const TransportPage = async () => {
  const {
    registeredVehicles,
    registered_vehicles_error,
    roads_classification,
    roads_classification_error,
  } = await useDashboard();
  return (
    <div className="py-2 px-4 bg-slate-50 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <RegisteredVehicles
          data={registeredVehicles}
          error={registered_vehicles_error}
        />
        <RoadsClassification
          data={roads_classification}
          error={roads_classification_error}
        />
      </div>
    </div>
  );
};

export default TransportPage;
