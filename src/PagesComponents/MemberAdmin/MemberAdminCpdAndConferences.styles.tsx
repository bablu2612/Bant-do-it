import styled from "styled-components";

const MemberAdminStyles = styled.div`
 
 .member_admin {
    background: #fff;
    padding: 20px;
    
.div_bx {
    background: var(--LBlue); 
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px 1px rgb(0 0 0 / 5%); 
}
.div_bx:not(:last-child){
        margin: 0 auto 20px;
    }
}
.form_Control,
    .form_Group .MuiInputBase-colorPrimary {
      width: 100%;
      max-width: 100%;
    }
    .form_Group {  
      fieldset legend span,
      fieldset legend {
        display: none;
      }
      fieldset {
        top: 0;
      }
    }
     
    .form_Group:not(:last-child){
      margin-bottom: 25px;
    }
    .form_Control{
        &:before, &:after {
        display: none;
    }
        input.MuiInputBase-input {
    background: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    display: block;
}
 
    }
    .div_bx h2 {
    font-size: 20px;
    margin-bottom: 10px;
}
    .member_admin .div_bx:not(.top_box) {
        button.MuiButtonBase-root {
            background: var(--purple); 
            color: #fff; 
        }
            button:not(:last-child){
                margin-right: 15px;
            }
    } 
    
`;
export default MemberAdminStyles;
