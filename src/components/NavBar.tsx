import React from 'react'
import Box from '@/components/Box';

const NavBar = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            pt="1.5rem"
            position="fixed"
            width="100vw"
            zIndex={2}
        >
            <Box
                mx={["1.8rem",]}
                py={{ mobileXs: "1rem", tabletMd: "2rem" }}
                fontSize="3rem"
                display="flex"
                width="80%"
                borderRadius="1rem"
                px="1.5rem"
                bg="white-100"
                boxShadow="0 0 1.5rem 0.5rem #f9f9f9, 0 0 1.5rem 1rem #fdfdfd"
                maxWidth={["100%", "110rem"]}
                alignItems="center"
            >
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
        </Box >
    );
}

export default NavBar;