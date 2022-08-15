import React from "react";
import styled from '@emotion/styled';

type Card = {
    children: React.ReactNode;
    title?: string,
    description?: string,
    titleClassName?: string,
    className?: string,
    background?: string,
}

type CardContainer = {
    background?: string
}

const CardContainer = styled('div')<CardContainer>`
  padding: 1rem;
  background: ${({ background }) =>
    background ? background : '#fff'
};
`

const Card = ({ title, description,  className = '', titleClassName = '', children, background }: Card) =>  (
    <CardContainer className={className} background={background}>
        {(title || description) &&
            <div className="px-2 pt-2">
                {title &&
                    <h3 className={`text-3xl mb-2 font-semibold ${titleClassName}`}>
                        {title}
                    </h3>}
                {description && <p className="text-lg opacity-90 mb-2">{description}</p>}
            </div>}
        {children}
    </CardContainer>
);


export default Card;
