import React from 'react'
import { NavLink } from 'react-router-dom'

const Men = ({data}) => {
  return (
    <div>
        <h1>Men</h1>



<div className='containers '>
                <div className='row mt-5'>

                    {data.map((cval) => {
                        return (<>
                            <div className='col-md-4 mycard3 mt-5'>
                                <div className="card mycard" >
                                    <img src={cval.image} className="card-img-top myimage" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{cval.title}Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p><b>Price:</b>{cval.price}</p>
                                        <p><b>category:</b>{cval.category}</p>
                                        <NavLink to =  {`/productinfo/${cval.id}`} items={cval}><button className='btn btn-primary m-1' >Know more </button> </NavLink>
                              <button className='btn btn-primary' >Add to Cart</button>

                                    </div>
                                </div>
                            </div>


                        </>
                        )
                    })
                    }</div>
            </div>
    </div>
  )
}

export default Men