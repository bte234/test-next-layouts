"use client";

import { useEffect, useState } from "react";
import { getBaseUrl } from "../../utils/get-base-url";

const UseEffectClient = () => {
  const [data, setData] = useState<any>(undefined);
  useEffect(() => {
    let ignore = false;
    setData(null);
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((res) => res.json())
      .then((res) => {
        if (!ignore) setData(res);
      });
    return () => {
      ignore = true;
    };
  }, [setData]);
  if (!data) return "waiting";

  return (
    <div>
      <h1 className="text-4xl font-bold">use effect fetch</h1>
      <p>
        data: <span className="text-red-600 font-semibold">{data.title}</span>
      </p>
    </div>
  );
};

export default UseEffectClient;
