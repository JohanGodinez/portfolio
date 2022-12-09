import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "../translation/es/global.json";
import global_en from "../translation/en/global.json";
import Navbar from '../components/Navbar';

i18next.init({
  interpolation: {escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18next}>
      <Navbar />
      <Component {...pageProps} />
    </I18nextProvider> 
  )
}
