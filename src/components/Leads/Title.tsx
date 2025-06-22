import React from "react";

const Title = () => {
  return (
    <div className="min-h-22 mt-4 p-6 bg-amber-50 flex items-center gap-6 flex-wrap">
      <div className="flex gap-2 text-[#171A1FFF] text-sm flex-col min-w-48">
        <p className="font-[350]">Title</p>
        <p className="font-[600]">Sint Proident adipisicing</p>
      </div>
      <div className="flex gap-2 text-[#171A1FFF] text-sm flex-col min-w-48">
        <p className="font-[350]">Est Revenue</p>
        <p className="font-[600]">$2,000</p>
      </div>
      <div className="flex gap-2 text-[#171A1FFF] text-sm flex-col min-w-48">
        <p className="font-[350]">Product</p>
        <p className="font-[600]">100 Licences</p>
      </div>
      <div className="flex gap-2 text-[#171A1FFF] text-sm flex-col min-w-48">
        <p className="font-[350]">Est. Close Date</p>
        <p className="font-[600]">Oct 10, 2025</p>
      </div>
    </div>
  );
};

export default Title;
