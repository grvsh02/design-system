import React from 'react';
import styled from "@emotion/styled";
import Icon from "./icon";

type QuantityProps = {
    quantity?: number;
    onChange?: (quantity: number) => void;
    max?: number;
    min?: number;
}

const QuantityContainer = styled.div`
    width: 125px;
    height: 50px;
    background : #fff;
    justify-content: space-between;
    align-items: center;
    border: 0.0625rem solid #828282;
`

const QuantityInput = ({ quantity, onChange = () => {}, min = 1, max = 10 }: QuantityProps) => {
    const [value, setValue] = React.useState(quantity ? quantity : 1);
    const handleChange = (e: any) => {
        const value = e.currentTarget.value;
        if (value >= min && value <= max) {
            setValue(value);
            onChange(value);
        }
    }
    return (
        <QuantityContainer className="flex flex-row">
            <div className="m-2" onClick={() => {
                handleChange({ currentTarget: { value: value - 1 } });
            } }>
                <Icon icon="Minus" type="Outline" size="base" stroke="#828282"/>
            </div>
            <input value={value} onChange={handleChange} className="w-10 text-center text-xs font-[#828282]"/>
            <div className="m-2" onClick={() => {
                handleChange({ currentTarget: { value: value + 1 } });
            }}>
                <Icon icon="Add" type="Outline" size="base" stroke="#828282"/>
            </div>

        </QuantityContainer>
    )
}

export default QuantityInput;