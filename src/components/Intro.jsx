import { Box, Typography } from "@mui/material";
import { Nav } from "./Nav";

export function Intro() {
    return (
        <div id="intro">
            <Box m={1}>
                <Typography variant="body1">
                    if you're reading this guide, i'm sure you've heard a lot about
                    the college application process already. this guide servers to
                    be a supplement to your current knowledge and a springboard to
                    other resources that might be of use to you. additionally, it
                    aims to provide a way of thinking about the application process
                    to help you reach your goals. here's the topics that are going
                    to be covered:
                </Typography>
                <Nav />
            </Box>
        </div>
    );
}