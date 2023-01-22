import { Box } from '@mui/material';
import * as React from 'react';

export const TabsListConstent: string[] = [
    "Personal Info", "Qualification Info", "Practice Info", "Admin Info", "Member History"
];
const EditMemberCommonLayout: React.FC<{ children: React.ReactNode, heading: string }> = ({ children, heading }) => {
    return (
        <Box component="div" className='editMember_main_layout'>
            <Box component="h2" className='main_heading'>{heading}</Box>
            <Box component="div" className="innrer_section">{children}</Box>
        </Box>
    )
}

export const QualificationCostents = {
    theadValues: [
        { label: "Course", value: "course" },
        { label: "Institute", value: "institute" },
        { label: "Start Date", value: "start_date" },
        { label: "Graduation Date", value: "graduation_date" },
    ]

};

export const PracticeInfoConstents = {
    selectOptions: [
        { label: "Acupuncture", value: "1" },
        { label: "Aromatherapist and Massage Therapis", value: "27" },
        { label: "BANT Registered Nutritionist®", value: "30" },
        { label: "Chiropodist", value: "2" },
        { label: "Chiropractor", value: "3" },
        { label: "Counsellor", value: "4" },
        { label: "Dental Hygienist", value: "5" },
        { label: "Dental Nurse", value: "6" },
        { label: "Dentist", value: "7" },
        { label: "Dietician", value: "8" },
        { label: "Doctor", value: "28" },
        { label: "Homeopath", value: "9" },
        { label: "Hypnotherapist", value: "10" },
        { label: "Medical Practitioner", value: "11" },
        { label: "Nurse/Midwife", value: "12" },
        { label: "Nutrition Science (BSc Hons or higher)", value: "29" },
        { label: "Nutritional Therapy", value: "23" },

        { label: "Nutritionist", value: "26" },
        { label: "Occupational Therapist", value: "13" },
        { label: "Optician", value: "14" },
        { label: "Orthodontist", value: "15" },
        { label: "Osteopath", value: "16" },
        { label: "Pharmacist", value: "17" },
        { label: "Physiotherapist", value: "18" },
        { label: "Psychotherapist", value: "19" },

        { label: "Reflexology", value: "20" },
        { label: "Research Associate", value: "25" },
        { label: "Research Physician", value: "24" },
        { label: "Sports Therapy", value: "21" },
        { label: "Yoga Therapy", value: "22" },
    ],
    tickLabelText: "Tick the options that apply",
    checkbox_contents_first: [
        { name: "1st", label: "Online Consultations" },
        { name: "2nd", label: "In Person Consultations" },
        { name: "3rd", label: "Talks/Workshops/Academia" }
    ],
    checkbox_contents_second: { name: "3rd", label: "Student Observation Permitted" }
}

export const AdminInfoConstents = {
    firstComponent: {
        checkbox_first: [
            { name: "0n_register", label: "On Register" },
            { name: "on_web", label: "On Web" },
            { name: "insurance", label: "Insurance" }
        ],
        checkbox_second: [
            { name: "seminar", label: "Seminar" },
            { name: "attending_agm", label: "Attending AGM" },
            { name: "lnc", label: "L.N.C." }
        ],
        memberhipOptions: [
            { label: "Application Pending", value: "APPLICATION_PENDING" },
            { label: "Membership Pending", value: "MEMBERSHIP_PENDING" },
            { label: "Renewal Due", value: "RENEWAL_DUE" },
            { label: "Payment Due", value: "PAYMENT_DUE" },
            { label: "Inactive", value: "INACTIVE" },
            { label: "Active", value: "ACTIVE" },
            { label: "Upgrade Pending", value: "UPGRADE_PENDING" },
        ]
    }
}


export default EditMemberCommonLayout;