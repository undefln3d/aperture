import React from 'react';
import {useState} from 'react';
import './modale-window.scss'
import {Box, Button, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, FormControl, IconButton,
  InputAdornment, InputLabel, OutlinedInput, TextField,styled} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useTranslation} from "react-i18next";

const ModalWindow = () => {
  
  const { t } = useTranslation();
  const [open, setOpen] = useState(false)
  const [openLog, setOpenLog] = useState(false)
  const [value,setValue] = useState({
    showPassword: false
  })
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpenLog = () => {
    setOpenLog(true)
  }
  const handleCloseLog = () => {
    setOpenLog(false)
  }
  const clickShowPassword = () => {
    setValue({showPassword: !value.showPassword})
  }
  const CssTextField = styled(TextField)({
    input: {
      color: "#bdbdbd "
    },
    label: {
      color: '#cfd8dc'
    },
    '& label.Mui-focused': {                    //label
      color: '#cfd8dc',
    },
    '& .MuiOutlinedInput-root': { //frame input
      '& fieldset': {
        borderColor: '#78909c',
      },
      '&:hover fieldset': {           //hover frame
        borderColor: '#78909c',
      },
      '&.Mui-focused fieldset': {     //hover then input
        borderColor: '#78909c',
      },
    },
  });

  return (
    <>
      <button onClick={handleClickOpen} className="button menu__button">
        <p>{t("header__menu__button")}</p>
      </button>
      <Dialog open={open} onClose={handleClose}>
        <Box class="box-dialog">
          <DialogTitle>
            {t("header_box-dialog_title")}
            <DialogContentText sx={{color: '#bdbdbd'}}>
              {t("header_box-dialog_content_text")}
            </DialogContentText>
          </DialogTitle>
          <DialogContent>
            <Button
              onClick={handleClickOpenLog}
              sx={{color: '#eeeeee', mt: '10px', '&:hover': {backgroundColor: 'rgba(0,0,0,0)'}}}
            >
              {t("header_box-dialog_toLogin")}
            </Button>
            <Button
              href='/register'
              sx={{color: '#eeeeee', mt: '10px', '&:hover': {backgroundColor: 'rgba(0,0,0,0)'}}}
            >
              {t("header_box-dialog_toRegister")}
            </Button>
          </DialogContent>
        </Box>
        <Dialog open={openLog} >
          <Box class="box-dialog box-dialog__log">
            <DialogTitle variant="h6">
              {t("box-dialog__log")}
            </DialogTitle>
            <DialogContent sx={{width: '25ch'}}>
              <CssTextField
                margin="dense"
                variant='outlined'
                label="Email"
                id="email"
                fullWidth
              />
              <FormControl
                margin="dense"
                variant='outlined'
                fullWidth
                sx={{
                  '& label.Mui-focused': {        //label
                    color: '#cfd8dc',
                  },
                  '& .MuiOutlinedInput-root': {   //frame input
                    '& fieldset': {
                      borderColor: '#78909c',
                    },
                    '&:hover fieldset': {        //hover frame
                      borderColor: '#78909c',
                    },
                    '&.Mui-focused fieldset': {  //hover then input
                      borderColor: '#78909c',
                    },
                  },
                }}
              >
                <InputLabel sx={{color: '#cfd8dc'}} htmlFor="outlined-adornment-password">{t("outlined-adornment-password")}</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={value.showPassword ? 'text' : 'password'}
                  sx={{color: '#bdbdbd'}}
                  label="Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        sx={{
                          backgroundColor: 'rgba(0,0,0,0)',
                          color: '#b0bec5'
                        }}
                        onClick={clickShowPassword}
                      >
                        {value.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleCloseLog} color="primary"
                sx={{color: '#eeeeee', mt: '10px', '&:hover': {backgroundColor: 'rgba(0,0,0,0)'}}}
              >
                {t("box-dialog__cancel")}
              </Button>
              <Button
                onClick={handleCloseLog} color="primary"
                sx={{color: '#eeeeee', mt: '10px', '&:hover': {backgroundColor: 'rgba(0,0,0,0)'}}}
              >
                {t("box-dialog__log")}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
      </Dialog>
    </>
  );
};

export default ModalWindow;
