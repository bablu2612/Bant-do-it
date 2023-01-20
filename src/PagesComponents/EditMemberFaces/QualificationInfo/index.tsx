import { Box } from '@mui/material';
import ButtonComponent from 'components/inputs/ButtonComponent';
import TableComponent from 'components/inputs/TableComponent';
import * as React from 'react';
import EditMemberCommonLayout, { QualificationCostents } from '../EditMemberFaces.constent';
import QualificationMainStyle from './qualificationInfo.style';
import EditIcon from '@mui/icons-material/Edit';

const { theadValues } = QualificationCostents;

const QualificationInfoComponent: React.FC = () => {

    const editButton = <ButtonComponent classes='edit_button' onClick={(event: React.SyntheticEvent<HTMLButtonElement>) => alert(event)}> <EditIcon /> Edit</ButtonComponent>;

    return (
        <>
            <EditMemberCommonLayout heading='Qualifications'>

                <QualificationMainStyle className='qualification_main_section'>
                    <Box component={'p'}>
                        Here are your currently listed qualifications. To add new qualifications or make amendments, please contact the BANT administration team.
                    </Box>
                    <TableComponent theadValues={[...theadValues, {
                        label: "Edit", value: "action"
                    }]} rowData={[
                        {
                            id: 1,
                            course: "BSc Nutritional Therapy  (Primary)",
                            institute: "University of West London (formerly Thames Valley University)",
                            start_date: "12/09/2013",
                            graduation_date: "20/10/2021",
                            action: editButton
                        }
                    ]} />

                    <ButtonComponent classes='new_qualification' type="button" onClick={() => alert()}>
                        <EditIcon /> <span>New Qualification</span>
                    </ButtonComponent>
                </QualificationMainStyle>

            </EditMemberCommonLayout>
            <Box component={"div"} className="actions_buttons">
                <ButtonComponent type="submit" onClick={() => alert()}>Save</ButtonComponent>
                <ButtonComponent onClick={() => alert()}>Cancel</ButtonComponent>
            </Box>
        </>

    );
}
export default QualificationInfoComponent;