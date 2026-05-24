import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Typography
} from "@mui/material";

type Props = {
    activity: Activity;
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    closeForm: () => void;
}

export default function ActivityCard({
    activity,
    selectActivity,
    deleteActivity,
    closeForm
}: Props) {

    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardContent>

                <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 600 }}
                >
                    {activity.title}
                </Typography>

                <Typography
                    sx={{
                        color: 'text.secondary',
                        mb: 1
                    }}
                >
                    {activity.date}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ mb: 2 }}
                >
                    {activity.description}
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 500 }}
                >
                    {activity.city} / {activity.venue}
                </Typography>

            </CardContent>

            <CardActions
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    px: 2,
                    pb: 2
                }}
            >
                <Chip
                    label={activity.category}
                    variant="outlined"
                    color="primary"
                />

                <Box
                    sx={{
                        display: 'flex',
                        gap: 2
                    }}
                >
                    <Button
                        onClick={() => deleteActivity(activity.id)}
                        variant="contained"
                        color="error"
                        size="medium"
                    >
                        Delete
                    </Button>

                    <Button
                        onClick={() => {
                            selectActivity(activity.id);
                            closeForm();
                        }}
                        variant="contained"
                        size="medium"
                    >
                        View
                    </Button>
                </Box>
            </CardActions>
        </Card>
    )
}