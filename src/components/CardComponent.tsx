import React from 'react';
import Box from '@/components/Box';
import styled from 'styled-components';

const CardComponent = ({ img, text, description, tag, href }:
    { img: string; text: string; description: string; tag: string; href: string }
) => {
    return (
        <a href={href} target="_blank">
            <Card
                column
                className={`card-${tag}`}
                borderRadius="0.5rem"
                p={{ mobileXs: "2rem", tabletMd: "2rem" }}
                justifyContent="center"
                alignItems="center"
                bg="white-100"
                mt={{ mobileXs: "4rem", tabletMd: "8rem" }}
                width="25rem"
                height="18rem"
                boxShadow="0.3rem 0.5rem 1rem 0 #00000080, 0.3rem 0.4rem 0.9rem 1rem #00000050"
            >
                <Box
                    as="img"
                    src={img}
                    alt=""
                    width="6rem"
                    mb="1rem"
                />
                {text}
                <Box fontSize="1.6rem" textAlign="center" color="purple-50" fontWeight="400">
                    {description}
                </Box>
            </Card>
        </a>
    )
}

export default CardComponent;

const Card = styled(Box)(() => `

    transition: all 200ms ease-in;
    cursor: pointer;

    &:hover {
        transform: translate(0.3rem, 0.5rem);
        box-shadow: none;
    }
`);