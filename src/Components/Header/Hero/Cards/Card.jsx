import React from "react";

export default function Card(props) {
  return (
    <div className="border border-slate-300 flex flex-col items-center gap-y-3 py-7 hover:border-Primary transition-colors">
      <span>{props.icon}</span>
      <h1 className="text-white text-xl font-bold">{props.title}</h1>
    </div>
  );
}
