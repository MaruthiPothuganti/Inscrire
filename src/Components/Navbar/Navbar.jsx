import { NavLink, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FiMenu, CgClose, BsFillMoonFill } from "../Icons";
import { routes } from "../routes";
import { useNotes } from "../../Context/NoteContext";
import { useAuth } from "../../Context/AuthContext";

export const Navbar = () => {
  const { setNoteModal } = useNotes();
  const { authState } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();
  return (
    <Popover className="relative bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 border-b-2 border-blue-500">
        <div className="flex justify-between items-center py-5 md:justify-start md:space-x-10">
          <NavLink to="/HomePage">
            <h1 className="text-4xl font-semibold">
              In
              <span className="text-blue-500">Scrire</span>
            </h1>
          </NavLink>

          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  hover:outline-none hover:ring-2 hover:ring-inset hover:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <FiMenu className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="-mr-2 -my-2 md">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Dark Mode</span>
                <BsFillMoonFill className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="h-8 w-auto sm:h-10">Inscrire</h1>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <CgClose className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
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
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </NavLink>
                  ))}
                  <div>
                    <button
                      type="button"
                      className="px-5 py-2.5 w-full text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                      onClick={() => {
                        token ? setNoteModal(true) : navigate("/Login");
                        navigate("/HomePage");
                      }}
                    >
                      + Create Note
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
