import React, { useRef } from 'react';
import MapForm from './Mapform';

const Contact = () => {
  // Create a reference for MapForm
  const mapFormRef = useRef(null);

  // Function to handle scrolling to MapForm
  const scrollToMapForm = () => {
    mapFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Pass the scroll function to ContactBanner */}
      {/* <ContactBanner scrollToMapForm={scrollToMapForm} /> */}
      
      {/* MapForm with the reference */}
      <div className="md:px-10 px-5 text-center text-red-500 md:text-3xl text-xl font-bold mt-20">
          CONTACT US
          <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-red-500 rounded-full"></div>
        </div>
      <div ref={mapFormRef}>
        <MapForm />
      </div>
    </div>
  );
};

export default Contact;
