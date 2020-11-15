import React from 'react'
import {filteredProducts} from '../../recoil/productrecoil'
import{useRecoilValue} from 'recoil'
import Productitem from './productitem'
 
const Products=()=>{
   // const products=useRecoilValue(productState)
   const products=useRecoilValue(filteredProducts)
    return(
        <div className="columns is-multiline">
        {
            products.map((product)=>(
         <Productitem product={product} key={product.id} />
            ))}
        
        </div>
    )
}

export default Products;