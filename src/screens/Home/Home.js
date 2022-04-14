import React, { Component } from 'react'
import Header from '../../common/Header/Header'
import MoviesData from "../../common/MoviesData";
import SingleImageList from "./SingleImageList";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import "./Home.css";
import SimpleCard, { userSelection } from "./filters";
import genres from "./genre";
import artists from "./artists";
import { Link } from "react-router-dom";


export default class Home extends Component {

    
  
  constructor(props) {
    super(props);

    this.state = {
      MoviesData: MoviesData,
      genres: genres,
      artists: artists,
      userSelection: MoviesData,
    };
  }
  filterHandler = () => {
    if (
      userSelection.name === "" &&
      userSelection.releaseDateEnd === "" &&
      userSelection.releaseDateStart === "" &&
      userSelection.genres.length === 0 &&
      userSelection.artists.length === 0
    ) {
      const state = this.state;
      state.userSelection = MoviesData;
      this.setState(state);
      return MoviesData;
    } 
    
    else {
      const filteredMovies = this.state.data.filter((movie) => {
        if (
          movie.title.toLowerCase() === userSelection.name.toLowerCase()||
          movie.genres.some((genre) => userSelection.genres.includes(genre)) ||parseInt(new Date(movie.release_date).getTime()) <=  parseInt(new Date(userSelection.releaseDateEnd).getTime())||
          parseInt(new Date(movie.release_date).getTime()) >=  parseInt(new Date(userSelection.releaseDateStart).getTime()) || movie.artists.some((artist) =>
            userSelection.artists.includes(
              `${artist.first_name} ${artist.last_name}`
            )
          )
        ) {
          console.log(userSelection.releaseDateStart);
          console.log(parseInt(new Date(movie.release_date).getTime()) >  parseInt(new Date(userSelection.releaseDateEnd).getTime()))
          return movie;
        }
        else
          return null;
      });

      const state = this.state;
      state.userSelection = filteredMovies;

      this.setState(state);
    }
  };



  render() {
    return (
      <div>
        {/* <Header/> */}
        <div className="headerBar">
          <span className="headerText">Upcoming Movies</span>
        </div><br />
        <SingleImageList MoviesData={this.state.MoviesData} />
        <div className="flex-container">
          <div className="left">
            <ImageList cols={4} rowHeight={400}>
              {this.state.MoviesData.map((item) => (
                <ImageListItem key={item.id} className="Image-List">
                <Link to="/details" state={{ movie: item }}>
                <img className="image" src={item.poster_url} alt={item.title} />
                </Link> 

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
          <SimpleCard
              genres={this.state.genres}
              artists={this.state.artists}
              filterHandler={this.filterHandler}
            />
           
          </div>
        </div>
      </div>
    )
  }
}
