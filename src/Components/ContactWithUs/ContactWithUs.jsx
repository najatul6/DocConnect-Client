import ContactContent from "./ContactContent";
import ContactForm from "./ContactForm";

const ContactWithUs = () => {
  return (
    <div className="bg-light-green p-10 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-5">
      <ContactContent />
      <ContactForm />
    </div>
  );
};

export default ContactWithUs;
