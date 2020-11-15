import React from 'react'
import {useRecoilState} from 'recoil'
  import {searchTextState,productFilterState} from "../../recoil/productrecoil.js"

function Slidebar(){
     
  const [searchText,setSearchText]=useRecoilState(searchTextState)
  const [filter,setfilter]=useRecoilState(productFilterState)

    return(
        <div className="columns is-multiline">
  <div className="column is-12">
    <h2 className="subtitle">(114) products</h2>
    <div className="field has-addons">
      <div className="control">
        <button className="button is-dark">
          <i class="fas fa-th-large"></i>
        </button>
      </div>
      <div className="control">
        <button className="button">
          <i class="fas fa-grip-horizontal"></i>
        </button>
      </div>
    </div>
    <h3 className="subtitle is-6 mb-2">Search Products</h3>
    <input class="input" type="text" placeholder="Search your product..." 
    value={searchText} onChange={e=>setSearchText(e.target.value)} />
  </div>
  <div className="column is-12">
    <h3 className="subtitle is-6 mb-2">Filter</h3>
    <div class="select is-fullwidth">
      <select value={filter} onChange={e=>setfilter(e.target.value )}>
        <option value="">show all</option>
        <option value="fruit">fruit</option>
        <option value="vegetables">vegatables</option>
        <option value="meals">meals</option>
        <option value="beverages">beverages</option>
        <option value="utensils">utensils</option>
      </select>
    </div>
  </div>
</div>


    )
}
export default Slidebar;