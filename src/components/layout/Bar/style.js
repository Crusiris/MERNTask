import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    
}));

export default useStyles;