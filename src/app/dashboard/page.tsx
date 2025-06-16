import FunnelChart from "@/components/dashboard/charts/FunnelChart";
import ClosedDeals from "@/components/dashboard/ClosedDeals";
import EstProfit from "@/components/dashboard/EstProfit";
import EstRevenue from "@/components/dashboard/EstRevenue";
import NewDeals from "@/components/dashboard/NewDeals";
import DoughnutChart from "@/components/dashboard/charts/DoughnutChart";
import { epilogue } from "@/ui/fonts";
export default function Dashboard() {
  return (
    <div className=" grid grid-cols-1 grid-rows-[repeat(9,auto)] md:grid-cols-4 md:grid-rows-[78px_122px_338px_553px_418px] gap-8 p-4">
      <div className="md:row-start-1 md:col-start-1 md:col-span-4">
        <p
          className={`${epilogue.className} antialiased text-3xl leading-12 font-[800] text-[#171A1FFF]`}
        >
          Dashboard
        </p>
      </div>

      <div className="md:row-start-2 md:col-start-1 md:col-span-1 bg-[#FFF9EEFF] rounded-md flex px-3">
        <ClosedDeals />
      </div>
      <div className="md:row-start-2 md:col-start-2 md:col-span-1 bg-[#F5F9F5FF] rounder-md flex px-3">
        <NewDeals />
      </div>

      <div className="md:row-start-2 md:col-start-3 md:col-span-1 bg-[#FFF1F0FF] rounder-md flex px-3">
        <EstRevenue />
      </div>

      <div className="md:row-start-2 md:col-start-4 md:col-span-1 bg-[#F1F5FEFF] rounder-md flex px-3">
        <EstProfit />
      </div>

      <div className="md:row-start-3 md:col-start-1 md:col-span-2 border-1 border-solid border-[#F3F4F6FF] rounded-sm">
        <FunnelChart />
      </div>

      <div className="md:row-start-3 md:col-start-3 md:col-span-2">
        <DoughnutChart />
      </div>

      <div className="md:row-start-4 md:col-start-1 md:col-span-4 bg-green-200"></div>

      <div className="md:row-start-5 md:col-start-1 md:col-span-2 bg-green-200"></div>

      <div className="md:row-start-5 md:col-start-3 md:col-span-2 bg-green-200"></div>
    </div>
  );
}
