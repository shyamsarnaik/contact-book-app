import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactListService {
    constructor(private http: HttpClient) {
    }

    getContactList() {
        return this.http.get<any>('https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts')
    }
}