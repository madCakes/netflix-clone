import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex-grow bg-black w-full">
      <div className="flex items-center min-w-[400px] max-h-[350px] px-12 pt-[70px] mx-[400px] bg-black text-center text-link-grey relative">
        <div className="flex flex-1 flex-col pb-5 mx-[50px] max-w-[900px]">
          <p className="min-w-full text-left mb-7 text-base">
            Questions? Call <a href="tel:0808 196 5391">0808 196 5391</a>
          </p>
          <ul className="flex flex-wrap flex-row">
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">1</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">2</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">3</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">4</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">5</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">6</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">7</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">8</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">9</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">10</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">11</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">12</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">13</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">14</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">15</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">16</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">17</a>
              </Link>
            </li>
            <li className="mb-4 pr-3 w-56 text-left text-base">
              <Link href="/">
                <a href="#">18</a>
              </Link>
            </li>
          </ul>
          <p className="min-w-full text-left mt-6 mb-8 text-sm">Netflix</p>
        </div>
      </div>
    </footer>
  );
}
