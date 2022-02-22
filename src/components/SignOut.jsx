import { useMoralis } from "react-moralis";
import signOutStyle from "../styles/SignOut.module.css";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import NativeBalance from "components/NativeBalance";
import Chains from "components/Chains";
import Pop from "components/Pop";
import logo from 'images/Black.png'
import { BSCLogo } from "./Chains/Logos";


const Logostyles = {
mylogo: {
  height: "100px",
  paddingTop: "15px",
  paddingBottom: "15px",
  margin: "auto",
},
};

export const SignOut = () => {
  const { logout, Moralis, user } = useMoralis();
  const [balance, setBalance] = useState(0);
  const fetchBalance = async () => {
    try {
      const options = { chain: Moralis.Chains.BSC };
      const balance = await Moralis.Web3API.account.getNativeBalance(options);
      setBalance(balance.balance / 10 ** 18);
    } catch {}
  };
  useEffect(() => {
    fetchBalance();
  }, []);

  const handleTransfer = async () => {
    try {
      await Moralis.transfer({
        amount: Moralis.Units.BSC("0.1"),
        receiver: "0xd2305b8155c4710c7fff1358d084f23959c999f3",
        type: "native",
      }).then((e) => {
        alert("sucesfully transfered");
      });
      await fetchBalance();
    } catch {}
  };

  return (
    
    <div className={signOutStyle.signOutCard}>
      <div>
          <p><button className={styles.loginButton}><div style={{display: "inline-flex"}}><BSCLogo />&nbsp;&nbsp; < NativeBalance /></div> </button></p>
        </div> 
      

      <div className={signOutStyle.detailsDiv} style={{flexWrap: "wrap"}}>
        <div><br />
          <h5 style={{fontWeight: "bold", color: "#087bff"}}>Account:</h5>
          <p>{user.attributes.accounts}</p>
        </div>
          
      </div>

      <span style={{justify:"center"}}><img src={logo} alt="logo" style={Logostyles.mylogo} /></span>  
      
      <div className={signOutStyle.fotter} style={{justifyContent:"center"}}>
      <Pop />
    
        <button className={styles.loginButton} onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};