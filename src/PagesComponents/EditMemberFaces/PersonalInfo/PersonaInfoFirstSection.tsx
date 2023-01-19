import { Box } from '@mui/material';
import TextFieldComp from 'components/inputs/TextFieldComponent';
import * as React from 'react';
import EditMemberCommonLayout from '../EditMemberFaces.constent';

const PersonalInfoFirstSection: React.FC = () => {

    return (
        <EditMemberCommonLayout heading='Primary Details (The information on this page will NOT be displayed publicly)'>
            PersonalInfoFirstSection
            <Box component={"div"} className="prsonalFirst_section">
                <Box>
                    <TextFieldComp
                        name="member_no"
                        label="Member No"
                        onChange={(e) => console.log('helo')}
                        onBlur={(e) => console.log('hello')}
                    />
                    <Box component={'div'}>
                        <TextFieldComp
                            name="member_no"
                            label="Member No"
                            onChange={(e) => console.log('helo')}
                            onBlur={(e) => console.log('hello')}
                        />
                    </Box>
                </Box>
                <Box>
                    <TextFieldComp
                        name="member_no"
                        label="Member No"
                        onChange={(e) => console.log('helo')}
                        onBlur={(e) => console.log('hello')}
                    />
                    <TextFieldComp
                        name="member_no"
                        label="Member No"
                        onChange={(e) => console.log('helo')}
                        onBlur={(e) => console.log('hello')}
                    />
                </Box>
                <Box>
                    <TextFieldComp
                        name="member_no"
                        label="Member No"
                        onChange={(e) => console.log('helo')}
                        onBlur={(e) => console.log('hello')}
                    />
                    <TextFieldComp
                        name="member_no"
                        label="Member No"
                        onChange={(e) => console.log('helo')}
                        onBlur={(e) => console.log('hello')}
                    />
                </Box>
                <Box>
                    <TextFieldComp
                        name="member_no"
                        label="Member No"
                        onChange={(e) => console.log('helo')}
                        onBlur={(e) => console.log('hello')}
                    />
                </Box>
            </Box>
        </EditMemberCommonLayout>
    );
}
export default PersonalInfoFirstSection;