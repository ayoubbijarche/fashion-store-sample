import Slider from "./component/slider";
import Products from "./component/products";
import { roboto } from "./lib/fonts";
import Mynav from "./component/mynavbar";
import Footer from "./component/footer";

const Home = () => {
  return(
    <main className={`flex flex-col ${roboto.className}`}>
      <Mynav/>
      <Slider/>
      <Products/>
      <Footer/>
    </main>
  )
}

export default Home

