import SectionTitle from "../../Utils/SectionTitle";
import ContactForm from "./ContactForm";
import img from "./cuate.png"

const Contact = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle title="Contact US" />
      <div className="flex justify-between items-center ">
      <ContactForm />
      <img className="max-h-[500px]" src={img} alt="" />
      </div>
    </div>
  );
};

export default Contact;
