import { Box } from '@mui/material';
import CheckBoxComponent from 'components/inputs/CheckboxComponent';
import * as React from 'react';
import EditMemberCommonLayout from '../EditMemberFaces.constent';
import { PersonalFourthComponentStyle } from './personalInfo.style';

const PersonalFourthComponent: React.FC = () => {

    return (
        <EditMemberCommonLayout heading='Contact Telephone Numbers'>
            <PersonalFourthComponentStyle className="personal_info_second_section">
                <Box component={"p"} className="upper_text">
                    BANT would like to keep you updated with the latest news, upcoming events (regional and local networks as well as student and general webinars) and recruitment opportunities.
                    Please use the tick boxes below to give your consent to receiving each marketing communication via email.
                </Box>
                <Box className="checkbox_section">
                    <Box component={'div'} className="checkbox_field">
                        <CheckBoxComponent
                            label="I would like to receive the bi-monthly eNews email from BANT"
                            name="checkbox1"
                            defaultChecked={false}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log(event)}
                        />
                    </Box>
                    <Box component={'div'} className="checkbox_field">
                        <CheckBoxComponent
                            label="I would like to receive emails about upcoming events (these will include information on Regional Branch Events, Local Network Meetings, Student Webinars and BANT Webinars"
                            name="checkbox2"
                            defaultChecked={false}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log(event)}
                        />
                    </Box>
                    <Box component={'div'} className="checkbox_field">
                        <CheckBoxComponent
                            label=" I would like to receive recruitment emails from BANT (these will include voluntary and employed roles)"
                            name="checkbox3"
                            defaultChecked={false}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log(event)}
                        />
                    </Box>
                </Box>
                <Box component={'p'} className="lower_text">
                    BANT will not share your details with third parties without first seeking your explicit consent.
                    We will from time to time seek to reconfirm your consent and check that the information we hold is accurate and up to date.
                    You can withdraw your consent to the information below by accessing your Account Details on the BANT website and making the desired changes.
                    Alternatively, you can email Melanie de Grooth at <a href="mailto:generalmanager@bant.org.uk">generalmanager@bant.org.uk</a>.
                    You can view the BANT Privacy Policy on our website <a href="/privacy-policy/">here</a>
                </Box>
            </PersonalFourthComponentStyle>
        </EditMemberCommonLayout>
    );
}
export default PersonalFourthComponent;