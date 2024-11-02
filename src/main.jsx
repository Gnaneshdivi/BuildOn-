import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createAppKit } from '@reown/appkit/react'
import { mainnet, arbitrum, base, scroll, polygon } from '@reown/appkit/networks'

import { WagmiConfig, WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

const queryClient = new QueryClient();
const projectId = '1560b788d2e89577d09b12c770d06c0d';
const networks = [mainnet, arbitrum,base, scroll, polygon];

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
});
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <WagmiProvider config={wagmiAdapter.wagmiConfig}>
    <App />
    </WagmiProvider>
  </StrictMode>,
)
