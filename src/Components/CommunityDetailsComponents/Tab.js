




import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Tab.css'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (

        <Typography>{children}</Typography>

      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      {props.tabs.map((tab) =>
        <>
          <Box className="box">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

              <Tab className="tab1" label={tab.title1} {...a11yProps(0)} />
              <Tab className="tab2" label={tab.title2} {...a11yProps(1)} />
              <Tab className="tab3" label={tab.title3} {...a11yProps(2)} />
              <Tab className="tab4" label={tab.title4} {...a11yProps(3)} />

            </Tabs>
          </Box>



          <TabPanel className="tabcontent" value={value} index={0} >
            Grand Entrance Gate to the project:<br />
            <li>{tab.content1}</li>
          </TabPanel>
          <TabPanel className="tabcontent" value={value} index={1} >
            <li>{tab.content2}</li>
          </TabPanel>
          <TabPanel className="tabcontent" value={value} index={2} >
            <li>{tab.content3}</li>
          </TabPanel>
          <TabPanel className="tabcontent" value={value} index={3} >
            <li>{tab.content4}</li>
          </TabPanel></>)}
    </Box>
  );
}
