import { Form } from "react-router-dom";

const ContactForm = () => {
  return (
    <Form>
      <div className="grid grid-cols-2 gap-5">
        <input type="text" placeholder="Name" className="p-5 rounded-xl bg-[#FFFFFF0D]" />
        <input type="email" placeholder="Email"  className="p-5 rounded-xl bg-[#FFFFFF0D]"/>
        <input type="tel" placeholder="Mobile Number"  className="p-5 rounded-xl bg-[#FFFFFF0D]"/>
        <input type="text" placeholder="Doctor Name"  className="p-5 rounded-xl bg-[#FFFFFF0D]"/>
        <input type="date" placeholder="Date"  className="p-5 rounded-xl bg-[#FFFFFF0D]"/>
        <input type="time" placeholder="Time"  className="p-5 rounded-xl bg-[#FFFFFF0D]"/>
      </div>
      <button type="submit" className="p-5 text-white rounded-xl bg-light-coffee mt-6 w-full hover:bg-transparent font-bold duration-300 border-2 border-light-coffee">Book Now</button>
    </Form>
  );
};

export default ContactForm;
