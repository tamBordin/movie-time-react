import { INavbarFirstNavigate } from "../../models/navbar.model";

export const navbarFirstNavigate: INavbarFirstNavigate[] = [
  { key: "1", value: "navbar.home", link: "/main" },
  { key: "2", value: "navbar.tvShows", link: "/tv" },
  { key: "3", value: "navbar.movies", link: "/movie" },
  {
    key: "4",
    value: "navbar.newAndPopular",
    link: "/latest",
  },
  {
    key: "5",
    value: "navbar.myList",
    link: "/my-list",
  },
];
