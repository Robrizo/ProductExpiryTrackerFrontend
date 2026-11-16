import React from "react";

const InfoSection = () => {
  return (
    <section className="py-18 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-gray-300">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-4xl text-blue-600 font-stylish font-semibold">
            7 Days
          </h2>
          <p className="text-sm text-gray-700">advance warning</p>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-4xl text-blue-600 font-stylish font-semibold">
            Daily
          </h2>
          <p className="text-sm text-gray-700">automatic checks</p>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-4xl text-blue-600 font-stylish font-semibold">
            3 States
          </h2>
          <p className="text-sm text-gray-700">
            fresh • expiring soon • expired
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
