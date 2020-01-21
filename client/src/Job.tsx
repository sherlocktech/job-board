import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import { IJob } from './model/IJob';

interface IProps {
    job: IJob, onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export default function Job(props: IProps) {
    return (
        <Paper className='job' onClick={props.onClick}>
            <div>
                <Typography variant="h6">{ props.job.title }</Typography>
                <Typography variant="h5">{ props.job.company }</Typography>
                <Typography>{ props.job.location }</Typography>
            </div>
            <div>
                <Typography>{ props.job.created_at.split(' ').slice(0, 3).join(' ') }</Typography>
            </div>
        </Paper>
    );
}