import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "./useStyles";

export default function NavBar() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      <nav>
        <Link
          variant="button"
          color="textPrimary"
          href="#"
          className={classes.link}
        >
          Home
        </Link>
        <Link
          variant="button"
          color="textPrimary"
          href="#"
          className={classes.link}
        >
          Table
        </Link>
        <Link
          variant="button"
          color="textPrimary"
          href="#"
          className={classes.link}
        >
          Graph
        </Link>
      </nav>
    </Toolbar>
  );
}
