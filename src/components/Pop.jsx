import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatters";
import Blockie from "./Blockie";
import { Button, Card, Modal } from "antd";
import { useState,useEffect} from "react";
import Address from "./Address/Address";
import { SelectOutlined } from "@ant-design/icons";
import { getExplorer } from "helpers/networks";
import Styles from "../styles/Home.module.css";
import  { Moralis } from 'moralis';
import Web3 from 'web3';
//import usePops from "hooks/usePop";
//import detectEthereumProvider from '@metamask/detect-provider';
//import Mint from "components/Mint";
const styles = {
  account: {
    height: "42px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "12px",
    backgroundColor: "rgb(244, 244, 244)",
    cursor: "pointer",
  },
  text: {
    color: "#21BF96",
  },
};

//const Web3 = require('web3');
//var Web3 = new Web3();
const nft_contract_address = "0x15B7a6A97bc769D6F43d8e7E36C0B9277755C189"
export default function Pop() {
  //Function to upload files
    async function upload(){
      //const Web3 = new Web3(window.ethereum);
      const fileInput = document.getElementById("file");
      const data = fileInput.files[0];
      const imageFile = new Moralis.File(data.name, data);
      document.getElementById('upload').setAttribute("disabled", null);
      document.getElementById('file').setAttribute("disabled", null);
      document.getElementById('name').setAttribute("disabled", null);
      document.getElementById('description').setAttribute("disabled", null);
      await imageFile.saveIPFS();
      const imageURI = imageFile.ipfs();
      const metadata = {
          "name":document.getElementById("name").value,
          "description":document.getElementById("description").value,
          "image":imageURI
      }
      const metadataFile = new Moralis.File("metadata.json", {base64 : btoa(JSON.stringify(metadata))});
      await metadataFile.saveIPFS();
      const metadataURI = metadataFile.ipfs();
      const txt = await mintToken(metadataURI).then(notify)
    }
  //end of upload funnction

  //Function to Mint the uploaded file
  async function mintToken(_uri){
    const encodedFunction = Web3.eth.abi.encodeFunctionCall({
        name: "mintToken",
        type: "function",
        inputs: [{
        type: 'string',
        name: 'tokenURI'
        }]
    }, [_uri]);
  /*  
    const transactionParameters = {
        to: nft_contract_address,
        from: ethereum.selectedAddress,
        from: ethereum.request,
        data: encodedFunction
    };
    const txt = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters]
    });

    return txt
    */  
  }
  //end of function to mint file...

  //Function to notify a success msg after minting
    async function notify(_txt){
      document.getElementById("resultSpace").innerHTML =  
      `<input disabled = "true" id="result" type="text" class="form-control" placeholder="Description" aria-label="URL" aria-describedby="basic-addon1" value="Your NFT was minted in transaction ${_txt}">`;
    }
  //end of function to notify msg for minting

  

  //const { authenticate, isAuthenticated} = useMoralis();
  const { walletAddress, chainId } = useMoralisDapp();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);


  const [inputValue, setInputValue] = useState("explore");
  useEffect(() => {
		/* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
		window.addEventListener("resize", () => setWidth(window.innerWidth));

		/* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
	}, []);
  /*
  if (!isAuthenticated) {
    return (
      <div
        style={styles.account}
        onClick={() => authenticate({ signingMessage: "Welcome to NFT Harbor!" })}
      >
        <p style={styles.text}>Connect Wallet</p>
      </div>
    );
  }
  */
  return (
    <>
 

      <button className={Styles.loginButton} onClick={() => setIsModalVisible(true)}>
       <p>Create Item</p>
      </button>
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        bodyStyle={{
          padding: "15px",
          fontSize: "17px",
          fontWeight: "500",
        }}
        style={{ fontSize: "16px", fontWeight: "500" }}
        width="400px"
      >
        Account
        <Card
          style={{
            marginTop: "10px",
            borderRadius: "1rem",
          }}
          bodyStyle={{ padding: "15px" }}
        >
          <Address
            avatar="left"
            size={6}
            copyable
            style={{ fontSize: "20px" }}
          />
         
          <div style={{ marginTop: "10px", padding: "0 10px" }}>
            <a
              href={`${getExplorer(chainId)}/address/${walletAddress}`}
              target="_blank"
              rel="noreferrer"
            >
              <SelectOutlined style={{ marginRight: "5px" }} />
              View on Explorer
            </a>
          <div>
            <input id="useremail" type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
            <br />
            <input id="name" type="text" class="form-control" placeholder="NFT Name" aria-label="URL" aria-describedby="basic-addon1" />
          </div> <br />
          <div>  
              <textarea id="description" type="text" class="form-control" placeholder="Description" aria-label="URL" aria-describedby="basic-addon1" />
            </div>
            <div> <br />
             <input type="file" id="file" />
            </div>
            <hr />
          <div class="input-group mb-3" id="resultSpace"></div>
          </div>
        </Card>
        <Button
          size="large"
          type="primary"
          style={{
            width: "100%",
            marginTop: "10px",
            borderRadius: "0.5rem",
            fontSize: "16px",
            fontWeight: "500",
          }}
          onClick={() => {
            upload();
           setIsModalVisible(false);
          }}
        >
          Upload and Mint
        </Button>
      </Modal>
    </>
  );
}
