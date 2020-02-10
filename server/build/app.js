"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path = require("path");
const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIO = require("socket.io");
const logger_1 = require("./logger");
const errShutdown = (server, err) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.error(`Stopping server with error: ${err}`);
    yield server.close();
    process.exit(1);
});
const graceShutdown = (signal) => {
    logger_1.default.info(`Stopping server with signal: ${signal}`);
    process.exit(0);
};
const users = new Map();
function runServer() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = express();
        app.use(express.json());
        app.use(cors());
        const server = http.createServer(app);
        const io = socketIO(server);
        app.use(express.static(path.join(__dirname, '../../client/build')));
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../../client/build/index.html'));
        });
        app.set('socketio', io);
        io.sockets.on('connection', (socket) => {
            logger_1.default.info(`connected ${socket.id}`);
            socket.on('login', (name, fn) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                logger_1.default.info(`login ${socket.id}, ${name}`);
                users.set(socket.id, name);
                fn(getActiveRooms());
            }));
            socket.on('enter-room', (roomId) => {
                logger_1.default.info(`enter ${roomId} <= ${socket.id}`);
                socket.join(roomId);
                io.emit('update-room-list', getActiveRooms());
            });
            socket.on('send:message', (message) => {
                logger_1.default.info(`message(send) ${message}`);
                io.sockets.in(message.roomId).emit('rcv:message', message);
            });
            socket.on('disconnect', () => {
                users.delete(socket.id);
                logger_1.default.info(`disconnected ${socket.id}`);
            });
            function getActiveRooms() {
                const activeRooms = new Array();
                Object.keys(io.sockets.adapter.rooms).forEach(room => {
                    let isRoom = true;
                    Object.keys(io.sockets.adapter.sids).forEach(id => {
                        isRoom = id === room ? false : isRoom;
                    });
                    if (isRoom) {
                        const members = new Array();
                        const roomIds = Object.keys(io.sockets.adapter.rooms[room].sockets);
                        for (let socketId of roomIds) {
                            members.push({
                                socketId: socketId,
                                name: users.get(socketId),
                            });
                        }
                        activeRooms.push({
                            roomId: room,
                            members: members,
                        });
                    }
                });
                return activeRooms;
            }
        });
        const expressServer = server.listen(5000, () => {
            logger_1.default.info('Server app listening on port 5000!');
        });
        try {
        }
        catch (e) {
            errShutdown(expressServer, e);
            throw e;
        }
    });
}
runServer()
    .then(() => {
    logger_1.default.info('run succesfully');
})
    .catch((ex) => {
    logger_1.default.error('Unable run:', ex);
});
process.on('SIGINT', () => graceShutdown('SIGINT'));
process.on('SIGTERM', () => graceShutdown('SIGTERM'));
