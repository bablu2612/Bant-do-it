import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import styled from 'styled-components';

const CheckBoxComponentStyle = styled.div`
    .checkbox_comp_label {
        .checkbox_label {
            font-size: 16px;
            font-weight: 600;
        }
    }

`;

interface ICheckbox {
    name: string;
    label: string;
    checked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
    disabled?: boolean;
}

const CheckBoxComponent: React.FC<ICheckbox> = ({
    name,
    label,
    checked,
    onChange,
    defaultChecked,
    disabled
}) => {

    return (
        <CheckBoxComponentStyle>
            <FormControlLabel
                label={label}
                classes={{ root: 'checkbox_comp_label', label: "checkbox_label" }}
                control={
                    <Checkbox
                        name={name}
                        defaultChecked={defaultChecked}
                        checked={checked}
                        disabled={disabled}
                        onChange={onChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx={{
                            color: "var(--orange)",
                            '&.Mui-checked': {
                                color: "var(--orange)",
                            },
                        }}
                    />
                }
            />
        </CheckBoxComponentStyle>

    );
}

CheckBoxComponent.defaultProps = {
    disabled: false,
    defaultChecked: false
}

export default CheckBoxComponent;