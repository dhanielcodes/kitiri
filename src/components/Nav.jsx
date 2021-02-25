import '../App.css';
import {
  HomeIcon,
  ProfileIcon,
  MessageIcon,
  SettingsIcon,
  QuestionIcon,
  LogoutIcon,
  Logo,
} from './Icons';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className='absolute bottom-5 left-0 right-0 mx-auto w-11/12 flex justify-around items-center py-6 bg-black rounded-3xl lg:px-12'>
      <Link className='cursor-pointer hidden lg:block' to='/'>
        <Logo />
      </Link>

      <div className='flex justify-around items-center w-full max-w-3xl'>
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
        <Link className='cursor-pointer hidden md:block' to='/help'>
          <QuestionIcon />
        </Link>
      </div>

      <Link className='cursor-pointer hidden lg:block' to='/logout'>
        <LogoutIcon />
      </Link>
    </div>
  );
}

export default Nav;
