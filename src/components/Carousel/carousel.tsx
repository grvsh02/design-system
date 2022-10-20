import React from 'react';
import './carousel.css';
import Button from "../button";

type CarouselContainerProps = {
    className?: string;
    data?: {
        id?: number;
        image?: string;
        title?: string;
        content?: {
            text?: string;
            tag?: string;
            buttonText?: string;
            onClick?: () => void;
            spanText?: string;
            conditionText?: string;
        };
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

const CarouselContainer = ({className, data = []}: CarouselContainerProps) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const MINUTE_MS = 5000;

    React.useEffect(() => {
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
                {data.map((card: any , i) => {
                    return (<CarouselCard key={card.id} active={activeIndex === i}>
                        <div className='carousel-card-content' style={{backgroundImage: `url("${card.image}")`}}>
                            <div className='carousel-card-title'>
                                {card.content &&
                                <div className="carousel-card-title-card p-14">
                                    <div className="flex">
                                        {card.content.tag &&
                                        <div className="tag">
                                            {card.content.tag}
                                        </div>}
                                        {card.content.spanText &&
                                        <div className="span-2">{card.content.spanText}</div>}
                                    </div>
                                    {card.content.text &&
                                    <div className="span-3">{card.content.text}</div>}
                                    {card.content.conditionText &&
                                    <div className="span-1">{card.content.conditionText}</div>}
                                    {card.content.buttonText &&
                                    <Button className="mt-2" type="outline" onClick={card.content.onClick ? card.content.onClick : () => {}}>
                                        {card.content.buttonText}
                                    </Button>}
                                </div>}
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
    const carouselRef: any = React.useRef(null);
    const [carouselTranslate, setCarouselTranslate] = React.useState(null);

    React.useEffect(() => {
        const initialTranslateVal = carouselRef.current.offsetWidth / 206;
        const diffAmount = initialTranslateVal * 206;
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