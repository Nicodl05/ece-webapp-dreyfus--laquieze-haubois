function footer() {
  return (
    <footer className="text-xl margin-top:auto position:absolute bottom-0 left-0 z-20 p-4 w-full md:flex md:items-center md:justify-between md:p-6 border-t border-blue-400 bg-[#007178]  dark:border-gray-600 dark:bg-gray-700 shadow-xl">
      <div className=" sm:text-center font-bold">
        © 2022 <a href="https://www.ece.fr/" className="hover:underline"></a>●
        All Rights Reserved by Nicolas and Cyril
      </div>
      <ul className="flex flex-wrap items-center mt-3 text-md   sm:mt-0">
        <li>
          <a
            href="/about"
            className="mr-4 hover:text-white hover:underline md:mr-6 "
          >
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:text-white hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:text-white hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a
            href="/contacts"
            className=" mr-4 hover:text-white hover:underline md:mr-6"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Nicodl05/ece-webapp-dreyfus--laquieze-haubois"
            className="hover:underline hover:text-white"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default footer;
