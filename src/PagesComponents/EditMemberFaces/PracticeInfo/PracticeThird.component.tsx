import { Box } from '@mui/material';
import CheckBoxComponent from 'components/inputs/CheckboxComponent';
import _ from 'lodash';
import * as React from 'react';
import EditMemberCommonLayout from '../EditMemberFaces.constent';

const PracticeThirdComponent: React.FC = () => {
    const CheckBoxField: string[] = ["Cancer Support", "Eating Disorders and Disordered Eating", "Sports Nutrition", "Nutrigenomics, Genetics"];
    return (
        <EditMemberCommonLayout heading='Areas of Special Interest (Please only tick the relevant boxes if you have received specific training in the relevant field post graduation to support your recommendations and ability to work with other healthcare professionals)'>
            <Box component={'div'} className="checkbox_section">
                {_.map(CheckBoxField, (row: string, index: number) => (
                    <Box component={'div'} key={row}>
                        <CheckBoxComponent
                            label={row}
                            name={`checkbox${index}`}
                            defaultChecked={false}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log(event)}
                        />
                    </Box>
                ))}
            </Box>
        </EditMemberCommonLayout>
    );
}
export default PracticeThirdComponent;