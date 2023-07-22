import { Box } from "@mui/material";
import { HeadingOne } from "../text/headings/HeadingOne";

export function Intro() {
    return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          borderRadius='12px'
        >
            <HeadingOne />
        </Box>
    )
}