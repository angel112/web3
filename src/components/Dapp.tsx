// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Box from './Box';
import { abi, contractAddress } from '@/utils/constants';
import Web3 from 'web3';
let contract;


const Dapp = () => {
    const [data, setData] = useState(0);
    try {
        if (window.ethereum) {
            window.web3 = new Web3(window?.ethereum);
            window.ethereum.send('eth_requestAccounts');
            contract = new window.web3.eth.Contract(abi, contractAddress);
        }
    } catch (err) {
        console.log(err);
    }
    useEffect(() => {
        contract?.methods.data().call(function (err, res) {
            if (err) {
                console.log("An error occured h", err);
                return
            }
            setData(res);
            console.log(res);
        });
    });


    return (
        <Box>
            <Box width={{ mobileXs: "80%", tabletMd: "110rem" }} py={{ mobileXs: "5rem", tabletMd: "8rem" }}>
                Current Value: {data}
                <Box
                    as="input"
                    width={{ mobileXs: "20rem", tabletMd: "40rem" }}
                    py={{ mobileXs: "1rem", tabletMd: "2rem" }}
                    px={{ mobileXs: "1rem", tabletMd: "2rem" }}
                    fontFamily="Fira Code"
                    fontWeight="600"
                ></Box>
            </Box>
        </Box>
    )
}

export default Dapp;
