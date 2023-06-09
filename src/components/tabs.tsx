import React from "react";
import {Box} from "@mui/material";

interface TabPanelProps {
    children: React.ReactNode;
    index: any;
    value: any;
}

export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
>
    {value === index && children && (
        <Box p={3}>
            {children}

        </Box>
    )}
    </div>
);
}



export function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
    };
}