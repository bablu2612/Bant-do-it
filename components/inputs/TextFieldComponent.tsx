import { Box, InputLabel, TextField } from "@mui/material";
import * as React from 'react'
import styled from "styled-components";
interface ITextField {
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
                    className="form_Control input_field"
                    error={false}
                    {...{ id, name, readOnly, onChange, onBlur }}
                    helperText={errorText}
                />
            </Box>
        </TextComponentStyle >
    )
}

export default TextFieldComp;