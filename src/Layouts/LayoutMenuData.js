import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Navdata = () => {
  const history = useHistory();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isRouteManager, setIsRouteManager] = useState(false);
  const [isBusMaster, setIsBusMaster] = useState(false);
  const [isStudentMaster, setIsStudentMaster] = useState(false);
  const [isShiftMaster, setIsShiftMaster] = useState(false);
  const [isUserManagement, setisUserManagement] = useState(false);
  const [isReport, setIsReport] = useState(false);
  const [isMyBilling, setIsMyBilling] = useState(false);
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
    if (iscurrentState !== "RouteManager") {
      setIsRouteManager(false);
    }

    if (iscurrentState !== "BusMaster") {
      setIsBusMaster(false);
    }
    if (iscurrentState !== "StudentMaster") {
      setIsStudentMaster(false);
    }
    if (iscurrentState !== "ShiftMaster") {
      setIsShiftMaster(false);
    }
    if (iscurrentState !== "UserManagement") {
      setisUserManagement(false);
    }
    if (iscurrentState !== "Report") {
      setIsReport(false);
    }
    if (iscurrentState !== "MyBilling") {
      setIsMyBilling(false);
    }

    if (iscurrentState === "Widgets") {
      history.push("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
  }, [
    history,
    iscurrentState,
    isDashboard,
    isRouteManager,
    isBusMaster,
    isStudentMaster,
    isShiftMaster,
    isUserManagement,
    isReport,
    isMyBilling,
  ]);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "ri-dashboard-2-line",
      link: "/dashboard",
      stateVariables: isDashboard,
      roles: ["superadmin", "admin", "user"],
    },
    {
      id: "route-manager",
      label: "Route Manager",
      icon: "ri-team-line",
      link: "/route-manager",
      stateVariables: isRouteManager,
      roles: ["superadmin", "admin", "user"],
    },
    {
      id: "bus-master",
      label: "Bus Master",
      icon: "ri-team-line",
      link: "/bus-master",
      stateVariables: isBusMaster,
      roles: ["superadmin", "admin", "user"],
    },
    {
      id: "student-master",
      label: "Student Master",
      icon: "ri-customer-service-line",
      link: "/student-master",
      stateVariables: isStudentMaster,
      roles: ["superadmin", "admin", "user"],
    },
    {
      id: "shift-master",
      label: "Shift Master",
      icon: "ri-folder-chart-line",
      link: "/shift-master",
      stateVariables: isShiftMaster,
      roles: ["superadmin", "admin", "user"],
    },

    {
      id: "user-management",
      label: "User Management",
      icon: "ri-file-user-line",
      link: "/user-management",
      stateVariables: isUserManagement,
      roles: ["superadmin", "admin"],
    },
    {
      id: "report",
      label: "Report",
      icon: "ri-coupon-5-line",
      link: "/report",
      stateVariables: isReport,
      roles: ["superadmin", "admin"],
    },

    {
      id: "my-billing",
      label: "My Billing",
      icon: "ri-secure-payment-line",
      link: "/my-billing",
      stateVariables: isMyBilling,
      roles: ["superadmin", "admin"],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
