import React, { Component } from 'react'
import Header from '../../common/Header/Header'
import MoviesData from "../../common/MoviesData";
import SingleImageList from "./SingleImageList";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

import "./Home.css";



export default class Home extends Component {

  
  constructor(props) {
    super(props);

    this.state = {
      MoviesData: MoviesData
    };
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="headerBar">
          <span className="headerText">Upcoming Movies</span>
        </div><br />
        <SingleImageList MoviesData={this.state.MoviesData} />
        <div className="flex-container">
          <div className="left">
            <ImageList cols={4} rowHeight={400}>
              {this.state.MoviesData.map((item) => (
                <ImageListItem key={item.id} className="Image-List">
                  <img
                    src={item.poster_url}
                    alt={item.title}
                    className="MoviesPoster"
                  />

                  <ImageListItemBar
                    title={item.title}
                    subtitle={`Release Date : ${new Date(
                      item.release_date
                    ).toDateString()}`}
                  />
                </ImageListItem>
              ))}
            </ImageList>


          </div>
          <div className="right">
           
          </div>
        </div>
      </div>
    )
  }
}
