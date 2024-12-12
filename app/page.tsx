import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* Sticky Item List (bg-black removed) */}
     

      <div className="mb-2 mt-12"> 
        <Image
          src="/pepout.png"
          alt="Spin Records logo"
          width={200}
          height={100}
        />
      </div>
    
      <div className="text-center mb-2"> 
        <p className={bebasNeue.className} style={{ fontSize: '40px', color: 'black' }}>
          SAD PEPE
        </p>
      
      </div>


  

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className={`
          bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4
          ${bebasNeue.className}
        `}
      >
        MINT
      </a>
    </main>
  );
}




