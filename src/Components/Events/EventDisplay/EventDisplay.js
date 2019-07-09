import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import add_image_icon from '../../../Assets/add_image_icon.png'
import {Image, MBody, EventBorder, Button, ButtonBorder} from './EventMobile'
import 'reset-css'




export class EventDisplay extends Component {
    constructor(){
      super();
      
      this.state = {
        usersAttending: [], //array of user objects {display_name, image}
        host: null,
        title: '',
        description: '',
        image: '',
        location: ''
      };
    }

    componentDidMount() {
      axios.get(`/users/byevent/${this.props.currEvent}`).then(res => {
        this.setState({
          usersAttending: res.data
        });
      });
      axios.get(`/event/byid/${this.props.currEvent}`).then( res => {
        this.setState({
          host: res.data[0].host,
          title: res.data[0].name,
          description: res.data[0].description,
          image: res.data[0].image,
          location: res.data[0].location
        })
      })
    }

     handleJoin = () => {
      axios.post(`/events/joinevent/${this.props.currEvent}`)
    }

  render() {  
    const {title, description, host, image, usersAttending} = this.state
    const displayUsers = usersAttending.map((element, index) => {
      return(
        <div>
          <img src={element.image} alt=""/>
          <p>{element.display_name}</p>
        </div>
      )
    })
 
    return (

      <div>
        <MBody>
          <EventBorder>
        <Image src={image} alt=""/>
        <h1>{title}</h1>
        <p>{description}</p>
        

        {/* <div className='attending-users'>
          {displayUsers}
        </div> */}

        
        </EventBorder>
        <ButtonBorder>
        <Button onClick={this.handleJoin}> Join and RSVP</Button>
        </ButtonBorder>
        <div >
          host: {host}
        </div>
        </MBody>
      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return reduxState
}

export default connect(mapStateToProps, null)(EventDisplay)