import styled from "styled-components";

const CpdAndConferencesStyles = styled.div`
  .form-bg {
    width: 100%;
    height: 100vh;
    padding: 100px;

    img.bg-pattern {
      width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: -1;
      opacity: 0.05;
      height: 100vh;
    }
    .form_memberSearch {
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
        padding: 20px 40px;
        border-bottom: 1px solid #ddd;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
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
  }

  .main_event {
    background: #fff;
    padding: 20px;
    .conf_event {
      h2 {
        margin-bottom: 10px;
      }
      p.sub-head {
        margin-bottom: 15px;
      }
    }
    .cpdform_main {
      padding: 0;
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

    .form_Group:not(:last-child) {
      margin-bottom: 25px;
    }

    .add_button button {
      align-items: center;
      display: flex;
      justify-content: center;
      margin-right: 0;
      margin-left: auto;
    }
    .add_button.d_Flex {
      align-items: center;
    }
    .guidence_link {
      color: var(--purple);
      font-weight: 700;
      text-decoration: underline;
    }
    .d_Flex.search_cstm {
      font-size: 16px;
      font-family: var(--common-font);
      margin-bottom: 20px;
      color: var(--purple);
      padding: 10px 20px;
      border-bottom: 1px solid #ddd;
      position: relative;
      justify-content: space-between;
      line-height: normal;
      align-items: center;
    }
    .d_Flex.CpD {
      padding: 0 20px;
    }
    p.sub-head a {
      color: var(--orange);
      text-decoration: underline;
    }
  }
  .cpdform_main.view_app {
    background: #fff;
  }
  .form_Group .form_Control {
    width: 100%;
    max-width: 100%;
    background: #fff;
  }
  label.MuiFormLabel-root {
    color: #000;
    font-size: 18px;
    margin-bottom: 10px;
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
  .cpdform_main {
    padding: 10px 40px;
    background: #f1f1f1;
    border-radius: 5px;
    margin: 20px auto;
    .form_Control {
      font-family: var(--common-font);
      margin-bottom: 20px;
      border-bottom: 1px solid #ddd;
      position: relative;
    }
  }
  .add_section {
    display: inline-flex;
    justify-content: center;
    margin: 0 auto 30px;
    width: 100%;
    button {
      background: var(--purple);
      color: #fff;
      font-family: var(--common-font);
      &:hover {
        background: var(--orange);
      }
    }
    button:nth-child(2) {
      margin: 0 10px;
      background: var(--orange);
    }
  }

  .cpdform_add_product_main {
    padding: 20px 30px;
    .main-bxImg .MuiInputBase-root:after,
    .main-bxImg .MuiInputBase-root:before {
      display: none;
    }
    .left-side-select {
      position: relative;
    }
    button.chose-btn {
      font-size: 16px;
      font-weight: 700;
      height: 100%;
      color: #fff;
      border: 0;
      border-radius: 5px;
      padding: 10px 30px;
      background-color: var(--purple);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      z-index: 1;
    }

    .main-bxImg {
      position: relative;
      padding: 10px 0 10px 40px;
      text-indent: 0px;
      .MuiInputBase-root {
        font-family: var(--common-font);
        font-weight: 600;
        padding-left: 6px;
      }
      &:before {
        content: "";
        background: #fff;
        width: 150px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
    }

    input.MuiInputBase-input {
        appearance: none;
        :before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99;
    }
    }
 
  }

`;
export default CpdAndConferencesStyles;
