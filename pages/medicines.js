import React from 'react'
import PageTitle from '../src/components/PageTitle/PageTitle.js'
import ProductListing from '../src/components/ProductListing/ProductListing.js'

const medicines = () => {
  return (
    <>
      <PageTitle name="Medicines" />
      <ProductListing category='medicines' />
    </>
  )
}

export default medicines
