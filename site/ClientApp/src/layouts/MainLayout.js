import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "components/Sidebar/Sidebar.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import DescriptionIcon from '@material-ui/icons/Description';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

const useStyles = makeStyles(styles);

export default function MainLayout(props) {

    const classes = useStyles();

    const { NextPatientCallback, Patient } = props;

    return (
        <div className={classes.wrapper}>
            <Sidebar Patient={Patient} NextPatientCallback={NextPatientCallback} />
            <div className={classes.mainPanel}>
                <CustomTabs
                    title={`${Patient.lastName} ${Patient.firstName[0]}.${Patient.middleName[0]}.`}
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: "Карточка",
                            tabIcon: DescriptionIcon,
                            tabContent: (
                                <p>Карточка</p>
                            )
                        },
                        {
                            tabName: "IPAQ",
                            tabIcon: EmojiPeopleIcon,
                            tabContent: (
                                <p>IPAQ</p>
                            )
                        },
                        {
                            tabName: "SCORE",
                            tabIcon: FavoriteIcon,
                            tabContent: (
                                <p>SCORE</p>
                            )
                        },
                        {
                            tabName: "Риск",
                            tabIcon: WarningIcon,
                            tabContent: (
                                <p>Риск</p>
                            )
                        },
                        {
                            tabName: "Рекомендации",
                            tabIcon: InfoIcon,
                            tabContent: (
                                <p>Рекомендации</p>
                            )
                        }
                    ]}
                />
            </div>
        </div>
    );
}