import { Box } from '@mui/material';
import ButtonComponent from 'components/inputs/ButtonComponent';
import TextFieldComp from 'components/inputs/TextFieldComponent';
import * as React from 'react';
import EditMemberCommonLayout from '../EditMemberFaces.constent';
import { PersonalInfoSecondSectionStyle } from './personalInfo.style';

const PersonalSecondComponent: React.FC = () => {

    // const InputArray = [
    //     {name:"",label:"", onchange:()=>alert(), onBlur:()=>}
    // ]

    return (
        <EditMemberCommonLayout heading='Contact Address'>
            <PersonalInfoSecondSectionStyle className="personal_info_second_section">
                <Box component={'h3'}>You must use the post code search function to enter your address.</Box>
                <Box component={'div'} className="enter_address">
                    <TextFieldComp onChange={(e) => console.log(e)} name="select" label='Post Code Lookup ' />
                    <ButtonComponent onClick={() => alert()} >Enter Address</ButtonComponent>
                </Box>
                <Box component={'div'} className="form_section">
                    <Box className="field_section">
                        <TextFieldComp name="organisation" label="Organisation" onChange={(e) => console.log('helo')} onBlur={(e) => console.log('hello')} />
                        <TextFieldComp name="property_name" label="Property Name" onChange={(e) => console.log('helo')} onBlur={(e) => console.log('hello')} />
                    </Box>
                    <Box className="field_section">
                        <TextFieldComp name="street" label="Street" onChange={(e) => console.log('helo')} onBlur={(e) => console.log('hello')} />
                        <TextFieldComp name="town" label="Town" onChange={(e) => console.log('helo')} onBlur={(e) => console.log('hello')} />
                    </Box>
                    <Box className="field_section">
                        <TextFieldComp name="local_authority" label="Local Authority" onChange={(e) => console.log('helo')} onBlur={(e) => console.log('hello')} />
                        <TextFieldComp name="county" label="County" onChange={(e) => console.log('helo')} onBlur={(e) => console.log('hello')} />
                    </Box>
                    <Box className="field_section">
                        <TextFieldComp name="post_code" label="Post Code" onChange={(e) => console.log('helo')} onBlur={(e) => console.log('hello')} />
                        <TextFieldComp name="bant_region" label="BANT Region" onChange={(e) => console.log('helo')} onBlur={(e) => console.log('hello')} />
                    </Box>
                </Box>
            </PersonalInfoSecondSectionStyle>
        </EditMemberCommonLayout>
    );
}
export default PersonalSecondComponent;