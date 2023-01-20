import styled from 'styled-components';

const QualificationMainStyle = styled.div`
    &.qualification_main_section {
        p {
            font-size: 16px;
        }
        .table_container {
            margin-top: 24px;
        }
        button {
            svg {
                width: 20px;
                height: 20px;
            }
            &.edit_button {
                display: flex;
                align-items: center;
                gap: 5px;
            }
            &.new_qualification {

            }
        }
        
    }

`;

export default QualificationMainStyle;