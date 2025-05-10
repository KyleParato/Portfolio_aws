//navbar component
import Resume from "@/Resume_KyleParato.pdf"

export const Navbar = () => {
  return(
    <nav className="flex-none w-screen h-auto bg-white rounded-5xl z-20 shadow-lg shadow-orange-300/40">
      <div className="flex-1 flex justify-center items-center mr-auto">
        <ul className="list-style-none">
        <div className="divide-x-2 divide-solid divide-orange-400">
          <div className="hover:bg-orange-300/50 flex-1 inline-block hover:rounded-l-md">
            <li className="flex-1 m-4 l font-medium sm:text-base md:text-xl lg:text-3xl" data-twe-nav-item-ref> 
              <a href="/" data-twe-nav-link-ref>About</a>
            </li>
          </div>
          <div className="hover:bg-orange-300/50 flex-1 inline-block">
            <li className="flex-1 m-4 l font-medium sm:text-base md:text-xl lg:text-3xl" data-twe-nav-item-ref> 
              <a href="/projects" data-twe-nav-link-ref>Projects</a>
            </li>
          </div>
          <div className="hover:bg-orange-300/50 flex-1 inline-block">
            <li className="flex-1 m-4 l font-medium sm:text-base md:text-xl lg:text-3xl" data-twe-nav-item-ref>
              <a href="/skills" data-twe-nav-link-ref>Skills</a>
            </li>
          </div>
          <div className="hover:bg-orange-300/50 flex-1 inline-block">
            <li className="flex-1 m-4 l font-medium sm:text-base md:text-xl lg:text-3xl" data-twe-nav-item-ref>
              <a href="/contact" data-twe-nav-link-ref>Contact</a>
            </li>
          </div>
          <div className="hover:bg-orange-300/50 flex-1 inline-block hover:rounded-r-md">
            <li className="flex-1 m-4 l font-medium sm:text-base md:text-xl lg:text-3xl" data-twe-nav-item-ref>
              <a target="_blank" href={Resume} data-twe-nav-link-ref>Resume</a>
            </li>
          </div>
        </div>
        </ul>    
      </div>   
    </nav>
  );
};
