import React from 'react';
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
    StyledEngineProvider,
    adaptV4Theme,
} from '@mui/material/styles';
import { Typography } from '@mui/material';
// import "@fontsource/roboto";

let theme = createTheme(adaptV4Theme({
    palette: {
        primary: {
            main: '#001A41',
        },
    },
    typography: {
        overline: {
            fontWeight: 'bold',
            fontSize: '0.6rem',
        }
    }
}))

theme = responsiveFontSizes(theme)

const Footer = () => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <footer >
                    <Box marginTop="rem"  width="100%">
                        <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
                            <Box display="flex" flexDirection="row" justifyContent="center" marginX={1}>
                                <Typography color="primary" variant="overline" align="center">
                                    © Copyright 2022
                                </Typography>
                            </Box>
                            <Box display="flex" flexDirection="row" justifyContent="center" marginX={1}>
                                <Typography color="primary" variant="overline" align="center">
                                    ConntectiGo
                                </Typography>
                            </Box>
                            <Box display="flex" flexDirection="row" justifyContent="center" marginX={1}>
                                <Typography color="primary" variant="overline" align="center">
                                    All Rights Reserved
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </footer>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default Footer;