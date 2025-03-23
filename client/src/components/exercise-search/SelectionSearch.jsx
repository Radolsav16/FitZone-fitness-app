import React from "react";
import { Link } from "react-router";

export default function SelectionSearch({
  title,
  subtitle,
  selection,
}) {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center mt-20">
    
      <h1 className="text-4xl font-bold mb-8">{title}</h1>

      <p className="text-gray-600 mb-6">
        {subtitle}
      </p>
      <div className="grid grid-cols-2 gap-6 mb-8">
        {selection.map((select) => <Link
        key={select.href}
        to={select.href}
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-lg shadow-lg transition duration-300"
        >
          {select.name}
        </Link>)}
       
      </div>
    </div>
  );
}
