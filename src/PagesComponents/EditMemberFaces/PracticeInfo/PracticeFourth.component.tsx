import React, { useState } from "react";
import { Add, Delete, Edit } from "@mui/icons-material";
import ButtonComponent from "components/inputs/ButtonComponent";
import TableComponent from "components/inputs/TableComponent";
import CreatePracticePopup from "./CreatePracticePopup";
import EditMemberCommonLayout from "../EditMemberFaces.constent";
import { PracticeInfoFouthStyle } from "./practiceInfo.style";

const PracticeFourthComponent: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <EditMemberCommonLayout
        heading={`
            Further Information (Use this section to provide additional info about yourself, 
            your practice and any other appropriate info - limit 3000 characters)
        `}
      >
        <PracticeInfoFouthStyle>
          <textarea
            rows={10}
            defaultValue="I give busy, hard-working women clear and sustainable health plans so they can find a renewed radiance and vitality."
            // cols={90}
            style={{ width: "100%" }}
          />
        </PracticeInfoFouthStyle>
      </EditMemberCommonLayout>

      <EditMemberCommonLayout heading="Practices">
        <PracticeInfoFouthStyle>
          <TableComponent
            theadValues={[
              { label: "Practice", value: "practice" },
              { label: "Region", value: "region" },
              { label: "Post Code	", value: "post_code" },
              { label: "Contact", value: "contact" },
              { label: "E-Contact", value: "e_contact" },
              { label: "Edit", value: "action" },
            ]}
            rowData={[
              {
                id: 1,
                practice: (
                  <div>
                    <strong>Rachel Cruickshank </strong>
                    <br />
                    Neals Yard
                    <br />
                    27 King Street
                    <br />
                    Manchester
                    <br />
                    Manchester
                    <br />
                    M2 6AF
                    <br />
                  </div>
                ),
                region: "North",
                post_code: "M2 6AF",
                contact: "07751694508",
                e_contact: (
                  <div>
                    <a href="mailto:rachel@thebodynatural.co.uk">
                      rachel@thebodynatural.co.uk
                    </a>
                    <br />
                    {/* <img src="/bant/jsp/images/icons/web.png" /> */}
                    <a href="http://www.thebodynatural.co.uk" target="social">
                      www.thebodynatural.co.uk
                    </a>
                    <br />
                    {/* <img src="/bant/jsp/images/icons/facebook.png" alt="Facebook" /> */}
                    <a
                      href="http://www.facebook.com/The-Body-Natural-1515149228565278/"
                      target="social"
                    >
                      http://www.facebook.com/The-Body-Natural-1515149228565278/
                    </a>
                    &nbsp;
                    <br />
                  </div>
                ),
                action: (
                  <div className="tables_actions">
                    <ButtonComponent
                      classes="edit_action"
                      onClick={() => alert("hello")}
                    >
                      <Edit /> Edit
                    </ButtonComponent>
                    <ButtonComponent
                      classes="delete_action"
                      onClick={() => alert("hello")}
                    >
                      <Delete /> Delete
                    </ButtonComponent>
                  </div>
                ),
              },
            ]}
          />
          <ButtonComponent classes="edit_action" onClick={() => setOpen(true)}>
            <Add /> New Practice
          </ButtonComponent>
          <CreatePracticePopup open={open} setOpen={setOpen} />
        </PracticeInfoFouthStyle>
      </EditMemberCommonLayout>
    </>
  );
};
export default PracticeFourthComponent;
