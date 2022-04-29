import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '40%', position: 'absolute', borderBottom: 1, borderColor: 'gray', top: '650px', left: '700px' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className="tab1" label="Common Amenities" {...a11yProps(0)} style={{ position: 'absolute', width: '10%', color: 'green' }} />
          <Tab label="Security Systems" {...a11yProps(1)} style={{ position: 'absolute', width: '10%', left: '120px', color: 'green' }} />
          <Tab label="Water Treatement" {...a11yProps(2)} style={{ position: 'absolute', width: '20%', left: '250px', color: 'green' }} />
          <Tab label="Sewage Treatment" {...a11yProps(3)} style={{ position: 'absolute', width: '10%', left: '400px', color: 'green' }} />
        </Tabs>
      </Box>
      <TabPanel className="deftab1" value={value} index={0} style={{ position: 'absolute', top: '750px', left: '700px' }}>
        Grand Entrance Gate to the project
        <li> Five swimming pools including one Indoor Heated Pool.</li>
        <li> Beautifully Landscaped Gardens, Boulevards & Floral Walkways</li>
        <li>Grand Atrium with lounge area for each tower</li>
        <li> Jogging / Walking Trail.</li>
        <li> Outdoor Exercise Area with Equipment</li>
        <li>Children's Play Areas</li>
        <li>Amphitheatre</li>
        <li>Home Concierge</li>
        <li>Chip & Puttgreen</li>
        <li>Outdoor Party Area with Barbeque Pits</li>
        <li>Indoor Party Hall/Multi-Purpose Hall</li>
        <li>A Crèche managed by professionals</li>
        <li>Common toilets for servants / drivers</li>
      </TabPanel>
      <TabPanel value={value} index={1} style={{ position: 'absolute', top: '900px', left: '900px' }}>
        Security<br />Systems
      </TabPanel>
      <TabPanel value={value} index={2} style={{ position: 'absolute', top: '900px', left: '900px' }}>
        Water<br />Treatment
      </TabPanel>
      <TabPanel value={value} index={3} style={{ position: 'absolute', top: '900px', left: '900px' }}>
        Sewage<br />Treatment
      </TabPanel>
    </Box>
  );
}
