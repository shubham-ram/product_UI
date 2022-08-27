import {useState} from "react";

import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar"
function App() {

  const [searchValue, setSearchValue] = useState("");

  const searchValueHandler = (v) =>{
    setSearchValue(v)
    // console.log(v);
  }

  return (
    <>
      <Navbar navValue = {searchValueHandler}/>
      <Home searchedValue={searchValue}/>
    </>
  );
}

export default App;
