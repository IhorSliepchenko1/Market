import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SwiperUI from "./components/UI/Swiper/SwiperUI";
import ListProduct from "./components/ListProduct/ListProduct";
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      {/* <SwiperUI /> */}
      <main className="main container">
        <ListProduct />
      </main>
      <Footer />
    </div>
  );
};

export default App;
