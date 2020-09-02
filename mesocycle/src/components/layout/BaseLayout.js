import React from 'react'
import { Link } from "react-router-dom";
import'./BaseLayoutStyle.css'


const BaseLayout = (props) => {
    return (
        <>
            {/* Header Starts Here */}
            <div className="container-fluid w-100">
                <div className="row header">
                    <div className="col-sm col-md col-lg d-flex w-100 align-self-center h-100 ">
                    <img className="headerImage img-fluid mx-auto" src="../images/MESOCYCLE LOGO_red_bcg.PNG" alt=""></img>
                    </div>
                </div>
            </div>
            {/* End of Header */}

            {/* Main section starts here */}
                {props.children}
            {/* Main section ends here */}  

            {/* Start of footer */}
            <div className="container-fluid navBarColor p-0 w-100">
                <nav className="navbar navbar-light navBG font font-weight-bolder d-flex justify-content-between">       
                    
                    <div><Link className="font text-white" to="/">Home</Link></div>
                    <div><Link className="font text-white" to="/Movement">Build Workout</Link></div>
                    <div><Link className="font text-white" to="/Workout">Workout of the Day</Link></div>
                    <div><Link className="font text-white" to="/Video">How To Video</Link></div>
                </nav>
            </div>
            {/* End of footer */}
        </>
    )
}

export default BaseLayout