import { Box, InputLabel, TextField } from "@mui/material";
import * as React from 'react'
import styled from "styled-components";
interface ITextField {
    error?: boolean;
    errorText?: string | undefined | boolean;
    name: string;
    label?: string;
    id?: string;
    onChange: (event: any) => void;
    onBlur?: (event: any) => void;
}

const TextComponentStyle = styled.div`
        

`;

const TextFieldComp: React.FC<ITextField> = ({ error, errorText, name, onChange, onBlur, id, label }) => {
    return (
        <TextComponentStyle>
            <Box component="div" className={`${name}_form_control`} >
                {label && <InputLabel htmlFor={id} error={!!error}>{label}</InputLabel>}
                <TextField
                    className="form_Control"
                    error={false}
                    {...{ id, name, onChange, onBlur }}
                    helperText={errorText}
                />
            </Box>
        </TextComponentStyle >
    )
}

export default TextFieldComp;