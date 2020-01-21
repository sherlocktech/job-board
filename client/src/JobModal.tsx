import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions/transition';

import { IJob } from './model/IJob';

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
    job: IJob,
    open: any,
    handleClose: any
}

export default function JobModal(props: IProps) {
    return(
        <div className="job-modal">
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {props.job.title} - 
                    {props.job.company}
                    <img className='detail-logo' src={props.job.company_logo} />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-slide-description"
                        dangerouslySetInnerHTML={{__html: props.job.description}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Close
                    </Button>
                    <a href={props.job.url} target="_blank">
                        <Button color="primary">
                            Apply
                        </Button>
                    </a>
                </DialogActions>
            </Dialog>
        </div>
    );
}