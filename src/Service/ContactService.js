import axios from "axios";

export default class contactService {
    static serverUrl = 'http://localhost:9000';

    // get all contacts
    static getAllContacts() {
        let dataUrl = `${this.serverUrl}/contacts`;
        return axios.get(dataUrl);
    }


    // get a single contact
    static getContact(contactID) {
        let dataUrl = `${this.serverUrl}/contacts/${contactID}`;
        return axios.get(dataUrl);
    }

    // get create contact
    static createContact(contact) {
        let dataUrl = `${this.serverUrl}/contacts/`;
        return axios.post(dataUrl, contact);
    }

    // get update contact
    static updateContact(contact, contactID) {
        let dataUrl = `${this.serverUrl}/contacts/${contactID}`;
        return axios.put(dataUrl, contact);
    }

    // get delete contact
    static deleteContact(contactID) {
        let dataUrl = `${this.serverUrl}/contacts/${contactID}`;
        return axios.delete(dataUrl);
    }

    // get all groups 
    static getAllGroups() {
        let dataUrl = `${this.serverUrl}/groups`;
        return axios.get(dataUrl);
    }

    // get single groups 
    static getGroups(contact) {
        let groupId = contact.groupId;
        let dataUrl = `${this.serverUrl}/groups/${groupId}`;
        return axios.get(dataUrl);
    }
}