import { TbAdjustmentsHorizontal } from "../Icons";

export const SearchInput = () => {
  return (
    <div className="w-3/4 md:w-3/5">
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative z-1">
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Search Notes..."
        />
        <button
          type="button"
          className="text-white absolute right-2.5 bottom-2.5  hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400"
        >
          <TbAdjustmentsHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};
