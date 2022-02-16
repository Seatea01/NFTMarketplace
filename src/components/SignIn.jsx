import Logo from 'images/Logo.png';
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";
//import Logo from "./images/Web3Auth.svg";
import { useState } from "react";

export default function SignIn() {
  const { authenticate, authError, isAuthenticating, Moralis } = useMoralis();

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "web3Auth",
      clientId: "BKDXjhZDZPUuBTTQ25FoSOtkE6NI0pNLKv9kPPT6n5VQWZb6iGMH5jgS3aBirT71CMk2VLwNGNIjlQPqmcOgwcM",
      //chainId: Moralis.Chains.ETH_MAINNET,
      theme: "dark",
      loginMethodsOrder: 
      [
        "google",
         "facebook", 
         "twitter", 
         "reddit", 
         "discord", 
         "twitch", 
         "apple", 
         "github", 
         "linkedin", 
         "wechat", 
         "email_passwordless",
        ]
    });
  };

  return (
    <div>
   
      {isAuthenticating && <p className={styles.green}>Authenticating...</p>}
      {authError && (
        <p className={styles.error}>{JSON.stringify(authError.message)}</p>
      )}
      <div className={styles.buttonCard}>
        <button className={styles.loginButton} onClick={handleCustomLogin}>
          Create
        </button>
      </div>
    </div>
  );
}