import { ContactForm } from "@/components/contact-form";

export const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase">
            Contact Us
          </p>
          <h2 className="text-2xl font-bold mt-1">
            Get in Touch
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};