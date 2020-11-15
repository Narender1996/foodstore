import React from 'react'
import {useRecoilState} from 'recoil';
import {productState} from '../../recoil/productrecoil'
import {Link} from 'react-router-dom'


const Productitem=(props)=>{
    const {product}=props
     const [products,setProducts]=useRecoilState(productState)
    const deleteProduct=id=>{
        const new_products=products.filter(product=>product.id !==id);
        setProducts(new_products)
    }
    return(
        <div className="column is-4  has-text-centered">
        <div className="box box__custom">
        <Link to={`/editproduct/${product.id}`} className="button button-edit is-warning">Edit</Link>
        <button onClick={()=>deleteProduct(product.id)} className="button button-delete is-danger">Delete</button>
        <h1 className="title is-1">{product.picture}</h1>
        <h2 className="subtitle is-5">{product.name}</h2>
        <span className="tag">{product.price}/kg</span>      
        </div>
</div>
    )
}
export  default Productitem;