import * as React from 'react';
import AdminFirstComponent from './AdminFirst.component';
import AdminFourthComponent from './AdminFourth.component';
import AdminSecondComponent from './AdminSecond.component';
import AdminThirdComponent from './AdminThird.component';

const AdminInfoComponent: React.FC = () => {

    return (
        <>
            <AdminFirstComponent />
            <AdminSecondComponent />
            <AdminThirdComponent />
            <AdminFourthComponent />
        </>
    );
}
export default AdminInfoComponent;