import profile_image from '/public/Cyril.jpg';

import Image from 'next/image';

const Cyril = () => {
    return (
        <div className="p-10">
            <div className="max -w-sm rounded overflow-hidden shadow-lg">
                <Image src={profile_image} alt="Picture of the author" width={400} height={400} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-gray-700 text-base">Cyril</div>
                    <p>
                        Cyril est un étudiant de l'ECE Paris, il est en 2ème année de cycle ingénieur.

                    </p>
                    <p>
                        Il est passionné par la cybersécurité.
                    </p>
                    <p>Son exploit : tenir le record du monde d'une piste TrackMania durant une semaine</p>
                    <p>Vous pouvez cliquer
                        <a href="https://github.com/teepol" classNameName="text-gray-500 hover:text-gray-800 font-bold"> ici</a> pour accéder à son Github</p>

                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dev</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C#</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Trackmania</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cybersecurity</span>

                </div>
            </div>
        </div>
    )
};
export default Cyril;