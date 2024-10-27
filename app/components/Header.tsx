
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-pink-200 text-white p-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold"><b>Ice Cream Paradise By<br></br> Ayesha Mughal</b></h1>
        <nav className="space-x-4">
          <Link href="/" className=" text-white hover:bg-red-300">Home</Link>
          <Link href="#about" className="text-white hover:bg-red-300">About Us</Link>
          <Link href="#flavors" className="text-white hover:bg-red-300">Flavors</Link>
          <Link href="#gallery" className="text-white hover:bg-red-300">Gallery</Link>
          <Link href="#contact" className="text-white hover:bg-red-300">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
