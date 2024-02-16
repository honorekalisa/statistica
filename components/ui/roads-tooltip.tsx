import React from "react";

export const RoadsTooltip = ({
  _active,
  payload,
  label,
}: {
  _active: boolean;
  payload: any | [];
  label: string;
}) => {
  return (
    <div className="p-2 bg-slate-50 rounded-md">
      <div className="space-y-1">
        <p className="font-semibold text-gray-800 text-sm">
          {label}
        </p>
        <p className="text-xs text-secondary">
          Paved: {payload?.[0]?.payload?.paved} km
        </p>
        <p className="text-xs text-primary">
          Unpaved: {payload?.[0]?.payload?.unpaved} km
        </p>
      </div>
    </div>
  );
};
