import React, {useState} from 'react'
import Navbaar from './Navbaar'
import { Card, CardContent, Button, TextField, FormControl } from '@mui/material'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import {useNavigate } from 'react-router-dom'
import { addpostSocket, socket } from '../config/Mysocket.js'
export default function Addpost() {
    const navigate = useNavigate();
    const [file, setFile] = useState();
    const [state, setstate] = useState({title:'', description:''})

    const handler = (e)=>{
        const {name,value} = e.target;
        setstate({...state,[name]:value})
    } 

    const addPost = ()=>{
        let token = localStorage.getItem('_token');
        let decode = jwt_decode(token);
        if(state.title !=='' && state.description !== ''){
            let formData = {
                title : state.title,
                description: state.description,
                comment:[],
                email:decode.email,
                name:decode.name,
            }
            addpostSocket(formData); 
            navigate('/home')
        }
    }
    return (
        <div style={{backgroundImage:`url('./images/background.jpg')`,height:'657px', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
            <Navbaar/>
            <Card sx={{ width: "65ch", mx: "auto", mb: "1rem", mt:"5rem"}} > 
            {/* style={{backgroundColor: 'transparent'}} */}
        <CardContent>
          <h1 style={{ color: "darkblue", textAlign: "center" }}>
            Add New Post
          </h1>

              <FormControl sx={{ my: 1}} fullWidth>
                <TextField
                  name="title"
                  id="title"
                  label="Title"
                  value={state.title}
                  onChange={handler}
                />
              </FormControl>

              <FormControl sx={{ my: 1 }} fullWidth>
                <TextField
                  name="description"
                  id="description"
                  label="Description"
                  value={state.description}
                  onChange={handler}
                />
              </FormControl>
            
          <div className="text-center mt-1">   
              <Button
                onClick={()=>addPost()}
                fullWidth
                sx={{ py: "1.5vh" }}
                variant="contained">
                Add Post
              </Button>
            <br />
          </div>
        </CardContent>
      </Card>
        </div>
    )
}
