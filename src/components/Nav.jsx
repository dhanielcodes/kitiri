import '../App.css';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="flex justify-around text-blue py-6">
    <Link className="cursor-pointer" to="/">Home</Link>
    <Link className="cursor-pointer" to="/about">About</Link>
  </div>
    
  );
}

export default Nav;
