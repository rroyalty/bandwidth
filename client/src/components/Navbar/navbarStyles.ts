import { makeStyles } from '@material-ui/core/styles';

const navbarStyles = makeStyles({
    navDisplayFlex: {
        display: `inline-flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`,
        justifyContent: `center`
    },
    navbar: {
        backgroundColor: `#181D27`,
        borderBottomWidth: `2px`,
        borderLeftWidth: `2px`,
        borderRightWidth: `2px`,
        borderColor: `#181D27`,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        border: `solid`,
        // maxWidth: '95vw',
        // marginLeft: -24
    },
    iconLinks: {
        display: `inline-flex`,
        height: `48px`,
        width: `48px`,

    },
    rightAppBar: {
        marginLeft: `auto`,
        marginRight: 10

    },
    justifyContent: {
        display: `flex`,
        // flexDirection: `column`,
        justifyContent: `center`
    },
    mobileNav: {
        // backgroundColor: `#181D27`,
        display: `flex`,
        flexDirection: `column`,
        textDecoration: `none`,
        textTransform: `uppercase`,
        // color: `#fff !important`,
        justifyContent: `flex-end`,
        // justifyContent: `center`
    }
});

export default navbarStyles