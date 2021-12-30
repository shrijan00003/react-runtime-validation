import { useEffect, useState } from "react";
import { dataParser, Data } from "./zod";

export { Data };

const useData = () => {
  const [data, setData] = useState<Data>();
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((d) => d.json())
      .then((data) => setData(dataParser(data)))
      .catch((err) => {
        console.log(err);
        return setError(err.mssage || "Something went wrong");
      });
  }, []);

  return { data, error };
};

export default useData;
