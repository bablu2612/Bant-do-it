import styled from 'styled-components';

const AdminInfoMainStyle = styled.div`
    .first_container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        .field_section {
            width: 100%;
            max-width: 600px;

            .text_component_main {
                margin-bottom: 12px;
                .input_field{
                    width: 100%;
                }
            }
        }
    }
    .second_container {
        .reason_exemption {
            margin-bottom: 4px;
            color:var(--black);
        }
    }

`;

export const AdminFirstComponentStyle = styled.div`
    .admin_checkboxes {
        display: flex;
        justify-content: space-around;
    }
    .fields  {
        display: flex;
        column-gap: 30px;

        .first_fields ,.second_fields {
            width: 100%;
            .text_component_main {
                margin-bottom: 12px;
                .input_field{
                    width: 100%;
                }
            }
        }
    }
`;


export const AdminSecondComponentStyle = styled(AdminInfoMainStyle)`

`;

export const AdminThirdComponentStyle = styled(AdminInfoMainStyle)`
    .radio_section {
        .radios_component_main {
            &:not(:first-child){
                margin-top:10px;
            }
        }
    }
`;

export const AdminFourthComponentStyle = styled.div`
    label {
        color:var(--black);
        margin-bottom: 4px;
        font-weight: 600;
    }
    .fourth_first_section {
        textarea {
            width: 100%;
        }
        .modified_section, .actions_section  {
            display: flex;
            column-gap: 10px;
            
            p {
                font-size: 16px;
                font-weight: 600;
            }
        }
    }
    .fourth_second_section {
        .table_container {
            margin: 0 auto;
            width: 100%;
            max-width: 700px;
            padding: 10px;

            .field_section {
                display: flex;
                align-items: center;
                gap:30px;

                .firstSection {
                    text-align: right;
                    width:100%;
                    max-width: 400px;
                    &.select {
                        text-align: left;
                    }
                }
                .secondSection {
                    width: 100%;
                    max-width: 100px;
                    text-align: center;
                    &.complete {
                        padding-top: 25px;
                    }
                }
            }
        }
    }

`;

export default AdminInfoMainStyle;