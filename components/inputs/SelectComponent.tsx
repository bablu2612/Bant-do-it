import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import _ from 'lodash';
import { FormHelperText } from '@mui/material';
import styled from 'styled-components';

const SelectComponentStyle = styled.div`
    width:100%;
    max-width:700px;
    label {
        color: #000;
        font-size: 18px;
        margin-bottom: 4px;
    }
`;

interface ISlectProps {
    value: string;
    label: string;
    name: string;
    options: { label: string, value: string }[];
    onChange: (event: SelectChangeEvent) => void;
}

const SelectComponent: React.FC<ISlectProps> = ({
    value,
    name,
    label,
    options,
    onChange
}) => {
    // const handleChange = (event: SelectChangeEvent) => {
    //     setAge(event.target.value as string);
    // };

    return (
        <SelectComponentStyle className='main_select_component'>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                fullWidth
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                name={name}
                value={value}
                onChange={onChange}
            >
                {_.map(options, (row: { label: string, value: string }, index: number) => (
                    <MenuItem key={row?.value} value={row?.value}>{row?.label}</MenuItem>
                ))}
            </Select>
            <FormHelperText></FormHelperText>
        </SelectComponentStyle>
    );
}
export default SelectComponent;