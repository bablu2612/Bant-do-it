import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: #fff;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    width: 100%;
    border: 1px solid #ddd;
    cursor: pointer;
    transition: all .7s ease;
    text-align: center;
    border-radius: 3px;
    background: var(--orange);
    text-transform: capitalize;
    font-family: var(--commont-font);
    box-shadow: none;
`;

enum ButtonType {
    submit = "submit",
    button = "button"
}

interface IButtonProps {
    type?: ('submit' | 'button');
    children: ReactNode;
    name?: string;
    classes?: string;
    onClick: (value: React.SyntheticEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const ButtonComponent: React.FC<IButtonProps> = ({
    children,
    type,
    name,
    classes,
    onClick,
    disabled
}) => {
    return (
        <Button
            type={type}
            name={name}
            disabled={disabled}
            onClick={(value: React.SyntheticEvent<HTMLButtonElement>) => onClick(value)}
            className={`${classes} button_comp`}
        >
            {children}
        </Button>
    );
}

ButtonComponent.defaultProps = {
    type: "button",
    name: "",
    disabled: false
}

export default ButtonComponent;