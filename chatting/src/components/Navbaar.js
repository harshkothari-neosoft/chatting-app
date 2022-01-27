import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbaar() {
    const logout=()=>{
        localStorage.removeItem('_token');
    }
    return (
        <div>
             <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/dashboard">Chatting App</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <Link class="nav-link" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/addpost">Add Post</Link>
                            </li>
                        </ul>
                    </div>
                    <form class="d-flex">

                       <Link to="/"> <button class="btn btn-danger" type="submit" onClick={()=>logout()}>Logout</button></Link>
                    </form>
                </div>
            </nav>
        </div>
        </div>
    )
}