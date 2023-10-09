import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import '../App.css'
export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleSubject = (event) => {
        setSubject(event.target.value)
    }
    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    const SubmitData = async () => {
        console.log(name, email, message, subject)
        try {
            const response = await fetch("http://localhost:8000/contact", {
                method: "POST",
                body: JSON.stringify({ name, email, subject, message }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div>
            <Navbar />
            <div class=" container mx-auto my-3">
                {/* <h2 class="text-warning">Contact</h2> */}
                <div class="row featurette">
                    <div class="col-md-4">
                        <div class="box bg-dark text-center font-weight-bold"><br />
                            <h2><i class="fa-solid fa-location-dot" style={{ color: "#e0a800" }}></i></h2>
                            <p class="text-light">Lahore, Pakistan</p>
                        </div>
                        <div class="box bg-dark text-center font-weight-bold"><br />
                            <h2><i class="fa-solid fa-phone" style={{ color: "#e0a800" }}></i></h2>
                            <p class="text-light">+92 3314911420</p>
                        </div>
                        <div class="box bg-dark text-center font-weight-bold"><br />
                            <h2><i class="fa-solid fa-envelope" style={{ color: "#e0a800" }}></i></h2>
                            <p class="text-light">umeryasir718@gmail.com</p>
                        </div>
                        <div class="box bg-dark text-center font-weight-bold"><br />
                            <h2><i class="fa-solid fa-circle-check" style={{ color: "#e0a800" }}></i></h2>
                            <p class="text-light">Freelance Available</p>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="mapouter featurette-image img-fluid mx-auto border" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            <div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=673&amp;height=150&amp;hl=en&amp;q=Phool Nagar, Lahore&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                                <a href="https://embed-googlemap.com">embed google maps</a>
                            </div>
                        </div><br />
                        <div class="h3 text-light">How Can I <span class="text-warning">Help You?</span></div>
                        <div class="form-group text-light row gy-2 gx-3 align-items-center">
                            <div class="col-md-6 form-group">
                                <input type="text" class="form-control" id="contactName" placeholder="Full Name" required="" onChange={handleName} /><br />
                                <input type="email" class="form-control" id="contact_email" placeholder="Email Address" required="" onChange={handleEmail} /> <br />
                                <input type="text" class="form-control" id="contact_subject" placeholder="Subject" required="" onChange={handleSubject} />
                            </div>
                            <div class="col-md-6 form-group">
                                <textarea type="text" class="form-control" id="contact_message" placeholder="Message" rows="7" onChange={handleMessage}></textarea>
                            </div>
                            <div class="col-md-6">
                                <button type="submit" class="btn btn-warning" onClick={SubmitData} >Send
                                    Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
