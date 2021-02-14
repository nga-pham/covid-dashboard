import useStyles from "./useStyles"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function Home() {
    const classes = useStyles();
    return (
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          This is the dashboard of current covid situation in different countries. Select <em>Table</em> or <em>Graph</em> in menu for futher detail.
        </Typography>
      </Container>
    )
}