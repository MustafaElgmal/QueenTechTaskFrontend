import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ViewBody from "../components/ViewBody";
import ClickButtons from "../components/ClickButtons";
import { useNavigate } from "react-router-dom";
import { clickArr } from "../constants";

const Home = () => {
  const [newClickArr, setClick] = useState(clickArr);
  const [page,setPage]=useState(1)
  const [path,setPath]=useState("")
  const navigate = useNavigate();
 
  return (
    <div className="p-[2%] space-y-10">
      <SearchBar setClick={setClick} setPath={setPath}/>
      <ViewBody  page={page} />
      <ClickButtons page={page} setPage={setPage} newClickArr={newClickArr} setClick={setClick} path={path} />
    </div>
  );
};

export default Home;
