//import { useState } from 'react';
//import { useMoralis } from "react-moralis";
import { AiFillPlayCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
//import Moralis from "moralis/types";
import ScriptTag from 'react-script-tag';
import Moralis from 'moralis/dist/moralis.js';
//const Moralis = require('moralis');
//Moralis.initialize("FUeG9X5l9oqFkJVM6AXsHnG4xbjzEaxRiTq1UXwg");
//Moralis.serverURL = 'https://70ee9fvc8aic.usemoralis.com:2053/server'

/*
const init = async () => {
    window.web3 = await Moralis.Web3.enableWeb3();
    initUser();
}
const initUser = async () => {
    if(await Moralis.User.current()){
        hideElement(userConnectButton);
        showElement(userProfileButton);
    }else{ 
        showElement(userConnectButton);
        hideElement(userProfileButton);
    }
}

const button = async () => {
    try{
        await Moralis.Web3.authenticate();
        initUser();
    } catch(error) {
        alert(error)
    }
}
const hideElement = (element) => element.style.display = "none";
const showElement = (element) => element.style.display = "block";

const userConnectButton = document.getElementById("btnConnect");
 //userConnectButton.onClick = login;
const userProfileButton = document.getElementById("btnUserInfo");

init();

const login = () => {
    <ScriptTag type="text/javascript" src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js" />
    //const { authenticate, isAuthenticated, logins, init } = useMoralis();
    try{
        Moralis.Web3.authenticate();
        initUser();
    } catch(error) {
        alert(error)
    }
    //if (isAuthenticated) {
       // userConnectButton.onClick = login;
       
             return (
                 <span>
                     <button id="btnConnect" onClick='login'>Connect wallet</button>
                    <button id="btnUserInfo">Profile</button>
           {/* <button id="btnConnect"
                type="button"
                onClick={ authenticate }
             >
                <p className="flex flex-row justify-center items-center my-3 items-center text-center w-full"><AiFillPlayCircle className="text-white" />
                Connect Wallet
                </p>
             </button> 
                <button type="button" onClick={ authenticate } id="create">
                <p className="flex flex-row justify-center items-center my-3 items-center text-center w-full">
                <b>Create</b>
                </p>
                </button>
                </span>
                );
        
             //}

  
   
    

    
 
};





export default login;

*/
const Button = () => {
const serverUrl = "https://70ee9fvc8aic.usemoralis.com:2053/server";
const appId = "FUeG9X5l9oqFkJVM6AXsHnG4xbjzEaxRiTq1UXwg";
Moralis.start({ serverUrl, appId });
<html>

<button id="btnConnect">Connect wallet</button>
<button id="btnUserInfo">Profile</button>



<div id="userInfo">
<h4>User Profile</h4>
    <input type="text" id="txtUsername" required placeholder="Enter username" />
    <input type="text" id="txtEmail" placeholder="Enter email" />
    <small>Optional</small>



    <img src="" id="imgAvatar" alt="" />
    <label for="fileAvatar">Select Avatar</label>
    <input type="file" id="fileAvatar" />

    <button id="btnLogout">LogOut</button>
    <button id="btnCloseUserInfo">Close</button>
    <button id="btnSaveUserInfo">Save</button>
</div>
</html>





async function hide_buttons() {
    let user = await Moralis.User.current();
    if (!user) {
        document.getElementById("btnConnect").style.display = "block";
        document.getElementById("btnUserInfo").style.display = "none";
        document.getElementById("btnLogout").style.display = "none";
        document.getElementById("userInfo").style.display = "none";
    } else {
        document.getElementById("btnUserInfo").style.display = "block";
        document.getElementById("btnConnect").style.display = "none";
        document.getElementById("btnLogout").style.display = "block";
    }
}

hide_buttons();

async function login() {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate({
            signingMessage: "Welcome to GrandPaDoge NFT MarketPlace",
        });
    }
    console.log("logged in user:", user);
    hide_buttons();
    const isWeb3Active = Moralis.ensureWeb3IsInstalled();

    if (isWeb3Active) {
        console.log("Activated");
    } else {
        async function enable() {
            await Moralis.enable();
        }
    }
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
    hide_buttons();
}

async function login() {
    try {
        await Moralis.authenticate();
    } catch (error) {
        alert((error = "please install metamask before connecting"));
    }
}

async function openuserInfo() {
   const user = await Moralis.User.current();
    hide_buttons();
    if (user) {
        document.getElementById("userInfo").style.display = "block";
    } else {
        login();
    }
}

async function closeuserInfo() {
   const user = await Moralis.User.current();
    hide_buttons();
    if (user) {
        document.getElementById("userInfo").style.display = "none";
    } else {
        logOut();
    }
}


}

export default Button;