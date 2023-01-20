import styled from 'styled-components';

const PersonalInfoStyleMain = styled.div`
    .field_section  {
        display: flex;
        width: 100%;
        gap: 0 20px;    
        .text_component_main {
            width: 100%;
            /* margin-bottom: 10px; */

            label {
                margin-bottom: 0;
            }
            .input_field {
                width: 100%;
            }
        }
    }
`;

export const PersonalInfoFirstSectionStyle = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    row-gap: 18px;

    .field_section  {
        .input_or_button {
            width: 100%;
        }
    }

`;

export const PersonalInfoSecondSectionStyle = styled.div`
    h3 {
        margin-bottom: 20px;
    }
    .enter_address {

        display: flex;
        align-items: end;
        column-gap: 30px;
        margin-bottom: 18px;
        button {
            max-width: 200px;
            padding: 16px;
        }
    }
    .form_section {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        row-gap: 18px; 
    }
`;


export const PersonalThirdComponentStyle = styled.div`
    

`;

export const PersonalFourthComponentStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;

    .lower_text {
        font-size: 16px;
        line-height: 26px;
    }
    .upper_text {
        line-height: 24px;
    }
    .checkbox_section {
        padding-left: 13px;
    }

`;


export default PersonalInfoStyleMain;