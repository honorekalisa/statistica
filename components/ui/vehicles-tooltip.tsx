import React from "react";

export const VehiclesTooltip = ({
  _active,
  payload,
  label,
}: {
  _active: boolean;
  payload: RegisteredVehiclesData | null;
  label: string;
}) => {
  return (
    <div className="p-2 bg-slate-50 rounded-md">
      <p className="font-semibold text-primary text-sm text-center">{label}</p>
      <p className="text-[10px]">{(payload?.[0]?.value)?.toLocaleString()} vehicles</p>
    </div>
  );
};
