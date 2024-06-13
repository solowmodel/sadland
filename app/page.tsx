import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="mb-8">
        <Image
          src="/spinny.png"
          alt="Descriptive image alt text"
          width={200}
          height={100}
        />
      </div>
           <p className={bebasNeue.className} style={{ fontSize: '30px', color: 'white' }}>
        Carlsbad, CA
      </p>

      {/* New Text Elements */}
      <div className="text-center mb-4"> 
        <p className="text-xs text-gray-300 font-mono"> 
          CDs | Vinyl | Tapes | DVDs | Posters | Books | Pins | Imports
        </p>
      </div>

 

      {/* Button Container */}
      <div className="flex space-x-4 mt-4">
        <a
          href="https://maps.app.goo.gl/xGaewDgivFPTA1yRA"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded 
            ${bebasNeue.className} w-1/2 flex items-center justify-center
          `}
        >
          Directions
        </a>
        <a
          href="tel:+17604340807"
          className={`
            bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded
            ${bebasNeue.className} w-1/2 flex items-center justify-center
          `}
        >
          Call
        </a>
      </div>
    </main>
  );
}




