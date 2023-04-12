export default function Hero() {
  return (
    <section className='hero'>
      <picture className='hero--image'>
        <source srcSet='photo-grid.webp' type='image/webp' />
        <img src='photo-grid.png' className='hero--image' />
      </picture>
      <h1 className='hero--title'>Online Experiences</h1>
      <p className='hero--subtitle'>
        Join unique interactive activities led by one-of-a-kind-hosts-all
        without leaving home.
      </p>
    </section>
  );
}
