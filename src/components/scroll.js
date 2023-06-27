import { debounce } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';

const Scroll = () => {
    const ref = useRef(null);
    const element = ref.current;

    const [scroll, setScroll] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsScrolling(true);

        setStartX(e.pageX - element.offsetLeft);
        setScrollLeft(element.scrollLeft);

        document.body.style.cursor = 'grabbing';

        element.addEventListener('mouseup', handleMouseUp);
        element.addEventListener('mouseleave', handleMouseLeave);
    };

    const handleMouseUp = () => {
        setIsScrolling(false);

        document.body.style.cursor = 'default';

        element.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseLeave = () => {
        setIsScrolling(false);

        element.removeEventListener('mouseup', handleMouseLeave);
    };

    const handleMouseMove = (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.pageX - element.offsetLeft;
        const walk = (x - startX) * 2;
        element.scrollLeft = scrollLeft - walk;
    };

    const handlePrevBtnClick = () => {
        if (ref.current.scrollLeft === 0) {
            setScroll(false);
        }
        ref.current.scrollLeft -= 210;
    };

    const handleNextBtnClick = () => {
        setScroll(true);
        ref.current.scrollLeft += 210;
    };

    const handleWheel = debounce((e) => {
        setScroll(true);

        e.preventDefault();
        const delta = Math.sign(e.deltaY);
        ref.current.scrollLeft += delta * 500;
    }, 100);

    return {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handlePrevBtnClick,
        handleNextBtnClick,
        handleWheel,
        scroll,
        ref,
    };
};

export default Scroll;
