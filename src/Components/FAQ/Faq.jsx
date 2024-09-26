import SectionTitle from "../../Utils/SectionTitle";
import FaqDiscloser from "./FaqDiscloser";

const Faq = () => {
  return (
    <div className="container mx-auto text-blue-600">
     <SectionTitle title="FAQ" />
      <div>
        <FaqDiscloser />
      </div>
    </div>
  );
};

export default Faq;
