import React from "react";
import { Button } from "@mui/material";
import {
  Done,
  Person2,
  Print,
  WatchLaterOutlined,
  Search,
  Add,
  InsertChart,
  Facebook,
  MedicalServices,
} from "@mui/icons-material";
import Image from "next/image";

const MemberDashboard = () => {
  const data = [
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/pph.png",
      tittle: "PP Handbook",
      href: "https://bant.org.uk/bant-professional-practice-handbook/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/cpd.png",
      tittle: "Events & Conferences",
      href: "https://bant.org.uk/bant/jsp/member/CPDandconferences.faces",
    },
    {
      image: "	https://bant.org.uk/bant/jsp/images/links_icon/membr-benfits.png",
      tittle: "Member Benefits",
      href: "https://bant.org.uk/member-benefits/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/database.png",
      tittle: "Natural Medicines DB",
      href: "https://naturalmedicines.therapeuticresearch.com/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/campaign.png",
      tittle: "FFYH Resources",
      href: "https://bant.org.uk/members-area/member-resources/ffyh-members/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/member-logo.png",
      tittle: "Member Logo ",
      href: "https://bant.org.uk/members-area/bant-member-logo/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/learning-zone.png",
      tittle: "Learning Zone",
      href: "https://bant.org.uk/members-area/science-and-education/#learning-zone",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/enews.png",
      tittle: "eNews",
      href: "https://bant.org.uk/category/enews/whats-new/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/classified.png",
      tittle: "Classifieds",
      href: "https://bant.org.uk/category/classified/",
    },
    {
      image: "https://bant.org.uk/bant/jsp/images/links_icon/eblast.png",
      tittle: "eblast Archive",
      href: "https://bant.org.uk/category/eblast/",
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
                        <span>
                          <Done />
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Next Renewal Date :</span>
                      </td>
                      <td>
                        <span>
                          <Done />
                          Jan 01, 2024
                        </span>
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
              <Person2 />
              Edit Personal/Practice <br /> Details
            </Button>
            <Button>
              <Print />
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
        <h4>
          <WatchLaterOutlined /> CPD Hours Summary
        </h4>
        <ul>
          <li>
            <span>
              <a href="#">
                <Search /> View Detailed CPD Log
              </a>
            </span>
          </li>
          <li>
            <Button>
              <Add /> Add New Activity
            </Button>
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
        <div>
          <div>
            <h4>
              <InsertChart />
              Recorded Analytics (since 14/11/2020)
            </h4>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>
                    <span>Filter by range</span>
                    <select name="cars" id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </th>
                  <th>
                    <div>
                      <span>Filter by date</span>
                      <input
                        type="checkbox"
                        id="datecheck"
                        name="datecheck"
                        value="true"
                      />
                    </div>
                    <span>From date</span>
                    <input type="date" id="birthday" name="birthday"></input>
                    <span>To date</span>
                    <input type="date" id="birthday" name="birthday"></input>
                    <Button>Submit</Button>
                  </th>
                  <th></th>
                </tr>
                <tr>
                  <td colSpan={4}>
                    Below are the statistics for the traffic you've received
                    through the BANT website since 14/11/2020
                  </td>
                </tr>
                <tr>
                  <td>
                    <table>
                      <thead>
                        <th>Analytics Type</th>
                        <th>Hits</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Facebook />
                          </td>
                          <td>1</td>
                        </tr>
                        <tr>
                          <td>
                            <MedicalServices />
                          </td>
                          <td>10</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberDashboard;
