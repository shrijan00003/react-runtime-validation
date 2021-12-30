import { useEffect, useState } from "react";

export interface Datum{
  id: number;
  name:string;
}

export type Data = Datum[];

const useData =()=>{
  const [data, setData] = useState<Data>();
  const [error, setError] = useState('');

  useEffect(()=>{
    fetch("/data.json").then((d)=> d.json()).then(data=> setData(data)).catch(err=> setError(err.mssage ||'Something went wrong'))
  },[])

  return {data, error}
}

export default useData;