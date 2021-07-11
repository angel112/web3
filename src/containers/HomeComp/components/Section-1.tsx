import React from 'react'

import Box from '@/components/Box';
import { DocumentationButton } from './styledComponents';

const Section1 = () => {

    // eslint-disable-next-line max-len
    const subtext = "Web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.";
    const heading = "Interact Your Apps with the Ethereum Blockchain";


    return (
        <Box column center textAlign="center" mx="1.8rem" pb="10rem" id="s-1" >
            <Box
                className="heading"
                maxWidth="110rem"
                fontSize={{ mobileXs: "3.2rem", tabletMd: "5rem" }}
                mt={{ mobileXs: "14rem", tabletMd: "26rem" }}
                color="purple-text"
                overflow="none"
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
                    boxShadow="0 0.3rem 0.5rem 0.1rem #000000"
                >
                    Documentation
                </DocumentationButton>
            </a>
            <Box
                className="smart-contract"
                as="img"
                src="/smart-contract.png"
                alt=""
                height={{ mobileXs: "20rem", tabletMd: "60rem" }}
                zIndex={2}
            />
        </Box >
    )
}

export default Section1;

