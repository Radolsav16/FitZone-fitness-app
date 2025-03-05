import { Link } from 'react-router-dom'



export default function Hero(){
   
    return(
        <>
 <section className="hero d-flex flex-column justify-content-center align-items-center" id="home">

            <div className="bg-overlay"></div>

               <div className="container">
                    <div className="row">

                         <div className="col-lg-8 col-md-10 mx-auto col-12">
                              <div className="hero-text mt-5 text-center">

                                    <h6>Stronger Together!</h6>

                                    <h1 className="text-white">Join <span className='fitzone'>FitZone</span> Your Ultimate Fitness Community</h1>
                                    

                                    <Link to="/fitzone/register" className="btn custom-btn mt-3" >Register</Link>

                                    <Link to="/fitzone/login" className="btn custom-btn bordered mt-3">Login</Link>
                                   
                              </div>
                         </div>

                    </div>
               </div>
     </section>


     <section className="feature" id="feature">
        <div className="container">
            <div className="row">

                <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                    <h2 className="mb-3 text-white" >Are You Ready to Push Your Limits?</h2>

                    <h6 className="mb-4 text-white" >Take on the Challenge! </h6>

                    <p>Join our community and take on exciting fitness challenges that will motivate and inspire you to achieve your goals. Explore a variety of challenges designed for all fitness levels and connect with like-minded individuals.</p>

                    <Link to="/fitzone/challanges" className="btn custom-btn bg-color mt-3" data-toggle="modal" data-target="#membershipForm">See Challenges</Link>
                </div>

                <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                    <h2 className="mb-3 text-white" >Explore Our Blog for Fitness</h2>

                    <h6 className="mb-4 text-white">Stay always informed!</h6>

                    <p>Dive into our blog for the latest fitness tips, expert advice, and inspiring stories. Whether you're looking for workout routines, nutrition guidance, or motivational content, our blog has everything you need to stay on track and achieve your fitness goals.</p>
                    <Link to="/fitzone/blog" className="btn custom-btn bg-color mt-3" data-toggle="modal" data-target="#membershipForm">Blog</Link>
                </div>


               </div>
            </div>
    </section>
        </>
    )
}