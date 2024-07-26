export default function Footer() {
  return (
    <>
      <div className="relative z-0 translate-y-10">
        <div className="absolute sm:scale-100 bottom-0 z-0 w-screen h-max bg-cover bg-center overflow-hidden">
          <img className="cover " src="bgtruetrue.png" />
        </div>
      </div>
      <div>
        <footer className="relative footer bg-neutral text-neutral-content p-10 z-[99]">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </>
  );
}
