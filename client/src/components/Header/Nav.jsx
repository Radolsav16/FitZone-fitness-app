import {Link } from 'react-router-dom'

export default function Nav(){
    return(
        <>
               <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">

            <Link className="navbar-brand" to="/">FitZone</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-lg-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link smoothScroll">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/fitzone/about" className="nav-link smoothScroll">About Us</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/fitzone/challanges" className="nav-link smoothScroll">Challanges</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/fitzone/create-challange" className="nav-link smoothScroll">Create Challange</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/fitzone/blog" className="nav-link smoothScroll">Blog</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/fitzone/register" className="nav-link smoothScroll">Register</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/fitzone/login" className="nav-link smoothScroll">Login</Link>
                    </li>

                </ul>
            </div>

        </div>
    </nav>
        </>
    )
}