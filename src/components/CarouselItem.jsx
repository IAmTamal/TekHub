import {
    Box,
    CardContent,
    Card,
    Typography,
    ThemeProvider,
    createTheme,
    CardMedia,
    styled,
} from "@mui/material";
import { LinkedIn, Twitter, Instagram, GitHub } from "@mui/icons-material";
import React from "react";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const CardContentNoPadding = styled(CardContent)(`
    padding: 0;
    &:last-child {
      padding-bottom: 5px;
    }
  `);

const CarouselItem = ({ phot, name, price }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                sx={{
                    paddingTop: "10px",

                    background: "#00000",

                    // on hover make the cursor pointer
                    "&:hover": {
                        cursor: "pointer",
                    },
                }}

            >
                <Card
                    sx={{
                        background: "#F2DEBA",
                        borderRadius: "10px !important",
                        padding: "0px",
                        maxWidth: "450px !important",
                        minWidth: "450px !important",
                        maxHeight: "450px !important",
                        minHeight: "450px !important",
                    }}



                >
                    Hello
                </Card>
            </Box>
        </ThemeProvider>
    );
};

export default CarouselItem;