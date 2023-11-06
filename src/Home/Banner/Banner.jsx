

const Banner = () => {
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
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default Banner;