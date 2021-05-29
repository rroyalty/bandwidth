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
            width: `auto`,
            margin: `10px`,
            padding: `25px`,
            display: `flex`,
            flexDirection: `column`
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
            marginBottom: `500px`,
            maxWidth: `95%`
        },
        allTiles: {
            maxWidth: `95%`
        },
        typography: {
            maxWidth: `270px`
        }
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
                        avatar={<Avatar src={props.props.image} alt={props.props.nickName} />}
                        title={<Typography>{`${props.props.firstName} "${props.props.nickName}" ${props.props.lastName}`}</Typography>}
                        subheader={<Typography>{props.props.bandName}</Typography>}
                    />
                    <Divider />
                    <CardContent>
                        {/* <Typography className={classes.blurb}>{props.props.blurb}</Typography> */}
                        <List dense={true}>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText primary={props.props.location} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText primary={props.props.email} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <PhoneIcon />
                                </ListItemIcon>
                                <ListItemText primary={props.props.phone} />
                            </ListItem>
                        </List>
                    </CardContent>
                    <CardActions disableSpacing>
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
                            <Typography className={classes.typography} paragraph>{props.props.blurb}</Typography>
                        </CardContent>
                    </Collapse>

                </Card>
            </GridListTile>
    )
}


export default UserCard