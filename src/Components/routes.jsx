import {
  AiOutlineHome,
  MdLabelOutline,
  MdOutlineArchive,
  FaRegTrashAlt,
  CgProfile,
} from "./Icons";

export const routes = [
  {
    name: "HomePage",
    pathName: "/HomePage",
    icon: AiOutlineHome,
  },
  {
    name: "Labels",
    pathName: "/Labels",
    icon: MdLabelOutline,
  },
  {
    name: "Archive",
    pathName: "/Archive",
    icon: MdOutlineArchive,
  },
  {
    name: "Trash",
    pathName: "/Trash",
    icon: FaRegTrashAlt,
  },
  {
    name: "Profile",
    pathName: "/Profile",
    icon: CgProfile,
  },
];
