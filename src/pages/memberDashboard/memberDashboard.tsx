import styled from "styled-components";

const MemberDashboardStyle = styled.div`
  .icons_pics {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    background: #fff;
    padding: 50px 0;
    a {
      display: flex;
      padding: 60px 40px;
      background: #fff;
      box-shadow: 0 12px 24px rgb(47 65 129 / 10%);
      border-radius: 10px;
      text-align: center;
      max-width: calc(100% / 5);
      width: 100%;
      justify-content: center;
      &:hover img {
    transform: scale(102%);
}
img {
    transition: 0.3s ease all;
}
    } 
    h6 {
    font-family: var(--common-font);
    font-size: 18px;
    line-height: 30px;
    color: var(--purple);
    margin-top: 20px;
    font-weight: 400;
    text-transform: uppercase;
}   
  } 
 
  .box_mem {
    background: #fff;
    padding: 40px;
    width: 100%;
    .pic_table {
      display: flex;
      .pic {
        max-width: 350px;
        width: 100%;
      }
    }
    .d_Flex {
      span {
        display: flex;
        align-items: center;
        gap: 10px;
        svg {
          color: #12a900;
        }
      }
    }
    .buttons {
      display: flex;
      gap: 10px;
    }
  }
  .avatar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .content_table {
    width: 100%;
    max-width: calc(100% - 300px);  
}
.edit_print {
    margin-top: 30px;
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    button {
    width: 100%;
    background: var(--purple);
    color: #fff;
    gap: 10px;
    max-width: max-content;
}
}
  .table-reponsive { 
    width: 100%;
    padding: 10px;
    background: #fff;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 12px 24px rgb(47 65 129 / 10%);
    tr:not(:last-child) {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0,0,0,.12);
}
}

    table {
        border-collapse: collapse;
      width: 100%;
      thead {
        border-top: 1px solid #e9ebec;
        border-bottom: 1px solid #e9ebec;
        color: #fff;
        border-radius: 5px 5px 0 0;
        th {
          padding: 10px 15px;
          font-weight: 600;
          font-size: 14px;
          background: var(--purple);
          text-align: left;
        }
        th:first-child {
          border-radius: 5px 0 0 0;
        }
        th:last-child {
          border-radius: 0 5px 5px 0;
        }
      }
      tr {
        td {
          padding: 10px 15px;
          font-weight: 100;
          font-size: 14px;
        }
      }
    } 

    .Max_box {
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
        ul {
            display: flex;
            align-items: center;
            max-width: calc(100% - 600px);
            width: 100%;
            flex: 100%;
            justify-content: flex-end;
            gap: 10px;

            list-style: none;
             li {
                max-width: max-content;
                width: 100%;
                button {
                    max-width: 100%;
                    max-width: 100%;
                    display: flex;
                    font-weight: 400;
                    font-family: var(--common-font);
                    gap: 5px;
                }
                h4 {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--purple);
                }
                span a {
                    display: flex;
                    align-items: center;
                    padding: 10px 15px;
                    border-radius: 5px;
                    font-size: 14px;
                    font-weight: 600;
                    background: var(--purple);
                    color: #fff;

                }}
        }

        .form-group {  
                display: flex;
                align-items: center;
                gap: 10px; 
            select {
                max-width: 220px;
                width: 100%;
                border-radius: 5px;
                height: 40px;
                border: none;
                padding: 5px;
            }
        }
        .table-reponsive tr {
            td:first-child {
                color: #000;
                font-weight: 600;
            }
        }
}

.bx-main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: var(--LBlue);
    padding: 10px 20px;
    border-radius: 5px 5px 0 0;
}
.box_class {
    width: 100%;
    h4 {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--purple);
    font-size: 16px;
}
}
`;

export default MemberDashboardStyle;
