import type { NextConfig } from "next";
import { createConfig, http } from 'wagmi';
import { metaMask } from 'wagmi/connectors';
import { mainnet, linea, lineaSepolia } from 'wagmi/chains';

const nextConfig: NextConfig = {
  /* config options here */
   ssr: true, // Enable for server-side rendering
  chains: [mainnet, linea, lineaSepolia],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(),
    [linea.id]: http(),
    [lineaSepolia.id]: http(),
  
}};

export default nextConfig;




// import { createConfig, http } from 'wagmi';
// import { metaMask } from 'wagmi/connectors';
// import { mainnet, linea, lineaSepolia } from 'wagmi/chains';

// const config = createConfig({
//   ssr: true, // Enable for server-side rendering
//   chains: [mainnet, linea, lineaSepolia],
//   connectors: [metaMask()],
//   transports: {
//     [mainnet.id]: http(),
//     [linea.id]: http(),
//     [lineaSepolia.id]: http(),
//   },
// });
