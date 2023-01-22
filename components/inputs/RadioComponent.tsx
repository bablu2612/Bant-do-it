import * as React from 'react';
import Radio from '@mui/material/Radio';
import { RadioGroup, FormControlLabel, FormControl, FormLabel, InputLabel } from '@mui/material';
import _ from 'lodash';
import styled from 'styled-components';

const RadioComponentStyle = styled.div`

    label { 
        color:var(--black);
        white-space:unset;
        text-overflow: unset;
        font-size: 16px;
        font-weight: 600;
    }

`;

interface IOptions {
    label: string;
    value: string;
}

interface IRadioComponent {
    row?: boolean;
    name: string;
    label: string;
    options: IOptions[];
    value: string;
    onChange: (value: string) => void;
}

const RadioComponent: React.FC<IRadioComponent> = ({
    row,
    name,
    label,
    options,
    value,
    onChange
}) => {
    return (
        <RadioComponentStyle className='radios_component_main'>
            <InputLabel className='formControl_main' classes={{ root: `${name}_formLabel` }}>{label}</InputLabel>
            <RadioGroup
                row={row}
                value={value}
                className='radio_buttons'
                aria-labelledby="radio-buttons-group-label"
                name={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
            >
                {_.map(options, (row: IOptions) => (
                    <FormControlLabel
                        key={row?.value}
                        value={row?.value}
                        control={<Radio />}
                        label={row?.label} />
                ))}
            </RadioGroup>
        </RadioComponentStyle>
    );
}

RadioComponent.defaultProps = {
    row: true
}

export default RadioComponent;