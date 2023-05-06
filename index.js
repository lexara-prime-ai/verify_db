"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// DEBUGGING
const debug = console.log;
class App {
    // RENDER FETCHED CONTENT
    static render() {
    }
    // METHOD FOR GETTING ALL USERS
    static getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:3000/users`);
            const users = yield response.json();
            // SELECTOR | Container
            const displayContainer = document.querySelector('.container');
            // LOOP THROUGH THE RESPONSE
            for (let user of users) {
                displayContainer.innerHTML += `
            <li>
                ${user.userName}
            </li>
        `;
            }
        });
    }
    // CHECK IF USER EXISTS
    static checkIfUserExists() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:3000/users`);
            const users = yield response.json();
            // SELECTOR | Input Field
            const inputField = document.getElementById('input');
            // LOOP THROUGH THE RESPONSE
            if (inputField.value === '') {
                alert('Please enter a username!');
                return;
            } else {
                for (let user of users) {

                    if (inputField.value === user.userName) {
                        alert('User already exists!');
                        return;
                    }
                    else {
                        debug(user);
                    }
                }
            }
        });
    }
}
App.getUsers();
