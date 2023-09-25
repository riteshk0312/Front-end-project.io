import React from 'react'
import { useParams } from 'react-router-dom'

const Productinfo = ({data}) => {

const {id} = useParams();
console.log(id)

  return (
    <>
    <h1 className='text-centre'>Product Info</h1>
               { data.map ((cval) => {
                if(id == cval.id){
                    return(
                        <>
                        <div className='container'>
                            <div className='row'>

                                <div className='col-md-4'>
                                    <img  src={cval.image} height={'400'} width={'300'} alt='img'/>


                                </div>
                                <div className='col-md-8'>
                                    <h1>Name:{cval.title}</h1>
                                    <h3>Price:{cval.price} INR.</h3>                                      
                                       <p>{cval.description}</p>
                                       <button className='btn btn-dark'>Add to Cart </button>


                                </div>







                            </div>

                        
                        
                        
                        
                        
                        
                        
                        </div>
                        
                        
                        
                        
                        
                        
                        
                        
                        </>






                    )

                   

                }
                })}

    </>
  )
}

export default Productinfo