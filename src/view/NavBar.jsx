import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "./useStyles";
let switch_content = require("../model/switch-content.json");

export default function NavBar() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      {switch_content.map((e) => (
        <Link
          variant="button"
          color="textPrimary"
          href={e.link}
          className={classes.link}
        >
          {e.item}
        </Link>
      ))}
      
    </Toolbar>
  );
}
