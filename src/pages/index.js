import { motion } from "framer-motion";
import Head from "next/head";
import Home1 from "../images/home1.png";
import Home2 from "../images/home2.png";
import BannerImage from "../images/banner.png";
import GallerySlider from "@/components/GallerySlider";

function HomePage() {
  return (
    <>
      <Head>
        <title>Dees Nursery</title>
      </Head>
      <motion.div
        className="mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section className="relative mb-8">
          <img
            src={BannerImage.src}
            alt="Dees Nursery Banner"
            className="w-full brightness-50 h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl text-center font-bold text-white mb-2">
              Dee&apos;s Day Nursery: Premier Childcare in Wimbledon
            </h1>
            <p className="text-xl text-center text-white">
              Nurturing Children for Over 18 Years
            </p>
          </div>
        </section>

        <section className="flex  gap-8  justify-center items-center p-4 mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              About Us
            </h2>
            <p>
              Premier childcare services for children aged 3 months to 5 years.
              With over 18 years of experience, we focus on nurturing
              children&apos;s physical, emotional, and social development in a
              safe, stimulating environment. Conveniently located within 400
              meters of Wimbledon railway station, we&apos;re open 51 weeks a
              year.
            </p>
          </div>

          <motion.img
            whileHover={{ scale: 1.02 }}
            src={Home1.src}
            alt="Nursery Interior"
            className="rounded-lg w-1/3 shadow-lg"
          />
        </section>

        {/* Why Choose Us Section */}
        <section className="flex  gap-8 justify-center items-center p-4 mb-6">
          <motion.img
            whileHover={{ scale: 1.02 }}
            src={Home2.src}
            alt="Outdoor Playground"
            className="rounded-lg w-1/3 shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Why Choose Us?
            </h2>
            <p>
              We offer a modern infrastructure with CCTV and dedicated spaces
              for varied age groups. Nutritious meals are prepared onsite, and
              children benefit from an outdoor area equipped with an outdoor
              classroom. Our curriculum is based on the Early Years Foundation
              Stage, and we provide extra-curricular activities at no additional
              cost. Plus, we offer easy onsite parking for pick-ups and
              drop-offs.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
          <p>
            "Francesca feels very much at home at Dee&apos;s Day Nursery. The
            staff is receptive and prioritizes children&apos;s well-being." -
            Chritele Waldron, Parent
          </p>
        </section>

        {/* Our Team Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
          <p>
            Recognized by Ofsted for our collaborative approach with parents. We
            provide regular updates on children's progress and offer ample
            opportunities for parental involvement.
          </p>
        </section>

        {/* Policies & Values Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Policies & Values</h2>
          <p>
            We are committed to providing high-quality education and ensuring
            child safety. Our practices adhere to the standards set by the Early
            Years Foundation Stage (EYFS).
          </p>
        </section>

        {/* Gallery & Activities Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Gallery & Activities</h2>
          <p>
            Explore our state-of-the-art infrastructure and discover a diverse
            range of extra-curricular activities that provide both fun and
            learning experiences for children.
          </p>
        </section>
        <GallerySlider />
        {/* Join Our Team Section */}
        <section className="p-4 bg-secondary flex flex-wrap flex-col text-center items-center">
          <h2 className="text-2xl font-semibold mb-2">Join Our Team</h2>
          <p>
            Looking for a rewarding career in childcare?
            <br /> We are currently hiring for the positions of Nursery Nurse
            and Room Leader. Apply now and become a part of our esteemed team.
          </p>
          <motion.div className="text-center p-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold"
            >
              BOOK A NURSERY VISIT
            </motion.button>
          </motion.div>
        </section>

        {/* Call to Action */}
      </motion.div>
    </>
  );
}

export default HomePage;
