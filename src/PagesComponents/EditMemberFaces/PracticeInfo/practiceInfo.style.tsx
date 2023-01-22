import styled from 'styled-components';

const PracticeInfoMainStyle = styled.div`


`;

export const PracticeInfoFirstStyle = styled.div`
    display: flex;
    column-gap: 40px;
    .profile_container  {
        min-width: 230px;
        .change_photo_button {
            width: 100%;
            max-width: 140px;
            margin: 0 auto;
        }
    }
    .profileDeatil_content  {
        display: flex;
        flex-wrap: wrap;
        row-gap: 20px;
        .profile_content_checkbox {
            .checkboxes {
                display: flex;
            }
            .text_section {
                p {
                    margin-left: 30px;
                    font-size: 13px;
                    font-weight: 600;
                }
            }
        }
    }
`;

export const PracticeInfoSecondStyle = styled.div`
&.second_section_main {
    display: flex;
    
    .checkbox_section {
        label {
            .checkbox_label {
                font-size: 0.9rem;
                font-weight: 600;
                /* white-space: nowrap; */
            }
        }
    }
}

`;

export const PracticeInfoThirdStyle = styled.div`


`;

export const PracticeInfoFouthStyle = styled.div`
    textarea {
        font-size: 14px;
    }
    table {
        tr {
            th {

            }
            td {
                .tables_actions {
                    svg {
                        width:20px;
                        height: 20px;
                    }
                    button {
                        display: flex;
                        align-items: center;
                        column-gap: 4px;
                        &:not(:last-child){
                            margin-top: 0;
                        }
                    }
                }
            }
        }
    }

`;

export default PracticeInfoMainStyle;