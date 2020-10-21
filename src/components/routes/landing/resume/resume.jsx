import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginTop: 60,
    }
})

export const Resume = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography>
                This is an about page!
            </Typography>
        </Container>
    )
}

export default Resume;
