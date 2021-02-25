import '../App.css';
import {HomeIcon, ProfileIcon, MessageIcon, SettingsIcon} from './Icons';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className='flex justify-around py-6 bg-black'>
      <Link className='cursor-pointer' to='/'>
        <HomeIcon />
      </Link>
      <Link className='cursor-pointer' to='/about'>
        <ProfileIcon />
      </Link>
      <Link className='cursor-pointer' to='/message'>
        <MessageIcon />
      </Link>
      <Link className='cursor-pointer' to='/settings'>
        <SettingsIcon />
      </Link>
    </div>
  );
}

export default Nav;
