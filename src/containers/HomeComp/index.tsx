import React, { useEffect, useState } from 'react';

import Box from '@/components/Box';
import NavBar from '@/components/NavBar';
import Section4 from './components/Section-4';
import Section1 from './components/Section-1';
import Section2 from './components/Section-2';
import Section3 from './components/Section-3';

import { entryAnimation, ethFieldAnimation, scrollAnimations } from './utils/animations';
import { EthField } from './components/styledComponents';


const HomeComp = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!loading) {
            // eslint-disable-next-line no-undef
            if (process.browser) {
                ethFieldAnimation();
            }
            entryAnimation();
            scrollAnimations();
        }
    }, [loading]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    if (loading) {
        return <EthField className="ethField" zIndex={1} height="100vh" />
    }

    return (
        <Box>
            <EthField className="ethField" zIndex={1} height="100vh" bg="white" />
            <NavBar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </Box >
    );
}



export default HomeComp;