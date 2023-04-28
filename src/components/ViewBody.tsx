import React from "react";
import { useAppSelector } from "../redux/app/hookes";
import { AppProps } from "../types";
import { classNames, limit } from "../constants";

const ViewBody = ({ page }: AppProps) => {
  const lines = useAppSelector((state) => state.logs.lines);
  return (
    <div
      className={classNames(
        lines.length === 0 ? "min-h-screen" : "",
        "w-full  border-solid border-2 border-gray-500"
      )}
    >
      {lines.length === 0 ? (
        <div className=" w-[10%] min-h-screen bg-gray-200  text-center border-solid border-r-2 border-gray-500"></div>
      ) : null}
      {lines.map((line, index) => (
        <div key={index} className="flex">
          <div className="min-w-[5%] bg-gray-200 min-h-[100%] text-center border-solid border-r-2 border-gray-500">
            {((page! - 1) * limit)+index+1}
          </div>
          <p className="px-2 pb-2 ">{line}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewBody;
