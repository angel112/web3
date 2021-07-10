import React from 'react'
import Box from './Box';
import { abi, contractAddress } from '@/utils/constants';
import Web3 from 'web3';


const Dapp = () => {

    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }


    // var web3 = new Web3(
    //     new Web3.providers.HttpProvider(
    //         'https://rinkeby.infura.io/v3/3a58c878defd4c7abec113ae093d056f'
    //     ));
    // const ganacheAccounts = web3.eth.getAccounts();
    // web3.eth.defaultAccount = ganacheAccounts[0];


    // const web3 = new Web3("https://faucet.rinkeby.io/");
    const contract = new window.web3.eth.Contract(abi, contractAddress);



    // web3.eth.defaultAccount = web3.eth.accounts[0];

    contract.methods.setData(1000).send({ from: "0xd18Cd50a6bDa288d331e3956BAC496AAbCa4960d" }).then((res) => {
        console.log("Res", res);
    }).catch((err) => { console.log("error:", err); });

    contract.methods.data().call(function (err, res) {
        if (err) {
            console.log("An error occured h", err);
            return
        }
        console.log("Data:", res);
    })

    web3.eth.getBalance(contractAddress).then((data) => {
        console.log("Balance:", data);
    });

    // console.log("Contract", contract);

    return (
        <Box>

        </Box>
    )
}

export default Dapp;
