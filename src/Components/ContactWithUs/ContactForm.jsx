import { Form } from "react-router-dom";

const ContactForm = () => {
  return (
    <Form>
      <div className="grid grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="p-5 rounded-xl bg-[#FFFFFF0D]"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="p-5 rounded-xl bg-[#FFFFFF0D]"
        />
        <input
          type="tel"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          name="mobileNumber"
          required
          placeholder="123-456-7890"
          className="p-5 rounded-xl bg-[#FFFFFF0D]"
        />
        <input
          type="text"
          name="doctorName"
          required
          placeholder="Doctor Name"
          className="p-5 rounded-xl bg-[#FFFFFF0D]"
        />
        <input
          type="date"
          name="date"
          required
          placeholder="Date"
          className="p-5 rounded-xl bg-[#FFFFFF0D]"
        />
        <input
          type="time"
          name="time"
          required
          placeholder="Time"
          className="p-5 rounded-xl bg-[#FFFFFF0D]"
        />
      </div>
      <button
        type="submit"
        className="p-5 text-white rounded-xl bg-light-coffee mt-6 w-full hover:bg-transparent font-bold duration-300 border-2 border-light-coffee"
      >
        Book Now
      </button>
    </Form>
  );
};

export default ContactForm;
