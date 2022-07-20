import "./sidenav.css";
import { NavLink } from "react-router-dom";
import { routes } from "../routes";

export function SideNav() {
  return (
    <aside className="hidden  md:grid h-full p-8">
      <nav className="grid gap-y-8 w-64 mt-6">
        {routes.map((item) => (
          <NavLink
            to={item.pathName}
            key={item.name}
            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
          >
            <item.icon
              className="flex-shrink-0 h-6 w-6 text-blue-500"
              aria-hidden="true"
            />
            <span className="ml-3">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
