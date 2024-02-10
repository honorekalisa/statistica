import React from "react";

export const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: RegisteredVehiclesData | null;
  label: string;
}) => {
  console.log(active, payload, label);
  return (
    <div className="p-2 bg-slate-100 rounded-md">
      <p className="font-semibold text-primary text-sm text-center">{label}</p>
      <p className="text-[10px]">{(payload?.[0]?.value)?.toLocaleString()} vehicles</p>
    </div>
  );
};
