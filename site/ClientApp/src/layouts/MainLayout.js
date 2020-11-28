import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Sidebar from "components/Sidebar/Sidebar.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DescriptionIcon from '@material-ui/icons/Description';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import PeopleOutline from '@material-ui/icons/PeopleOutline';
import WarningIcon from '@material-ui/icons/Warning';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Eco from '@material-ui/icons/Eco';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

const useStyles = makeStyles(styles);

export default function MainLayout(props) {

    const classes = useStyles();

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.action.disabled,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    const { NextPatientCallback, Patient } = props;

    const start = new Date(2016, 0, 1);
    const end = Date.now();
    const lastAppointment = new Date(+start + Math.random() * (end - start));
    const poll1 = new Date(+start + Math.random() * (end - start));
    const poll2 = new Date(+start + Math.random() * (end - start));
    const poll3 = new Date(+start + Math.random() * (end - start));

    return (
        <div className={classes.wrapper}>
            <Sidebar Patient={Patient} NextPatientCallback={NextPatientCallback} />
            <div className={classes.mainPanel}>
                <CustomTabs
                    title={`${Patient.lastName} ${Patient.firstName[0]}.${Patient.middleName[0]}.`}
                    headerColor="info"
                    tabs={[
                        {
                            tabName: "Карточка",
                            tabIcon: DescriptionIcon,
                            tabContent: (
                                <Grid container className={classes.fullWidthGrid} spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Card shadow>
                                                    <CardHeader color="info" icon>
                                                        <CardIcon color="info">
                                                            <DateRangeIcon />
                                                        </CardIcon>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <h4 className={classes.cardTitle}>Дата последнего осмотра {lastAppointment.toLocaleDateString()}</h4>
                                                    </CardBody>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6}>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={4}>
                                            <Grid item xs={4}>
                                                <TextField
                                                    label="Пол"
                                                    fullWidth={true}
                                                    value={((Patient.gender === "m") ? "Мужчина" : "Женщина")}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    label="Наличие сахарного диабета"
                                                    value={(Patient.diabetic) ? "Да" : "Нет"}
                                                    fullWidth={true}
                                                    InputProps={
                                                        (Patient.diabetic) ? {
                                                            readOnly: true,
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <WarningIcon color="error" />
                                                                </InputAdornment>
                                                            )
                                                        } : {
                                                                readOnly: true
                                                            }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    label="Курение"
                                                    value={(Patient.smoker) ? "Да" : "Нет"}
                                                    fullWidth={true}
                                                    InputProps={
                                                        (Patient.smoker) ? {
                                                            readOnly: true,
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <WarningIcon color="error" />
                                                                </InputAdornment>
                                                            )
                                                        } : {
                                                                readOnly: true
                                                            }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    label="Рост"
                                                    value={`${Patient.height} см`}
                                                    fullWidth={true}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    label="Вес"
                                                    value={`${Patient.weight} кг`}
                                                    fullWidth={true}
                                                    InputProps={
                                                        ((Patient.height - Patient.weight - 110) < 0) ? {
                                                            readOnly: true,
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <WarningIcon color="error" />
                                                                </InputAdornment>
                                                            )
                                                        } : {
                                                                readOnly: true
                                                            }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    label="Артериальное давление"
                                                    value={`${Patient.sbp} / ${Patient.dbp}`}
                                                    fullWidth={true}
                                                    InputProps={
                                                        (((Patient.sbp) > 130) || ((Patient.dbp) > 85)) ? {
                                                            readOnly: true,
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <WarningIcon color="error" />
                                                                </InputAdornment>
                                                            )
                                                        } : {
                                                                readOnly: true
                                                            }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    label="Общий холестерин"
                                                    value={`${Patient.cholesterol.toString()[0]},${Patient.cholesterol.toString()[1]} ммоль/л`}
                                                    fullWidth={true}
                                                    InputProps={
                                                        (Patient.cholesterol > 45) ? {
                                                            readOnly: true,
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <WarningIcon color="error" />
                                                                </InputAdornment>
                                                            )
                                                        } : {
                                                                readOnly: true
                                                            }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    label="Содержание глюкозы в крови"
                                                    value={`${Patient.sugar.toString()[0]},${Patient.sugar.toString()[1]} ммоль/л`}
                                                    fullWidth={true}
                                                    InputProps={
                                                        (Patient.sugar > 55) ? {
                                                            readOnly: true,
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <WarningIcon color="error" />
                                                                </InputAdornment>
                                                            )
                                                        } : {
                                                                readOnly: true
                                                            }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        },
                        {
                            tabName: "Физическая активность",
                            tabIcon: DirectionsBikeIcon,
                            tabContent: (
                                <Grid container className={classes.fullWidthGrid} spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Card shadow>
                                                    <CardHeader color="info" icon>
                                                        <CardIcon color="info">
                                                            <DateRangeIcon />
                                                        </CardIcon>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <h4 className={classes.cardTitle}>Дата анкетирования {poll1.toLocaleDateString()}</h4>
                                                    </CardBody>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6}>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={4}>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        },
                        {
                            tabName: "Социальные факторы",
                            tabIcon: PeopleOutline,
                            tabContent: (
                                <Grid container className={classes.fullWidthGrid} spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Card shadow>
                                                    <CardHeader color="info" icon>
                                                        <CardIcon color="info">
                                                            <DateRangeIcon />
                                                        </CardIcon>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <h4 className={classes.cardTitle}>Дата анкетирования {poll2.toLocaleDateString()}</h4>
                                                    </CardBody>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6}>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={4}>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        },
                        {
                            tabName: "Окружающая среда",
                            tabIcon: Eco,
                            tabContent: (
                                <Grid container className={classes.fullWidthGrid} spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Card shadow>
                                                    <CardHeader color="info" icon>
                                                        <CardIcon color="info">
                                                            <DateRangeIcon />
                                                        </CardIcon>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <h4 className={classes.cardTitle}>Дата анкетирования {poll3.toLocaleDateString()}</h4>
                                                    </CardBody>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6}>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={4}>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        },
                        {
                            tabName: "Прогноз",
                            tabIcon: TrendingUpIcon,
                            tabContent: (
                                <Grid container className={classes.fullWidthGrid} spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Card shadow>
                                                    <CardHeader color={(Patient.prediction.currentRisk === 0) ? "success" : "danger"} icon>
                                                        <CardIcon color={(Patient.prediction.currentRisk === 0) ? "success" : "danger"}>
                                                            {(Patient.prediction.currentRisk === 0) ?
                                                                <ThumbUpIcon /> : <WarningIcon />}
                                                        </CardIcon>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <h4 className={classes.cardTitle}>{(Patient.prediction.currentRisk === 0) ? "Риск сердечно-сосудистых заболеваний не выявлен" : "Выявлен риск сердечно-сосудистых заболеваний"}</h4>
                                                        <p>{(Patient.prediction.currentRisk === 0) ? "Хотя риск сердечно-сосудистых заболеваний не выявлен, необходимо обратить внимание на следующие факторы." : "Основное влияние на риск сердечно-сосудистых заболеваний оказывают следующие факторы."}</p>
                                                    </CardBody>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Card shadow>
                                                    <CardHeader color="success" icon>
                                                        <CardIcon color="success">
                                                            <TrendingUpIcon />
                                                        </CardIcon>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <h4 className={classes.cardTitle}>Риск может быть исключен</h4>
                                                        <p>Для снижения влияния указанных факторов необходимо выполнять предложенные рекомендации.</p>
                                                    </CardBody>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <TableContainer component={Paper}>
                                                <Table className={classes.table} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <StyledTableCell>Фактор</StyledTableCell>
                                                            <StyledTableCell align="right">Степень влияния</StyledTableCell>
                                                            <StyledTableCell align="right">Рекомендации</StyledTableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {Patient.prediction.features.map((row) => (
                                                            (row.currentContribution > 15) ?
                                                                <StyledTableRow key={row.name}>
                                                                    <StyledTableCell component="th" scope="row">
                                                                        {row.feature}
                                                                    </StyledTableCell>
                                                                    <StyledTableCell align="right">{row.currentContribution}</StyledTableCell>
                                                                    <StyledTableCell align="right">Текст рекомендации.</StyledTableCell>
                                                                </StyledTableRow>
                                                                : ""
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        }
                    ]}
                />
            </div>
        </div>
    );
}