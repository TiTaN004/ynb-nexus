import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function ScrollComponent() {
    const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element with center positioning
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Calculate the center position
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
          
          window.scrollTo({
            top: middle,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Otherwise, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);


  return (
    null
  )
}
