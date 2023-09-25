import React from 'react'

const Contactus = () => {
  return (
    <>
        <div className='contactUs '>
        <p className='cont_para' style={{ textAlign: "center", fontFamily: "sans-serif", fontWeight: "bolder", marginTop: "5px" }}>Please drop us a line, we'd love to hear from you !<br />
          We'll  get back to you as soon as we can.</p>
      </div>

      <div className='d-flex '>
        <div className='p-3'>
          <h4 style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>Get In Touch</h4>
          <form style={{ padding: "10px", textAlign: "left" }}>
            <input type='text' placeholder='Name' className='outline outline-primary input-group-text' style={{ height: "2.5rem", width: "50rem" }} /><br /><br />
            <input type='email' placeholder='Email' className=' input-group-text' style={{ height: "2.5rem", width: "50rem" }} /><br /><br />
            <input type='tel' placeholder='Phone Number' className=' input-group-text' style={{ height: "2.5rem", width: "50rem" }} /><br /><br />
            <textarea type='text' className=' input-group-text' placeholder='Comments' style={{ height: "10rem", width: "50rem" }} /><br /><br />
            <button className="btn btn-success  input-group-text" type="submit">Send Message</button><br />
          </form>
        </div>

        <div className='p-3 m-4 '>
          <h5>Name: </h5><p>Felix It Pvt Ltd</p><br/>
          <h5>Address: </h5><p>907,Platinum Square, Vascon Weikfield Corporate<br /> Park Nagar Road, next to Hyatt Hotel, opp. WNS, Pune,<br /> Maharashtra 411014,<br />Telephone : +91-8010384221</p>
         <br/> <h5>Email: </h5><p>riteshkashinathkalyanshetti03@gmail.com</p>
        </div><br/>
      </div>
      <div className=''>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2885560781506!2d73.90960317404729!3d18.561025167939533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c139e3055555%3A0xd5c2716ff5580211!2sFelix%20IT%20Systems!5e0!3m2!1sen!2sin!4v1690882909291!5m2!1sen!2sin" style={{width:"84rem", height:"20rem" , style:"border:0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default Contactus