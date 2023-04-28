export const getFromStorage = (key: string) => {
    if (typeof window !== "undefined") {
      const user = window.localStorage.getItem(key);
      if (user !== null) {
        return JSON.parse(user);
      }
    }
    return { token: "",isLoggedIn: false };
  };
  export const resetStorage = (key: string) => {
    if (typeof window !== "undefined") {
      return window.localStorage.removeItem(key);
    }
  };
  
  export const setToStorage = (
    key: string,
    value: { token: string; isLoggedIn: boolean }
  ) => {
    if (typeof window !== "undefined") {
      return window.localStorage.setItem(key, JSON.stringify(value));
    }
  };