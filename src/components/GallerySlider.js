import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Gallery1 from "../images/gallery1.jpg";
import Gallery2 from "../images/gallery2.jpg";
import Gallery3 from "../images/gallery3.jpg";
import Gallery4 from "../images/gallery4.jpg";
import Gallery5 from "../images/gallery5.jpg";
import Gallery6 from "../images/gallery6.jpg";
import Gallery7 from "../images/gallery7.jpg";
import Gallery8 from "../images/gallery8.jpg";
import Gallery9 from "../images/gallery9.jpg";
import Gallery10 from "../images/gallery10.jpg";
import Gallery11 from "../images/gallery11.jpg";
import Gallery12 from "../images/gallery12.jpg";
import Gallery13 from "../images/gallery13.jpg";
import Gallery14 from "../images/gallery14.jpg";
import Gallery15 from "../images/gallery15.jpg";
import Gallery16 from "../images/gallery16.jpg";
import Gallery17 from "../images/gallery17.jpg";
import Gallery18 from "../images/gallery18.jpg";
import Gallery19 from "../images/gallery19.jpg";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
function GallerySlider() {
  const images = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery10,
    Gallery11,
    Gallery12,
    Gallery13,
    Gallery14,
    Gallery15,
    Gallery16,
    Gallery17,
    Gallery18,
    Gallery19,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative flex mx-auto w-1/2">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={images[currentImage].src}
          alt={`Gallery Image ${currentImage + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-auto"
        />
      </AnimatePresence>

      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 z-10 bg-white p-2 rounded-full shadow-lg"
      >
        <GrFormPrevious />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 z-10 bg-white p-2 rounded-full shadow-lg"
      >
        <GrFormNext />
      </button>
    </div>
  );
}

export default GallerySlider;
