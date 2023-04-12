import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Navdata = () => {
  const history = useHistory();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }

    if (iscurrentState !== "Settings") {
      setIsSettings(false);
    }

    if (iscurrentState === "Widgets") {
      history.push("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
  }, [history, iscurrentState, isDashboard, isSettings]);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "ri-dashboard-2-line",
      link: "/dashboard",
      stateVariables: isDashboard,
      // click: function (e) {
      //   e.preventDefault();
      //   setIsDashboard(!isDashboard);
      //   setIscurrentState("Dashboard");
      //   updateIconSidebar(e);
      // },
      // subItems: [
      //   {
      //     id: "crm",
      //     label: "CRM",
      //     link: "/dashboard",
      //     parentId: "dashboard",
      //   },
      // ],
    },

    {
      id: "customer",
      label: "Customer",
      icon: "ri-dashboard-2-line",
      link: "/customer",
    }
    // {
    //   id: "settings",
    //   label: "Settings",
    //   icon: "ri-settings-2-line",
    //   link: "/#",
    //   stateVariables: isSettings,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsSettings(!isSettings);
    //     setIscurrentState("Settings");
    //     updateIconSidebar(e);
    //   },
    //   subItems: [
    //     {
    //       id: "company",
    //       label: "Companies",
    //       link: "/companies",
    //       parentId: "settings",
    //     },
    //     {
    //       id: "users",
    //       label: "Users",
    //       link: "/users",
    //       parentId: "settings",
    //     },
    //     {
    //       id: "groups",
    //       label: "Groups",
    //       link: "/groups",
    //       parentId: "settings",
    //     },
    //     {
    //       id: "servers",
    //       label: "Servers",
    //       link: "/servers",
    //       parentId: "settings",
    //     },
    //     {
    //       id: "locations",
    //       label: "Locations",
    //       link: "/locations",
    //       parentId: "settings",
    //     },
    //     {
    //       id: "devices",
    //       label: "Devices",
    //       link: "/devices",
    //       parentId: "settings",
    //     },
    //   ],
    // },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
