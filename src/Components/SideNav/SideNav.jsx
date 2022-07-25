import "./sidenav.css";
import { NavLink } from "react-router-dom";
import { routes } from "../routes";
import { useNotes } from "../../Context/NoteContext";

export const SideNav = () => {
  const { setNoteModal } = useNotes();

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

        <div>
          <button
            type="button"
            className="px-5 py-2.5 w-3/4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            onClick={() => setNoteModal(true)}
          >
            + Create Note
          </button>
        </div>
      </nav>
    </aside>
  );
};
