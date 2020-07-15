import React, {Component} from 'react'
import TheData from './TheData'
import PageNav from './PageNav'



class DisplayInfo extends Component {
    constructor(props){
        super(props)
  
        this.state = {
          profile: TheData,
          followId: 1,
  
        }
        this.toggleNext = this.toggleNext.bind(this)
        this.togglePrev = this.togglePrev.bind(this)


    };

    toggleNext() {
        if(this.state.followId === this.state.profile.length)
            return;

        this.setState(prevState => ({
            followId: prevState.followId + 1
        }))
    }

    togglePrev() {
        if(this.state.followId === 1)
         return;

        this.setState(prevState => ({
            followId: prevState.followId - 1
        }))
    }


    

    render(){
        // const {name, last, city, country, employer, title, favoriteMovies} = this.state.profile
        // console.log(this.state.profile[this.state.followId])
        // console.log(this.state.profile)


    //mapping over the array of profiles        
    const mappedProfiles = this.state.profile.map((element,index)=>{
            return  <div >
                            {element.id === this.state.followId
                            ?
                        <div>

                            <PageNav id={this.state.followId}/>
                            <p id='name'> {element.name.first} {element.name.last}</p>
                            <p className='property' id='bio'>From:</p><p>{element.city}, {element.country}</p>
                            <p className='property' id='bio'>Job Title:</p><p>{element.title}</p>
                            <p className='property' id='bio'>Employer:</p><p>{element.employer}</p>
                            <p className='property'>Favorite Movies: </p> 
                                <ol>
                                    <li>{element.favoriteMovies[0]}</li>
                                    <li>{element.favoriteMovies[1]}</li>
                                    <li>{element.favoriteMovies[2]}</li>
                                </ol>
                        </div>
                        : null}
                    </div>
            }
        )   

        return (
            <div id='body'>
                <div id='header'>
                    <div id='home'>
                        <h1>Home</h1>
                    </div>
                </div>
                <div className='profile-container' >
                    <div id='profile-position'>
                        {mappedProfiles}    
                    </div>
                </div>
                    <div className='buttons-container'>
                        <button className='nav-buttons' onClick={this.togglePrev}>Previous</button>
                        <button className='nav-buttons' onClick={this.toggleNext}>Next</button>
                    </div>
            </div>
        )
        }

};


export default DisplayInfo