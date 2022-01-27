import React, { useEffect, useState } from "react";
import Navbaar from "./Navbaar";
import jwt_decode from "jwt-decode";
// import { getData, socket } from '../config/Mysocket.js'
import io from "socket.io-client";
export const socket = io("http://localhost:3001");

export default function Home() {
  const [userDetails, setuserDetails] = useState([]);
  const [comments, setcomments] = useState("");

  // socket.on("fetchdata", (details) => {
  //     setuserDetails(details)
  // })

  useEffect(() => {
    socket.emit("fetchpost");
    socket.on("fetchcomment", (data) => {
      setuserDetails([...data]);
      console.log(data);
    });
    socket.on("fetchdata", (details) => {
      setuserDetails(details);
    });
  }, [socket]);

  // useEffect(() => {

  // }, [userDetails])

  const addcomment = (item) => {
    let storeComment = item.comment;
    let token = localStorage.getItem("_token");
    let decode = jwt_decode(token);
    let c = { comment: comments, name: decode.name, date: Date.now() };
    if (comments !== "") {
      storeComment.push(c);
      console.log("emittttt");
      socket.emit("sendcomment", { id: item.id, storeComment });
    }
    document.getElementById(item.id).value = "";
    // setcomments('')
  };

  // socket.on('fetchcomment', data => {
  //     setuserDetails(data)
  //     console.log(data)
  // })

  return (
    <div>
      <Navbaar />
      {console.log(userDetails, "line 52")}
      {/* <h2>Dashboard</h2> */}
      <div className="container">
        {userDetails.map((ele) => (
          <div class="card my-4">
            <div class="card-header font-weight-bold">{ele.name}</div>
            <div class="card-body">
              <h5 class="card-title">{ele.title}</h5>
              <p class="card-text">{ele.description}</p>
            </div>
            <div class="card-footer text-muted">
              <p>Comments:</p>
              {ele.comment.map((elem) => (
                <>
                  {/* <p>{elem}</p> */}
                  <p className="font-weight-bold">{elem.name}</p>
                  <p>{elem.comment}</p>
                </>
              ))}
              <div className="form-group row">
                <div className="col-lg-11">
                  <input
                    type="text"
                    onChange={(e) => setcomments(e.target.value)}
                    className="form-control"
                    placeholder="Add new comment"
                    id={ele._id}
                  />
                </div>
                <div className="col-lg-1">
                  <button
                    onClick={() =>
                      addcomment({ id: ele._id, comment: ele.comment })
                    }
                    className="btn btn-info"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
