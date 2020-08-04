import React, { useState, useEffect } from "react"
import axios from "axios"

function Curlstyle() {
  const [styles, updateStyles] = useState([])
  useEffect(() => {
    const makeApiCall = async () => {
      
      const data = await axios.get(
        "https://api.airtable.com/v0/appdyetqhlvfSq2Hv/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
        
      )
      updateProducts(data.data.records)
    }
    makeApiCall()
  },[])
  return (
    <>
      <img src="4c_curls.jpg" alt="4C" width="50" height="60"></img>
      <img id='3C' src="3C_curls.jpg" alt="3C" width="50" height="60"></img>
      {products.map((product) => {
        return (
          <div>
            <img src={product.fields.Image}></img>
            <Link key={product.fields.Name} to={`/${product.fields.Name}`}>
              <p>{product.fields.Seller_Info}{product.fields.Name}</p>
            <p>{product.fields.Price}</p>
            </Link>
            <Products name={product.fields.Name} price={product.fields.Price} seller_info={product.fields.Seller_Info}
              category={product.fields.Category} description={product.fields.Description} webpage={product.fiels.Webpage} />
          </div>
        )
      })}
    </>
  )
}

export default Curlstyle