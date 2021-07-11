import React from 'react'
import Box from '@/components/Box';
import { InstallGuide } from './styledComponents';

const Section2 = () => {
    return (
        <InstallGuide
            id="s-2"
            className="install"
            pt={{ mobileXs: "5rem", desktopSm: "15rem" }}
            px={{ mobileXs: "5rem", desktopSm: "8rem" }}
            zIndex={5}
            color="black-100"
            center

        >
            <Box
                width={{ mobileXs: "80%", desktopSm: "110rem" }}
                display="flex"
                flexDirection={{ mobileXs: "column", desktopSm: "row" }}
                justifyContent={{ mobileXs: "center", desktopSm: "between" }}
            >
                <Box>
                    <Box
                        fontSize={{ mobileXs: "2.4rem", desktopSm: "4rem" }}
                    >
                        Installation
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        fontSize={{ mobileXs: "1.6rem", desktopSm: "3rem" }}
                        fontWeight="400"
                        justifyContent={{ mobileXs: "flex-start", desktopSm: "flex-end" }}
                    >
                        <Box mt={{ mobileXs: "1rem", desktopSm: "2rem" }}>
                            yarn
                            <Box
                                width={{ mobileXs: "20rem", desktopSm: "40rem" }}
                                borderRadius={{ mobileXs: "0.5rem", desktopSm: "1rem" }}
                                bg={{ mobileXs: "purple-06", desktopSm: "purple-100" }}
                                py={{ mobileXs: "1rem", desktopSm: "2rem" }}
                                px={{ mobileXs: "2rem", desktopSm: "4rem" }}
                                mt={{ mobileXs: "1rem", desktopSm: "2rem" }}
                                fontSize={{ mobileXs: "1rem", desktopSm: "2rem" }}
                            >
                                yarn add web3
                            </Box>
                        </Box>
                        <Box mt={{ mobileXs: "1rem", desktopSm: "2rem" }}>
                            npm
                            <Box
                                width={{ mobileXs: "20rem", desktopSm: "40rem" }}
                                borderRadius={{ mobileXs: "0.5rem", desktopSm: "1rem" }}
                                bg={{ mobileXs: "purple-06", desktopSm: "purple-100" }}
                                py={{ mobileXs: "1rem", desktopSm: "2rem" }}
                                px={{ mobileXs: "2rem", desktopSm: "4rem" }}
                                mt={{ mobileXs: "1rem", desktopSm: "2rem" }}
                                fontSize={{ mobileXs: "1rem", desktopSm: "2rem" }}
                            >
                                npm install web3
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    as="img"
                    src="/install.png"
                    height={{ mobileXs: "auto", desktopSm: "50rem" }}
                    width={{ mobileXs: "40rem", desktopSm: "auto" }}
                />
            </Box>
        </InstallGuide>
    )
};

export default Section2;