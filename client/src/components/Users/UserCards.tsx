import React, { useState } from 'react';
import { createStyles, makeStyles, GridListTile, Avatar, Card, CardHeader, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton, CardActions, Collapse } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';


export interface IUserCardProps {
    props: {
        nickName: string,
        image: string,
        firstName: string,
        lastName: string,
        intentionStatus: string,
        bandName: string,
        location: string,
        email: string,
        phone: string,
        blurb: string,
    },
    arrLength: number,
    eleIndex: number
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: `rgba(255, 255, 255, 0.8)`,
            justifyContent: 'center',
            textAlign: 'center',
            margin: `10px`,
            padding: `25px`,
            display: `flex`,
            flexDirection: `column`,
            border: `2px`,
            borderStyle: `solid`,
            borderColor: theme.palette.primary.main,
            [theme.breakpoints.down('xl')]: {
                width: `20vw`,
            },
            [theme.breakpoints.down('lg')]: {
                width: `25vw`,
            },
            [theme.breakpoints.down('md')]: {
                width: `30vw`,
            },
            [theme.breakpoints.down('sm')]: {
                width: `50vw`,
            },
            [theme.breakpoints.down('xs')]: {
                width: `60vw`,
            },
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        lastTile: {
            marginBottom: `200px`,
            maxWidth: `95%`
        },
        allTiles: {
            maxWidth: `95%`
        },
        typographySize: {
            maxWidth: `350px`,
        },
        avatar: {
            width: `10rem`,
            height: `10rem`,
            [theme.breakpoints.down('xs')]: {
                width: `7rem`,
                height: `7rem`,
            },
            border: `2px`,
            borderStyle: `solid`,
            borderColor: theme.palette.primary.main
        },
        bandName: {
            fontSize: `.8rem`,
            color: theme.palette.secondary.main,
            marginTop: `15px`
        },
        blurbText: {
            fontSize: `.8rem`,
            fontStyle: `italic`
        },
        listText: {
            fontSize: `.8rem`,
            margin: `-2px`
        },
        cardActions: {
            marginTop: `-15px`
        },
        nicknameText: {
            fontStyle: `italic`,
            margin: `7px`,
        },
    }),
);


const UserCard: React.FC<IUserCardProps> = (props): JSX.Element => {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
            <GridListTile className={props.eleIndex === props.arrLength ? classes.lastTile : classes.allTiles } key={props.props.email} cols={4}>
                <Card className={classes.root} >
                    <CardHeader
                        avatar={<Avatar src={props.props.image} alt={props.props.nickName} className={classes.avatar} />}
                        title={<><Typography>{props.props.firstName}</Typography><Typography className={classes.nicknameText}>{`"${props.props.nickName}"`}</Typography><Typography>{props.props.lastName}</Typography></>}
                        subheader={<Typography className={classes.bandName}>{props.props.bandName}</Typography>}
                    />
                    <Divider />
                    <CardContent>
                        <List dense={true}>
                            <ListItem>
                                <ListItemIcon className={classes.listText}>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText primary={<Typography className={classes.listText}>{props.props.location}</Typography>} disableTypography={true} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon className={classes.listText}>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText primary={<Typography className={classes.listText}>{props.props.email}</Typography>} disableTypography={true}/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon className={classes.listText}>
                                    <PhoneIcon />
                                </ListItemIcon>
                                <ListItemText primary={<Typography className={classes.listText}>{props.props.phone}</Typography>} disableTypography={true}/>
                            </ListItem>
                        </List>
                    </CardContent>
                    <CardActions className={classes.cardActions} disableSpacing>
                        <Typography>{props.props.intentionStatus}</Typography>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography className={`${classes.typographySize} ${classes.blurbText}`} paragraph>{props.props.blurb}</Typography>
                        </CardContent>
                    </Collapse>

                </Card>
            </GridListTile>
    )
}


export default UserCard