import { Form } from "react-router-dom"

const ContactForm = () => {
  return (
    <Form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Mobile Number" />
        <input type="text" placeholder="Doctor Name" />
        <input type="date" placeholder="Date" />
        <input type="time" placeholder="Time" />
    </Form>
  )
}

export default ContactForm