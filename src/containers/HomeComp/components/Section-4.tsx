// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Box from '../../../components/Box';
import { abi, contractAddress } from '@/utils/constants';
import Web3 from 'web3';
let contract;
import { gsap, Power1 } from 'gsap';
import { InputBox, SubmitButton } from './styledComponents';


const Section4 = () => {
    const [data, setData] = useState(0);
    const [senderAddress, setSenderAddress] = useState<string>();
    const [value, setvalue] = useState<string>();
    try {
        if (window.ethereum) {
            window.web3 = new Web3(window?.ethereum);
            window.ethereum.send('eth_requestAccounts');
            contract = new window.web3.eth.Contract(abi, contractAddress);
        }
    } catch (err) {
        console.log(err);
    }

    const fetchData = () => {
        contract?.methods.data().call(function (err, res) {
            if (err) {
                console.log("An error occured h", err);
                return
            }
            let val: { x: number } = { x: data };
            gsap.to(
                val,
                {
                    x: res,
                    duration: 0.5,
                    ease: Power1.easeIn,
                    onUpdate: () => {
                        try {
                            document.querySelector(".number").innerHTML = val.x.toFixed();
                        } catch (err) {
                            return
                        }
                    }
                });
            setData(res);
        });
    }
    useEffect(() => {
        fetchData();
    });

    const handleClick = (e) => {
        e.preventDefault();

        if (value.length && senderAddress.length) {
            contract?.methods.setData(value).send({ from: senderAddress }).then(() => {
                fetchData();
                e.target.innerHTML = "Change";
                e.target.disabled = false;
            });
            e.target.innerHTML = "Processing";
            e.target.disabled = true;
        }
    }


    return (
        <Box center id="s-4">
            <Box
                width={{ mobileXs: "80%", desktopSm: "110rem" }}
                py={{ mobileXs: "5rem", desktopSm: "8rem" }}
                column
            >
                <Box
                    className="scroll-animate"
                    fontSize={{ mobileXs: "3rem", desktopSm: "10rem" }}
                    textAlign="center"
                    color="purple-100"
                >
                    SMART CONTRACT INTERACTION DEMO
                </Box>
                <Box
                    className="scroll-animate"
                    fontSize={{ mobileXs: "1.2rem", desktopSm: "1.8rem" }}
                    fontFamily="Fira Code" bg="purple-15"
                    p={{ mobileXs: "1rem", desktopSm: "1rem" }}
                    borderRadius="1rem"
                    border="1px solid"
                    borderColor="purple-50"
                >
                    [Instructions:]
                    Ensure that you have MetaMask set up in your device and select the Rinkeby Test Network.
                    Enter the address of your wallet and the new data value and hit change.
                    The number should change after the interaction with the smart contract is complete.
                </Box>
                <Box
                    className="scroll-animate"
                    fontSize={{ mobileXs: "1.2rem", desktopSm: "2.4rem" }}
                    fontFamily='Fira Code'
                    mt={{ mobileXs: "1.5rem", desktopSm: "2.5rem" }}
                    mb={{ mobileXs: "0.5rem", desktopSm: "1.5rem" }}
                    color="purple-text"
                >
                    Enter Address of you Etherem Wallet:
                </Box>
                <InputBox
                    className="scroll-animate"
                    as="input"
                    value={senderAddress}
                    onChange={(e) => setSenderAddress(e.target.value)}
                    maxLength="42"
                    minLength="42"
                    placeholder="0x.............."
                    width={{ mobileXs: "25rem", desktopSm: "50rem" }}
                    py={{ mobileXs: "1rem", desktopSm: "2rem" }}
                    px={{ mobileXs: "1rem", desktopSm: "2rem" }}
                    fontFamily="Fira Code"
                    fontWeight="600"
                    border="1px solid"
                    borderColor="purple-50"
                    outline="none"
                    color="purple-50"
                ></InputBox>
                <Box
                    className="scroll-animate"
                    fontSize={{ mobileXs: "1.2rem", desktopSm: "2.4rem" }}
                    fontFamily='Fira Code'
                    mt={{ mobileXs: "1.5rem", desktopSm: "2.5rem" }}
                    mb={{ mobileXs: "0.5rem", desktopSm: "1.5rem" }}
                    color="purple-text"
                >
                    Enter Value to Change the Below data:
                </Box>
                <InputBox
                    className="scroll-animate"
                    as="input"
                    type="number"
                    value={value}
                    onChange={(e) => setvalue(e.target.value)}
                    width={{ mobileXs: "20rem", desktopSm: "40rem" }}
                    py={{ mobileXs: "1rem", desktopSm: "2rem" }}
                    px={{ mobileXs: "1rem", desktopSm: "2rem" }}
                    fontFamily="Fira Code"
                    fontWeight="600"
                    border="1px solid"
                    borderColor="purple-50"
                    outline="none"
                    color="purple-50"
                ></InputBox>
                <SubmitButton
                    className="scroll-animate"
                    as="button"
                    bg="purple-text"
                    border="none"
                    disabled={!value || !senderAddress}
                    py={{ mobileXs: "1rem", desktopSm: "2rem" }}
                    width={{ mobileXs: "15rem", desktopSm: "15rem" }}
                    mt={{ mobileXs: "2rem", desktopSm: "4rem" }}
                    color="white"
                    fontFamily="inherit"
                    fontSize={{ mobileXs: "1.6rem", desktopSm: "2.4rem" }}
                    cursor="pointer"
                    borderRadius="0.5rem"
                    onClick={handleClick}
                >
                    Change
                </SubmitButton>
                <Box
                    className="scroll-animate number"
                    fontSize={{ mobileXs: "4rem", desktopSm: "8rem" }}
                    textAlign="center"
                    mt={{ mobileXs: "2rem", desktopSm: "4rem" }}
                >

                </Box>
            </Box>
        </Box>
    )
}



export default Section4;
