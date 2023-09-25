import React from 'react'
import { useCart } from 'react-use-cart'

const Bag = () => {

  const {removeItem,updateItemQuantity,item, totalItems,totalUniqueItems,cartTotal}=useCart()
  return (
    <>
         <div className='container'> 
         <h1>Cart</h1>

         <table  className='table table-stripe hover'>
          <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Color</th>
          <th>Action</th>
          </tr>

          {item.map((cval) => {
          return(
         <tr>

           <td>

            { cval.id }

          </td>
            <td>
           <img src={cval.image} height={"100"} width={"100"}/>
           </td>
           <td>
            {cval.title}
             </td>
            <td>
           {cval.price}
           </td>
           <td >
           < button onclick={()=>(cval.id,cval.quantity-1)}>-</button>
           </td>
           <td>
           < button onclick={()=>(cval.id,cval.quantity+1)}>+ </button>
           </td>
           <td>
           <button>{totalUniqueItems}</button>

           </td>
           <td>
           <button onclick={()=>(removeItem(cval.id))}>remove</button>
           </td>
            </tr>
            )
          


          })
        }

         </table>


         </div>
    </>
  )
}

export default Bag