import { useEffect, useState } from "react";

export default function useImagePreview(file) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    try {
      if (file && file[0]) {
        const newUrl = URL.createObjectURL(file[0]);
        if (newUrl !== imgSrc) {
          setImgSrc(newUrl);
        }
      }
    } catch (error) {
      
    }
    
  }, [file]);

  return [imgSrc, setImgSrc];
}