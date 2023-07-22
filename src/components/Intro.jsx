import { Box, Typography, Link } from "@mui/material";

export function Intro() {
    return (
        <Box
          display="flex"
          flexDirection="column"
          borderRadius='12px'
        >
            {/* page title section */}
            <Typography align="center" variant="h2">
                college application guide
            </Typography>
            {/* written by me section */}
            <Typography align="center" variant="body1">
                written by{' '}
                <Link href="https://lognorman.medium.com/" target="_blank" rel="noopener">
                    logan norman
                </Link>{' '}
            </Typography>
        </Box>
    )
}