import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import { ReactComponent as AlgoliaIcon } from "../../images/svg-icons/algolia.svg";
import { ReactComponent as ReactIcon } from "../../images/svg-icons/react.svg";
import { ReactComponent as GraphqlIcon } from "../../images/svg-icons/graphql.svg";
import { ReactComponent as JssIcon } from "../../images/svg-icons/jss.svg";
import { ReactComponent as MaterialUiIcon } from "../../images/svg-icons/material-ui.svg";
import { ReactComponent as ReduxIcon } from "../../images/svg-icons/redux.svg";
import { ReactComponent as GatsbyIcon } from "../../images/svg-icons/gatsby.svg";
import { ReactComponent as WebpackIcon } from "../../images/svg-icons/webpack.svg";
import { ReactComponent as BabelIcon } from "../../images/svg-icons/babel.svg";
import { ReactComponent as NetlifyIcon } from "../../images/svg-icons/netlify.svg";

const styles = (theme) => ({
  stack: {
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      padding: "1em 2em",
    },
  },
  box: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  link: {
    display: "inline-block",
    padding: "8px",
  },
  svg: {
    width: "22px",
    height: "22px",
  },
  header: {
    textAlign: "center",
    fontSize: ".85em",
    letterSpacing: ".3em",
    width: "100%",
    margin: "0 0 .8em 0",
    fontWeight: 300,
  },
});

const StackIcons = (props) => {
  const { classes } = props;

  const items = [
    { name: "gatsby", url: "https://www.gatsbyjs.org/", comp: GatsbyIcon },
    { name: "react", url: "https://reactjs.org/", comp: ReactIcon },
    { name: "graphql", url: "http://graphql.org/", comp: GraphqlIcon },
    // { name: "jss", url: "http://cssinjs.org/", comp: JssIcon },
    // { name: "material-ui", url: "https://material-ui-next.com/", comp: MaterialUiIcon },
    // { name: "redux", url: "https://redux.js.org/", comp: ReduxIcon },
    // { name: "algolia", url: "https://www.algolia.com/", comp: AlgoliaIcon },
    // { name: "webpack", url: "https://webpack.js.org/", comp: WebpackIcon },
    // { name: "babel", url: "https://babeljs.io/", comp: BabelIcon },
    // { name: "netlify", url: "https://www.netlify.com/", comp: NetlifyIcon }
  ];

  return <div className={classes.stack}></div>;
};

StackIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(StackIcons);
