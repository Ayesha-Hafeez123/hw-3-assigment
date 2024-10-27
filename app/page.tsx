import React from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />

      <section className="bg-pink-300 text-white text-center py-20">
        <h2 className="text-black text-4xl font-bold">Welcome to Ice Cream Paradise</h2>
        <p className="text-white mt-4 text-lg">The sweetest place to satisfy your cravings!</p>
      </section>

      <section id="about" className=" bg-sky-200 bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold">About Us</h3>
          <p className="mt-4 text-gray-600">
            At Ice Cream Paradise, we bring you the finest flavors made from natural ingredients. Our mission is to spread happiness, one scoop at a time!
          </p>
        </div>
      </section>

      <section id="flavors" className="bg-yellow-50 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Our Flavors</h3>
          <p className="mt-4 text-gray-700">From classic vanilla to exotic mango, we have flavors for everyone!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="text-red-900 bg-yellow-100 p-4 shadow rounded">🍫 Chocolate</div>
            <div className="text-red-600  p-4 bg-sky-100 shadow rounded">🍓 Strawberry</div>
            <div className="text-yellow-400 p-4 bg-violet-100 shadow rounded">🍦 Vanilla</div>
            <div className=" text-yellow-500 p-4 bg-orange-100 shadow rounded">🍌 Banana</div>
            <div className=" text-yellow-700 p-4 bg-green-200 shadow rounded">🥭 Mango</div>
            <div className="text-purple-500 p-4 bg-red-100 shadow rounded">🍇 Grape</div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-16" 
    style={{ backgroundImage: "url('https://png.pngtree.com/background/20230401/original/pngtree-summer-ice-cream-paradise-picture-image_2247984.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
>
    <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold">Gallery</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
            <Image src="https://barefeetinthekitchen.com/wp-content/uploads/2023/06/Salted-Caramel-Ice-Cream-BFK-9-1-of-1.jpg" 
            alt="Ice Cream 1"
            width={300}
            height={400}
            className="rounded shadow w-[300px] h-[400px] object-cover"/>
            <Image src="https://joyfoodsunshine.com/wp-content/uploads/2020/06/homemade-chocolate-ice-cream-recipe-5.jpg" alt="Ice Cream 2" 
             height={400}
             width={300}
             className="rounded shadow w-[300px] h-[400px] object-cover"/> 
            <Image src="https://www.recipetineats.com/tachyon/2018/07/Strawberry-Ice-Cream-No-Churn_3b.jpg" alt="" 
            height={400}
            width={300}
           className="rounded shadow w-[300px] h-[400px] object-cover"/>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFEomp-hjEY2dle-LObwkgKXWPNdr0UT0pad6g-HL7fXOCgSI0z9ARQA-JHWfEG-HFJ0&usqp=CAU" alt="Ice Cream 4" 
             height={400}
             width={300}
            className="rounded shadow w-[300px] h-[400px] object-cover"/>
             <Image src="https://img.freepik.com/premium-photo/beautiful-vintage-plum-ice-cream-with-purple_999671-8695.jpg" alt="Ice Cream 4"   
              height={400}
              width={300}
             className="rounded shadow w-[300px] h-[400px] object-cover"/>
            <Image src="https://www.amummytoo.co.uk/wp-content/uploads/2022/03/mango-ice-cream-recipe-SQUARE.jpg" alt="Ice Cream 4"  
             height={400}
             width={300}
            className="rounded shadow w-[300px] h-[400px] object-cover"/>
            <Image src="https://img.freepik.com/premium-photo/image-tropical-paradise-inspired-coconut-flavor-ice-cream_394462-2432.jpg" alt="Ice Cream 4" 
             height={400}
             width={300}
            className="rounded shadow w-[300px] h-[400px] object-cover"/>
           <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuG-up2p9E4c82c7hcDkMjogWdd2QMA6jA1uztobiL5GqPtZIELq0TIJv5XNLrv4qlfYQ&usqp=CAU" alt="Ice Cream 4"  
            height={400}
            width={300}
           className="rounded shadow w-[300px] h-[400px] object-cover"/>


        </div>
    </div>
</section>

      <section id="contact" className="bg-purple-200 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold">Contact Us</h3>
          <p className="mt-4 text-gray-600">Have any questions? We would love to hear from you!</p>
          <form className="mt-8 max-w-lg mx-auto">
            <div className=" bg-blue-200 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded"
                rows={4}
                required
              />
            </div>
            <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-yellow-300" >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
