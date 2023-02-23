import Slider from "../layout/Slider"
import facebook from '../../dist/img/facebook.webp';
import twitter from '../../dist/img/twitter.webp';
import youtube from '../../dist/img/youtube.webp';
import instagram from '../../dist/img/instagram.webp';

let images = {
  img: [
    facebook,
    twitter,
    youtube,
    instagram,
  ]
}

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>;
            <Slider { ...images}/>
        </div>
      )
};

export default Home;