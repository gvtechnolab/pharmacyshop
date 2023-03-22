import React from 'react'
import PageTitle from '../src/components/PageTitle/PageTitle.js'
import ProductListing from '../src/components/ProductListing/ProductListing.js'

const healthcare = () => {
  return (
    <>
      <PageTitle name="Health Care" />
      <ProductListing category='healthcare' />
    </>
  )
}

export default healthcare
