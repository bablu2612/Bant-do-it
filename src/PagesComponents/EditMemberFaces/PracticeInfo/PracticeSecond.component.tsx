import { Box } from '@mui/material';
import CheckBoxComponent from 'components/inputs/CheckboxComponent';
import _ from 'lodash';
import * as React from 'react';
import EditMemberCommonLayout from '../EditMemberFaces.constent';
import { PracticeInfoSecondStyle } from './practiceInfo.style';

const LEFT_SIDE: string[] = [
    "Autoimmune Support",
    "Chronic Fatigue Syndrome/ME",
    "Digestion, Gut Health",
    "Healthy Aging",
    "Heart Disease",

];
const CENTER_ONE: string[] = [
    "Mental Wellbeing and Nutrition",
    "Pregnancy, Preconception",
    "Sports Nutrition",
    "Thyroid Conditions",
    "Weight Management, Weight-Loss"
];
const CENTER_TWO: string[] = ["Children, Infants", "Diabetes", "Food Allergy, Food Intolerance", "Healthy Eating", "Men's Health"];
const RIGHT_SIDE: string[] = ["Obesity",
    "Skin Conditions", "Stress Management, Tiredness", "Vegetarian and Vegan Diets", "Women's Health, Menopause"
];


const PracticeSecondComponent: React.FC = () => {

    return (
        <EditMemberCommonLayout heading='Health Concerns (Please tick all of the health concerns that you work with)'>
            <PracticeInfoSecondStyle className='second_section_main'>
                <Box component={'div'} className="checkbox_section">
                    {_.map(LEFT_SIDE, (row: string, index: number) => (
                        <CheckBoxComponent
                            label={row}
                            name={`checkbox_first${index}`}
                            defaultChecked={false}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log(event)}
                        />
                    ))}
                </Box>
                <Box component={'div'} className="checkbox_section">
                    {_.map(CENTER_ONE, (row: string, index: number) => (
                        <CheckBoxComponent
                            label={row}
                            name={`checkbox_second${index}`}
                            defaultChecked={false}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log(event)}
                        />
                    ))}
                </Box>
                <Box component={'div'} className="checkbox_section">
                    {_.map(CENTER_TWO, (row: string, index: number) => (
                        <CheckBoxComponent
                            label={row}
                            name={`checkbox_third${index}`}
                            defaultChecked={false}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log(event)}
                        />
                    ))}
                </Box>
                <Box component={'div'} className="checkbox_section">
                    {_.map(RIGHT_SIDE, (row: string, index: number) => (
                        <CheckBoxComponent
                            label={row}
                            name={`checkbox_forth${index}`}
                            defaultChecked={false}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log(event)}
                        />
                    ))}
                </Box>
            </PracticeInfoSecondStyle>
        </EditMemberCommonLayout>
    );
}
export default PracticeSecondComponent;