import { Box, InputLabel } from '@mui/material';
import ButtonComponent from 'components/inputs/ButtonComponent';
import SelectComponent from 'components/inputs/SelectComponent';
import * as React from 'react';
import EditMemberCommonLayout, { PracticeInfoConstents } from '../EditMemberFaces.constent';
import _ from 'lodash';
import CheckBoxComponent from 'components/inputs/CheckboxComponent';
import { PracticeInfoFirstStyle } from './practiceInfo.style';

const {
    selectOptions, tickLabelText, checkbox_contents_first, checkbox_contents_second
} = PracticeInfoConstents;


const PracticeFirstComponent: React.FC = () => {
    return (
        <EditMemberCommonLayout heading='Practising Information (The information on this page will be displayed publicly)'>
            <PracticeInfoFirstStyle>
                <Box component={'div'} className="profile_container">
                    <Box component={'div'} className="image_section">
                        <img src="https://bant.org.uk/bant/content/images/members/no-avatar.png" />
                    </Box>
                    <Box component={'div'} className="change_photo_button">
                        <ButtonComponent onClick={() => console.log('change_photo')}>Change Photo</ButtonComponent>
                    </Box>
                </Box>
                <Box component={'div'} className="profileDeatil_content">
                    <SelectComponent
                        label='Profession'
                        value={'4'}
                        options={selectOptions}
                        name='profession'
                        onChange={(e) => console.log(e)}
                    />
                    <Box component="div" className="profile_content_checkbox">
                        <InputLabel>{tickLabelText}</InputLabel>
                        <Box component={'div'} className="checkboxes">
                            {_.map(checkbox_contents_first, (row: { name: string, label: string }) => (
                                <CheckBoxComponent
                                    key={row?.name}
                                    name={row?.name}
                                    defaultChecked={false}
                                    onChange={() => console.log('hello')}
                                    label={row?.label}
                                />
                            ))}
                        </Box>
                        <Box component={'div'} className="text_section">
                            <CheckBoxComponent
                                name={checkbox_contents_second?.name}
                                defaultChecked={false}
                                onChange={() => console.log('hello')}
                                label={checkbox_contents_second?.label}
                            />
                            <Box component="p">
                                (You are indicating to BANT Student Members that they can observe your clinic.
                                Please see Student Observation guidelines in <a href="https://bant.org.uk/bant-professional-practice-handbook/students/#student-observations" target="ppHandbook">BANT Professional Practice Handbook</a> )
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </PracticeInfoFirstStyle>
        </EditMemberCommonLayout>
    );
}
export default PracticeFirstComponent;