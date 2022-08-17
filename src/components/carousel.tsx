import React from 'react';
import './carousel.css';

type CarouselContainerProps = {
    className?: string;
    data?: {
        id?: number;
        image?: string;
        title?: string;
    }[];
}

type CarouselProps = {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    children: any;
}

type CarouselCardProps = {
    active: boolean;
    children: any;
}

const {useState, useEffect, useRef} = React;

const CarouselContainer = ({className, data = []}: CarouselContainerProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const MINUTE_MS = 5000;

    useEffect(() => {
        const interval = setInterval(() => {
            if (activeIndex === data.length - 1) {
                setActiveIndex(0);
            } else setActiveIndex(activeIndex + 1);
        }, MINUTE_MS);

        return () => clearInterval(interval);
    }, )

    return (
        <div className={'app' + `${className}`} >
            <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
                {data.map((card, i) => {
                    return (<CarouselCard key={card.id} active={activeIndex === i}>
                        <div className='carousel-card-content' style={{backgroundImage: `url("${card.image}")`}}>
                            <div className='carousel-card-title'>
                                {/*<div className="bg-gradient-to-r from-black p-3">*/}
                                    {card.title}
                                {/*</div>*/}
                            </div>
                        </div>
                    </CarouselCard>)
                })}
            </Carousel>
            <div className="button-group">
                <button type="button" disabled={activeIndex === 0} onClick={() => setActiveIndex(activeIndex - 1)}>Prev</button>
                <button type="button" disabled={activeIndex === data.length - 1} onClick={() => setActiveIndex(activeIndex + 1)}>Next</button>
            </div>
        </div>
    )
}

const Carousel = ({activeIndex, setActiveIndex, children}: CarouselProps) => {
    const carouselRef: any = useRef(null);
    const [carouselTranslate, setCarouselTranslate] = useState(null);

    useEffect(() => {
        console.log(activeIndex)
        const initialTranslateVal = carouselRef.current.offsetWidth / 4;
        const diffAmount = initialTranslateVal * 2;
        const translate: any = activeIndex === 0 ? initialTranslateVal : initialTranslateVal - (activeIndex * diffAmount)
        setCarouselTranslate(translate);
    }, [activeIndex]);

    return (
        <>
            <div className="carousel" ref={carouselRef} style={{transform: `translateX(${carouselTranslate}px)`}}>
                {children}
            </div>
            <div className="dots">
                {children.map((child: any, i: number) => <button className={`dot ${activeIndex === i ? 'active' : ''}`} onClick={() => setActiveIndex(i)}/>)}
            </div>
        </>
    )
}

const CarouselCard = ({active, children}: CarouselCardProps) => {
    return (
        <div className={`carousel-card ${active ? 'active' : ''}`}>
            {children}
        </div>
    )
}

export default CarouselContainer;