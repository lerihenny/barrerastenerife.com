import React from "react";
import { Tooltip } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon/SvgIcon";

interface FooterItemProps {
  detail?: boolean;
  title: string;
  value: number;
  component: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const FooterItem: React.FC<FooterItemProps> = ({
  detail,
  title,
  value,
  component,
}) => {
  const Component = component;

  if (detail === true) {
    return (
      <span>
        <strong>{`${title}: `}</strong>
        {value}
      </span>
    );
  }

  return (
    <Tooltip title={title} placement="top">
      <span className="flex-center">
        <Component className="mr-3" />
        {value}
      </span>
    </Tooltip>
  );
};

export default FooterItem;
