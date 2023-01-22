import { Box, InputLabel } from '@mui/material';
import * as React from 'react';
import EditMemberCommonLayout from '../EditMemberFaces.constent';
import _ from 'lodash';
import CheckBoxComponent from 'components/inputs/CheckboxComponent';
import TextFieldComp from 'components/inputs/TextFieldComponent';
import { AdminSecondComponentStyle } from './adminInfo.style';

const AdminSecondComponent: React.FC = () => {
    return (
        <>
            <EditMemberCommonLayout heading='Member Application'>
                <AdminSecondComponentStyle>
                    <Box component={'div'}>
                        This member does not have an application in progress
                    </Box>
                </AdminSecondComponentStyle>
            </EditMemberCommonLayout>
            <EditMemberCommonLayout heading='Member Registration'>
                <AdminSecondComponentStyle>
                    <Box className="first_container">
                        <Box className="checkbox_section">
                            {_.map(["BANTCC", "NTC", "CNHC", "CNHC Exemption"], (row: string) => (
                                <CheckBoxComponent
                                    key={row}
                                    name={_.replace(row, '_', '')}
                                    defaultChecked={false}
                                    onChange={() => console.log('hello')}
                                    label={row}
                                />
                            ))}
                        </Box>
                        <Box className="field_section">
                            <TextFieldComp
                                name="exemption_expiry"
                                label='CNHC Exemption Expiry'
                                onChange={() => console.log('text')}
                            />
                            <TextFieldComp
                                readOnly={true}
                                name="reg_number"
                                label='CNHC Reg. Number'
                                onChange={() => console.log('text')}
                            />
                            <TextFieldComp
                                name="reg_expiry"
                                label='CNHC Reg. Expiry'
                                onChange={() => console.log('text')}
                            />
                        </Box>
                    </Box>
                    <Box className="second_container">
                        <InputLabel className='reason_exemption'>Reason for CNHC Exemption</InputLabel>
                        <textarea rows={8} style={{ width: "100%" }} />
                    </Box>
                </AdminSecondComponentStyle>
            </EditMemberCommonLayout>
        </>
    );
}
export default AdminSecondComponent;