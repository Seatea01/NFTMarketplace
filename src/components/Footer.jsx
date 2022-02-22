import React from "react";
import { useEffect, useState,useRef } from "react";
import logo from "images/Logo.png";
import { Menu, Layout } from "antd";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import NFTMarketTransactions from "components/NFTMarketTransactions";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";



const Footer = () => {
  const [inputValue, setInputValue] = useState("explore");
    return (
      
    <div>
      <Router>
      <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
            <Menu
            // theme="dark"
            style={{backgroundColor: "inherit", margin: "auto"}}
             mode="horizontal"
             defaultSelectedKeys={["home"]}
            >
            
              <p className="text-white text-base text-center mx-2 cursor-pointer"><Menu.Item key="home"><NavLink to="/home" style={{color: "#D3D3D3"}}>Home</NavLink></Menu.Item></p>
              <p><Menu.Item key="nftMarket" onClick={() => setInputValue("explore")}><NavLink to="/NFTMarketPlace" style={{color: "#D3D3D3"}}>Explore Market</NavLink></Menu.Item></p>
              <p><Menu.Item><a style={{color: "#D3D3D3"}} href="https://altcoin.gitbook.io/altcoinwhitepaper/overview/mission-and-values/">Whitepaper</a></Menu.Item></p>
              <p><Menu.Item key="about"><NavLink to="/about" style={{color: "#D3D3D3"}}>Activity</NavLink></Menu.Item></p>
           
          </Menu>
          </div>
        </div> 

      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">Have questions? Send us an email!</p>
        <p className="text-white text-sm text-center font-medium mt-2">hello@thealtcointoken.com</p>
      </div>

      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

        <div className="sm:w-[90%] w-full flex justify-between items-center text-center mt-3">
          <div className="text-white  text-center text-xs"></div>
          <p className="text-white  text-center text-xs">@NFT Harbor &copy; 2022 All rights reserved</p>
          <p className="text-white  text-center text-xs"></p>
        </div>

      </div>

      <Switch>
          <Route path="/home">

            </Route>
            <div className="container-md">
            <Route path="/nftBalance">
              
            </Route>
            <Route path="/NFTMarketPlace">
              
            </Route>
            <Route path="/Transactions">
             
            </Route>
            </div>
          </Switch>


      </Router>
      </div>
  );
};

export default Footer;