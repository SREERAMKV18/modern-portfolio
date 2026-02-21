import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        {/* 1. THE BROWSER TAB TITLE */}
        <title>Sreeram K V | Environmental & Remote Sensing Researcher</title>
        
        {/* 2. GOOGLE SEARCH DESCRIPTION */}
        <meta
          name="description"
          content="Sreeram K V is an Environmental Researcher specializing in Forest and Agro-ecosystem Responses to Climate Variability, Remote Sensing, and Fluvial Geomorphology."
        />
        
        {/* 3. KEYWORDS FOR SEO */}
        <meta
          name="keywords"
          content="remote sensing, gis, geoinformatics, forest ecosystems, climate change, hydrology, geomorphology, python, r, arcgis, qgis, earth engine"
        />
        
        {/* 4. AUTHOR */}
        <meta name="author" content="Sreeram K V" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;