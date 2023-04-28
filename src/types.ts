export interface AppProps {
  show?:boolean,
  setShow?:Function,
  setClick?:Function,
  click?:boolean,
  page?:number,
  setPage?:Function,
  newClickArr?:boolean[],
  path?:string,
  setPath?:Function
  children?: React.ReactNode
}
export interface User {
  userName: string;
  password: string;
}
export interface userStateType {
  user: {
    token: string;
    isLoggedIn: boolean;
  };
}
