import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
    activities: Activity[]
    selectActivity: (id: string) => void
    deleteActivity: (id: string) => void
    closeForm: () => void
}

export default function ActivityList({ activities, selectActivity, deleteActivity, closeForm }: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {activities.map(activity => (
                <ActivityCard
                    key={activity.id}
                    activity={activity}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                    closeForm={closeForm}
                />
            ))}
        </Box>
    )
}