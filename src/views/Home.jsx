import '../App.css';
import {SearchIcon, HamburgerIcon} from '../components/Icons';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.png';
import Nav from '../components/Nav';

function Home() {
  const images = [
    {image: image1},
    {image: image2},
    {image: image3},
    {image: image4},
    {image: image5},
    {image: image6},
  ];
  return (
    <div
      style={{minHeight: 'calc(100vh - 30px)'}}
      className='relative lg:grid lg:grid-cols-sidebar lg:my-12 min-h-screen max-w-6xl mx-auto'
    >
      <div className='order-2 pb-20 lg:pb-0'>
        <header className='w-11/12 mx-auto mt-8'>
          <div className='flex justify-end lg:hidden'>
            <HamburgerIcon />
          </div>

          <h1
            // style={{fontSize: '4ch'}}
            // max-w-mxwh
            className='text-70 text-ch font-semibold leading-tight mt-4 mb-6 md:max-w-none md:w-full md:text-5xl lg:text-5xl lg:max-w-xl lg:leading-extra-loose'
          >
            Display beautiful African Images
          </h1>

          <div className='flex bg-white rounded-lg px-8 py-4'>
            <SearchIcon />
            <input
              className='w-full ml-4'
              type='search'
              name='search'
              placeholder='Search high free resoluton images'
            />
          </div>
        </header>
        <main className='w-11/12 mx-auto my-4'>
          <p className='text-60 text-sm md:text-xl'>
            <strong>Trending: </strong>
            Flower, Wallpapers, Backgrounds, Happy, Love
          </p>

          <section className='grid grid-cols-3 gap-5 py-12'>
            {images.map(image => {
              return (
                <div
                  style={{
                    backgroundImage: `url('${image.image}')`,
                    height: '20vw',
                    minHeight: '99px',
                    maxHeight: '200px',
                  }}
                  className='w-full rounded-3xl bg-center bg-no-repeat bg-cover md:h-52'
                ></div>
              );
            })}
            {/* h-28 */}
          </section>
        </main>
      </div>
      <Nav />
    </div>
  );
}

export default Home;
