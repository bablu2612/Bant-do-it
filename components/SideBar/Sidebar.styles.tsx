import styled from "styled-components";

const SidebarStyles = styled.div`
  
  #sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding-top: 60px;
    width: 230px;
    overflow: auto;
    z-index: 10;
    -webkit-box-shadow: 0 8px 17px rgb(0 0 0 / 20%);
    box-shadow: 0 8px 17px rgb(0 0 0 / 20%);
    transition: transform 0.3s ease-in-out;
    background: #1D619F;
    ul {
      padding-top: 10px;
      li a {
        color: #fff;
        padding: 12px 25px;
        position: relative;
        font-size: 14px;
        -webkit-transition: 0.3s ease all;
        transition: 0.3s ease all;
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 0 10px 10px 0;
        margin: 0 10px 0 0;
        font-weight: 700;
        &:hover {
          background: rgba(231, 227, 252, 0.04);
        }
      }
    }

    li.active a,
    li.active a:hover {
      box-shadow: rgb(58 53 65 / 42%) 0px 4px 8px -4px;
      /* background: var(--site-gradient); */
      background: rgb(235,240,244);
background: linear-gradient(90deg, rgba(235,240,244,1) 0%, rgba(166,192,216,1) 50%, rgba(98,145,187,1) 100%);
      color: var(--purple);
      /* background: rgb(178, 157, 191);
      background: -moz-linear-gradient(
        90deg,
        rgba(178, 157, 191, 1) 0%,
        rgba(87, 43, 115, 1) 100%
      );
      background: -webkit-linear-gradient(
        90deg,
        rgba(178, 157, 191, 1) 0%,
        rgba(87, 43, 115, 1) 100%
      );
      background: linear-gradient(
        90deg,
        rgba(178, 157, 191, 1) 0%,
        rgba(87, 43, 115, 1) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#b29dbf",endColorstr="#572b73",GradientType=1); */
    }
  }
`;

export default SidebarStyles;
