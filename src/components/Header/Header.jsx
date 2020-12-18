import React, { useCallback, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { createStyles } from '@material-ui/core';
import { push } from 'connected-react-router';
import { useDispatch } from "react-redux";
import SearchTags from './SearchTag';

const useStyles = makeStyles(() =>
    createStyles({
        wrap: {
            flexGrow: 1,
        },
        bar: {
            backgroundColor: "white",
            color: "#357a38",
        },
        left: {
            marginRight: "100px"
        },
        right: {
            marginLeft: "100px"
        }

    }))

const Header = () => {
    const theme = useTheme();
    const [openleft, setOpenleft] = useState(false);
    const [openright, setOpenright] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();

    const [leftSidebar, setleftSidebar] = useState(false);
    const [rightSidebar, setrightSidebar] = useState(false);

    const leftDrawerToggle = useCallback((event, isOpen) => {
        setleftSidebar(isOpen)
    }, [setleftSidebar]);


    const rightDrawerToggle = useCallback((event, isOpen) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setrightSidebar(isOpen)
    }, [setrightSidebar]);
    return (
        <div className={classes.wrap}>
            <AppBar position="fixed" className={classes.bar} >
                <Toolbar className="spacebetween" >
                    <IconButton
                        color="inherit"
                        aria-label="open left"
                        edge="end"
                        onClick={(e) => leftDrawerToggle(e, true)} className={classes.left}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="title">Feel Memory</div>
                    <IconButton
                        color="inherit"
                        aria-label="open right"
                        edge="end"
                        onClick={(e) => rightDrawerToggle(e, true)}
                        className={classes.right}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                open={leftSidebar}
                anchor="left"
            >
                <SearchTags leftDrawerToggle={leftDrawerToggle} />
            </Drawer>
            <Drawer
                open={rightSidebar}
                anchor="right"
                onClick={(e) => rightDrawerToggle(e, false)}
            >
                <button onClick={() => dispatch(push('/'))}>top</button>
                <button onClick={() => dispatch(push('/new'))}>新規投稿</button>
            </Drawer>
        </div>
    )
}

export default Header