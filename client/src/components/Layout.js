import React, { useEffect, useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    adaptV4Theme,
    Tabs,
    Tab,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ThemeProvider, StyledEngineProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import Footer from "./Footer";
import Body from "./Body";



const drawerWidth = 50;


const useStyles = makeStyles({
    pallate: {
        primary: {
            main: '#001A41',
        }

    },
    page: {
        width: '100%'
    },
    drawer: {
        width: drawerWidth,
        borderRadius: '10px',
    },
    drawerPaper: {
        borderRadius: '50px',
        border: '2px solid white',
        marginTop: '40vh',
        marginLeft: '1vw',
        height: "30vh",
        scrollbarWidth: 'none',
        background: '#061826',
        color: '#fff',

    },
    drawerPaperSm: {
        width: '100vw',
        marginTop: '30vh',
        scrollbarWidth: 'none',
        background: '#061826',
        color: '#fff',
    },

    body: {
        display: 'flex',
        flexDirection: 'column',
        height: '95vh',



    },
    bodySm: {
        marginTop: 70,
        marginBottom: 70,
        display: 'flex',
        flexDirection: 'column',

    },
    AppBar: {
        backgroundColor: '#fff',
        caretColor: 'transparent',
        color: '#001A41',
        border: '0px'

    }
});

let theme = createTheme(adaptV4Theme({
    palette: {
        primary: {
            main: '#001A41',
        },

    },
    typography: {
        h5: {
            margin: '0.8rem',
            fontFamily: '"Poppins", sans-serif',
        },
        h4: {
            margin: '0.8rem',
            fontFamily: '"Poppins", sans-serif',
        },
        subtitle1: {
            color: '#fff',
            // color: '#0077FF',
            fontWeight: 'bold',
        }

    },

}));

theme = responsiveFontSizes(theme);



const Layout = () => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleLogout = (e) => {
        e.prventDefault();

    }
    return (
        <Box>
            <Box className="big-screen">
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <Box>
                            <Drawer
                                open={openDrawer}
                                onClose={() => setOpenDrawer(false)}
                                variant="permanent"
                                className={classes.drawer}
                                classes={{ paper: classes.drawerPaper }}
                                style={{ caretColor: 'transparent' }}
                                scrollbarWidth={0}

                            >
                                <Box display='flex' flexDirection='column' margin='auto' width="100%" justifyContent="center" alignItems="center" >

                                </Box>

                            </Drawer>
                        </Box>
                        <Box>
                            <AppBar className={[classes.appBarShift, classes.AppBar]}>
                                <Toolbar>
                                    <Box display="flex" flexDirection="row" flexGrow={20} paddingLeft={10}>
                                        <Typography variant="h4" gutterBottom>
                                            ConntectiGo
                                        </Typography>

                                    </Box>
                                    <Box display="flex" flexDirection="row" flexGrow={1} justifyContent="space-around">
                                        <Box paddingX={2} paddingY={1} borderRadius="10px" >
                                            <Button variant="contained" color="primary" style={{ width: '10rem' }} onClick={e => handleLogout(e)}>Logout</Button>
                                        </Box>
                                    </Box>
                                </Toolbar>
                            </AppBar>
                        </Box>
                        <Box className={classes.body} marginTop="5rem">
                        <Body />
                        </Box>
                        <Box className='footer'>
                            <Footer />
                        </Box>
                    </ThemeProvider>
                </StyledEngineProvider>
            </Box>

        </Box>
    );
}

export default Layout;