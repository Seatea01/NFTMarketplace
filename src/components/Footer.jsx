import React from "react";
import { useEffect, useState,useRef } from "react";
import logo from "images/Logo.png";
import { Menu, Layout } from "antd";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
const { Header } = Layout;
const styles={
  footer: {
  position: "fixed",
  zIndex: 1,
  width: "100%",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: "Roboto, sans-serif",
  padding: "0 10px",
  flexWrap: "wrap",
  height: "auto",
},
}

const Footer = () => {
  const [inputValue, setInputValue] = useState("explore");
  <div>
  <Header style={styles.footer}>
          
            <Menu
             // theme="dark"
              mode="horizontal"
              style={{
                display: "flex",
                fontSize: "17px",
                fontWeight: "500",
                //marginLeft: "0px",
                margin: "auto",
                width: "100%",
                flex: '1 0 40%',
                lineHeight: '2.6',
                borderRadius:'10px',
               // backgroundColor: "inherit",
                
              }}
              defaultSelectedKeys={["home"]}
            >
              
               <Menu.Item key="home">
              <NavLink to="/home">Home</NavLink>
            </Menu.Item>
              <Menu.Item
                key="nftMarket"
                onClick={() => setInputValue("explore")}
              >
                <NavLink to="/NFTMarketPlace">Explore Market</NavLink>
              </Menu.Item>
              <Menu.Item>
              <a href="https://altcoin.gitbook.io/altcoinwhitepaper/overview/mission-and-values/" target="_blank">Whitepaper</a>
                
              </Menu.Item>
              
              <Menu.Item key="about">
                <NavLink to="/about">Activity</NavLink>
              </Menu.Item>
            </Menu>
          
        </Header>


   

  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer"><a href="https://nftharbor.io/#/home" />Home</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer"><a href="https://nftharbor.io/#/NFTMarketPlace" />Explore</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">About(Coming soon)</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Activity(Coming soon)</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Have questions? Send us an email!</p>
      <p className="text-white text-sm text-center font-medium mt-2">hello@thealtcointoken.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center text-center mt-3">
      <div className="text-white  text-center text-xs">@NFT Harbor &copy; 2022 All rights reserved</div>
      <p className="text-white  text-center text-xs">@NFT Harbor &copy; 2022 All rights reserved</p>
      <p className="text-white  text-center text-xs">@NFT Harbor &copy; 2022 All rights reserved</p>
    </div>https://twitter.com/TheAltCoinToken
    
  </div>
</div>

};

export default Footer;