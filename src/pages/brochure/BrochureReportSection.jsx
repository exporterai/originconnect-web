import React from "react";

const BrochureReportSection = ({ title, subtitle, data }) => {
  if (!data) return null;

  return (
    <div className="px-10 h-[700px] flex flex-col justify-between text-gray-800">
      {/* Brand Header */}
      <div className="flex justify-between items-center border-b pb-4 border-gray-200">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-gray-900">
            {data.partnerA.name}
          </span>
          <span className="text-gray-400 font-light">+</span>
          <span className="text-xl font-bold text-blue-600">
            {data.partnerB.name}
          </span>
        </div>
        <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-semibold border border-blue-100">
          {data.productsCount}
        </span>
      </div>

      {/* Main Body Grid */}
      <div className="grid grid-cols-2 gap-8 items-center my-auto">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
            {title}
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">{subtitle}</p>
          <ul className="flex flex-col gap-2.5 mt-2">
            {data.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2.5 text-xs font-medium text-gray-700"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-64 rounded-xl overflow-hidden shadow-md bg-gray-50 border border-gray-100">
          <img
            src={data.highlightImage}
            alt="Brochure Highlight"
            crossOrigin="anonymous"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Footer Info Box */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex justify-between items-center text-xs text-gray-500">
        <div>
          <span className="font-semibold text-gray-700">Web: </span>
          {data.contact.website}
        </div>
        <div>
          <span className="font-semibold text-gray-700">Email: </span>
          {data.contact.email}
        </div>
        <div>
          <span className="font-semibold text-gray-700">Phone: </span>
          {data.contact.phone}
        </div>
      </div>
    </div>
  );
};

export default BrochureReportSection;
