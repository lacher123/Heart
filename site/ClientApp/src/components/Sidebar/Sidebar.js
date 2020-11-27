/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";

import avatar from "assets/img/faces/marc.jpg";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
    const classes = useStyles();
    // verifies if routeName is the one active (in browser input)
    function activeRoute(routeName) {
        return window.location.href.indexOf(routeName) > -1 ? true : false;
    }
    const { color, logo, image, NextPatientCallback, Patient } = props;

    return (
        <div>
            <Hidden smDown implementation="css">
                <Drawer
                    anchor={props.rtlActive ? "right" : "left"}
                    variant="permanent"
                    open
                    classes={{
                        paper: classNames(classes.drawerPaper, {
                            [classes.drawerPaperRTL]: props.rtlActive
                        })
                    }}
                >

                    <Card profile>
                        <CardAvatar profile>
                            <img src={avatar} alt="..." />
                        </CardAvatar>
                        <CardBody profile>                            
                            <h4 className={classes.cardTitle}>{Patient.firstName}</h4>
                            <h4 className={classes.cardTitle}>{Patient.middleName}</h4>
                            <h4 className={classes.cardTitle}>{Patient.lastName}</h4>
                            <h6 className={classes.cardCategory}>ID</h6>
                            <Button onClick={NextPatientCallback} color="primary" round>
                                Следующий пациент
                            </Button>
                        </CardBody>
                    </Card>

                </Drawer>
            </Hidden>
        </div>
    );
}
