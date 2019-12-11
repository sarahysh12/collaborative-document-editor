import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { Document } from '../models/document';
import { Event } from '../models/event';

import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:8080'; //Server URL

@Injectable()
export class WebsocketService {

    private socket;

    public initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public send(document: Document): void {
        this.socket.emit('document', document);
    }

    public onDocument(): Observable<Document> {
        return new Observable<Document>(observer => {
            this.socket.on('document', (data: Document) => observer.next(data));
        });
    }

    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }

}