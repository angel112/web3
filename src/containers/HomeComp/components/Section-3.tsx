import React from 'react'
import Box from '@/components/Box';
import CardComponent from '@/components/CardComponent';

const Section3 = () => {
    return (
        <Box bg="purple-text" center column color="white" className="modules-section" id="s-3">
            <Box width={{ mobileXs: "80%", desktopSm: "110rem" }} center column position="relative">
                <Box className="modules-heading" center column>
                    <Box
                        fontSize={{ mobileXs: "3.2rem", desktopSm: "5rem" }}
                        mt={{ mobileXs: "5rem", desktopSm: "10rem" }}
                    >
                        Modules
                    </Box>
                    <Box
                        height={{ mobileXs: "0.5rem", desktopSm: "1rem" }}
                        width={{ mobileXs: "4rem", desktopSm: "8rem" }}
                        bg="white-100"
                        borderRadius="1rem"
                    />
                </Box>
                <Box
                    display="flex"
                    justifyContent={{ mobileXs: "center", tabletMd: "space-between" }}
                    flexWrap="wrap"
                    color="purple-text"
                    fontSize="2.4rem"
                    width="100%"
                    mb="8rem"
                >
                    <CardComponent
                        href="https://web3js.readthedocs.io/en/v1.3.4/web3-eth.html"
                        img="/eth.png"
                        text="web3-eth"
                        description="Interact with an Ethereum blockchain and Ethereum Smart Contracts."
                        tag="0"
                    />
                    <CardComponent
                        href="https://web3js.readthedocs.io/en/v1.3.4/web3-net.html"
                        img="/net.png"
                        text="web3-net"
                        description="Interact with an Ethereum node’s network properties."
                        tag="1"
                    />
                    <CardComponent
                        href="https://web3js.readthedocs.io/en/v1.3.4/web3-eth-personal.html"
                        img="/personal.png"
                        text="web3-personal"
                        description="Interact with the Ethereum node’s accounts."
                        tag="2"
                    />
                    <CardComponent
                        href="https://web3js.readthedocs.io/en/v1.3.4/web3-bzz.html"
                        img="/db.png"
                        text="web3-bzz"
                        description="Interact with swarm, the decentralized file store."
                        tag="3"
                    />
                    <CardComponent
                        href="https://web3js.readthedocs.io/en/v1.3.4/web3-utils.html"
                        img="/utils.png"
                        text="web3-utils"
                        description="Provides utility functions for Ethereum dapps and other web3.js packages."
                        tag="4"
                    />
                    <CardComponent
                        href="https://web3js.readthedocs.io/en/v1.3.4/web3-shh.html"
                        img="/p2p.png"
                        text="web3-shh"
                        description="Interact with the whisper protocol for broadcasting."
                        tag="5"
                    />
                </Box>
            </Box>
        </Box >
    )
};

export default Section3;