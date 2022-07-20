import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import './register.scss';
import {Button, Container, FormControl, InputAdornment, InputLabel, OutlinedInput, IconButton, styled} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useTranslation} from "react-i18next";

const Register = () => {
  const { t, i18n } = useTranslation();
  const [value,setValue] = useState({
    showPassword: false
  })
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
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  
  return (
    <div className="studios studios__register">
      <Container class="container-register">
        <div className='logo' style={{marginInline: "auto", marginBottom: "8px", marginTop: "8px"}}></div>
        <p>
          Aperture Studios <br/>
          {t("container-register_text")}
        </p>
        <h3>
          {t("container-register_form")}
        </h3>
        <CssTextField
          margin="dense"
          variant='outlined'
          label="Email"
          id="email"
          fullWidth
        />
        <CssTextField
          margin="dense"
          variant='outlined'
          label="Login"
          id="login"
          fullWidth
        />
        <FormControl
          margin="dense"
          variant='outlined'
          fullWidth
          sx={{
            '& label.Mui-focused': {         //label
              color: '#cfd8dc',
            },
            '& .MuiOutlinedInput-root': {   //frame input
              '& fieldset': {
                borderColor: '#78909c',
              },
              '&:hover fieldset': {         //hover frame
                borderColor: '#78909c',
              },
              '&.Mui-focused fieldset': {   //hover then input
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
                  onClick={clickShowPassword}
                  sx={{backgroundColor: 'rgba(0,0,0,0)', color: '#b0bec5'}}>
                  {value.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl
          margin="dense"
          variant='outlined'
          fullWidth
          sx={{
            '& label.Mui-focused': {         //label
              color: '#cfd8dc',
            },
            '& .MuiOutlinedInput-root': {   //frame input
              '& fieldset': {
                borderColor: '#78909c',
              },
              '&:hover fieldset': {         //hover frame
                borderColor: '#78909c',
              },
              '&.Mui-focused fieldset': {   //hover then input
                borderColor: '#78909c',
              },
            },
          }}
        >
          <InputLabel sx={{color: '#cfd8dc'}} htmlFor="outlined-adornment-confirm-password">{t("outlined-adornment-confirm-password")}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirm-password"
            type={value.showPassword ? 'text' : 'password'}
            sx={{color: '#bdbdbd'}}
            label="Confirm - password"
          />
        </FormControl>
        <Button
          href='/'
          sx={{color: '#eeeeee', mt: '10px', mr:'8px', '&:hover': {backgroundColor: 'rgba(0,0,0,0)'}}}
        >
          {t("box-dialog__cancel")}
        </Button>
        <Button
          href='/'
          sx={{color: '#eeeeee', mt: '10px', '&:hover': {backgroundColor: 'rgba(0,0,0,0)'}}}
        >
          {t("box-dialog__reg")}
        </Button>
        <div className="button_language-box">
          <button className='button_language' onClick={() => changeLanguage("en")}>EN</button>
          <button className='button_language' onClick={() => changeLanguage("de")}>DE</button>
        </div>
      </Container>
    </div>
  );
}

export default Register;
