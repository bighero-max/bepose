import React from 'react';
import '../componentStyles/Contact.css'

function Contact(){

    return(
        <>
             <section className='contact-img'>
                contact us
            </section>
            <header className='contact-head'>
                <h2>GET IN TOUCH</h2>
                <h4>Every fill darkness creepeth whose that saying dont bind creeping saying lemoveth even cattle very also unto light image signs one</h4>
            </header>
            <div className="contact-box">
                <div className="contact-address">
                    <h3>CALIFORNIA OFFICE</h3>
                    <ul className='address-list'>
                        <li>
                            <h4><i className="fas fa-map-marker-alt"> Address</i> </h4>
                            <p>322 Pallmall Street, Los California 56854</p>
                        </li>
                        <li>
                            <h4><i className="fas fa-mobile-alt"> Phone</i> </h4>
                            <p>+02 145 586 3254, +01 987 154 7543</p>
                        </li>
                        <li>
                            <h4><i className="fas fa-envelope"> Email</i></h4>
                            <p>info@rexcode.com <br/> info@zonland.com</p>
                        </li>
                    </ul>
                    
                </div>
                <div className="contact-address">
                    <h3>BANGKOK OFFICE</h3>
                    <ul className='address-list'>
                        <li>
                            <h4><i className="fas fa-map-marker-alt"> Address</i> </h4>
                            <p>322 Pallmall Street, Los California 56854</p>
                        </li>
                        <li>
                            <h4><i className="fas fa-mobile-alt"> Phone</i> </h4>
                            <p>+02 145 586 3254, +01 987 154 7543</p>
                        </li>
                        <li>
                            <h4><i className="fas fa-envelope"> Email</i></h4>
                            <p>info@rexcode.com <br/> info@zonland.com</p>
                        </li>
                    </ul>
                    
                </div>
                <form>
                    <input type="text" placeholder='Your name' />
                    <input type="text" placeholder='Enter email' />
                    <input type="text" placeholder='Subject' />
                    <textarea  cols="30" rows="10" placeholder='How can I help you'></textarea>
                    <button>Send message</button>
                </form>
            </div>
        </>
    );
}
export default Contact;