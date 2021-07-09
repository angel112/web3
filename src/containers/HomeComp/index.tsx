import React, { useEffect } from 'react';
import Box from '@/components/Box';
import NavBar from '@/components/NavBar';
import styled from 'styled-components';
import { gsap } from 'gsap';

const HomeComp = () => {

    // eslint-disable-next-line max-len
    const subtext = "Web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.";
    const heading = "Interact Your Apps with the Ethereum Blockchain";

    useEffect(() => {
        // eslint-disable-next-line no-undef
        if (process.browser) {
            const ethField = document.getElementsByClassName("ethField")[0];

            [...Array(60)].forEach(() => {
                const eth = document.createElement("img");
                eth.setAttribute("src", "/eth.png");
                eth.setAttribute("class", "star");
                eth.style.height = "4rem";
                eth.style.position = "absolute";
                gsap.fromTo(
                    eth,
                    {
                        scale: 0,
                        autoAlpha: 0,
                        x: gsap.utils.random(0, 2000, 100),
                        y: gsap.utils.random(0, 1000, 150)
                    },
                    {
                        scale: gsap.utils.random(8, 20, 1) / 10,
                        autoAlpha: 0.1,
                        duration: 1
                    });
                console.log("hello");
                ethField.appendChild(eth);
            });
        }

        const tl = gsap.timeline();
        tl.fromTo(
            ".heading",
            {
                autoAlpha: 0,
                y: 100
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.3,
                delay: 0.5
            }
        );
        tl.fromTo(
            ".subtext",
            {
                autoAlpha: 0,
                y: 100
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.3,
                delay: 0.2
            }
        );
        tl.fromTo(
            ".cta",
            {
                autoAlpha: 0,
                y: 100
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.1
            }
        );
    });

    return (
        <Box>
            <EthField className="ethField" zIndex={1} height="100vh" />
            <NavBar />
            <Box column center textAlign="center" mx="1.8rem">
                <Box
                    className="heading"
                    maxWidth="110rem"
                    fontSize={{ mobileXs: "3.2rem", tabletMd: "6.8rem" }}
                    mt={{ mobileXs: "14rem", tabletMd: "26rem" }}
                    color="purple-text"
                >
                    {heading}
                </Box>
                <Box
                    className="subtext"
                    fontSize={{ mobileXs: "1.6rem", tabletMd: "2.4rem" }}
                    maxWidth="60rem"
                    fontWeight="6000"
                    mt={{ mobileXs: "2rem", tabletMd: "5rem" }}
                    color="purple-50"
                >
                    {subtext}
                </Box>
                <a href="https://web3js.readthedocs.io/en/v1.3.4/" target="_self" className="cta">
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


const DocumentationButton = styled(Box)(() => `
    transition: transform ease-in 150ms;
    transform-origin: 50% 50%;
    
    &:hover {
        transform: scale(1.05);
    }
`)

const EthField = styled(Box)(() => `
    position: fixed;

`);
export default HomeComp;