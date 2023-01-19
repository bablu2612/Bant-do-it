import { Button, InputLabel } from "@mui/material";
import React, { useState } from "react";
import TextFieldComp from "components/inputs/TextFieldComponent";

const AccountFaces = () => {
  const [personal, setPersonal] = useState(true);

  return (
    <div className="acountfacesNew">
      <Button
        onClick={() => {
          setPersonal(true);
        }}
      >
        PERSONAL INFO
      </Button>
      <Button
        onClick={() => {
          setPersonal(false);
        }}
      >
        QUALIFICATION INFO
      </Button>
      {personal ? (
        <div className="personal_main">
          <div className="head">
            <span>
              Primary Details (The information on this page will NOT be
              displayed publicly)
            </span>
          </div>
          <div className="panelBody">
            <div className="Row">
              <div>
                <TextFieldComp
                  id="name_field"
                  name="memberName"
                  onChange={() => console.log("hello")}
                  label="Member No."
                />
              </div>
              <div>
                <InputLabel>Membership Type</InputLabel>
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <Button>Update Member Default Settings</Button>
              </div>
            </div>
            <div className="Row">
              <div>
                <TextFieldComp
                  id="name_field"
                  name="firstName"
                  onChange={() => console.log("hello")}
                  label="First Name"
                />
              </div>
              <div>
                <TextFieldComp
                  id="name_field"
                  name="lastName"
                  onChange={() => console.log("hello")}
                  label="Last Name"
                />
              </div>
            </div>
            <div className="Row">
              <div>"Date*********************"</div>
              <div>
                <InputLabel>Gender</InputLabel>
                <select name="cars" id="cars">
                  <option value="volvo">Male</option>
                  <option value="saab">Female</option>
                </select>
              </div>
            </div>
            <div className="Row">
              <TextFieldComp
                id="name_field"
                name="email"
                onChange={() => console.log("hello")}
                label="Email"
              />
            </div>
          </div>
          <div className="head">
            <span>Contact Address</span>
          </div>
          <div className="panelBody">
            You must use the post code search function to enter your address.
            <InputLabel>Post Code Lookup</InputLabel>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <Button>Enter Address</Button>
            <TextFieldComp
              id="name_field"
              name="organisation"
              onChange={() => console.log("hello")}
              label="Organisation"
            />
            <TextFieldComp
              id="name_field"
              name="propertyName"
              onChange={() => console.log("hello")}
              label="Property Name"
            />
            <TextFieldComp
              id="name_field"
              name="street"
              onChange={() => console.log("hello")}
              label="Street"
            />
            <TextFieldComp
              id="name_field"
              name="town"
              onChange={() => console.log("hello")}
              label="Town"
            />
            <TextFieldComp
              id="name_field"
              name="localauthority"
              onChange={() => console.log("hello")}
              label="Local Authority"
            />
            <TextFieldComp
              id="name_field"
              name="county"
              onChange={() => console.log("hello")}
              label="County"
            />
            <TextFieldComp
              id="name_field"
              name="postcode"
              onChange={() => console.log("hello")}
              label="Post Code"
            />
            <InputLabel>BANT Region</InputLabel>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="head">
            <span>Contact Telephone Numbers</span>
          </div>
          <div className="panelBody">
            <TextFieldComp
              id="name_field"
              name="home_telephpne"
              onChange={() => console.log("hello")}
              label="Telephone (Home)"
            />
            <TextFieldComp
              id="name_field"
              name="home_hello"
              onChange={() => console.log("hello")}
              label="Telephone (Work)"
            />
            <TextFieldComp
              id="name_field"
              name="home_mobile"
              onChange={() => console.log("hello")}
              label="Telephone (Mobile)"
            />
          </div>
          <div className="head">
            <span>Correspondence Options</span>
          </div>
          <div className="panelBody">
            <span>
              BANT would like to keep you updated with the latest news, upcoming
              events (regional and local networks as well as student and general
              webinars) and recruitment opportunities. Please use the tick boxes
              below to give your consent to receiving each marketing
              communication via email.
            </span>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">
              I would like to receive the bi-monthly eNews email from BANT
            </label>
            <br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2">
              I would like to receive emails about upcoming events (these will
              include information on Regional Branch Events, Local Network
              Meetings, Student Webinars and BANT Webinars
            </label>
            <br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3">
              I would like to receive recruitment emails from BANT (these will
              include voluntary and employed roles)
            </label>
            <br />
            <br></br>
            <span>
              BANT will not share your details with third parties without first
              seeking your explicit consent. We will from time to time seek to
              reconfirm your consent and check that the information we hold is
              accurate and up to date. You can withdraw your consent to the
              information below by accessing your Account Details on the BANT
              website and making the desired changes. Alternatively, you can
              email Melanie de Grooth at{" "}
              <a href="generalmanager@bant.org.uk.">
                generalmanager@bant.org.uk.
              </a>
              You can view the BANT Privacy Policy on our website{" "}
              <a href="https://bant.org.uk/privacy-policy/">here</a>
            </span>
          </div>
          <Button>Save</Button>
          <Button>cancel</Button>
        </div>
      ) : (
        <div className="qualification_main">
          <div className="head">Qualifications</div>
          <div className="panelBody">
            <span>
              Here are your currently listed qualifications. To add new
              qualifications or make amendments, please contact the BANT
              administration team.
            </span>
            <table>
              <th>Course</th>
              <th>Institute</th>
              <th>Start Date</th>
              <th>Graduation Date</th>
              <th>Edit</th>
            </table>
          </div>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </div>
      )}
    </div>
  );
};

export default AccountFaces;
