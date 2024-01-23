import '../App.css'

const Navbar = () => {
  return (
    <div>
         <nav>
            <ul className='Navbar'>
            <li><a href="#welcome">Welcome</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar