import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container">
      <div class="row justify-content-between">
        <div class="col">
          <Link href="/">
            <Image src="/vercel.svg" width={100} height={60} />
          </Link>
        </div>
        <div class="col-6">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <div class="col">Menu</div>
      </div>
    </div>
  );
}
