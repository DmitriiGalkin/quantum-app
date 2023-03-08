import React from 'react';
import QBottomNavigation from "../components/QBottomNavigation";
import {Box, Container, IconButton, Typography} from "@mui/material";
import {useEditUser, useUser, useUserUniques} from "../../modules/user";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import {useEditUnique} from "../../modules/unique";

export default function UniquesView() {
    const { data: uniques = [] } = useUserUniques(1)
    const { data: userD } = useUser(1)
    const editUser = useEditUser(1)
    const editUnique = useEditUnique(1)

    const toTop = ({ user, unique, points }: any) => {
        editUser.mutate({ ...user, points: user.points - points })
        editUnique.mutate({ ...unique, points: unique.points + points })
    }
    return (
        <div>
            <Container disableGutters>
                <div style={{ padding: 24 }}>
                    <Typography component="div" style={{ fontSize: 30, textAlign: 'center' }}>
                        {userD?.title}
                    </Typography>
                    <Typography component="div" style={{ fontWeight: 700, textAlign: 'center' }}>
                        - твои Уникальные Ценности!
                    </Typography>
                    <Typography component="div" style={{ fontWeight: 700, textAlign: 'center' }}>
                        Свободных баллов {userD?.points ? userD?.points : 'нет'}
                    </Typography>
                </div>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #E1E3E8',
                    borderRadius: 2,
                    padding: 2,
                    '& > * + *': {
                        marginTop: 1,
                    }
                }}
                >
                    {uniques.map((unique) => (
                        <Box key={unique.id} sx={{ display: 'flex' }}>
                            <Typography variant="subtitle1" color="primary" style={{ flexGrow: 1 }}>
                                {unique.title}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ paddingRight: 1}}>
                                {unique.points}
                            </Typography>
                            <AutoAwesomeIcon style={{ width: 20, height: 20 }} color="primary"/>
                            {userD?.points && <IconButton onClick={() => toTop({ user: userD, unique, points: 1 })}>
                                <ArrowUpward/>
                            </IconButton>}
                        </Box>
                    ))}
                </Box>
            </Container>
            <QBottomNavigation value={3}/>
        </div>
    );
}
