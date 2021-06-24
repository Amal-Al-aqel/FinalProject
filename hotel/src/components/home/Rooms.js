import React, { Component } from 'react'
import Room from './Room'
import Section from '../globals/Section'
import styled from 'styled-components'
import Title from '../globals/Title'
import roomsData from './rooms-data'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { setColor,media,setRem } from '../../styles'
import {SmallBtn} from '../globals/Buttons'


const Rooms = () => {
    const [rooms, setRooms] = useState(roomsData);

    useEffect(() => {
        callApi();
      }, [])

    const callApi = () => {
        axios({
          method: "get",
          url: " http://localhost:3000/rooms",
        }).then((response) => {
          console.log("callApi")
          console.log(response.data);   
          setRooms(response.data); 
        }).catch((error) => {
          console.log(error);
        })
      }

      const deleteApi = () => {
        axios({
          method: "delete",
          url: " http://localhost:3000/rooms/1",
        }).then((response) => {
          console.log("After delete")
          console.log(response.data); 
          callApi();
          //setPosts(response.data);   
        }).catch((error) => {
          console.log(error);
        })
      }

      const addApi = () => {
        axios({
          method: "post",
          url: " http://localhost:3000/rooms/",
          data : {"id": 20,
          "img": "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "title": "family room",
          "info":
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quisquam corrupti dicta tempora sequi sapiente!",
          "price": 500}
        }).then((response) => {         
          console.log(response.data); 
          callApi();
        }).catch((error) => {
          console.log(error);
        })
      }

      const putApi = () => {
        axios({
          method: "put",
          url: " http://localhost:3000/rooms/2",
          data : {"price": "200"}
        }).then((response) => {      
          callApi();
        }).catch((error) => {
          console.log(error);
        })
      }

      const deleteRoom = (e) => {
        e.preventDefault();
        deleteApi();
      }
    
      const addRoom = (e) => {
        e.preventDefault();
        addApi();
      }
    
      const putRoom = (e) => {
        e.preventDefault();
        putApi();
      }
    
    

    return (
        <div>
            <Section color={setColor.lightGrey}>
                <Title title="our rooms" center/>
                <RoomsCenter>
                    {rooms.map((room)=>{
                        return <Room key={room.id} room={room} />
                    })}
                </RoomsCenter>                            
                  <SmallBtn onClick={(e) => deleteRoom(e)}>Delete</SmallBtn>
                  <SmallBtn onClick={(e) => addRoom(e)}>Add</SmallBtn>
                  <SmallBtn onClick={(e) => putRoom(e)}>Put</SmallBtn>
            </Section>                    
        </div>
    )
}

export default Rooms;


const RoomsCenter = styled.div`
width:90vw;
margin: 0 auto;

${media.tablet`
display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap:${setRem(32)};
`};

${media.large`
width:100vw;
max-width:1170px;
`};
${media.large`
grid-template-columns: 1fr 1fr 1fr;
`};
`;