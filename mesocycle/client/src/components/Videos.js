import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Videos extends Component {
    //api call
    //display titles

    //The constructor is a method used to initialize an object's state in a class
    constructor() {
        // this.props is uninitialized if super() is not called. We need a super() inside a constructor because ES6 class constructors MUST call super if they are subclasses. 
        //Thus, you have to call super() as long as you have a constructor. (But a subclass does not have to have a constructor).
        //We call super(props) inside the constructor if we have to use this.props
        super()

        this.state= {
            videos: []
        }
    }

    //componentDidMount() Runs after the first render() lifecycle 
    //async/await helps writing asynchronous code in a way that looks synchronous
    componentDidMount = async () => {

        let results = await fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&key=AIzaSyDoLRE9I3MbvWfuQMEZM8A7FxErKXMpH6U');

        //converts results into a javascript object (JSON: javascript object notation)
        let videoList = await results.json();

        this.setState({

            //this puts the updated array from the fetch call into a new array in state
            videos: videoList.items
        })
    }

  render() {

    let mapArr = this.state.videos.map((video, index) => {

        return <>
            <div className="container">
                <div className="row justify-content-center justify-content-center ">
                    <ul className="list-group list-group-horizontal-sm list-group-horizontal-md list-group-horizontal-lg">
                        <li className="list-group-item text-align-center">
                            <div className="" key={index}>{video.snippet.title}</div><br/>
                            <img className="" width="120" height="90" src={video.snippet.thumbnails.standard.url} alt=""></img><br/><br/>
                            <iframe className="" width="120" height="90" title="chest" src={`https://www.youtube.com/embed/${video.contentDetails.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    })
    return (
      <>
        {mapArr}
      </>
    )
  }
}

export default Videos
