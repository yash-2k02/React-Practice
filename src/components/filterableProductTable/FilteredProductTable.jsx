import React, { useState } from 'react'
import SearchBar from '../searchBar/SearchBar'
import ProductTable from '../productTable/ProductTable'

export default function FilteredProductTable({products}) {

    const[isChecked, setStatus] = useState(false)

    const getCheckboxStatus = (isChecked) => {
        setStatus(isChecked)
        // console.log(isChecked);
    }


  return (
    <>
    <SearchBar check={getCheckboxStatus} />
    <ProductTable isChecked={isChecked} products={products} />
    </>
  )
}
