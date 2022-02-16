/*
import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { useIPFS } from "./useIPFS";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatters";
import { SelectOutlined } from "@ant-design/icons";
import { getExplorer } from "helpers/networks";
import  { Moralis } from 'moralis';
import Web3 from 'web3';

export default usePops = (options) => {
  
    const nft_contract_address = ""

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
     
    }
    //end of function to mint file...
    
    //Function to notify a success msg after minting
      async function notify(_txt){
        document.getElementById("resultSpace").innerHTML =  
        `<input disabled = "true" id="result" type="text" class="form-control" placeholder="Description" aria-label="URL" aria-describedby="basic-addon1" value="Your NFT was minted in transaction ${_txt}">`;
      }
    //end of function to notify msg for minting
};

*/