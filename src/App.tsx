import React from "react"
import { HomeContainer } from "./styles/index"
import { Hero } from "./components"
import { Navbar } from "./components/navbar"
import { Films } from "./components/body/films"
import { Movie } from "./components/body/movie"
import { GoldenGlobe } from "./components/body/goldenglobe"
import { Series } from "./components/body/series"
import { Price } from "./components/body/price"
import { Collections } from "./components/body/collections"
import { Continue } from "./components/body/continue"
import { Switch } from "./components/body/switch"
import { Kids } from "./components/body/kids"
import { FAQ } from "./components/body/faq"
import { Studios } from "./components/body/studios"
import { Footer } from "./components/body/footer"


const App = () => {

  return (
    <HomeContainer mode="dark">
      <Navbar />
      <Hero />
      <Films />
      <Movie />
      <GoldenGlobe />
      <Series />
      <Price />
      <Collections />
      <Continue />
      <Switch />
      <Kids />
      <FAQ />
      <Studios />
      <Footer />
    </HomeContainer>
  );
}
export default App