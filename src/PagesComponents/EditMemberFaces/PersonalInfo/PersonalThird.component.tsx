import { Box } from '@mui/material';
import TextFieldComp from 'components/inputs/TextFieldComponent';
import * as React from 'react';
import EditMemberCommonLayout from '../EditMemberFaces.constent';
import { PersonalThirdComponentStyle } from './personalInfo.style';

const PersonalThirdComponent: React.FC = () => {

    return (
        <EditMemberCommonLayout heading='Contact Telephone Numbers'>
            <PersonalThirdComponentStyle className="personal_info_second_section">
                <Box component={'div'} className="form_section">
                    <Box className="field_section">
                        <TextFieldComp name="telephone_home" label="Telephone (Home)" onChange={(e) => console.log('helo')} onBlur={(e) => console.log('hello')} />
                        <TextFieldComp name="telephone_work" label="Telephone (Work)" onChange={(e) => console.log('helo')} onBlur={(e) => console.log('hello')} />
                        <TextFieldComp name="telephone_authority" label="Telephone (Mobile)" onChange={(e) => console.log('helo')} onBlur={(e) => console.log('hello')} />
                    </Box>
                </Box>
            </PersonalThirdComponentStyle>
        </EditMemberCommonLayout>
    );
}
export default PersonalThirdComponent;