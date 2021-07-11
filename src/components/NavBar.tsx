import React from 'react'
import Box from '@/components/Box';
import { DocumentationButton } from '@/containers/HomeComp/components/styledComponents';
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <Box
            className="navbar"
            display="flex"
            flexDirection="column"
            alignItems="center"
            position="fixed"
            width="100vw"
            zIndex={3}
        >
            <Box
                className="nav"
                mt="1.5rem"
                mx={["1.8rem",]}
                py={{ mobileXs: "1rem", tabletMd: "2rem" }}
                fontSize="3rem"
                display="flex"
                width="80%"
                borderRadius="1rem"
                px="1.5rem"
                bg="white-100"
                boxShadow="0 0 1.5rem 0.5rem #f9f9f9, 0 0 1.5rem 1rem #fdfdfd"
                maxWidth={["80%", "110rem"]}
                alignItems="center"
                justifyContent="space-between"
            >
                <a href="#s-1">
                    <Box row alignItems="center">
                        <Box
                            as="img"
                            src="/web3_logo.png"
                            alt=""
                            height={["3rem", "4rem"]}
                        />
                        <Box
                            ml="1rem"
                            fontSize={{ mobileXs: "1.6rem", tabletMd: "2rem" }}
                            color="purple-50"
                            fontFamily="Mukta"
                            fontWeight="600"
                        >
                            web3.js
                        </Box>
                    </Box>
                </a>
                <Box row alignItems="center" justifyContent="flex-end">
                    <NavLink n="s-2">
                        Installation
                    </NavLink>
                    <NavLink n="s-3">
                        Modules
                    </NavLink>
                    <NavLink n="s-4">
                        Demo
                    </NavLink>
                    <a href="https://web3js.readthedocs.io/en/v1.3.4/" target="_self">
                        <DocumentationButton
                            as="button"
                            bg="purple-text"
                            fontSize={{ mobileXs: "1.2rem", tabletMd: "1.6rem" }}
                            p={{ mobileXs: "1rem", tabletMd: "1.5rem" }}
                            border="none"
                            borderRadius="0.5rem"
                            color="white-100"
                            cursor="pointer"
                            boxShadow="none"
                        >
                            Documentation
                        </DocumentationButton>
                    </a>
                </Box>
            </Box>
        </Box >
    );
}

export default NavBar;