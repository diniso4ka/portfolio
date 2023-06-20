import { useState } from 'react';

export const useSliderProps = ({
    images,
    width,
    betweenSlices,
}: {
    images: string[];
    width: number;
    betweenSlices: number;
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);

    const handleControlClick = (control: 'prev' | 'next') => {
        setCurrentSlide((prev) => {
            if (control === 'prev' && prev !== 0) {
                setCurrentTranslate((prev) => prev + width + betweenSlices * 2);
                return prev - 1;
            } else if (control === 'next' && prev !== images.length - 1) {
                setCurrentTranslate((prev) => prev - width - betweenSlices * 2);
                return prev + 1;
            }
            return prev;
        });
    };

    return {
        currentSlide,
        setCurrentSlide,
        handleControlClick,
        currentTranslate,
    };
};
