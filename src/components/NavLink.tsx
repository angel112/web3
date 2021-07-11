import React from 'react'
import Box from '@/components/Box';

const NavLink = (props) => {
    return (
        <a href={`#${props.n}`} >
            <Box
                fontFamily="Fira Code"
                fontSize="1.6rem"
                display={{ mobileXs: "none", tabletMd: "block" }}
                mr="2.4rem"
                color="purple-50"
                cursor="pointer"
            >
                {props.children}
            </Box>
        </a>
    )
}

export default NavLink;