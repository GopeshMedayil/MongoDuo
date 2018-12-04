import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

    getConnections() {
        if (localStorage.getItem("connections") !== null) {
            return JSON.parse(localStorage.getItem("connections"));
        } else {
            return [];
        }
    }

    setConnection(connection) {
        var connectionList = this.getConnections();
        connectionList.push(connection);
        localStorage.setItem("connections", JSON.stringify(connectionList))

    }
}