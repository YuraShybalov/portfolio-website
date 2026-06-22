import { SectionTitle } from "../../components/ui/SectionTitle";
import { FullCertificatesSection } from "../../components/sections/Certificates/FullCertificates";

const CertificatesPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Professional certifications and academic achievements">
          Certificates & Credentials
        </SectionTitle>
        <FullCertificatesSection />
      </div>
    </div>
  );
};

export default CertificatesPage;
