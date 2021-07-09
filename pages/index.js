import React from "react";
import HomeComp from "@/containers/HomeComp";
import Head from 'next/head';

function HomePage() {
    return (
        <React.Fragment>
            <Head>
                <title>web3.js</title>
                <link rel="shortcut icon" href="/web3_logo.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <HomeComp />
        </React.Fragment>
    )
}

export default HomePage;
