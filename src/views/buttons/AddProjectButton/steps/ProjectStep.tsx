import React from 'react';
import {useFormik} from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Project} from "../../../../modules/project/types";
import * as yup from 'yup';
import StepPlace from "./SelectPlace";
import {ProjectStepProps} from "./types";

const validationSchema= yup.object().shape({
        title: yup.string().required('Enter valid email-id'),
        description: yup.string().required('Enter valid email-id'),
    })

export default function ProjectStep ({ project, setProject, handleBack, handleNext }: ProjectStepProps) {
    const form = useFormik({
        initialValues: {
            ...project,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // console.log(values, 'project')
            alert(JSON.stringify(values, null, 2));
            setProject(values)
            handleNext()
        },
    });

    return (
        <div>
            <form onSubmit={form.handleSubmit}>
                <TextField
                    fullWidth
                    id="title"
                    name="title"
                    label="Название"
                    value={form.values.title}
                    onChange={form.handleChange}
                    error={form.touched.title && Boolean(form.errors.title)}
                    helperText={form.touched.title && form.errors.title}
                />
                <TextField
                    fullWidth
                    id="description"
                    name="description"
                    label="Описание"
                    value={form.values.description}
                    onChange={form.handleChange}
                    error={form.touched.description && Boolean(form.errors.description)}
                    helperText={form.touched.description && form.errors.description}
                />
                <Button onClick={handleBack}>
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    // onClick={handleNext}
                    type="submit"
                >
                    Next
                </Button>
            </form>
        </div>
    );
};
