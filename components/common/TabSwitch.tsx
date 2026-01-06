import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TabSwitch = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      <Tab value="one" label="Item One" />
      <Tab value="two" label="Item Two" />
      <Tab value="three" label="Item Three" />
    </Tabs>
  );
}

export default TabSwitch;
