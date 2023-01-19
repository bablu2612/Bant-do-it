import withAuth from "@/Auth/withAuth";
import LayoutWithLogin from "@/Layout";
import AdminInfoComponent from "@/PagesComponents/EditMemberFaces/AdminInfo";
import { TabsListConstent } from "@/PagesComponents/EditMemberFaces/EditMemberFaces.constent";
import MemberHistoryComponent from "@/PagesComponents/EditMemberFaces/MemberHistory";
import PersonalInfoComponent from "@/PagesComponents/EditMemberFaces/PersonalInfo";
import PracticeInfoComponent from "@/PagesComponents/EditMemberFaces/PracticeInfo";
import QualificationInfoComponent from "@/PagesComponents/EditMemberFaces/QualificationInfo";
import { Box } from "@mui/material";
import TabComponent from "components/inputs/TabComponent";
import { useState } from "react";



const EditMemberFaces: React.FC = () => {

    const [currentTab, setCurrentTab] = useState<string>("personal_info");

    function _handleTabChange(value: string) {
        setCurrentTab(value);
    }

    function _currentComponent() {
        if (currentTab) {
            switch (currentTab) {
                case "personal_info":
                    return <PersonalInfoComponent />
                case "admin_info":
                    return <AdminInfoComponent />;
                case "member_history":
                    return <MemberHistoryComponent />
                case "practice_info":
                    return <PracticeInfoComponent />
                case "qualification_info":
                    return <QualificationInfoComponent />
            }
        }
    }

    return (
        <LayoutWithLogin>
            <TabComponent tabslist={TabsListConstent} currentTab={currentTab} onTabChange={(value: string) => _handleTabChange(value)}>
                {_currentComponent()}
            </TabComponent>
        </LayoutWithLogin>
    );
}
export default withAuth(EditMemberFaces);