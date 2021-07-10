import React from 'react'
import Box from './Box';
import { abi, contractAddress } from '@/utils/constants';
import Web3 from 'web3';


const Dapp = () => {
    const web3 = new Web3("https://rinkeby.infura.io/v3/3a58c878defd4c7abec113ae093d056f");
    const contract = new web3.eth.Contract(abi, contractAddress);

    contract.methods.setData(200).call(function (err, res) {
        if (err) {
            console.log("An error occured", err);
            return
        }
        console.log("SetData:", res);
    })

    contract.methods.data().call(function (err, res) {
        if (err) {
            console.log("An error occured", err);
            return
        }
        console.log("Data:", res);
    })

    web3.eth.getBalance(contractAddress).then((data) => {
        console.log("Balance:", data);
    });

    return (
        <Box>
            wow
        </Box>
    )
}

export default Dapp;
