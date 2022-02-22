//import { useEffect, useState,useRef } from "react";
import { useMoralis } from "react-moralis";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiBinance } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
//import Pop from "components/Pop";
//import Loader from 'components/Loader';
//import Button from 'components/Button';
import NftImage from 'images/nft.jpg';
import "../tailwind.css";
import "../style.css";
import ScriptTag from 'react-script-tag';
//import hide_buttons, { login, logOut } from "hooks/main"; //main from "hooks/main";

import styles from "../styles/Home.module.css";
import SignIn from "components/SignIn";
import { SignOut } from "components/SignOut";
//export function Home() {
//  const { isAuthenticated } = useMoralis();



const commonStyles=`min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white`;
/*
const Input = ({placeholder, name, type, value, handleChange}) => (
    <input 
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => (e.name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);
*/


const Welcome = () => {
    //const { hide_buttons, login, openuserInfo} = main()
   //main(login)
  const { isAuthenticated } = useMoralis();
    return (
        
        <div className="welcome">
           
        <div id="main" className="second">
            <div className="inner_first">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        Binance Smart Chain <br /> Nft Trading made Easy
                    </h1>ss
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base" style={{fontSize: "20px"}}>
                        The official trading post for all things NFT's powered by The Altcoin Token
                    </p><br /><br />

                    <div>
                        <div>
                            {isAuthenticated ? <SignOut /> : <SignIn />}
                        </div>
                    </div>
            
                

                    <div className="grid sm:grid-cols-3 grid-cols-2 mt-10" style={{color: "#fff"}}>
                         <div className={commonStyles} style={{borderColor: "#fff", borderWidth: "1px", borderRadius: "5px", padding: "10px"}}>
                            Reliabilty
                         </div>
                         <div className={commonStyles} style={{borderColor: "#fff", borderWidth: "1px", borderRadius: "5px", padding: "10px"}}>Security</div>
                         <div className={`sm:rounded-tr-2xl ${commonStyles}`} className={commonStyles} style={{borderColor: "#fff", borderWidth: "1px", borderRadius: "5px", padding: "10px"}}>
                            BSC Network
                         </div>
                         <div className={`sm:rounded-tr-2xl ${commonStyles}`} style={{borderColor: "#fff", borderWidth: "1px", borderRadius: "5px", padding: "10px"}}>
                            Web 3.0 
                         </div>
                         <div className={`sm:rounded-br-2xl ${commonStyles}`} style={{borderColor: "#fff", borderWidth: "1px", borderRadius: "5px", padding: "10px"}}>Low fees</div>
                         <div className={`sm:rounded-br-2xl ${commonStyles}`} style={{borderColor: "#fff", borderWidth: "1px", borderRadius: "5px", padding: "10px"}}>
                            Blockchain
                         </div>
                    </div>
                </div>

                <div className="inner_second">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiBinance fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                            <div>
                            <p className="text-white font-light text-sm">Address</p>
                            <p className="text-white font-semibold text-lg mt-1">Binance Smart Chain</p>
                            </div>
                        </div>    
                    </div>
                   

                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <img src={NftImage} alt="nft image" style={{width: "100%"}}/>
                    </div>
                </div>

            </div>
        </div>
    );
}



export default Welcome;

