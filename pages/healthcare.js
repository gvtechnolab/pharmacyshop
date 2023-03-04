import React from 'react'
import PageHead from '../src/components/PageHead/PageHead.js'
import ProductListing from '../src/components/ProductListing/ProductListing.js'

const healthcare = () => {
  return (
    <>
      <PageHead name="Health Care" />
      <ProductListing category='healthcare' />
    </>
  )
}

export default healthcare
