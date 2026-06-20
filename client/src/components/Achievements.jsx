const Achievement = () => {
  const achievements = [
    {
      number: "50,000+",
      title: "Patients Treated",
    },
    {
      number: "100+",
      title: "Expert Doctors",
    },
    {
      number: "25+",
      title: "Medical Departments",
    },
    {
      number: "15+",
      title: "Years of Service",
    },
    {
      number: "24/7",
      title: "Emergency Support",
    },
    {
      number: "99%",
      title: "Patient Satisfaction",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-green-800">
          Our Achievements
        </h1>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          We are committed to providing exceptional healthcare services with
          modern facilities, experienced doctors, and compassionate patient
          care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
            >
              <h2 className="text-5xl font-bold text-green-700">
                {item.number}
              </h2>

              <p className="mt-4 text-xl font-semibold text-gray-700">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;