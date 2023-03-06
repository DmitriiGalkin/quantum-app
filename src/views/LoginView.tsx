import React, {useState} from 'react';
import {Container, TextField, InputAdornment, IconButton, Button, Theme, Box, Grid} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {makeStyles} from "@material-ui/core/styles";
import {useAuth, useLocalStorage} from "../tools/hooks";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";





// const useStyles = makeStyles((theme: Theme) => ({
//     content: {
//         backgroundColor: theme.palette.background.paper,
//         borderRadius: '32px 32px 0 0',
//     },
// }));
export default function LoginView() {
    // const classes = useStyles();

    const { login } = useAuth();

    const handleSubmit = (event: { currentTarget: HTMLFormElement | undefined; }) => {
        // event.preventDefault()  instanceof Element;
        const data = new FormData(event.currentTarget);
        login({
            email: data.get("email"),
            password: data.get("password")
        });
    };

    const [showPassword, setShowPassword] = useState(false);
    //const handleClickShowPassword = () => setShowPassword(!showPassword);
    //const handleMouseDownPassword = () => setShowPassword(!showPassword);
    //const someChangeHandler = () => console.log('1')
    // const [login, setName] = useLocalStorage<string>("login", 'null');

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <RouterLink to="/register">
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </RouterLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
    //
    // return (
    //     <div>
    //         <Box sx={{mt:6}} className={classes.content}>
    //             <Container style={{ padding: '18px' }}>
    //                 <Box>
    //                     <TextField id="login" label="Номер мобильного телефона/Почта" variant="standard" fullWidth/>
    //                 </Box>
    //                 <Box sx={{mt:6}}>
    //                     <TextField
    //                         id="password"
    //                         label='Пароль'
    //                         variant="standard"
    //                         type={showPassword ? "text" : "password"} // <-- This is where the magic happens
    //                         onChange={someChangeHandler}
    //                         InputProps={{
    //                             endAdornment: (
    //                                 <InputAdornment position="end">
    //                                     <IconButton
    //                                         aria-label="toggle password visibility"
    //                                         onClick={handleClickShowPassword}
    //                                         onMouseDown={handleMouseDownPassword}
    //                                     >
    //                                         {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
    //                                     </IconButton>
    //                                 </InputAdornment>
    //                             )
    //                         }}
    //                         fullWidth
    //                     />
    //                 </Box>
    //                 <Box sx={{mt:6}}>
    //                     <Button variant="contained" fullWidth>Войти</Button>
    //                 </Box>
    //             </Container>
    //         </Box>
    //     </div>
    // );
}