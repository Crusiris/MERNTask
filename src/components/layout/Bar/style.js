import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },

    title: {
        flexGrow: 1,
    },

    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
        }
    },

}));

export default useStyles;