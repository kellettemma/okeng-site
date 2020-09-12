import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h2>Contact Us</h2>
    <div className="container">
      <p>Get in touch with us below to find out more about our services or get a quote.</p>
    <form method="post" netlify data-netlify="true" netlify-honeypot="bot-field" action="https://getform.io/f/770e3890-a0c8-4b07-bf48-623cf447e5c9">
    <input type="hidden" name="bot-field" />
    <label>Name:</label>
    <input type="text" name="name" id="name" />

  <label>Email: </label>
    <input type="email" name="email" id="email" />
 
  <label>Subject:</label>
    <input type="text" name="subject" id="subject" />
 
  <label>Message:</label>
    <textarea name="message" id="message" rows="5" />

  <button className="btn btn-primary" type="submit">Send</button>
</form>
</div>
  </Layout>
)

export default SecondPage
