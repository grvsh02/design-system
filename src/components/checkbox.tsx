import React from 'react';
import styled from "@emotion/styled";

const CheckboxContainer = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

const StyledContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
`


const Checkbox = ({}) => {
    return (
        <div>
            <label>
                <CheckboxContainer/>
                <StyledContainer/>
            </label>
        </div>
    )
}

export default Checkbox;