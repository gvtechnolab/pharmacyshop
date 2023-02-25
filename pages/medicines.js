import React from 'react'
import PageHead from '../src/components/PageHead/PageHead.js'
import ProductListing from '../src/components/ProductListing/ProductListing.js'

const medicines = () => {
  return (
    <>
      <PageHead name="Medicines" />
      <ProductListing category='medicines' />
    </>
  )
}

export default medicines
