import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { ChakraProvider } from "@chakra-ui/react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import type { AppProps } from "next/app";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { RiseWallet } from "@rise-wallet/wallet-adapter";
import { TrustWallet } from "@trustwallet/aptos-wallet-adapter";
import { SpikaWallet } from "@spika/aptos-plugin";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AptosWalletAdapterProvider
        plugins={[
          new PetraWallet(),
          new PontemWallet(),
          new MartianWallet(),
          new RiseWallet(),
          new TrustWallet(),
          new SpikaWallet(),
        ]}
        autoConnect={true}
      >
        <Component {...pageProps} />
        <Analytics />
      </AptosWalletAdapterProvider>
    </ChakraProvider>
  );
}
