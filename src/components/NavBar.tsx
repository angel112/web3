import React, { useEffect, useState } from 'react'
import Box from '@/components/Box';
import { DocumentationButton } from '@/containers/HomeComp/components/styledComponents';
import NavLink from './NavLink';
import { gsap } from 'gsap';

const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (toggle) {
            gsap.fromTo('.drawer', { autoAlpha: 0 }, { autoAlpha: 1, top: 0 });
            gsap.to('.burger-3', { top: 8 });
            gsap.to('.burger-1', { top: 8 });
            gsap.to('.burger-1', { rotate: 45 });
            gsap.to('.burger-2', { x: "+=10", autoAlpha: 0 });
            gsap.to('.burger-3', { rotate: -45 });
        } else {
            gsap.fromTo('.drawer', { autoAlpha: 1 }, { autoAlpha: 0, top: -500 });
            gsap.to('.burger-3', { top: 16 });
            gsap.to('.burger-1', { top: 0 });
            gsap.to('.burger-1', { rotate: 0 });
            gsap.to('.burger-2', { x: 0, autoAlpha: 1 });
            gsap.to('.burger-3', { rotate: 0 });
        }
    }, [toggle]);

    return (
        <React.Fragment>
            <Box
                position="fixed"
                width="100%"
                bg="white-100"
                zIndex={2}
                top={-500}
                column
                center
                pt="10rem"
                pb="2rem"
                className="drawer"
            >
                <NavLink n="s-2" display={{ mobileXs: "block", tabletMd: "none" }}>
                    Installation
                </NavLink>
                <NavLink n="s-3" mt="1rem" display={{ mobileXs: "block", tabletMd: "none" }}>
                    Modules
                </NavLink>
                <NavLink n="s-4" mt="1rem" display={{ mobileXs: "block", tabletMd: "none" }}>
                    Demo
                </NavLink>
            </Box>
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
                    maxWidth={{ mobileXs: "80%", tabletMd: "110rem" }}
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
                        <Box
                            display={{ mobileXs: "block", tabletMd: "none" }}
                            ml="3rem"
                            mt="-1rem"
                            onClick={() => setToggle(!toggle)}
                            position="relative"
                            left={-20}
                        >
                            <Box
                                height="0.2rem"
                                width="2rem"
                                bg="black-100"
                                borderRadius="3rem"
                                position="absolute"
                                top={0}
                                className="burger-1"
                            />
                            <Box
                                height="0.2rem"
                                width="2rem"
                                bg="black-100"
                                borderRadius="3rem"
                                position="absolute"
                                top={2}
                                className="burger-2"
                            />
                            <Box
                                height="0.2rem"
                                width="2rem"
                                bg="black-100"
                                borderRadius="3rem"
                                position="absolute"
                                top={3}
                                className="burger-3"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box >
        </React.Fragment >
    );
}

export default NavBar;