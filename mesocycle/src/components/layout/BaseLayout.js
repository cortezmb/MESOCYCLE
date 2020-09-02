import React from 'react'
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
                    {/* <a className="nav-link text-light navFontSize" href="/RepMax">10RM<span className="sr-only">(current)</span></a> */}
                    <a className="nav-link text-light navFontSize" href="/Video"> Video <span className="sr-only">(current)</span></a>
                    <a className="nav-link text-light navFontSize" href="/">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link text-light navFontSize" href="/Movement">Exercises<span className="sr-only">(current)</span></a>        
                    {/* <a className="nav-link text-light navFontSize" href="/Stats">Stats<span className="sr-only">(current)</span></a> */}
                </nav>
            </div>
            {/* End of footer */}
        </>
    )
}

export default BaseLayout