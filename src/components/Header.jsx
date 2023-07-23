import { Box, Typography, Link } from "@mui/material";

export function Header() {
    return (
        <Box
          display="flex"
          flexDirection="column"
          borderRadius='12px'
          m={2}
        >
            {/* title */}
            <Box m={1}>
                <Typography align="center" variant="h2">
                    college application guide
                </Typography>
            </Box>
            {/* written by me */}
            <Typography align="center" variant="body1">
                written by{' '}
                <Link href="https://lognorman.medium.com/" target="_blank" rel="noopener">
                    logan norman
                </Link>{' '}
            </Typography>
        </Box>
    )
}