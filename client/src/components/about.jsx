const About = () => {
  return (
    <div className="font-semibold min-h-screen bg-gradient-to-br from-green-50 via-white to-pink-50 py-12 px-6" id="about">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        

        <div>
          <h1 className="text-4xl md:text-5xl text-center text-green-800">
            Welcome to Medicare-
            <span className="text-pink-800">Hospital</span>
          </h1>

          <p className="text-center text-gray-600 mt-4 text-lg">
            Caring for Life, Committed to Excellence.
          </p>
        </div>


        <div className="bg-white shadow-lg rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl text-green-800 text-center mb-6">
            About Us
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Medicare Hospital is a modern healthcare institution dedicated to
            providing high-quality medical services with compassion,
            innovation, and excellence. Our mission is to improve the health
            and well-being of our patients through advanced medical care,
            experienced healthcare professionals, and state-of-the-art
            facilities.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed text-center mt-5">
            We offer a wide range of healthcare services, including general
            medicine, emergency care, surgery, cardiology, pediatrics,
            orthopedics, diagnostics, and preventive healthcare. Our team of
            skilled doctors, nurses, and medical staff works together to
            ensure every patient receives personalized treatment and the
            highest standard of care.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-8">
          

          <div className="bg-white shadow-lg rounded-3xl p-8 hover:scale-105 transition duration-300">
            <h2 className="text-3xl text-green-800 text-center mb-5">
              Our Vision
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed text-center">
              To become a trusted leader in healthcare by providing
              innovative, accessible, and patient-focused medical services
              that enhance the quality of life for every individual.
            </p>
          </div>

          
          <div className="bg-white shadow-lg rounded-3xl p-8 hover:scale-105 transition duration-300">
            <h2 className="text-3xl text-green-800 text-center mb-5">
              Our Mission
            </h2>

            <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed space-y-3">
              <li>
                Deliver exceptional healthcare services with compassion and
                professionalism.
              </li>
              <li>
                Promote wellness through preventive care and health
                education.
              </li>
              <li>
                Utilize advanced medical technology for accurate diagnosis
                and treatment.
              </li>
              <li>
                Ensure patient safety, dignity, and satisfaction at every
                step of care.
              </li>
              <li>
                Build a healthier community through continuous improvement
                and medical excellence.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;