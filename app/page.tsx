import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">

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

      {/* Social Icons */}
      <div className="flex space-x-4 mt-4"> 
        <a href="https://www.tiktok.com/@real_sad_pepe" target="_blank" rel="noopener noreferrer">
          <Image
            src="/tiktok.png" // Replace with your TikTok icon
            alt="TikTok"
            width={32} 
            height={32} 
          />
        </a>
        <a href="https://x.com/real_sad_pepe" target="_blank" rel="noopener noreferrer">
          <Image
            src="/twitter.png" // Replace with your Twitter icon
            alt="Twitter"
            width={32} 
            height={32} 
          />
        </a>
      </div>

    </main>
  );
}

