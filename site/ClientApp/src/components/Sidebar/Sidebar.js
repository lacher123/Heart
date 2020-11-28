/*eslint-disable*/
import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";

import m0 from "assets/img/faces/m0.jpg";
import m1 from "assets/img/faces/m1.jpg";
import m2 from "assets/img/faces/m2.jpg";
import m3 from "assets/img/faces/m3.jpg";
import m4 from "assets/img/faces/m4.jpg";
import m5 from "assets/img/faces/m5.jpg";
import m6 from "assets/img/faces/m6.jpg";
import m7 from "assets/img/faces/m7.jpg";
import m8 from "assets/img/faces/m8.jpg";
import m9 from "assets/img/faces/m9.jpg";
import m10 from "assets/img/faces/m10.jpg";

import f0 from "assets/img/faces/f0.jpg";
import f1 from "assets/img/faces/f1.jpg";
import f2 from "assets/img/faces/f2.jpg";
import f3 from "assets/img/faces/f3.jpg";
import f4 from "assets/img/faces/f4.jpg";
import f5 from "assets/img/faces/f5.jpg";
import f6 from "assets/img/faces/f6.jpg";
import f7 from "assets/img/faces/f7.jpg";
import f8 from "assets/img/faces/f8.jpg";
import f9 from "assets/img/faces/f9.jpg";
import f10 from "assets/img/faces/f10.jpg";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

const faces = [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];

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
                            <img src={faces[Math.floor((Math.random() * 10) + ((Patient.gender === "m") ? 0 : 10))]} alt="..." />
                        </CardAvatar>
                        <CardBody profile>                            
                            <h4 className={classes.cardTitle}>{Patient.firstName}</h4>
                            <h4 className={classes.cardTitle}>{Patient.middleName}</h4>
                            <h4 className={classes.cardTitle}>{Patient.lastName}</h4>
                            <h6 className={classes.cardCategory}>{Math.floor((Math.random() * 10) + ((Patient.gender==="m") ? 0 : 10))}</h6>
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
