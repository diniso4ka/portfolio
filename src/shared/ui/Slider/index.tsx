import { memo, useState } from 'react';
import cn from 'classnames';

import { useSliderProps } from './hooks/useSliderProps';

import styles from './Slider.module.scss';

interface ISliderComponent {
    className?: string;
    images: string[];
    width?: number;
    betweenSlices?: number;
}

const SliderComponent = (props: ISliderComponent) => {
    const { className, betweenSlices = 40, images, width = 600 } = props;
    const { currentSlide, handleControlClick, currentTranslate } =
        useSliderProps({
            images,
            width,
            betweenSlices,
        });

    return (
        <div className={cn(styles.container, className)}>
            <button onClick={() => handleControlClick('prev')}>prev</button>
            <button onClick={() => handleControlClick('next')}>next</button>
            <div className={styles.slider}>
                <div className={styles.clear} />
                {images.map((image, index) => {
                    const isActiveSlide = currentSlide === index;
                    return (
                        <div
                            key={image}
                            style={{
                                width: isActiveSlide ? width * 1.1 : width,
                                position: 'relative',
                                marginRight: betweenSlices,
                                marginLeft: betweenSlices,
                            }}
                            className={styles.slideWrapper}
                        >
                            <img
                                style={{
                                    translate: currentTranslate,
                                    transition: 'all 0.2s linear',
                                    width: isActiveSlide ? width * 1.1 : width,
                                }}
                                className={cn(styles.slideImage)}
                                src={image}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const Slider = memo(SliderComponent);
