import { Box, InputLabel, TextField } from "@mui/material";
import * as React from 'react'
import styled from "styled-components";
interface ITextField {
    type?: ('text' | 'number');
    error?: boolean;
    errorText?: string | undefined | boolean;
    name: string;
    label?: string;
    id?: string;
    readOnly?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: any) => void;
}

const TextComponentStyle = styled.div`
input[type=number]{ 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
        label {
            color: #000;
            font-size: 18px;
            margin-bottom: 0;
        }
        fieldset {
            top: 0;
        }
        .form_control {
            width: 100%;
            max-width: 100%;
        }

`;

const TextFieldComp: React.FC<ITextField> = ({
    type,
    error,
    errorText,
    name,
    onChange,
    onBlur,
    readOnly,
    id,
    label
}) => {
    return (
        <TextComponentStyle className="text_component_main">
            <Box component="div" className={`${name}_form_control`} >
                {label && <InputLabel htmlFor={id} error={!!error}>{label}</InputLabel>}
                <TextField
                    type={type}
                    className="form_Control input_field"
                    error={false}
                    {...{ id, name, readOnly, onChange, onBlur }}
                    inputProps={
                        type === "number" ? { inputMode: 'numeric', pattern: '[0-9]*' } : {}
                    }
                    helperText={errorText}
                />
            </Box>
        </TextComponentStyle >
    )
}
TextFieldComp.defaultProps = {
    type: 'text'
}
export default TextFieldComp;