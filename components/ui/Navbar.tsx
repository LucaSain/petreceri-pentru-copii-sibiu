"use client";

export default function Navbar() {
  const links = [
    "Mascote",
    "Ateliere",
    "Jocuri",
    "Modelaj baloane",
    "Pictura pe fata",
    "Decoruri",
    "Loc de joaca",
  ];

  return (
    <div className="navbar z-[999] bg-base-100 shadow-xl fixed rounded-b-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links.map((link, i) => (
              <li key={"nav-mobile" + i}>
                <a
                  onClick={() => {
                    // @ts-ignore
                    document
                      .getElementById(i + "bento")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Petreceri copii</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link, i) => (
            <li key={"nav-desktop" + i}>
              <a
                onClick={async () => {
                  // @ts-ignore
                  const el = document.getElementById(i + "bento");
                  // @ts-ignore
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
                  // @ts-ignore
                  const style = el.style;
                  el?.style.setProperty("box-shadow", "0 0 30px 10px #ff0");
                  // delete the border after 2 seconds
                  setTimeout(() => {
                    // @ts-ignore
                    el.style = style;
                  }, 1000);
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Contact</a>
      </div>
    </div>
  );
}
