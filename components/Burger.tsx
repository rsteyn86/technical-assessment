import Image from 'next/image'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

const HamburgerMenu = () => (
  <Menu  className={ "my-menu" } customBurgerIcon={<HamburgerIcon />} customCrossIcon={<CrossIcon />} width={'320px'} right htmlClassName={"bm-html"} bodyClassName={"bm-body"}>
    <Link href="/" className='bm-logo-wrapper'>
      <Image
        src="/workflow-mark-blue-600.svg"
        alt="ShopriteX Logo"
        className='bm-logo'
        width={35}
        height={32}
        priority
      />
    </Link>
    <Links />
  </Menu>
)

const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" role="img">
    <title id="menuIcon">Menu Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)
const CrossIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" role="img">
    <title id="crossIcon">Cross Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export const Links = () => (<>
  <Link href="/" className='bm-item'>Home</Link>
  <Link href="/" className='bm-item'>About</Link>
  <Link href="/" className='bm-item'>Services</Link>
  <Link href="/" className='bm-item'>Testimonials</Link>
  <Link href="/" className='bm-item'>Portfolio</Link>
  <Link href="/" className='bm-item'>Contact</Link>
</>)

export default HamburgerMenu