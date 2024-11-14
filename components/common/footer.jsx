import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="flex items-center text-white text-xl sm:text-3xl cursor-pointer">
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="" width={200} height={200}></Image>
          </Link>
        </div>
        <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-green-600 text-lg font-bold mb-4 uppercase">
              Contact us
            </h2>
            <ul>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-gray-400 flex transition-colors duration-300 uppercase"
                >
                  <Mail className="m-1 mb-2" />
                  hello@animalslover.com
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-gray-400  flex transition-colors duration-300 uppercase"
                >
                  <Phone className="m-1 mb-2" />
                  918252167751
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-gray-400 flex transition-colors duration-300 uppercase"
                >
                  <MapPin className="m-1 mb-2" />
                  Block A,5th Floor, Mourya Lok,Patna
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                ></Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-green-600 text-lg font-bold mb-4 uppercase">
              Animalslover
            </h2>
            <div className="flex space-x-4">
              <ul className="list-disc list-inside">
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-gray-400 transition-colors duration-300 uppercase"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-gray-400 transition-colors duration-300 uppercase"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-gray-400 transition-colors duration-300 uppercase"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-gray-400 transition-colors duration-300 uppercase"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-gray-400 transition-colors duration-300 uppercase"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-gray-400 transition-colors duration-300 uppercase"
                  >
                    Dog Senses
                  </Link>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
          <div>
            <h2 className="text-green-600 text-lg font-bold mb-4 uppercase">
              Lifestyles
            </h2>
            <ul className="list-disc list-inside">
              <li>
                <Link
                  href={"/"}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  Dog Beaches
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  Dog Campgrounds
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  Dog Parks
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  Dog Trails
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <form action="#" className="w-full flex flex-col gap-4 mt-3">
              <input
                className="py-1 px-3 text-black md:text-lg rounded-md "
                type="text"
                name="name"
                placeholder="Name"
              />

              <input
                className="py-1 px-3 text-black md:text-lg rounded-md "
                type="email"
                name="email"
                placeholder="Email"
              />

              <button className="bg-red-700 hover:bg-red-600 font-bold py-2 px-3 rounded-md">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </footer>
      <div className="w-full bg-green-600 text-white ">
        <div className="flex justify-end items-center w-[90%] m-auto gap-5 py-3">
          <Link
            href={"https://www.unnamed.com"}
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <Image
              src="/pngimages/youtube.png"
              alt="abb"
              width={50}
              height={50}
            />
          </Link>
          <Link
            href={"https://www.instagram.com"}
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <Image
              src="/pngimages/instagram.png"
              alt="abb"
              width={50}
              height={50}
            />
          </Link>
          <Link
            href={"https://www.linkedin.com"}
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <Image
              src="/pngimages/linkedin.png"
              width={50}
              height={50}
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
