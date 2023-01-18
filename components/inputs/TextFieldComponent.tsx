import { Box, FormHelperText, InputLabel, TextField } from "@mui/material";
import * as React from 'react'
import styled from "styled-components";
interface ITextField {
    errors: string;
    name: string;
    label?: string;
    id?: string;
    onChange: () => void;
    onBlur?: () => void;
}

const TextComponentStyle = styled.div`


`;

const TextFieldComp: React.FC<ITextField> = ({ errors, name, onChange, onBlur, id, label }) => {
    return (
        <TextComponentStyle>
            <Box component="div" classes={{ root: `${name}_form_control` }} >
                {label && <InputLabel htmlFor={id} error={!!errors}>{label}</InputLabel>}
                <TextField
                    className="form_Control"
                    error={false}
                    {...{ id, name, onChange, onBlur }}
                />
                <FormHelperText component="p"
                    classes={{ root: (!!errors) ? `${name}_error` : "" }}
                    error={!!errors}
                >
                    {errors}
                </FormHelperText>
            </Box>
        </TextComponentStyle>
    )
}

export default TextFieldComp;