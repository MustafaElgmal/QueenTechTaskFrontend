import React, { useEffect, useState } from "react";
import { classNames, clickArr, limit } from "../constants";
import { handelClick } from "../utils/functions";
import { AppProps } from "../types";
import { useAppSelector } from "../redux/app/hookes";
import { useDispatch } from "react-redux";

const ClickButtons = ({
  page,
  setPage,
  newClickArr,
  setClick,
  path,
}: AppProps) => {
  const { fileSize, lines } = useAppSelector((state) => state.logs);
  const token = useAppSelector((state) => state.user.token);
  const dispatch = useDispatch();

  return (
    <div className=" flex w-full border-solid border-2 border-gray-500 ">
      <div
        className={classNames(
          newClickArr && newClickArr[0] ? "bg-gray-500" : "",
          "text-center w-[25%] py-1 border-solid border-r-2 border-gray-500 cursor-pointer"
        )}
        onClick={async () =>
          await handelClick(
            newClickArr!,
            1,
            setClick!,
            page!,
            setPage!,
            fileSize,
            limit,
            token,
            path!,
            dispatch
          )
        }
      >
        |&lt;
      </div>
      <div
        className={classNames(
          newClickArr && newClickArr[1] ? "bg-gray-500" : "",
          "text-center w-[25%] py-1 border-solid border-r-2 border-gray-500 cursor-pointer"
        )}
        onClick={async () =>
          await handelClick(
            newClickArr!,
            2,
            setClick!,
            page!,
            setPage!,
            fileSize,
            limit,
            token,
            path!,
            dispatch
          )
        }
      >
        &lt;
      </div>
      <div
        className={classNames(
          newClickArr && newClickArr[2] ? "bg-gray-500" : "",
          "text-center w-[25%] py-1 border-solid border-r-2 border-gray-500 cursor-pointer"
        )}
        onClick={async () =>
          await handelClick(
            newClickArr!,
            3,
            setClick!,
            page!,
            setPage!,
            fileSize,
            limit,
            token,
            path!,
            dispatch
          )
        }
      >
        &gt;
      </div>
      <div
        className={classNames(
          newClickArr && newClickArr[3] ? "bg-gray-500" : "",
          "text-center w-[25%] py-1  cursor-pointer"
        )}
        onClick={async () =>
          await handelClick(
            newClickArr!,
            4,
            setClick!,
            page!,
            setPage!,
            fileSize,
            limit,
            token,
            path!,
            dispatch
          )
        }
      >
        &gt;|
      </div>
    </div>
  );
};

export default ClickButtons;
