import { Box } from '@mui/material';
import SelectComponent from 'components/inputs/SelectComponent';
import * as React from 'react';
import EditMemberCommonLayout, { AdminInfoConstents } from '../EditMemberFaces.constent';
import _ from 'lodash';
import CheckBoxComponent from 'components/inputs/CheckboxComponent';
import { AdminFirstComponentStyle } from './adminInfo.style';
import TextFieldComp from 'components/inputs/TextFieldComponent';

const { checkbox_first, checkbox_second, memberhipOptions } = AdminInfoConstents?.firstComponent;
const AdminFirstComponent: React.FC = () => {
    return (
        <>
            <EditMemberCommonLayout heading='Membership Preferences'>
                <AdminFirstComponentStyle>
                    <Box component={'div'} className="admin_checkboxes">
                        <Box component={'div'}>
                            {_.map(checkbox_first, (row: { label: string, name: string }) => (
                                <CheckBoxComponent
                                    key={row?.name}
                                    name={row?.name}
                                    defaultChecked={false}
                                    onChange={() => console.log('hello')}
                                    label={row?.label}
                                />
                            ))}
                        </Box>
                        <Box component={'div'}>
                            {_.map(checkbox_second, (row: { label: string, name: string }) => (
                                <CheckBoxComponent
                                    key={row?.name}
                                    name={row?.name}
                                    defaultChecked={false}
                                    onChange={() => console.log('hello')}
                                    label={row?.label}
                                />
                            ))}
                        </Box>
                    </Box>
                </AdminFirstComponentStyle>
            </EditMemberCommonLayout>
            <EditMemberCommonLayout heading='Membership Information'>
                <AdminFirstComponentStyle>
                    <Box component="div" className="fields">
                        <Box component={'div'} className="first_fields">
                            <TextFieldComp
                                name="joined_date"
                                label='Date Joined'
                                onChange={() => console.log('text')}
                            />
                            <TextFieldComp
                                name="renewal_date"
                                label='Renewal Date'
                                onChange={() => console.log('text')}
                            />
                            <TextFieldComp
                                name="graduation_date"
                                label='Graduation Date'
                                onChange={() => console.log('text')}
                            />

                            <SelectComponent
                                name="membership_status"
                                value={"INACTIVE"}
                                label='Membership Status'
                                options={memberhipOptions}
                                onChange={() => console.log('select')}
                            />
                        </Box>
                        <Box component={'div'} className="second_fields">
                            <TextFieldComp
                                type='number'
                                name="membership_fee"
                                label='Membership Fee'
                                onChange={() => console.log('text')}
                            />
                            <TextFieldComp
                                type='number'
                                name="registration_fee"
                                label='Registration Fee'
                                onChange={() => console.log('text')}
                            />
                            <TextFieldComp
                                type='number'
                                name="fee_adjustment"
                                label='Fee Adjustment'
                                onChange={() => console.log('text')}
                            />
                            <SelectComponent
                                name="renwal"
                                value="New"
                                label='New/Renewal                                '
                                options={[
                                    { label: "New", value: "New" },
                                    { label: "Renewal", value: "Renewal" }
                                ]}
                                onChange={() => console.log('select')}
                            />
                        </Box>
                    </Box>
                </AdminFirstComponentStyle>
            </EditMemberCommonLayout>
        </>
    );
}
export default AdminFirstComponent;