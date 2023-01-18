import * as React from "react";
import { Box } from "@mui/material";
import { PersonAdd, Groups, FindInPage, Home } from "@mui/icons-material";
import Link from "next/link";
import SidebarStyles from "./Sidebar.styles";
import { useRouter } from "next/router";
import _ from "lodash";

export default function SideBar() {
  const router = useRouter();

  const menuItems = [
    {
      multiHref: ["/", "/dashboard"],
      link: "/",
      title: "Homepage",
      icon: <Home />,
    },
    {
      multiHref: ["/memberSearch"],
      link: "/memberSearch",
      title: "Member Search",
      icon: <Groups />,
    },
    {
      multiHref: ["/applicationSearch"],
      link: "/applicationSearch",
      title: "Application Search",
      icon: <FindInPage />,
    },
    {
      multiHref: ["/createMember"],
      link: "/createMember",
      title: "Create Member",
      icon: <PersonAdd />,
    },
  ];

  return (
    <SidebarStyles>
      <Box id="sidebar" className="sidebar">
        <nav>
          <ul>
            {menuItems?.map((val, index) => {
              return (
                <li key={index} className={_.includes(val?.multiHref, router.pathname) ? "active" : "not-active"}>
                  <Link href={val?.link}>{val.icon} {val?.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Box>
    </SidebarStyles>
  );
}
