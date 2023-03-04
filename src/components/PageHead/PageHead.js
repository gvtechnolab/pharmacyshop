import React from 'react'
import Head from 'next/head'

const PageHead = ({ name }) => {
    return (
        <Head>
            <title>{name} - PharmacyShop</title>
            <meta name="description" content="Wearart! powered by gvtechnolab" />
            <link rel="icon" href="/assets/images/pharmacyshoplogo96.png" />
        </Head>
    )
}

export default PageHead
