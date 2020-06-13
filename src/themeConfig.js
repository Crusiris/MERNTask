import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import teal from '@material-ui/core/colors/teal';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[500]
        },
        disabled: {
            main: green[500]
        }
    }
});

export default theme;