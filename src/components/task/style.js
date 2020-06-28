import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),

    },
    underline: {
        borderBottom: '1px solid grey',
        width: '50px',
        fontWeight: '500',
        fontSize: '0.875rem',
        color: 'rgba(0, 0, 0, 0.54)'
    },
    paper: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
        elevation: 1,
        position: 'relative',
    },
    btn: {
        marginLeft: theme.spacing(1),
    },
    typo: {
        whiteSpace: 'pre-wrap',

    }
}));
export default useStyles;