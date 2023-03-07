import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import {Container, IconButton, Skeleton, Typography} from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 16px',
        },
        menuButton: {
            padding: 0,
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            color: theme.palette.background.paper,
        },
    }),
);

export function ForwardAppBar({ title, icon, onClick }: { title?: string, icon?: JSX.Element, onClick?: () => void }) {
    const classes = useStyles();
    onClick && onClick()

    return (
        <Container>
            <div className={classes.root} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton edge="start" className={classes.menuButton} onClick={() => window.history.back()}>
                        <ArrowBackIos style={{ color: 'white' }}/>
                    </IconButton>
                    <Typography className={classes.title} style={{ fontSize: 18, lineHeight: '23px' }}>
                        {title || <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />}
                    </Typography>
                </div>
                {icon ? (
                    <IconButton onClick={onClick}>
                        {icon}
                    </IconButton>
                ) : (
                    <div>
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14 13C13.0386 12.998 12.1136 13.3673 11.418 14.031L7.578 11.631C7.8085 10.896 7.8085 10.108 7.578 9.373L11.418 6.973C12.1142 7.6352 13.0392 8.0031 14 8C16.0708 7.99945 17.7495 6.32084 17.75 4.25C17.75 2.18016 16.0718 0.501106 14.001 0.5C11.9298 0.5 10.2505 2.17877 10.25 4.25C10.2502 4.63339 10.3082 5.01401 10.4221 5.37952L6.582 7.779C5.88611 7.11607 4.96112 6.74744 4 6.75C1.92917 6.75055 0.250549 8.42916 0.25 10.5C0.25 12.5698 1.92816 14.2489 3.99899 14.25C4.96072 14.2523 5.88617 13.8829 6.582 13.219L10.422 15.619C10.3083 15.9852 10.2503 16.3665 10.25 16.75C10.25 18.8198 11.9282 20.4989 13.999 20.5C16.0702 20.5 17.7495 18.8212 17.75 16.75C17.75 14.6802 16.0718 13.0011 14.001 13H14ZM14 2.375C15.0355 2.375 15.875 3.21447 15.875 4.25C15.875 5.28553 15.0355 6.125 14 6.125C12.9645 6.125 12.125 5.28553 12.125 4.25C12.125 3.21447 12.9645 2.375 14 2.375ZM4 12.375C2.96448 12.375 2.125 11.5355 2.125 10.5C2.125 9.46446 2.96448 8.625 4 8.625C5.03552 8.625 5.875 9.46446 5.875 10.5C5.875 11.5355 5.03552 12.375 4 12.375ZM14 18.625C12.9645 18.625 12.125 17.7855 12.125 16.75C12.125 15.7145 12.9645 14.875 14 14.875C15.0355 14.875 15.875 15.7145 15.875 16.75C15.875 17.7855 15.0355 18.625 14 18.625Z" fill="white"/>
                        </svg>
                    </div>
                )}
            </div>
        </Container>

    );
}

export default React.memo(ForwardAppBar);
