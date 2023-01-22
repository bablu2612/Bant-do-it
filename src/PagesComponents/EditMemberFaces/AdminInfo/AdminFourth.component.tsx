import { Box, InputLabel } from '@mui/material';
import SelectComponent from 'components/inputs/SelectComponent';
import * as React from 'react';
import EditMemberCommonLayout from '../EditMemberFaces.constent';
import _ from 'lodash';
import { AdminFourthComponentStyle } from './adminInfo.style';

const FieldSection: React.FC<{ children: React.ReactNode }> = ({ children }) => <Box className="field_section">{children}</Box>;
const FirstRow: React.FC<{ children: React.ReactNode, classes?: string }> = ({ children, classes = "" }) => <Box className={`${classes} firstSection`}>{children}</Box >;
const SecondRow: React.FC<{ children: React.ReactNode, classes?: string }> = ({ children, classes = "" }) => <Box className={`${classes} secondSection`}>{children}</Box>;

const AdminFourthComponent: React.FC = () => {
    const [state, setState] = React.useState<{ label: string, value: string }[]>([{ label: "", value: "" }])
    React.useEffect(() => {
        let options = [];
        for (let i = 2011; i <= 2023; i++) {
            options.push({ label: String(i), value: String(i) })
        }
        setState(options);
    }, [])

    return (
        <EditMemberCommonLayout heading='Administrator Information'>
            <AdminFourthComponentStyle>
                <Box className="fourth_first_section">
                    <InputLabel className='admin_note'>Admin Note</InputLabel>
                    <textarea rows={8} />
                    <Box className="modified_section">
                        <Box component={'p'}>Last Modified</Box><Box component={'span'}>Sun, 1 Mar 2020 11:12:05</Box>
                    </Box>
                    <Box className="actions_section">
                        <Box component={'p'}>Actions</Box><a href="#">Print Certificate</a>
                    </Box>
                </Box>
                <Box className="fourth_second_section">
                    <InputLabel className='member_summery'>Member CPD Summary</InputLabel>
                    <Box className="table_container">
                        <FieldSection>
                            <FirstRow classes="select">
                                <SelectComponent
                                    name="cpd_year"
                                    value="2023"
                                    label='CPD year'
                                    options={state}
                                    onChange={() => console.log('select')}
                                />
                            </FirstRow>
                            <SecondRow classes="complete">Completed</SecondRow>
                        </FieldSection>
                        <FieldSection>
                            <FirstRow>Active</FirstRow><SecondRow>0.0</SecondRow>
                        </FieldSection>
                        <FieldSection>
                            <FirstRow>Self-directed</FirstRow><SecondRow>0.0</SecondRow>
                        </FieldSection>
                        <FieldSection>
                            <FirstRow>Promoting the Profession</FirstRow><SecondRow>0.0</SecondRow>
                        </FieldSection>
                        <FieldSection>
                            <FirstRow>Total (30.0 remaining)</FirstRow><SecondRow>0.0</SecondRow>
                        </FieldSection>
                    </Box>
                </Box>
            </AdminFourthComponentStyle>
        </EditMemberCommonLayout>
    );
}
export default AdminFourthComponent;