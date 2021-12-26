import { useRouter } from 'next/router';
import {
    makeStyles,
    Hidden,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Avatar,
    Divider,
    Typography,
    Button 
} from '@material-ui/core'
import Home from '@material-ui/icons/Home'
import Search from '@material-ui/icons/Search';
import LibraryMusic from '@material-ui/icons/LibraryMusic'

const useStyles = makeStyles((theme) => ({
    mobileDrawer: {
        width: 240,
    },
    desktopDrawer: {
        width: 240,
        top: 56,
        height: 'calc(100% - 64px)',
        borderRight: 'none'
    },
    avatar: {
        cursor: 'pointer',
        width: 24,
        height: 24
    },
    ListItem: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: theme.spacing(3),
    },
    ListItemText: {
        fontSize: 14
    }
}))

const Menu = [
    { id: 1, label: 'Início', path: '/', icon: Home },
    { id: 2, label: 'Pesquisar', path: '/Search', icon: Search },
    { id: 3, label: 'Biblioteca', path: '/Library', icon: LibraryMusic }
]

function NavBar() {
    const classes = useStyles();
    const router = useRouter();

    const isSelected = (item) => {
        return router.pathname === item.path;
    }

    const content = (
        <Box height="100%" display="flex" flexDirection="column">
            <List>
                {Menu.map((item) => {
                    const Icon = item.icon;
                    return (
                        <ListItem
                            key={item.id}
                            button
                            classes={{ root: classes.listItem }}
                            selected={ isSelected(item) }
                        >
                            <ListItemIcon>
                                <Icon style={{ color: isSelected(item) && '#556cd6' }} />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.ListItemText,
                                }}
                                primary={item.label}
                            >

                            </ListItemText>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )

    return (
        <Hidden>
            <Drawer
                anchor="left"
                classes={{ paper: classes.desktopDrawer }}
                open
                variant="persistent"
            >
                {content}
            </Drawer>
        </Hidden>
    )
}

export default NavBar;