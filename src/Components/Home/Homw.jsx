import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IMG from "../../assets/iphone.png";
import IMG2 from "../../assets/speaker.png";
import IMG3 from "../../assets/images.png";
import IMG4 from "../../assets/imageend.png";

// Lazy load heavy components
const Show = React.lazy(() => import("../Catagories/Show"));
const Browsebycata = React.lazy(() => import("../Catagories/Browsebycata"));
const Selling = React.lazy(() => import("../Catagories/Selling"));
const ExploreProduct = React.lazy(() => import("../Catagories/ExploreProduct"));

function Homw({ searchQuery }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Banner images
  const bannerImages = [IMG, IMG2];

  // Handle resizing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Scroll animation refs
  const [showRef, showInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [browseRef, browseInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [sellingRef, sellingInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [exploreRef, exploreInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [img2Ref, img2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [img3Ref, img3InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [img4Ref, img4InView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="border-t border-gray-300">
      {/* Banner Section */}
      <div className="px-6 sm:px-12 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories - Only show on desktop */}
          {windowWidth >= 1024 && (
            <div className="lg:w-1/4 w-full">
              <ul className="space-y-3 text-gray-800 font-medium pr-6 lg:border-r border-gray-300">
                <li><a href="/women" className="hover:text-purple-600 transition">Women Fashion</a></li>
                <li><a href="/men" className="hover:text-purple-600 transition">Men's Fashion</a></li>
                <li><a href="/electronics" className="hover:text-purple-600 transition">Electronics</a></li>
                <li><a href="/home" className="hover:text-purple-600 transition">Home & Electronics</a></li>
                <li><a href="/medicine" className="hover:text-purple-600 transition">Medicine</a></li>
                <li><a href="/sports" className="hover:text-purple-600 transition">Sports & Outdoor</a></li>
                <li><a href="/toys" className="hover:text-purple-600 transition">Baby's & Toys</a></li>
                <li><a href="/groceries" className="hover:text-purple-600 transition">Groceries & Pets</a></li>
                <li><a href="/health" className="hover:text-purple-600 transition">Health & Beauty</a></li>
              </ul>
            </div>
          )}

         {/* Banner Slider */}
<div className="lg:w-3/4 w-full flex justify-center relative overflow-hidden rounded-lg shadow-md px-4 sm:px-6 md:px-0">
  <motion.img
    key={currentIndex}
    src={bannerImages[currentIndex]}
    alt="Banner"
    loading="lazy"
    className="w-full max-w-full h-auto rounded-lg"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  />
</div>

        </div>
      </div>

      {/* Scroll-animated sections */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <motion.div
          ref={showRef}
          initial={{ opacity: 0, y: 50 }}
          animate={showInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Show searchQuery={searchQuery} />
        </motion.div>

        <motion.div
          ref={browseRef}
          initial={{ opacity: 0, y: 50 }}
          animate={browseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Browsebycata />
        </motion.div>

        <motion.div
          ref={sellingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={sellingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Selling />
        </motion.div>

        {/* Image Sections */}
        <motion.div
          ref={img2Ref}
          className="flex items-center justify-center my-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={img2InView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <img
            src={IMG2}
            alt="example"
            className="mx-auto max-w-[1000px] w-full h-auto object-cover rounded-lg"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          ref={exploreRef}
          initial={{ opacity: 0, y: 50 }}
          animate={exploreInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ExploreProduct />
        </motion.div>

        <motion.div
          ref={img3Ref}
          className="flex items-center justify-center my-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={img3InView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <img
            src={IMG3}
            alt="example"
            className="mx-auto max-w-[1000px] w-full h-auto object-cover rounded-lg"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          ref={img4Ref}
          className="flex items-center justify-center my-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={img4InView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <img
            src={IMG4}
            alt="example"
            className="mx-auto max-w-[1000px] w-full h-auto object-cover rounded-lg"
            loading="lazy"
          />
        </motion.div>
      </Suspense>
    </div>
  );
}

export default Homw;
