import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Banner = () => {
    useEffect(()=>
    {
        AOS.init({

            duration:1000,
            once: false,
            delay:300

        })
    }
    
    ,[])
    return (
        <div >
           <div className="h-[500px] bg-blue-600 " >
           <div className="hero
           bg-contain bg-center
            h-full w-full " style={{backgroundImage: 'url(https://i.ibb.co/fqdhNcY/download.png)',
        }
        
        }>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello Students</h1>
      <p data-aos = "fade-up"
      className="mb-5"> Learning that occurs in real-time, where students and instructors interact simultaneously.Software platforms that provide tools for course management, content delivery, and assessment.</p>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default Banner;