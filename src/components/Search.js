import React, { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import ArticleIcon from "@mui/icons-material/Article";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { API_KEY, CONTEXT_KEY } from "../Keys";

const Search = () => {


  const [value, setValue] = useState("");
  const [data, setData] = useState(localStorage.getItem("theData"));
  const [myData, setMyData] = useState([]);

    useEffect(()=>{
      document.getElementById("toHide").click();
    },[])
  

  const search = async (e) => {
    e.preventDefault();
 
      const TheData = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${data}`
      );

      const res = await TheData.json();
      
      setMyData(res.items);
      setValue(res);
      console.log(res);
    
  };

  return (
    <>
      <form action="/search" onSubmit={search}>
        <div className="Header">
          <div className="sub_header">
            <a href="/">
              <img src="images/logo.png" alt="logo" />
            </a>
            <div className="search_bar">
              <input type="text" onChange={(e) => setData(e.target.value)} />
              <SearchIcon className="material_icons" />
            </div>
          </div>
          <div className="after_search_bar">
            <SettingsIcon className="material_icons" />
            <AppsIcon className="material_icons" />
            <AccountCircleIcon className="material_icons" />
          </div>
        </div>
        <button type="submit" id="toHide"></button>
      </form>
      <div className="after_search_bar_links">
        <div>
          <SearchIcon className="material_icons" />
          <a href="">All</a>
        </div>
        <div>
          <ImageSearchIcon className="material_icons" />
          <a href={`https://www.google.com/search?q=${data}&oq=Apple&tbm=isch&sourceid=chrome&ie=UTF-8`}>Images</a>
        </div>
        <div>
          <ArticleIcon className="material_icons" />
          <a href={`https://www.google.com/search?q=${data}&tbm=nws&ei=IMUpZJPQJsSYptQP2eKH8As&start=10&sa=N&ved=2ahUKEwiT4LTh5Yv-AhVEjIkEHVnxAb4Q8NMDegQIAxAW`}>News</a>
        </div>
        <div>
          <SlideshowIcon className="material_icons" />
          <a href={`https://www.google.com/search?q=${data}&rlz=1C1VDKB_enIN973IN973&sxsrf=APwXEddCjgSBxDC3MFLZY0HSkRDVXVXeQw:1680459247199&source=lnms&tbm=vid&sa=X&ved=2ahUKEwizmPTD5ov-AhW-rVYBHQnAA6UQ_AUoBHoECAEQBg&biw=1536&bih=746&dpr=1.25`}>Videos</a>
        </div>
      </div>
      <div className="the_line"></div>
      {/* <p className="result_time">
        About {value.searchInformation.formattedTotalResults} in{" "}
        {value.searchInformation.searchTime}
      </p> */}
      {myData.map((obj) => {
        return (
          <>
            <div className="search_results">
        
              <div className="sub_search_results">
                <img
                  src={`https://icons.duckduckgo.com/ip3/${obj.displayLink}.ico`}
                  alt=""
                />
                <p>{obj.displayLink}</p>
              </div>
              <a href={obj.link}>{obj.title}</a>
              <p>{obj.snippet}</p>
            </div>
           
          </>
        );
      })}
    </>

  );
};

export default Search;
