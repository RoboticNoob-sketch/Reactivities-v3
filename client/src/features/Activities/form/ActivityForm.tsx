import {
    Box,
    Button,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import type React from 'react';

type Props = {
    activity?: Activity;
    closeForm: () => void;
    submitForm: (activity: Activity) => void;
}

export default function ActivityForm({
    closeForm,
    activity,
    submitForm
}: Props) {

    const handleSubmit = (
        event: React.SyntheticEvent<HTMLFormElement>
    ) => {

        event.preventDefault();

        const formData = new FormData(
            event.currentTarget
        );

        const data: { [key: string]: FormDataEntryValue } = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        if (activity) {
            data.id = activity.id;
        }

        submitForm(data as unknown as Activity);
    };

    return (
        <Paper
            sx={{
                borderRadius: 3,
                p: 3
            }}
        >

            <Typography
                variant="h5"
                gutterBottom
                color="primary"
                sx={{ fontWeight: 600 }}
            >
                {activity ? 'Edit Activity' : 'Create Activity'}
            </Typography>

            <Box
                component='form'
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}
            >

                <TextField
                    name='title'
                    label='Title'
                    defaultValue={activity?.title || ''}
                    fullWidth
                />

                <TextField
                    name='description'
                    label='Description'
                    defaultValue={activity?.description || ''}
                    multiline
                    rows={3}
                    fullWidth
                />

                <TextField
                    name='category'
                    label='Category'
                    defaultValue={activity?.category || ''}
                    fullWidth
                />

                <TextField
                    name='date'
                    label='Date'
                    type='date'
                    defaultValue={
                        activity?.date
                            ? new Date(activity.date)
                                .toISOString()
                                .split('T')[0]
                            : ''
                    }
                    slotProps={{
                        inputLabel: {
                            shrink: true
                        }
                    }}
                    fullWidth
                />

                <TextField
                    name='city'
                    label='City'
                    defaultValue={activity?.city || ''}
                    fullWidth
                />

                <TextField
                    name='venue'
                    label='Venue'
                    defaultValue={activity?.venue || ''}
                    fullWidth
                />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: 2
                    }}
                >
                    <Button
                        onClick={closeForm}
                        color='inherit'
                        variant="outlined"
                    >
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        color='success'
                        variant="contained"
                    >
                        Submit
                    </Button>
                </Box>

            </Box>

        </Paper>
    )
}