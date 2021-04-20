import { Hidden, List, ListItem } from "@material-ui/core";
import { Link } from "gatsby-plugin-react-i18next";
import React, { FC } from "react";

type Props = {
  linkList: {
    to: string;
    text: string;
    sub?: {
      to: string;
      text: string;
    }[];
  }[];
};

const NavBar: FC<Props> = ({ linkList }) => {
  return (
    <Hidden smDown>
      <List className="top-menu ml-auto">
        {linkList.map((link, index) => (
          <ListItem
            key={`${link.text.toLowerCase().replace(" ", "-")}-${index}`}
            className={link.sub ? "dropdown" : ""}
          >
            <Link to={link.to} activeClassName="active">
              {link.text}
            </Link>
            {link.sub && (
              <List className="dropdown-list">
                {link.sub.map(sub => (
                  <Link key={sub.to} to={sub.to} activeClassName="active">
                    <ListItem button>{sub.text}</ListItem>
                  </Link>
                ))}
              </List>
            )}
          </ListItem>
        ))}
      </List>
    </Hidden>
  );
};

export default NavBar;
