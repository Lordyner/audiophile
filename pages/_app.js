import '@/styles/index.css';
import { GlobalContextProvider } from '@/Store/GlobalContext';

import Overlay from '@/Components/Overlay';
export default function App({ Component, pageProps }) {

  return <>
    <GlobalContextProvider>
      <Overlay />
      <Component {...pageProps} />
    </GlobalContextProvider >
  </>
}
