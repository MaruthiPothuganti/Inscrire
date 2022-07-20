import "./sidenav.css";
import { NavLink } from "react-router-dom";
import { routes } from "../routes";

export function SideNav() {
  const getActiveStyle = (isActive) => {
    color: isActive ? "green" : "blue";
  };

  return (
    <aside className="hidden  md:grid h-full w-64 p-8">
      <div className="mt-6">
        <nav className="grid gap-y-8">
          {routes.map((item) => (
            <NavLink
              to={item.pathName}
              key={item.name}
              className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
              style={getActiveStyle}
            >
              <item.icon
                className="flex-shrink-0 h-6 w-6 text-blue-500"
                aria-hidden="true"
              />
              <span className="ml-3 text-base font-medium text-gray-900">
                {item.name}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
