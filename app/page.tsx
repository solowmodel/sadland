import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
  <div className="fixed top-0 left-0 right-0 text-center p-2 z-10"> 
        <p className="text-xs text-gray-300 font-mono">
          PLEASE SAAR
        </p>
      </div>
      <div className="mb-2 mt-12">  
        <Image
          src="/jeetfrog.jpeg"
          alt="Spin Records logo"
          width={200}
          height={100}
        />
      </div>
    
      <div className="text-center mb-2"> 
        <p className={bebasNeue.className} style={{ fontSize: '40px', color: 'black' }}>
          PLEASE SAAR DO NOT REDEEM
        </p>
      
      </div>

      <a
        href="https://pump.fun/coin/26h6y6Ki1hE7AKVdXKf5pTuK91c5HyVitJwbroPZpump"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4
          ${bebasNeue.className}
        `}
      >
        MINT
      </a>
      ONLY ON PUMP.FUN



    </main>
  );
}

