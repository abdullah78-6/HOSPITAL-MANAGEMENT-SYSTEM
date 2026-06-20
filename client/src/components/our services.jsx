const Services = () => {
  const services = [
    {
      title: "General Consultation",
      description:
        "Expert doctors available for routine checkups, diagnosis, and treatment.",
    },
    {
      title: "Emergency Care",
      description:
        "24/7 emergency medical services with rapid response and expert care.",
    },
    {
      title: "Cardiology",
      description:
        "Advanced heart care services including diagnosis, treatment, and monitoring.",
    },
    {
      title: "Laboratory Services",
      description:
        "Accurate and timely diagnostic testing using modern laboratory equipment.",
    },
    {
      title: "Pharmacy",
      description:
        "Well-stocked pharmacy providing prescribed medicines and healthcare products.",
    },
    {
      title: "Ambulance Service",
      description:
        "Quick and reliable ambulance services available round the clock.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-green-800">
          Our Services
        </h1>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide comprehensive healthcare services with experienced
          professionals and modern medical facilities to ensure the best care
          for our patients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-green-700 mb-3">
                {service.title}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;