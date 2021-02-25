import '../App.css';

function Home({searchValue, setSearchValue}) {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='text-black text-xl text-center'>
          Discover beautiful African Images
        </h1>
        <input
          value={searchValue}
          type='search'
          name='search'
          placeholder='Search high free resolution images'
          aria-label='search'
          onChange={e => setSearchValue(e.target.value)}
        />
      </header>
    </div>
  );
}

export default Home;
