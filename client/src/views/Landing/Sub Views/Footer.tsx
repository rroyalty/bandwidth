import { List, ListItem, ListItemText, BottomNavigation, Grid, Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: `flex`,
        flexDirection: `column`,
        backgroundColor: theme.palette.primary.main,
        justifyContent: `center`,
        alignItems: `center`,
        width: `100%`,
        height: `auto`,
        margin: `0`,
    },
    typography: {
        display: `flex`,
        color: `white`,
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: `row`,
    },
    iconLinks: {
        display: `flex`,
        flexDirection: `row`,
        height: `48px`,
        width: `48px`,

    },
}));


const Footer: React.FC = (): JSX.Element => {

    const classes = useStyles();

    const companyLinks: { title: string, path: string }[] = [
        { title: `Home`, path: `https://www.youtube.com/watch?v=YddwkMJG1Jo` },
        { title: `Jobs`, path: `https://www.youtube.com/watch?v=YddwkMJG1Jo` },
        { title: `FAQ`, path: `https://www.youtube.com/watch?v=YddwkMJG1Jo` },
        { title: `Contact`, path: `https://www.youtube.com/watch?v=YddwkMJG1Jo` },
    ]

    const communityLinks: { title: string, path: string }[] = [
        { title: `For Artists`, path: `https://www.youtube.com/watch?v=YddwkMJG1Jo` },
        { title: `For Venues`, path: `https://www.youtube.com/watch?v=YddwkMJG1Jo` },
        { title: `For Vendors`, path: `https://www.youtube.com/watch?v=YddwkMJG1Jo` },
        { title: `For Investors`, path: `https://www.youtube.com/watch?v=YddwkMJG1Jo` },
        { title: `Advertising`, path: `https://www.youtube.com/watch?v=YddwkMJG1Jo` },
    ]

    const usefulLinks: { title: string, path: string }[] = [
        { title: `Download App`, path: `https://www.youtube.com/watch?v=YddwkMJG1Jo` },
        { title: `Support`, path: `https://www.youtube.com/watch?v=YddwkMJG1Jo` },
        { title: `Privacy`, path: `https://www.youtube.com/watch?v=YddwkMJG1Jo` },
    ]

// Make more fluid.
    return (
        <BottomNavigation className={classes.root} style={{ padding: "25px" }}>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
                spacing={10}
            >
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.typography} style={{ fontSize: ".6rem" }}>
                        Bandwidth brought to you by Bjorn Yourey, Cathy Marchese, Toni Powell, Jonathan Hammond, and Ryan Royalty.  &copy;2021
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography className={classes.typography}>
                        Company
                    </Typography>
                    <List component="nav" aria-labelledby="main navigation" >
                        {companyLinks.map(({ title, path }) => (
                            <ListItem button key={title}>
                                <a target="_blank" rel="noopener noreferrer" href={path} key={title} className={classes.typography}>
                                    <ListItemText primary={title} />
                                </a>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography className={classes.typography}>
                        Community
                    </Typography>
                    <List component="nav" aria-labelledby="main navigation" >
                        {communityLinks.map(({ title, path }) => (
                            <ListItem button key={title}>
                                <a target="_blank" rel="noopener noreferrer" href={path} key={title} className={classes.typography}>
                                    <ListItemText primary={title} />
                                </a>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography className={classes.typography}>
                        Useful Links
                    </Typography>
                    <List component="nav" aria-labelledby="main navigation" >
                        {usefulLinks.map(({ title, path }) => (
                            <ListItem button key={title}>
                                <a target="_blank" rel="noopener noreferrer" href={path} key={title} className={classes.typography}>
                                    <ListItemText primary={title} />
                                </a>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </BottomNavigation>
    )
}

export default Footer;