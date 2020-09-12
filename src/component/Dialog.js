import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from "@material-ui/core/TextField";
import CustomizedSnackbars from "./Toast";
import Axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EasyDialog() {
    const [open, setOpen] = React.useState(false);

    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');
    const handleChange1 = (event) => {
        setValue1(event.target.value);
    };
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const [success,setSuccess] =React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const DieDetail=()=>{
        setSuccess('')
    }
    const DieDialog =()=>{
        setTimeout(DieDetail,3000)
    }

    return (
        <div>
            <CustomizedSnackbars success={success}/>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Contact me
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Leave a message"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To contact me, please enter your email address and nickname here. You will receive get a reply.
                    </DialogContentText>
                    <DialogContentText>
                        Here is my email:   <code>grandgadsix@sjtu.edu.cn</code>
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        value={value1}
                        onChange={handleChange1}
                        label="Your Email Address or Tel-number"
                        type="email"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        value={value2}
                        onChange={handleChange2}
                        label="Your Nickname"
                        type="name"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="outlined-multiline-static"
                        value={value3}
                        onChange={handleChange3}
                        margin="dense"
                        label="Message"
                        type="text"
                        fullWidth
                        variant="outlined"
                        rows={8}
                        multiline
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={()=>{
                        setSuccess('')
                        Axios.post('/upload',{
                            email: value1,
                            nickname:value2,
                            message:value3
                        }).then(()=>{
                            setSuccess('success')
                            DieDialog()
                            handleClose()
                        }).catch((e)=>{
                            console.log(e)
                            setSuccess('error')
                        })

                    }} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}