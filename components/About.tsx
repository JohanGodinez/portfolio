import React from 'react'
import Image from 'next/image'
import banner from "../public/img/about.jpg";

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-emerald-500">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            provident esse eum labore autem reiciendis libero rerum veritatis
            deserunt sapiente ipsam suscipit soluta, at praesentium pariatur
            minima iste dolore assumenda?
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo porro
            ratione tenetur quos, perspiciatis consequuntur nemo, mollitia
            dolores iure voluptate ducimus maxime soluta, corrupti vero ad minus
            placeat dolore molestiae?
          </p>
          <p>Check out some of my lastest projects.</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl' src={banner} alt='image-programing' width={500} height={1000} />
        </div>
      </div>
    </div>
  );
}

export default About