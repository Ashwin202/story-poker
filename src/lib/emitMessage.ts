import io from "socket.io-client";
const socket = io(`http://172.20.87.228:4000`, {
   transports: ["websocket"],
});
export function emitMessage(event: string, message: object) {
   socket.emit(event, message);
}
