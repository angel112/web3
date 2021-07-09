import React, { useEffect } from 'react';
import Box from '@/components/Box';
import NavBar from '@/components/NavBar';
import styled from 'styled-components';
import { gsap } from 'gsap';

const HomeComp = () => {

    useEffect(() => {
        if (process.browser) {
            const ethField = document.getElementsByClassName("ethField")[0];

            [...Array(60)].forEach(() => {
                const eth = document.createElement("img");
                eth.setAttribute("src", "/eth.png");
                eth.setAttribute("class", "star");
                eth.style.height = "4rem";
                eth.style.position = "absolute";
                gsap.fromTo(eth, { autoAlpha: 0, x: gsap.utils.random(0, 2000, 200), y: gsap.utils.random(0, 1000, 150) }, { autoAlpha: 0.1, duration: 1 });
                console.log("hello");
                ethField.appendChild(eth);
            });
        }
    });

    const handleMouseMove = () => {
    
    }

    return (
        <Box>
            <EthField className="ethField" zIndex={1} height="100vh" onMouseMove={handleMouseMove}/>
            <NavBar />
            <Box column center textAlign="center" mx="1.8rem">
                <Box
                    maxWidth="110rem"
                    fontSize={{ mobileXs: "3.2rem", tabletMd: "6.8rem" }}
                    mt={["14rem", "26rem"]}
                    color="purple-text"
                >
                    Interact Your Apps with the Ethereum Blockchain
                </Box>
                <Box
                    fontSize={{ mobileXs: "1.6rem", tabletMd: "2.4rem" }}
                    maxWidth="60rem"
                    fontWeight="6000"
                    mt={{ mobileXs: "2rem", tabletMd: "5rem" }}
                    color="purple-50"
                >
                    Web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.
                </Box>
                <a href="https://web3js.readthedocs.io/en/v1.3.4/" target="_self">
                    <DocumentationButton
                        as="button"
                        bg="purple-text"
                        fontSize={{ mobileXs: "1.6rem", tabletMd: "2rem" }}
                        p={{ mobileXs: "1rem", tabletMd: "2rem" }}
                        mt={{ mobileXs: "2rem", tabletMd: "4rem" }}
                        border="none"
                        borderRadius="0.5rem"
                        color="white-100"
                        cursor="pointer"
                    >
                        Documentation
                    </DocumentationButton>
                </a>
            </Box>
        </Box >
    );
}


const DocumentationButton = styled(Box)(props => `
    transition: transform ease-in 150ms;
    transform-origin: 50% 50%;
    
    &:hover {
        transform: scale(1.05);
    }
`)

const EthField = styled(Box)(pros => `
    position: fixed;

`);
export default HomeComp;