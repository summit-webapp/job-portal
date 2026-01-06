import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

interface TabDataInterface {
	label: string;
	content: React.ReactNode;
}

interface TabSwitchProps {
	tabs: TabDataInterface[];
}

const TabSwitch = ({ tabs }: TabSwitchProps) => {
	return (
		<Tabs className="tabs-wrapper">
			<TabList>
				{tabs.map((tab, index) => (
					<Tab key={index}>{tab.label}</Tab>
				))}
			</TabList>

			{tabs.map((tab, index) => (
				<TabPanel key={index}>
					{tab.content}
				</TabPanel>
			))}
		</Tabs>
	);
}

export default TabSwitch;
