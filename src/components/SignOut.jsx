import { useMoralis } from "react-moralis";
import signOutStyle from "../styles/SignOut.module.css";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Pop from "components/Pop";
import logo from 'images/Black.png'


const Logostyles = {
mylogo: {
  height: "100px",
  paddingTop: "15px",
  paddingBottom: "15px",
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
      <span><h2>Welcome To NFTHarbor!</h2></span>

      
      <button className={`${signOutStyle.refresh}`} onClick={fetchBalance}>
        Refresh
      </button>
      <p className={signOutStyle.subHeader}>My Details:</p>

      <div className={signOutStyle.detailsDiv} style={{flexWrap: "wrap"}}>
        <div>
          <h5>Account:</h5>
          <p>{user.attributes.accounts}</p>
        </div>
        <div>
          <h5>Binance Smart Chain (BNB)</h5>
          <p>{balance} </p>
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