import DataDrop from "./items/DataDrop";
import DataScreen from "./items/DataScreen";
import { ChartScreen } from "./items/ChartScreen";
import NoSSR from "@/components/NoSSR";

export default function Home() {
  return (
    <div className="container mt-7">
      <DataDrop />
      <DataScreen />

      <NoSSR>
        <ChartScreen />
      </NoSSR>
    </div>
  );
}
