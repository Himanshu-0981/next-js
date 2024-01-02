import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Logo</h1>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pages/about">About</Link>
        </li>
        <li>
          <Link href="/pages/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
