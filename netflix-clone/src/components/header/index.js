import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Container,
  Background,
  Link,
  Group,
  SearchInput,
  Search,
  SearchIcon,
  ButtonLink,
  Picture,
  Dropdown,
  Profile,
  Feature,
  FeatureCallOut,
  Text,
  Logo,
  PlayButton,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Header.SearchInput = function HeaderSearchInput({ children, ...restProps }) {
  return <SearchInput {...restProps}>{children}</SearchInput>;
};
Header.Search = function HeaderSearch({ children, ...restProps }) {
  return <Search {...restProps}>{children}</Search>;
};
Header.SearchIcon = function HeaderSearchIcon({ children, ...restProps }) {
  return <SearchIcon {...restProps}>{children}</SearchIcon>;
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
Header.Picture = function HeaderPicture({ children, ...restProps }) {
  return <Picture {...restProps}>{children}</Picture>;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};
Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
