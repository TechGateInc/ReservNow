"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import styles from "./page.module.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { sidebarItems } from "@/src/stores/Sidebar Items/sidebar";
import { sidebarItems2 } from "@/src/stores/Sidebar Items/sidebar2";
import { FiSearch } from "react-icons/fi";
import AllMessages from "@/src/components/Hosting/All Messages/AllMessages";
import ReservNowSupport from "@/src/components/Hosting/ReservNow Support/ReservNowSupport";
import Archive from "@/src/components/Hosting/Archive/Archive";
import QuickReplies from "@/src/components/Hosting/Quick Replies/QuickReplies";
import ScheduleMessages from "@/src/components/Hosting/Schedule Messages/ScheduleMessages";

const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
  fontSize: "20px",
  paddingLeft: "20px",
  fontWeight: "600",
  marginTop: "80px",
}));

export default function inbox() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [active, setActive] = React.useState("allMessages");

  return (
    <div className={styles["inbox-root"]}>
      <div className={styles["inbox-header"]}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <div>Inbox</div>
            </DrawerHeader>
            <div>
              {sidebarItems.map(({ name, href, icon: Icon }) => (
                <div
                  key={name}
                  className={styles["inbox-sidebar-container"]}
                  onClick={() => setActive(href)}
                >
                  <div
                    className={`${styles["inbox-sidebar"]} ${
                      active === href ? styles["activeItem"] : ""
                    }`}
                  >
                    <div style={{ fontSize: "16px" }}>
                      <Icon />
                    </div>
                    <div style={{ fontSize: "14px", marginLeft: "10px" }}>
                      {name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginLeft: "20px",
                fontWeight: "600",
                marginTop: "50px",
                marginBottom: "20px",
              }}
            >
              Settings
            </div>
            <div>
              {sidebarItems2.map(({ name, href, icon: Icon, disabled }) => (
                <div
                  key={name}
                  className={styles["inbox-sidebar-container"]}
                  onClick={() => {
                    if (!disabled) {
                      setActive(href);
                    }
                  }}
                >
                  <div
                    className={`${styles["inbox-sidebar"]} ${
                      active === href ? styles["activeItem"] : ""
                    }`}
                  >
                    <div style={{ fontSize: "16px" }}>
                      <Icon />
                    </div>
                    <div style={{ fontSize: "14px", marginLeft: "10px" }}>
                      {name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Drawer>
          <div style={{ width: "100%" }}>
            <Main open={open}>
              <div className={styles["inbox-container"]}>
                <div className={styles["inbox-header"]}>
                  {open === false ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2 }}
                      >
                        <MenuIcon />
                      </IconButton>
                      <div className={styles["inbox-header-text"]}>
                        {active === "allMessages" && "All Messages"}
                        {active === "reservNowSupport" && "ReservNow Support"}
                        {active === "archive" && "Archive"}
                        {active === "quickReplies" && ""}
                        {active === "scheduleMessages" && "Schedule Messages"}
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerClose}
                        edge="start"
                        sx={{ mr: 2 }}
                      >
                        <MenuIcon />
                      </IconButton>
                      <div className={styles["inbox-header-text"]}>
                        {active === "allMessages" && "All Messages"}
                        {active === "reservNowSupport" && "ReservNow Support"}
                        {active === "archive" && "Archive"}
                        {active === "quickReplies" && ""}
                        {active === "scheduleMessages" && "Schedule Messages"}
                      </div>
                    </div>
                  )}
                </div>
                {active === "scheduleMessages" || active === "quickReplies" ? (
                  <div></div>
                ) : (
                  <div className={styles["inbox-search-bar"]}>
                    <FiSearch />
                    <input type="text" />
                  </div>
                )}
                <div className={styles["inbox-content"]}>
                  {active === "allMessages" && <AllMessages />}
                  {active === "reservNowSupport" && <ReservNowSupport />}
                  {active === "archive" && <Archive />}
                  {active === "quickReplies" && <QuickReplies />}
                  {active === "scheduleMessages" && <ScheduleMessages />}
                </div>
              </div>
            </Main>
          </div>
        </Box>
      </div>
    </div>
  );
}
