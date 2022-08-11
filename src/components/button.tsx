import React from 'react';
import styled from '@emotion/styled';

type Button = {
    children: React.ReactNode,
    onClick: () => void
}

const ButtonContainer = styled('button')`
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.875rem 4.125rem;
  gap: 0.625rem;
  background-color: #f4694c;
  border: 0.0625rem solid #f58269;
`

const Button = ({ onClick }: Button) => {
    return (
        <ButtonContainer>

        </ButtonContainer>
    )
}

export default Button;