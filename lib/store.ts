import { create } from 'zustand'

interface DataPoint {
  alter: number,
  vk: number,
  pivot: string
}

interface ColumnMap {
  alter: string|null,
  vk: string|null,
  pivot: string|null
}

interface State {
  columnMap: ColumnMap
  isDone: boolean,
  rawData: any[]
  data: DataPoint[]
  uniqs: string[],
  setRawData: (data:any[]) => void
  setData: () => void
  reset: () => void
  setColumnMap: (key:string, value:string) => void
}

const initState = {
  columnMap: {
    alter: null,
    vk: null,
    pivot: null
  },
  isDone:false,
  rawData:[],
  data:[],
  uniqs:[],
}

export const useUbcStore = create<State>()((set,get) => ({
  ...initState,
  setRawData: (data) => set(()=>({rawData: [...data]})),
  setData: () => {
    const columnMap = get().columnMap
    const rawData = get().rawData

    const data = rawData.map(item => ({
      alter: item[columnMap["alter"]],
      vk: item[columnMap["vk"]],
      pivot: item[columnMap["pivot"]],
    }))

    const uniqs = [...new Set(data.map(item => item.pivot))]



    set(()=> ({data: [...data], uniqs:uniqs, isDone: true}))


  },
  setColumnMap: (key, value) => {

    set((state) => {
      let newState = state.columnMap
      newState[key] = value

      return { columnMap: {...newState} }
    })
  },
  reset: () => {
    set(()=> ({...initState}))
  },
}))