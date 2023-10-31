import { motion } from "framer-motion";

export default function BookingForm() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto p-4"
    >
      <h1 className="text-3xl font-bold mb-4">Book a nursery visit</h1>

      <p>
        Please use the form below to schedule a nursery show around and nursery
        visit. We will get back to you with a confirmation via email and/or
        phone.
      </p>

      <form className="mt-4 space-y-4">
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="Your Name (required)"
          required
        />
        <input
          className="border p-2 w-full"
          type="email"
          placeholder="Your Email (required)"
          required
        />
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="Subject"
          value="Book a nursery visit and show around"
          readOnly
        />
        <input className="border p-2 w-full" type="date" />
        <input className="border p-2 w-full" type="time" />
        <textarea
          className="border p-2 w-full"
          placeholder="Message. Please include your phone number if you prefer to receive a call from us."
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white p-2 rounded mt-4"
        >
          Book a nursery visit
        </motion.button>
      </form>

      <a className="block mt-4 underline" href="#!">
        Download Prospectus
      </a>
      <a className="block mt-4 underline" href="tel:+1234567890">
        Click here to call us
      </a>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Dee’s Day Nursery News</h2>
        <p>
          Today we do not have any critical update for parent’s of children.
          Please do check this space for any updates from us. We intend to
          update this space with up to date information and news for parents on
          a daily basis.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Ofsted Inspection Report</h2>
        {/* Add content or link for the report here */}
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Parent Feedback and Review</h2>
        {/* Star ratings can be represented with icons or SVGs */}
        <p>
          Five Star RatingFive Star RatingFive Star RatingFive Star RatingFive
          Star Rating
        </p>
        <p>
          A great warm, welcoming, and friendly nursery where your child will
          thrive. I fully recommend Dee’s Wimbledon to any parents looking to
          place their child in a nurturing environment.
        </p>
        <a className="underline" href="#!">
          Read more Google reviews
        </a>
      </section>
    </motion.div>
  );
}
