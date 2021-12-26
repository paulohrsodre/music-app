import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Add from '@material-ui/icons/Add'
import { Button, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none',
        backgroundColor: theme.palette.background.default
    },
    toolbar: {
        minHeight: 56,
        display: 'left',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        cursor: 'pointer',
        height: 18,
        mmarginLeft: theme.spacing(3)
    },
    search: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        height: 35,
        width: 700
    },
    input: {
        flex: 1
    }
}));

function TopBar() {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} color="default">
            <Toolbar className={classes.toolbar}>
                <Box display="flex" alignItems="center">
                    <MenuIcon />
                    <img 
                        src="/favicon.ico" 
                        alt="logo" 
                        className={classes.logo} 
                    />
                    
                </Box>
                <Hidden mdDown>
                    <Box>
                        <Paper component="form" className={classes.search}>
                            <InputBase
                                className={classes.input}
                                placeholder='Pesquisar'
                                inputProps={{'aria-label': 'search google maps'}}
                            >
                            </InputBase>
                            <IconButton
                                type="submit"
                                className={classes.iconButton}
                                aria-label="search"
                            >
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                </Hidden>
                <Box display="flex">
                    <IconButton>
                        <Add />
                    </IconButton>
                    <Button
                        color="secondary"
                        component="a"
                        variant="outlined"
                        startIcon={<AccountCircle />}
                    >
                        Fazer Login
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;