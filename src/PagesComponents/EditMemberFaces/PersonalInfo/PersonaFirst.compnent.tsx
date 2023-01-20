import { Box } from '@mui/material';
import ButtonComponent from 'components/inputs/ButtonComponent';
import TextFieldComp from 'components/inputs/TextFieldComponent';
import * as React from 'react';
import EditMemberCommonLayout from '../EditMemberFaces.constent';
import { PersonalInfoFirstSectionStyle } from './personalInfo.style';

const PersonalFirstComponent: React.FC = () => {

    return (
        <EditMemberCommonLayout heading='Primary Details (The information on this page will NOT be displayed publicly)'>
            <PersonalInfoFirstSectionStyle className="prsonalFirst_section">
                <Box className="field_section">
                    <TextFieldComp
                        name="member_no"
                        label="Member No"
                        onChange={(e) => console.log('helo')}
                        onBlur={(e) => console.log('hello')}
                    />
                    <Box component={'div'} className="input_or_button">
                        <TextFieldComp
                            name="membership_type"
                            label="Membership Type"
                            onChange={(e) => console.log('helo')}
                            onBlur={(e) => console.log('hello')}
                        />
                        <ButtonComponent classes='update_member' onClick={() => console.log('update')}>
                            Update Member Default Settings
                        </ButtonComponent>
                    </Box>
                </Box>
                <Box className="field_section">
                    <TextFieldComp
                        name="first_name"
                        label="First Name"
                        onChange={(e) => console.log('helo')}
                        onBlur={(e) => console.log('hello')}
                    />
                    <TextFieldComp
                        name="last_name"
                        label="Last Name"
                        onChange={(e) => console.log('helo')}
                        onBlur={(e) => console.log('hello')}
                    />
                </Box>
                <Box className="field_section">
                    <TextFieldComp
                        name="date_of_birth"
                        label="Date of Birth"
                        onChange={(e) => console.log('helo')}
                        onBlur={(e) => console.log('hello')}
                    />
                    <TextFieldComp
                        name="gender"
                        label="Gender"
                        onChange={(e) => console.log('helo')}
                        onBlur={(e) => console.log('hello')}
                    />
                </Box>
                <Box className="field_section">
                    <TextFieldComp
                        name="email_address"
                        label="E-mail"
                        onChange={(e) => console.log('helo')}
                        onBlur={(e) => console.log('hello')}
                    />
                </Box>
            </PersonalInfoFirstSectionStyle>
        </EditMemberCommonLayout>
    );
}
export default PersonalFirstComponent;