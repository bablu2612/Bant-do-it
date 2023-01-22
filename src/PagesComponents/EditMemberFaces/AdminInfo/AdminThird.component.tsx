import { Box, InputLabel } from '@mui/material';
import * as React from 'react';
import EditMemberCommonLayout from '../EditMemberFaces.constent';
import _ from 'lodash';
import CheckBoxComponent from 'components/inputs/CheckboxComponent';
import { AdminThirdComponentStyle } from './adminInfo.style';
import RadioComponent from 'components/inputs/RadioComponent';
import TextFieldComp from 'components/inputs/TextFieldComponent';

const AdminThirdComponent: React.FC = () => {
    return (
        <>
            <EditMemberCommonLayout heading='Member Complaints and Claims'>
                <AdminThirdComponentStyle>
                    <Box className="radio_section">
                        <RadioComponent
                            name='professional_complaint'
                            label='Have there been any professional complaints or disciplinary findings against you in relation to your work as a Nutritional Therapist within the last 7 years?'
                            options={[
                                { label: "Yes", value: "yes" },
                                { label: "No", value: "no" }
                            ]}
                            value="yes"
                            onChange={() => console.log('hello')}
                        />
                        <RadioComponent
                            name='claim_upheld'
                            label='Have there been any claims upheld against your Professional Indemnity Insurance in relation to your work as a Nutritional Therapist within the last 7 years?'
                            options={[
                                { label: "Yes", value: "yes" },
                                { label: "No", value: "no" }
                            ]}
                            value="no"
                            onChange={() => console.log('hello')}
                        />
                    </Box>
                </AdminThirdComponentStyle>
            </EditMemberCommonLayout>
            <EditMemberCommonLayout heading='CPD Information'>
                <AdminThirdComponentStyle>
                    <Box className="first_container">
                        <Box className="checkbox_section">
                            {_.map(["CPD Hours Completed", "CPD Exemption", "CPD Audit Completed"], (row: string) => (
                                <CheckBoxComponent
                                    key={row}
                                    name={_.replace(_.lowerCase(row), ' ', '_')}
                                    defaultChecked={false}
                                    onChange={() => console.log('hello')}
                                    label={row}
                                />
                            ))}
                        </Box>
                        <Box className="field_section">
                            <TextFieldComp
                                name="cpd_exemption_expiry"
                                readOnly={true}
                                label='CPD Exemption Expiry'
                                onChange={() => console.log('text')}
                            />
                            <TextFieldComp
                                readOnly={true}
                                name="cpd_audit_date"
                                label='CPD Audit Date'
                                onChange={() => console.log('text')}
                            />
                            <TextFieldComp
                                name="cpd_next_audit_date"
                                readOnly={true}
                                label='Next CPD Audit Date'
                                onChange={() => console.log('text')}
                            />
                        </Box>
                    </Box>
                    <Box className="second_container">
                        <InputLabel className='reason_exemption'>Reason for CNHC Exemption</InputLabel>
                        <textarea rows={8} style={{ width: "100%" }} />
                    </Box>
                </AdminThirdComponentStyle>
            </EditMemberCommonLayout>
        </>
    );
}
export default AdminThirdComponent;