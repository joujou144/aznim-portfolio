import { CURRENT_BOOKS, FAV_BOOKS } from "@/lib/data";

const Bookshelf = () => {
  return (
    <div className="py-6 border-t divider grid grid-cols-1 gap-y-6 mid-md:gap-y-0 mid-md:grid-cols-3">
      <div className="source-code-sm">
        <h4>Bookshelf</h4>
      </div>
      <div className="mid-md:px-6 quattro-regular">
        <h4 className="text-stone-500 mb-4 source-code-xs">New favourites</h4>
        <ul className="flex flex-col gap-6 capitalize">
          {FAV_BOOKS.map(({ author, title }) => (
            <li key={author} className="list-none">
              <p className="text-[0.9rem] mid-md:text-[1rem]">{title}</p>
              <p className="opacity-50 text-[0.9rem]">{author}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mid-md:px-6 quattro-regular">
        <h4 className="text-stone-500 mb-4 source-code-xs">
          Currently reading
        </h4>
        <ul className="flex flex-col gap-6 capitalize">
          {CURRENT_BOOKS.map(({ author, title }) => (
            <li key={author} className="list-none">
              <p className="text-[0.9rem] mid-md:text-[1rem]">{title}</p>
              <p className="opacity-60 text-[0.9rem]">{author}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bookshelf;
