import { Box } from '@mui/material';
import ButtonComponent from 'components/inputs/ButtonComponent';
import _ from 'lodash';
import * as React from 'react';
import EditMemberCommonLayout from '../EditMemberFaces.constent';

const MemberHistoryFirstComponent: React.FC = () => {

    const BUTTONS = [
        "Member History", "Practice History", "Qualification History",
        "Address History", "Application Changes", "All Changes"
    ];

    return (
        <EditMemberCommonLayout heading='Member Audit History'>
            <Box className="auditButtons">
                {_.map(BUTTONS, (row: string) => (
                    <ButtonComponent key={row} onClick={() => alert(row)}>{row}</ButtonComponent>
                ))}
            </Box>
        </EditMemberCommonLayout >
    );
}
export default MemberHistoryFirstComponent;