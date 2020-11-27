import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Footer from "components/Footer/Footer.js";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

const useStyles = makeStyles(styles);

export default function MainLayout(props) {

    const classes = useStyles();

    console.log(props);

    return (
        <div className={classes.wrapper}>
            <Sidebar>
                <p>{props.Patient.firstName}</p>
                <Button color="primary" onClick={props.NextPatient}>Default</Button>
            </Sidebar>
            <div className={classes.mainPanel}>
                        <CustomTabs
                            title="Tasks:"
                            headerColor="primary"
                            tabs={[
                                {
                                    tabName: "Карточка",
                                    tabIcon: BugReport,
                                    tabContent: (
                                        <p>Карточка</p>
                                    )
                                },
                                {
                                    tabName: "Факторы риска",
                                    tabIcon: Code,
                                    tabContent: (
                                        <p>Факторы риска</p>
                                    )
                                },
                                {
                                    tabName: "Server",
                                    tabIcon: Cloud,
                                    tabContent: (
                                        <p>Server</p>
                                    )
                                }
                            ]}
                        />
            </div>
        </div>
    );
}