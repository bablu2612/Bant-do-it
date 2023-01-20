import styled from 'styled-components';

const EditMemberFacesStyle = styled.div`
    /* .MuiTabPanel-root {
        padding:0;
    } */
    .editMember_main_layout {
        &:not(:first-child){
            padding-top: 24px;
        }
        width: 100%;
        max-width: 1090px;
        margin: 10px auto 0;

        h2 {
            padding: 9px 20px;
            font-size: 18px;
            color: #fff;
            background: var(--purple);
            font-family: var(--common-font);
            border-radius: 10px 10px 0 0px;
            border: 1px solid transparent;
        }

        .innrer_section {
            padding: 20px;
            border: 1px solid var(--purple);
        }
    }
    .actions_buttons {
        display: flex;
        width: 100%;
        max-width: calc(100%/4 - 15px);
        margin: 10px auto 0;
        gap: 20px;

        button {
            padding: 15px;
            font-size: 16px;
            font-weight: 600;
        }
    }

`;


export default EditMemberFacesStyle;