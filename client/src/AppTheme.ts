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


// .App {
//     text-align: center;
//   }
  
//   .App-logo {
//     height: 40vmin;
//     pointer-events: none;
//   }
  
//   .App-header {
//     background-color: #f8f8f8;
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: calc(10px + 2vmin);
//     color: white;
//   }
  
//   .App-link {
//     color: #61dafb;
//   }
  
  
  