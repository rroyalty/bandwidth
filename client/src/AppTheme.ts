import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

let appTheme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500]
        },
        secondary: {
            main: red[500]
        },
    },
    typography: {
        fontFamily: [
            'RocknRoll One',
            'sans-serif',
        ].join(','),
        fontSize: 12
    },
    spacing: 4,
});
appTheme = responsiveFontSizes(appTheme);
    

export default appTheme;