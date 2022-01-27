import io from 'socket.io-client'
export const socket = io('http://localhost:3001')

export function regsocket(data){
    socket.emit("registration", data)
    console.log("in mySocket", data)
}

export function loginsocket(data){
    console.log("in mySocket", data)
   socket.emit("login", data)
  return true;
}

export function addpostSocket(data) {
    socket.emit("addpost", data);
    console.log("Post socket", data);
}

export function getData() {
    socket.emit("fetchpost");
}