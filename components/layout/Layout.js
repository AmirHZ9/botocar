import Link from "next/link";
import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className="text-center w-1/4 m-auto p-3 bg-[#befa00] mt-1 mb-5">
        <Link href="/">
          <h2 className="border-b-2 border-black w-fit m-auto text-3xl font-bold mb-2">BOTOCAR</h2>
          <p>Choose and buy your car </p>
        </Link>
      </header>
      <div>{children}</div>
      <footer className="text-center ">
        <p className="w-full">

        BotoStart Next.js courses | botoCar Project &copy;
        </p>
      </footer>
    </>
  );
}

export default Layout;
