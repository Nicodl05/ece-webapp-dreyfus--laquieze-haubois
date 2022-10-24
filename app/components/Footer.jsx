function footer() {
  // code by https://flowbite.com/
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-400  ">
      <span class="text-sm text-black-500 sm:text-center dark:text-black-400">© 2022 <a >ECE Paris</a>. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-black-500 dark:text-black-400 sm:mt-0">
        <li>
          <a href="/about" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
          <a href="/contacts" class="mr-4 hover:underline md:mr-6">Contact</a>
        </li>
        <li>
          <a href="https://github.com/Nicodl05/ece-webapp-dreyfus--laquieze-haubois" class="hover:underline">Github</a>
        </li>
      </ul>
    </footer>
  );
}
export default footer;
