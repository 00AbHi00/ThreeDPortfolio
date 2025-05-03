'use client';

import { useEffect, useState } from 'react';

export default function ClientImageGallery() {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
      fetch('/api/images')
      .then((res) => res.json())
      .then(setImages);
    
  }, []);

  return (
    <div className='bg-red'>
      {images.map((src, i) => (
          <div className='p-32 absolute' key={i}>
            <img  src={src} alt={`Image ${i}`} width={400} />
           </div>
        ))}

    </div>
  );
}
