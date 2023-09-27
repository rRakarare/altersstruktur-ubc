import { create } from "zustand";
import { randColor } from "./utils";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface DataPoint {
  alter: number;
  vk: number;
  pivot: string;
}

interface ColumnMap {
  alter: string | null;
  vk: string | null;
  pivot: string | null;
}

interface State {
  columnMap: ColumnMap;
  isDone: boolean;
  rawData: any[];
  data: DataPoint[];
  chartData: any[];
  uniqs: any[];
  ySpan: number[] | null;
  dataHeight: number ;
  graphHeight: number ;
  rowSize: number;
  colSize: number;
  setRawData: (data: any[]) => void;
  setGraphHeight: (graphHeight: number) => void;
  setDataHeight: (dataHeight: number) => void;
  setYSpan: (span: any) => void;
  changeColor: (pivot: string, color: string) => void;
  setChartData: (min: number, max: number, auto: boolean) => void;
  setData: () => void;
  reset: () => void;
  setColumnMap: (key: string, value: string) => void;
}

const initState = {
  columnMap: {
    alter: null,
    vk: null,
    pivot: null,
  },
  isDone: false,
  rowSize: 80,
  colSize: 30,
  ySpan: null,
  graphHeight: 400,
  dataHeight: 100,
  rawData: [],
  chartData: [],
  data: [],
  uniqs: [],
};

export const useUbcStore = create<State>()((set, get) => ({
  ...initState,
  setChartData: (min, max, auto) => {
    const data = get().data;
    const dataX = data.map((item) => Number(item.alter));

    if (auto && dataX.length > 0) {
      const min = Math.min(...dataX);
      const max = Math.max(...dataX);

      const chartData = Array(max - min + 1)
        .fill(1)
        .map((n, i) => min + i)
        .map((alter) => {
          return {
            pk: 1,
            name: alter,
            vals: data.filter((datap) => Number(datap.alter) === Number(alter)),
          };
        });
      set(() => ({ chartData: [...chartData] }));
      return;
    }

    const chartData = Array(max - min + 1)
      .fill(1)
      .map((n, i) => Number(min) + Number(i))
      .map((alter) => {
        return {
          pk: 1,
          name: alter,
          vals: data.filter((datap) => Number(datap.alter) === Number(alter)),
        };
      });

    set(() => ({ chartData: [...chartData] }));
  },
  setRawData: (data) => set(() => ({ rawData: [...data] })),
  setDataHeight: (dataHeight) => {
    set(() => ({ dataHeight: dataHeight }))
  },
  setGraphHeight: (graphHeight) => set(() => ({ graphHeight: graphHeight })),
  setYSpan: (data) => {
    if (data === null) {
      const chartData = get().chartData;
      const max =
        Math.max(...chartData.map((item) => item.vals.length)) > 0
          ? Math.max(...chartData.map((item) => item.vals.length))
          : 1;
      set(() => ({ ySpan: [0, max] }));
    } else {
      set(() => ({ ySpan: data }));
    }
  },
  changeColor: (pivot, color) => {
    const uniqs = get().uniqs.map((item) =>
      item.name === pivot ? { ...item, color } : item
    );

    set(() => ({ uniqs: [...uniqs] }));
  },
  setData: () => {
    const columnMap = get().columnMap;
    const rawData = get().rawData;

    const data = rawData.map((item) => ({
      alter: item[columnMap["alter"]],
      vk: item[columnMap["vk"]],
      pivot: item[columnMap["pivot"]],
    }));

    const uniqsraw = [...new Set(data.map((item) => item.pivot))];
    const uniqs = uniqsraw.map((item) => ({ name: item, color: randColor() }));

    set(() => ({ data: [...data], uniqs: uniqs, isDone: true }));
  },
  setColumnMap: (key, value) => {
    set((state) => {
      let newState = state.columnMap;
      newState[key] = value;

      return { columnMap: { ...newState } };
    });
  },
  reset: () => {
    set(() => ({ ...initState }));
  },
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useUbcStore);
}
