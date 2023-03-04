import React from 'react'
import Head from 'next/head'
import { assetsPrefix } from '../../utills/constants'

const PageHead = ({ name }) => {
    return (
        <Head>
            <title>{name} - PharmacyShop</title>
            <meta name="description" content="Wearart! powered by gvtechnolab" />
            <link rel="icon" href={`${assetsPrefix}/assets/images/pharmacyshoplogo96.png`} />
        </Head>
    )
}

export default PageHead
