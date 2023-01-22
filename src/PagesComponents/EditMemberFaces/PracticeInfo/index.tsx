import * as React from 'react';
import PracticeInfoMainStyle from './practiceInfo.style';
import PracticeFirstComponent from './PracticeFirst.component';
import PracticeSecondComponent from './PracticeSecond.component';
import PracticeThirdComponent from './PracticeThird.component';
import PracticeFourthComponent from './PracticeFourth.component';


const PracticeInfoComponent: React.FC = () => {

    return (
        <PracticeInfoMainStyle>
            <PracticeFirstComponent />
            <PracticeSecondComponent />
            <PracticeThirdComponent />
            <PracticeFourthComponent />
        </PracticeInfoMainStyle>
    );
}
export default PracticeInfoComponent;
