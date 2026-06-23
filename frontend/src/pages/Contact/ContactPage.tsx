import { SectionTitle } from "../../components/ui/SectionTitle";
import { ContactForm } from "../../components/Forms/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Let's discuss your next project">
          Get In Touch
        </SectionTitle>
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
