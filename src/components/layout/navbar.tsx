import { Link } from "../navigation/link";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 px-3 py-5">
      <Link
        href="/"
        className="border-transparent text-xl font-bold hover:border-neutral-200 hover:!bg-transparent hover:!text-neutral-200"
      >
        ReactRTK
      </Link>
      <nav className="float-right flex gap-2">
        <Link
          href="/"
          className="border-transparent hover:border-neutral-200 hover:!bg-transparent hover:!text-neutral-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="border-transparent hover:border-neutral-200 hover:!bg-transparent hover:!text-neutral-200"
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
