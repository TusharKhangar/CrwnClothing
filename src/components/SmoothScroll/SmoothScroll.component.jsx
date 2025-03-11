import React, { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

const options = {
    damping: 0.01,
}


const SmoothScroll = () => {
    useEffect(() => {
        const fixedElement = document.getElementById('fixed');
        const scrollBar = Scrollbar.init(document.body, options);
        // scrollBar.addListener((status) => {
        //     const offset = status.offset;

        //     fixed.style.top = offset.y + 'px';
        // })
        return () => {
          if (Scrollbar) Scrollbar.destroy(document.body)
        }  },[])

    return null;
}

export default SmoothScroll;