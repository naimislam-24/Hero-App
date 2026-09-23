import Image from "next/image";
import footerLogo from "@/app/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#001B2E] px-5 py-8 text-white sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-5 sm:flex-row">
          <div className="flex items-center gap-2">
            <Image src={footerLogo} width={50} height={50} alt="Footer Img" />
            <h2 className="text-sm font-semibold">
              HERO<span className="text-white">.IO</span>
            </h2>
          </div>
          <div className="flex flex-col items-center gap-2 sm:items-end mr-16">
            <p className="text-sm font-medium">Social Links</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-[#001B2E] transition hover:bg-blue-400"
              >
                𝕏
              </a>
              <a
                href="#"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-[#001B2E] transition hover:bg-blue-400"
              >
                in
              </a>
              <a
                href="#"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-[#001B2E] transition hover:bg-blue-400"
              >
                f
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-5 text-center">
          <p className="text-xs text-white/70">
            Copyright © 2025 - All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
