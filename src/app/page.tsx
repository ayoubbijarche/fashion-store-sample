import Nav from "./component/navbar";
import Navauth from "./component/authnavbar";
import Slider from "./component/slider";
import Products from "./component/products";
import { roboto } from "./lib/fonts";


const Home = () => {
  return(
    <main className={`flex flex-col ${roboto.className}`}>
      <Nav/>
      <Slider/>
      <Products/>
    </main>
  )
}

export default Home

