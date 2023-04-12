export default function Navbar() {
  return (
    <nav className='nav'>
      <picture className='nav--logo'>
        <source srcSet='/airbnb-logo.webp' type='image/webp' />
        <img src='/airbnb-logo.png' alt='logo' className='nav--logo' />
      </picture>
    </nav>
  );
}
