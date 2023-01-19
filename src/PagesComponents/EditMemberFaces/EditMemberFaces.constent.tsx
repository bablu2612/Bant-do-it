import { Box } from '@mui/material';
import * as React from 'react';

export const TabsListConstent: string[] = [
    "Personal Info", "Qualification Info", "Practice Info", "Admin Info", "Member History"
];


const EditMemberCommonLayout: React.FC<{ children: React.ReactNode, heading: string }> = ({ children, heading }) => {
    return (
        <Box component="div" className='editMember_main_layout'>
            <Box component="h2">{heading}</Box>
            <Box component="div" className="innrer_section">{children}</Box>
        </Box>
    )
}

export default EditMemberCommonLayout;