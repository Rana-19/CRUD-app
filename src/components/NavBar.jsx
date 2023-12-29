import { AppBar, Button, Toolbar, Typography, Switch, FormControlLabel } from '@mui/material'
import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const NavBar = () => {
    const { dispatch, isDark } = useContext(ThemeContext)
    const changeTheme = () => {
        // console.log(isDark);
        dispatch({
            type: "CHANGE_THEME"
        })
    }



    return (
        <div>
            <AppBar position='static' sx={{ bgcolor: 'palegreen', color: 'black' }}>
                <Toolbar >
                    <Typography variant='h6' sx={{ flexGrow: 1 }}>TODO-CRUD</Typography>
                    {/* <Button variant='outlined' color='error' onClick={changeTheme}>DARK MODE</Button> */}
                    <FormControlLabel control={<Switch onClick={changeTheme} />} label=" DARK THEME" />



                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar