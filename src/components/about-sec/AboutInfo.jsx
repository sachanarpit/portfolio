import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import { useState } from "react";
import { AboutData } from "./AboutData";

export const AboutInfo = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          color: "white",
        }}
      >
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          textColor="secondary"
        >
          <Tab
            sx={{
              color: "white",
            }}
            text
            label="Cerfications"
            value="1"
          />
          <Tab
            sx={{
              color: "white",
            }}
            label="Experience"
            value="2"
          />
          <Tab
            sx={{
              color: "white",
            }}
            label="Education"
            value="3"
          />
        </TabList>
      </Box>
      <TabPanel value="1">
        <AboutData />
      </TabPanel>
      <TabPanel value="2">
        {" "}
        <AboutData />
      </TabPanel>
      <TabPanel value="3">
        {" "}
        <AboutData />
      </TabPanel>
    </TabContext>
  );
};
