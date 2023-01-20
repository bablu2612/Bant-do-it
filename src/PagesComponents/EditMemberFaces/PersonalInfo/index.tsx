import * as React from 'react';
import PersonalInfoStyleMain from './personalInfo.style';
import PersonalFirstComponent from './PersonaFirst.compnent';
import PersonalSecondComponent from './PersonalSecond.component';
import PersonalThirdComponent from './PersonalThird.component';
import PersonalFourthComponent from './PersonalFourth.component';
import { Box } from '@mui/material';
import ButtonComponent from 'components/inputs/ButtonComponent';

const PersonalInfoComponent: React.FC = () => {

    return (
        <PersonalInfoStyleMain>
            <PersonalFirstComponent />
            <PersonalSecondComponent />
            <PersonalThirdComponent />
            <PersonalFourthComponent />
            <Box component={"div"} className="actions_buttons">
                <ButtonComponent type="submit" onClick={() => alert()}>Save</ButtonComponent>
                <ButtonComponent onClick={() => alert()}>Cancel</ButtonComponent>
            </Box>
        </PersonalInfoStyleMain>
    );
}
export default PersonalInfoComponent;