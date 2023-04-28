import { Dispatch } from "redux";
import { getLinesClick } from "./apis";

export const handelClick = async (
  clickArr: boolean[],
  index: number,
  setClick: Function,
  page: number,
  setPage: Function,
  fileSize: number,
  limit: number,
  token: string,
  path: string,
  dispatch: Dispatch
) => {
  let newPage=page
  const newClickArr = clickArr.map((item, i) => {
    if (i + 1 === index) {
      return true;
    }
    return false;
  });

  setClick(newClickArr);
  switch (index) {
    case 1:
      if (fileSize > 0) newPage=1;
      break;
    case 2:
      if (fileSize > 0 && newPage > 1) {
        newPage -= 1;
        
      }
      break;
    case 3:
      if (fileSize > 0 && newPage < Math.ceil(fileSize / limit)) {
        newPage += 1;
      }
      break;
    case 4:
      if (fileSize > 0) newPage=Math.ceil(fileSize / limit);
      break;
  }
  setPage(newPage)
  console.log(newPage)
  if (fileSize > 0) {
    await getLinesClick(token, path, newPage, dispatch);
  }
};
