import * as React from 'react';
import { Tab } from '@mui/material';
import Box from '@mui/material/Box';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import _ from 'lodash';

interface ITabComponent {
    children: React.ReactNode;
    currentTab: string;
    tabslist: string[];
    onTabChange: (value: string) => void;
}

const TabComponent: React.FC<ITabComponent> = ({ children, tabslist, currentTab, onTabChange }) => {

    function _replaceAndLowerCase(value: string) {
        return _.replace(_.lowerCase(value), ' ', '_');
    }

    return (
        <Box component="div" sx={{ typography: 'body1' }}>
            <TabContext value={currentTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={(e: React.SyntheticEvent, newValue: string) => onTabChange(newValue)} aria-label="lab API tabs example">
                        {_.map(tabslist, (row: string, index: number) => {
                            return <Tab key={'tab' + index} label={row} value={_replaceAndLowerCase(row)} />;
                        })}
                    </TabList>
                </Box>
                {_.map(tabslist, (row: string, index: number) => (
                    <TabPanel key={'tab' + index} value={_replaceAndLowerCase(row)}>
                        {children}
                    </TabPanel>
                ))}
            </TabContext>
        </Box>
    );
}
export default TabComponent;