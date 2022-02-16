import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatters";
import Blockie from "./Blockie";
import { Button, Card, Modal } from "antd";
import { useState,useEffect} from "react";
import Address from "./Address/Address";
import { SelectOutlined } from "@ant-design/icons";
import { getExplorer } from "helpers/networks";
import  { Moralis } from 'moralis';
import Web3 from 'web3';

       export async function upload(){
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
    
            async function mintToken(_uri){
            const encodedFunction = web3.eth.abi.encodeFunctionCall({
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
                data: encodedFunction
            };
            const txt = await ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters]
            });
            return txt
            }
    
            async function notify(_txt){
            document.getElementById("resultSpace").innerHTML =  
            `<input disabled = "true" id="result" type="text" class="form-control" placeholder="Description" aria-label="URL" aria-describedby="basic-addon1" value="Your NFT was minted in transaction ${_txt}">`;
            }