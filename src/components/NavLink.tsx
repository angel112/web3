import React from 'react'
import Box from '@/components/Box';

const NavLink = ({ children, n, ...props }) => {
    return (
        <a href={`#${n}`} >
            <Box
                fontFamily="Fira Code"
                fontSize="1.6rem"
                display={props.display ?? { mobileXs: "none", tabletMd: "block" }}
                mr="2.4rem"
                color="purple-50"
                cursor="pointer"
                {...props}
            >
                {children}
            </Box>
        </a>
    )
}

export default NavLink;