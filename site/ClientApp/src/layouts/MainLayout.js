import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "components/Sidebar/Sidebar.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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

                                <Grid container className={classes.root} spacing={2}>
                                    <Grid item xs={3} fullWidth={true}>
                                        <Grid container spacing={5} fullWidth={true}>
                                            <Grid item>
                                                <TextField
                                                    label="Пол"
                                                    value={((Patient.gender === "m") ? "Мужчина" : "Женщина")}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    label="Рост"
                                                    value="180 см"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    label="Вес"
                                                    value="80 кг"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item fullWidth={true}>
                                                <TextField
                                                    label="Давление"
                                                    value="120 / 80"
                                                    fullWidth={true}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item fullWidth={true}>
                                                <TextField
                                                    label="Курение"
                                                    value="Да"
                                                    fullWidth={true}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item fullWidth={true}>
                                                <TextField
                                                    label="Холестерин"
                                                    value="5,2 ммоль/л"
                                                    fullWidth={true}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={7}>

                                    </Grid>
                                </Grid>
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