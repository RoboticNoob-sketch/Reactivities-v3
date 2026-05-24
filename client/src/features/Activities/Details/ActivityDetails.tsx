import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";

type Props = {
    activity: Activity;
    cancelSelect: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({
    activity,
    cancelSelect,
    openForm
}: Props) {

    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia
                component='img'
                image={`/images/categoryImages/${activity.category}.jpg`}
                alt={activity.title}
                sx={{ height: 300, objectFit: 'cover' }}
            />

            <CardContent>
                <Typography variant="h5">
                    {activity.title}
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 300 }}
                >
                    {activity.date}
                </Typography>

                <Typography variant="body1">
                    {activity.description}
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    onClick={() => openForm(activity.id)}
                    color="primary"
                    variant="contained"
                >
                    Edit
                </Button>

                <Button
                    onClick={cancelSelect}
                    color='inherit'
                    variant="outlined"
                >
                    Cancel
                </Button>
            </CardActions>
        </Card>
    )
}