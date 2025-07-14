import ProductCategoryRow from "../productCategoryRow/ProductCategoryRow"
import ProductRow from "../productRow/ProductRow"

export default function ProductTable({isChecked, products}) {

    // const getStatusFromRow = (isChecked)=>{
    //     check(isChecked)
    // }

    const rows = []
    let lastCategory = null
  
    products.map((product)=>{
        if(product.category !== lastCategory){
            rows.push(
                <ProductCategoryRow key={product.category} category={product.category} />
            )
        } //if end

        rows.push(
            <ProductRow isChecked={isChecked} key={product.name} product={product} />
        )

        lastCategory = product.category

    }) //map function end
    
  return(
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>
  )
}
