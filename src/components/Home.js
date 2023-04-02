import React, { useEffect, useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [theValue, setTheValue] = useState("");


  const navigate = useNavigate();
  const search = (e) => {
    if(theValue.length==0){
      return
    }
    e.preventDefault();
    localStorage.setItem("theData", theValue);
    navigate("/search");
  };
 
 
  return (
    <>
      <div className="header_home">
        <a href="https://mail.google.com">Gmail</a>
        <a href="https://www.google.co.in/imghp?hl=en&authuser=0&ogbl">
          Images
        </a>
        <AppsIcon />
        <AccountCircleIcon />
      </div>

      <section className="search_main">
        <img src="images/logo.png" alt="" />
        <form action="" onSubmit={search}>
          <div className="search_button_main">
            <SearchIcon />
            <input type="text" onChange={(e) => setTheValue(e.target.value)} />
            <MicIcon />
          </div>
        </form>
        <div className="after_search">
          <a href="">Google Search</a>
          <a href="https://www.google.com/doodles">I'm Feeling Lucky</a>
        </div>
        {/* <p className="google_offer">
          Google offered in &nbsp;:&nbsp;
          <span className="lang">
            हिन्दी&nbsp; বাংলা &nbsp;తెలుగు&nbsp; मराठी&nbsp; தமிழ்
            &nbsp;ગુજરાતી &nbsp;ಕನ್ನಡ&nbsp; മലയാളം &nbsp;ਪੰਜਾਬੀ
          </span>
        </p> */}
      </section>
      <footer>
        <h5>Creator: : A.Shariq kalim</h5>
        <p><b>Disclaimer</b> : This is not a real google search engine. It is a clone only made as a personal project for personal use</p>
      </footer>
    </>
  );
};

export default Home;
