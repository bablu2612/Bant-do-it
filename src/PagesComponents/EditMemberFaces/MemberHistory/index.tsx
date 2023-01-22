import * as React from 'react';
import MemberHistoryStyle from './memberHistory.style';
import MemberHistoryFirstComponent from './MemberHistoryFirst.component';

const MemberHistoryComponent: React.FC = () => {

    return (
        <MemberHistoryStyle>
            <MemberHistoryFirstComponent />
        </MemberHistoryStyle>
    );
}
export default MemberHistoryComponent;