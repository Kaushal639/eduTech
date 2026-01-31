import React from 'react'
import {Link} from 'react-router-dom'
import './contact.css'

function Contacts(){

    return(<>
    
    
      <div className="contact-container">
        
        
        <div className="contact-info">
          <h7>Get in Touch</h7>
          <p>
            Have questions about our courses or need guidance?  
            We are here to help you start your learning journey.
          </p>

          <div className="info-item">
            <span>📧</span>
            <p>support@edutech.com</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+1 234 567 890</p>
          </div>

          <div className="info-item">
            <span>📍</span>
            <p>123 Learning Street, Education City</p>
          </div>
        </div>

        
        <form className="contact-form">
          <h7>Send Us a Message</h7>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
      

    </>)

}
export default Contacts;