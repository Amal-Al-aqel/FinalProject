import React from 'react'
import {SmallBtn} from '../globals/Buttons'
import styled from 'styled-components'
import { setRem, setLetterSpacing, setTransition, setColor, setShadow, setBorder } from '../../styles'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useEffect, useState } from 'react'
import roomsData from './rooms-data'

const Room = ({className, room}) => {
    const [rooms, setRooms] = useState(roomsData);
    const [token, setToken] = useState(null)
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")

    useEffect(() => {
            setName(localStorage.getItem("name"))
            setEmail(localStorage.getItem("email"))
            setPicture(localStorage.getItem("picture"))
            setToken(localStorage.getItem("token"))
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

      const deleteApi = (id) => {
        console.log("id "+id);
        axios({
          method: "delete",
          url: " http://localhost:3000/rooms/"+id,
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

      const deleteRoom = (e,id) => {
        e.preventDefault();
        deleteApi(id);
      }
    
      const addRoom = (e) => {
        e.preventDefault();
        addApi();
      }
    
      const putRoom = (e) => {
        e.preventDefault();
        putApi();
      }
    const {id=0, img='', title='', info='',price=0} = room
    return (
        <article className={className}>
            <div className="img-container">
                <img src={img} alt="single room"/>
                <div className="price">${price}</div>                
            </div>
            <div className="room-info">
                <h4>{title}</h4>
                <p>{info}</p>
                {/* <p>room id {id}</p> */}
            </div>
            <SmallBtn>See More</SmallBtn>
            {localStorage.getItem("token") == null ? null:
            <>
            <SmallBtn onClick={(e) => deleteRoom(e, id)}>Delete</SmallBtn>                  
            <SmallBtn onClick={(e) => putRoom(e)}>Update</SmallBtn>
            </>
            }
        </article>
    )
}

export default styled(Room)`
background: ${setColor.mainWhite};
margin:${setRem(32)} 0;
.img-container{
    background:${setColor.mainBlack};
    position:relative;
    img{
        width:100%;
        display:block;
        ${setTransition};
    }
    &:hover img {
        opacity: 0.5;
    }
    .price{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate()(-50%, -50%);
        color: ${setColor.mainWhite};
        ${setLetterSpacing(5)};
        font-size: ${setRem(22)};
        padding: ${setRem(10)} ${setRem(33)};
        ${setBorder({color:setColor.mainWhite})};
        ${setTransition()};
        opacity: 0;
    }
    &:hover .price{
        opacity: 1;
    }
}
.room-info{
    padding: ${setRem()};
    h4{
        text-transform: capitalize;
        ${setLetterSpacing()};
    }
    p{
        ${setLetterSpacing()};
    }
}
${setShadow.light};
${setTransition()};
&:hover{
    ${setShadow.dark}
}
`;

// Room.propTypes = {
//     room:PropTypes.shapes({
//         img:PropTypes.string.isRequired,
//         title:PropTypes.string.isRequired, 
//         info:PropTypes.string.isRequired,
//         price:PropTypes.number.isRequired,
//     })
// }