import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const MemberDashboard = () => {
  const data = [
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/pph.png",
      tittle: "PP Handbook",
      href: "https://bant.org.uk/bant-professional-practice-handbook/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/pph.png",
      tittle: "PP Handbook",
      href: "https://bant.org.uk/bant-professional-practice-handbook/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/pph.png",
      tittle: "PP Handbook",
      href: "https://bant.org.uk/bant-professional-practice-handbook/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/pph.png",
      tittle: "PP Handbook",
      href: "https://bant.org.uk/bant-professional-practice-handbook/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/pph.png",
      tittle: "PP Handbook",
      href: "https://bant.org.uk/bant-professional-practice-handbook/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/pph.png",
      tittle: "PP Handbook",
      href: "https://bant.org.uk/bant-professional-practice-handbook/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/pph.png",
      tittle: "PP Handbook",
      href: "https://bant.org.uk/bant-professional-practice-handbook/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/pph.png",
      tittle: "PP Handbook",
      href: "https://bant.org.uk/bant-professional-practice-handbook/",
    },
  ];
  return (
    <>
      <div className="memberMain">
        <div className="head">
          <span>My Dashboard</span>
        </div>
        <div className="row">
          <div>
            <div className="pic_table">
              <div className="pic">
                <div className="avatar">
                  <Image
                    height={100}
                    width={100}
                    src="	https://bant.org.uk/bant/content/images/members/no-avatar.png"
                    alt="avatar"
                  />
                </div>
                <div className="buttons">
                  <Button>Change Photo</Button>
                  <Button>Remove Photo</Button>
                </div>
              </div>
              <div className="table">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span>Member Number: </span>
                      </td>
                      <td>
                        <span>Membership Type:</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Membership Status: </span>
                      </td>
                      <td>
                        <span>Logo</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Next Renewal Date :</span>
                      </td>
                      <td>
                        <span>Logo</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div></div>
          </div>
          <div className="edit_print">
            <Button>
              Edit Personal/Practice <br /> Details
            </Button>
            <Button>
              Print Membership <br /> Certificate
            </Button>
          </div>
          <div className="icons_pics">
            {data?.map((val, index) => {
              return (
                <a key={index + 1} href={val?.href} target="_blank">
                  <div>
                    <h3>
                      <Image
                        height={100}
                        width={100}
                        src={val?.image}
                        alt="icon"
                      />
                    </h3>
                    <h6>{val?.tittle}</h6>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h4>Logo CPD Hours Summary</h4>
        <ul>
          <li>
            <span>
              <a href="#">Logo View Detailed CPD Log</a>
            </span>
          </li>
          <li>
            <Button>Logo Add New Activity</Button>
          </li>
        </ul>
        <table>
          <tr>
            <th>
              CPD year{" "}
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </th>
            <th>Completed</th>
          </tr>
          <tr>
            <td>Active</td>
            <td>0.0</td>
          </tr>
          <tr>
            <td>Self-directed</td>
            <td>0.0</td>
          </tr>
          <tr>
            <td>Promoting the Profession</td>
            <td>0.0</td>
          </tr>
          <tr>
            <td>Total (0.0 remaining)</td>
            <td>0.0</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default MemberDashboard;
