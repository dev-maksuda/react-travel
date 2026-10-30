import Navbar from './section/navbar/Navbar.jsx'
import Banner from './section/banner/Banner.jsx'
import Destination from './section/destination/Destination.jsx'
import Package from './section/package/Package.jsx'
import Destination2 from './section/destination2/Destination2.jsx'
// import Gallery from './section/gallery/Gallery.jsx'
import Counter from './section/counter/Counter.jsx'
import Newsletter from './section/newsletter/Newsletter.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Destination/>
      <Package/>
      <Destination2/>
      {/* <Gallery/> */}
      <Counter/>
      <Newsletter/>
    </>
  )
}

export default App

