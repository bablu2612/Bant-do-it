import styled from "styled-components";

const MemberSearchStyles = styled.div`
  position: relative;
  z-index: 1;
  .form-bg {
    width: 100%;
    height: 100vh;
    padding: 100px;
    img.bg-pattern {
      opacity: 0.1;
    }
    .form_memberSearch{
      padding: 0 40px 40px;
    }
    .box-form {
      background: #ffff;
      padding: 0px;
      margin: 0 auto;
      border-radius: 10px;
      max-width: 40vw;
      h2 {
        font-size: 20px;
        font-family: var(--common-font);
        margin-bottom: 20px;
        color: var(--purple);
        padding: 40px 40px 20px;
        border-bottom: 1px solid #ddd;
        position: relative;
         &:before {
          content: "";
          position: absolute;
          left: 0;
          top: calc(50% + 8px);
          transform: translateY(-50%);
          width: 2px;
          height: 30px;
          background: var(--purple);
      }
        a {
          color: var(--pink);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      }
    }
    img.bg-pattern {
      width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: -1;
      opacity: 0.05;
      height: 100vh; 
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
    label.MuiFormLabel-root {
      color: #000;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .d_Flex {
      display: flex;
      flex-wrap: wrap;
      gap: 0 20px;
      .form_Group {
        width: 100%;
        max-width: calc(100% / 2 - 10px);
        flex: calc(100% / 2 - 10px);
      }
    }
  }
`;
export default MemberSearchStyles;
