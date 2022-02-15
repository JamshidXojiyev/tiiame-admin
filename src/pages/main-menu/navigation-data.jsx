import { ReactComponent as NavigationsIcon } from "../../assets/icons/menu-icons/navigations.svg";
import { ReactComponent as PolygonsIcon } from "../../assets/icons/menu-icons/polygons.svg";
import { ReactComponent as NewsIcon } from "../../assets/icons/menu-icons/news.svg";
import ParentClasses from "../Navigations/parent-classes/parent-classes";
import ChildClasses from "../Navigations/child-classes/child-classes";
import Polygons from "../Polygons/polygons";
import News from "../News/news";

export const NavigationData = [
  {
    name: "Navigations",
    icon: <NavigationsIcon />,
    parent: [
      {
        name: "Parent classes",
        url: "/navigations/parent-classes",
        component: ParentClasses,
      },
      {
        name: "Child classes",
        url: "/navigations/child-classes",
        component: "",
        component: ChildClasses,
      },
    ],
  },
  {
    name: "Polygons",
    url: "/polygons",
    icon: <PolygonsIcon />,
    component: Polygons,
  },
  {
    name: "News",
    url: "/news",
    icon: <NewsIcon />,
    component: News,
  },
];
