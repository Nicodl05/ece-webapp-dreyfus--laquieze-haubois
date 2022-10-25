import profile_image from '/public/Nicolas.jpg';
import Image from 'next/image';

const Nicolas = () => {
    return (
        <div className="p-10">

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Image src={profile_image} alt="Picture of the author" width={400} height={400} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-gray-700 text-base">Nicolas</div>
                    <p >
                        Nicolas est un étudiant de l'ECE Paris, il est en 2ème année de cycle ingénieur spécialisé en SI.
                    </p>
                    <p>
                        Il est passionné par le développement logiciel et les nouvelles technologies.
                    </p>
                    <p>Vous pouvez cliquer
                        <a href="https://www.linkedin.com/in/nicolas-dreyfus-laquièze-024532169" className="text-blue-500 hover:text-blue-800 font-bold"> ici </a>
                        pour accéder à son profil LinkedIn ou
                        <a href="https://github.com/Nicodl05" className="text-gray-500 hover:text-blue-800 font-bold"> ici</a> pour accéder à son Github</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dev</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C#</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
                </div>
            </div>
        </div>
    )
};
export default Nicolas;