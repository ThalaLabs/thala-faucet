import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { ChakraProvider } from "@chakra-ui/react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import type { AppProps } from "next/app";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AptosWalletAdapterProvider
        plugins={[new PetraWallet(), new PontemWallet(), new MartianWallet()]}
        autoConnect={true}
      >
        <Component {...pageProps} />
      </AptosWalletAdapterProvider>
    </ChakraProvider>
  );
}
