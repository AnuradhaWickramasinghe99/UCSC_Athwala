import React from 'react';
import clsx from 'clsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../../image/project_logo.jpg';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PersonPinOutlinedIcon from '@material-ui/icons/PersonPinOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import Side from './Sidedrawer';
import Dashboard from '../AdminDashboard/Admindash';
import Adminauc from '../Auction/adminauc';
import Approve from '../Auction/approve';
import { useHistory } from "react-router-dom";
import Land from '../LandingPage/home'  //Change the logout direction here
import Chat from '../chat/chat.jsx';
import Donation from '../Donation/Donation_page';
import NoteCause from '../Donation/View_Notecause';
import ClothCause from '../Donation/View_Clothcause';
import DeviceCause from '../Donation/View_Devicecause';
import MoneyCause from '../Donation/View_Moneycause';
import OtherCause from '../Donation/View_Othercause';
import AdminDonationDetails from '../Donation/ViewDonationDetailsAdmin';
import UnionEdit from '../AdminEdit/AdminUnionEdit';
import AdminViewQA from '../QA/Admin_QA';
import AskQA from '../QA/Ask_Q_And_A';
import StdEdit from '../AdminEdit/AdminStudentEdit';
import PstdEdit from '../AdminEdit/AdminPstdEdit';
import CounEdit from '../AdminEdit/AdminCounsellorEdit';
import Aucapprove from '../Auction/adminapprove';
import ViewAdminProductEle from '../Product/Admin_Product_Page_View';
import ViewAdminProductDetails from '../Product/Admin_View_Product_Details'; 
import ViewAdminProductDetailsNote from '../Product/Admin_View_Product_Details_note';
import ViewAdminProductDetailsOther from '../Product/Admin_View_Product_Details_other';
import UnionAdd from '../AdminEdit/AdminUnionAdd';
import AdminListAdd from '../AdminEdit/AdminListAdd';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }, flex1: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);


  const [auth, setAuth] = React.useState(true);
  const [auth1, setAuth1] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleChange1 = (event) => {
    setAuth1(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenu1 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose1 = () => {
    setAnchorE2(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history= useHistory();
  const logout=()=>{
    history.push("/land");
    localStorage.clear();
  }

  return (
    <div className={classes.root}> {/* devide to flex, start from here*/}
      <CssBaseline />
      {/*************************Start of the navigation bar from here**************************************/}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >

        <Toolbar>

 {/*******************************Start of the Line Menu icon**********************/}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
 {/*******************************End of the Line Menu icon**********************/}


          {/*******************************Start of the UCSC Athwala icon**********************/}
          <Typography variant="h6">
            <Box mr={1}>
              <Avatar alt="Remy Sharp" src={Logo} className={classes.medium} fontSize="large" />
            </Box>
          </Typography>
          {/*******************************End of the UCSC Athwala icon**********************/}


          <Typography variant="h4" noWrap className={classes.flex1} ml={3}>
            UCSC අත්වැල
          </Typography>


          {/*******************************Start of the notification icon**********************/}
          {/************auth1, setAuth1, anchorE2, setAnchorE2,handleMenu1,handleClose1 and handleChange1 are for the Notification icon*****************/}
          {auth1 && (<div>

            <Box mr={2}>

              <IconButton aria-label="show 5 new notifications" color="inherit" onClick={handleMenu1}>
                <Badge badgeContent={5} color="secondary">
                  <NotificationsIcon
                    fontSize="large"
                  >
                  </NotificationsIcon>
                </Badge>
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorE2}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open2}
                onClose={handleClose1}
              >
                <MenuItem onClick={handleClose1}>   Notification 1</MenuItem>
                <MenuItem onClick={handleClose1}>   Notification 2</MenuItem>
                <MenuItem onClick={handleClose1}>   Notification 3</MenuItem>
                <MenuItem onClick={handleClose1}><NotificationsActiveOutlinedIcon />View all</MenuItem>
              </Menu>

            </Box>

          </div>
          )}
          {/*******************************End of the notification icon**********************/}


 {/*******************************Start of the Avatar icon**********************/}
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle
                  fontSize="large">
                </AccountCircle>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open1}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><PersonPinOutlinedIcon /> My Profile</MenuItem>
                <MenuItem onClick={logout} ><ExitToAppOutlinedIcon /> Log out</MenuItem>
              </Menu>
            </div>
          )}


 {/*******************************End of the Avatar icon**********************/}
        </Toolbar>

      </AppBar>
      {/********************************End of the Navigation bar**************************************/}


      
      < Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })
        }
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
       <Side />
      </Drawer>
      { <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Typography paragraph> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          lit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>*/}
          <Switch>
          <Route path="/admin/admindashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/admin/approve/:auction_id">
            <Aucapprove />
          </Route>
          <Route path="/admin/adminauc" exact>
            <Adminauc />
          </Route>
          <Route path="/admin/approve" exact>
            <Approve />
          </Route>
            <Route path="/admin/chat" exact>
              <Chat/>
            </Route>
            <Route path="/land" exact>
              <Land/>
            </Route>
            <Route path="/admin/viewcauses" exact>
              <Donation />
            </Route>
            {/* <Route path='/admin/viewNoteCause_details' exact>
              <NoteCause />
          </Route >
          <Route path="/admin/viewClothCause_details" exact>
            <ClothCause />
          </Route>
          <Route path="/admin/viewDeviceCause_details" exact>
            <DeviceCause />
          </Route>
          <Route path="/admin/viewMoneyCause_details" exact>
            <MoneyCause />
          </Route>
          <Route path="/admin/viewOtherCause_details" exact>
            <OtherCause />
          </Route> */}
          <Route path="/admin/viewcausesdetails" exact>
              <AdminDonationDetails />
            </Route>
            <Route path="/admin/unionedit" exact>
            <UnionEdit/>
            </Route>
            <Route path="/admin/stdedit" exact>
              <StdEdit/>
            </Route>
            <Route path="/admin/pstdedit" exact>
              <PstdEdit/>
            </Route>
            <Route path="/admin/counedit" exact>
              <CounEdit/>
            </Route>
            <Route path="/admin/addunion" exact>
              <UnionAdd/>
            </Route>
            <Route path="/admin/addlist" exact>
              <AdminListAdd/>
            </Route>
            <Route path="/admin/AdminViewQA" exact>
              <AdminViewQA />
            </Route>
            <Route path="/admin/AskQA" exact>
              <AskQA/>
            </Route>
            <Route path="/admin/ViewAdminProductEle" exact>
              <ViewAdminProductEle/>
            </Route>
            <Route path="/admin/ViewAdminProductDetails" exact>
              < ViewAdminProductDetails/>
            </Route>
            <Route path="/admin/ViewAdminProductDetailsNote" exact>
              <ViewAdminProductDetailsNote/>
            </Route>
            <Route path="/admin/ViewAdminProductDetailsOther" exact>
              <ViewAdminProductDetailsOther/>
            </Route>
    
          </Switch>
          
        </main> }
    </div >
  );
}
export default Navbar;