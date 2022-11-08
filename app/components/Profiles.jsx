import Image from 'next/image';
import nicolas from '/public/Nicolas.jpg';
import cyril from '/public/Cyril.jpg';
import Link from "next/link";

const Profiles = () => {
    return (
       
        <div className="p-10 grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10"> 

            <div class="rounded overflow-hidden shadow-lg border border-gray-500   ">
                <div className="text-center">
                <Image src={nicolas} alt="Picture of the author" width={400} height={400} flex justifyContent />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-gray-200 text-center ">Nicolas</div>
                    <p >
                        Nicolas est un étudiant de l'ECE Paris, il est en 2ème année de cycle ingénieur spécialisé en SI.
                    </p>
                    <p>
                        Il est passionné par le développement logiciel et les nouvelles technologies.
                    </p>
                    <p>Vous pouvez cliquer
                        <a href="https://www.linkedin.com/in/nicolas-dreyfus-laquièze-024532169" className="text-blue-500 hover:text-blue-800 font-bold"> ici </a>
                        pour accéder à son profil LinkedIn ou
                        <a href="https://github.com/Nicodl05" className=" text-blue-500 hover:text-blue-800 font-bold"> ici</a> pour accéder à son Github</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:hover:bg-blue-500 hover:bg-[#007178] hover:text-white">Dev</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:hover:bg-blue-500 hover:bg-[#007178] hover:text-white">Java</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:hover:bg-blue-500 hover:bg-[#007178] hover:text-white">Dev Logiciel</span>

                    <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:hover:bg-blue-500 hover:bg-[#007178] hover:text-white">
                        <Link href="/Nicolas">Voir son profil</Link>
                    </span>
                </div>
            </div>
            <div class="rounded overflow-hidden shadow-lg border border-gray-500 ">
                <div className="text-center">
                <Image src={cyril} alt="Picture of the author" width={400} height={400} />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-gray-200 text-center    ">Cyril</div>
                    <p>
                        Cyril est un étudiant de l'ECE Paris, il est en 2ème année de cycle ingénieur spécialisé en SI.

                    </p>
                    <p>
                        Il est passionné par l'informatique et plus particulièrement la cybersécurité.
                    </p>
                    <p>Son exploit : tenir le record du monde d'une piste TrackMania durant une semaine !!</p>
                    <p>Vous pouvez cliquer
                        <a href="https://github.com/teepol" className="text-blue-500 hover:text-blue-800 font-bold"> ici</a> pour accéder à son Github</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:hover:bg-blue-500 hover:bg-[#007178] hover:text-white">Dev</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:hover:bg-blue-500 hover:bg-[#007178] hover:text-white">C#</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:hover:bg-blue-500 hover:bg-[#007178] hover:text-white">Cybersecurity</span>
                    <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hdark:hover:bg-blue-500 hover:bg-[#007178] hover:text-white">
                        <Link href="/Cyril">Voir son profil</Link>
                    </span>                   
                </div>
            </div>
        </div>        
    )
};

export default Profiles;