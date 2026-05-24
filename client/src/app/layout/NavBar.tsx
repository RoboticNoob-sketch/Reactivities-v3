import { Group } from "@mui/icons-material";

import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container
} from "@mui/material";

type Props = {
    openForm: () => void;
}

export default function NavBar({ openForm }: Props) {

    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar
                position="static"
                sx={{
                    backgroundImage:
                        'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
                }}
            >

                <Container maxWidth='xl'>

                    <Toolbar
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >

                        {/* Logo Section */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                alignItems: 'center'
                            }}
                        >
                            <Group fontSize='large' />

                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 700 }}
                            >
                                Reactivities
                            </Typography>
                        </Box>

                        {/* Navigation */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2
                            }}
                        >

                            <Button
                                sx={{
                                    color: 'white',
                                    fontWeight: 700
                                }}
                            >
                                Activities
                            </Button>

                            <Button
                                sx={{
                                    color: 'white',
                                    fontWeight: 700
                                }}
                            >
                                About
                            </Button>

                            <Button
                                sx={{
                                    color: 'white',
                                    fontWeight: 700
                                }}
                            >
                                Contact
                            </Button>

                        </Box>

                        {/* Create Button */}
                        <Button
                            onClick={openForm}
                            size='large'
                            variant="contained"
                            color="warning"
                        >
                            Create Activity
                        </Button>

                    </Toolbar>

                </Container>

            </AppBar>

        </Box>
    )
}