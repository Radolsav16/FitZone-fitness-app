import { Link } from "react-router"

export default function HeroFeature(){
    return(
        <>

          <section className="feature" id="feature">
                <div className="container">
                    <div className="row">
        
                        <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                            <h2 className="mb-3 text-white" >Are You Ready to Push Your Limits?</h2>
        
                            <h6 className="mb-4 text-white" >Take on the Challenge! </h6>
        
                            <p>Join our community and take on exciting fitness challenges that will motivate and inspire you to achieve your goals. Explore a variety of challenges designed for all fitness levels and connect with like-minded individuals.</p>
        
                            <Link to="/fitzone/challenges" className="btn custom-btn bg-color mt-3" data-toggle="modal" data-target="#membershipForm">See Challenges</Link>
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