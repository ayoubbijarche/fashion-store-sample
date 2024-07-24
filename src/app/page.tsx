import Nav from "./component/navbar";
import Navauth from "./component/authnavbar";
import Slider from "./component/slider";
import { roboto } from "./lib/fonts";


const Home = () => {
  return(
    <main className={`flex flex-col ${roboto.className}`}>
      <Nav/>
      <Slider/>
    </main>
  )
}

export default Home

