
import banner from './assets/WPIBanner.jpeg';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[48vh] items-center justify-center bg-[#4f63f5] bg-cover bg-center bg-no-repeat px-6 py-16 text-white max-[840px]:min-h-[40vh] max-[840px]:px-4 max-[840px]:py-12"
      style={{ backgroundImage: `url(${banner})` }}
    />
  );
}
