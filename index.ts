// DEBUGGING
const debug = console.log;

class App {
    // RENDER FETCHED CONTENT
    static render() {

    }
    // METHOD FOR GETTING ALL USERS
    static async getUsers() {
        const response = await fetch(`http://localhost:3000/users`);
        const users = await response.json();
        // SELECTOR | Container
        const displayContainer = document.querySelector('.container') as HTMLElement;
        // LOOP THROUGH THE RESPONSE
        for (let user of users) {
             displayContainer.innerHTML += `
            <li>
                ${user.userName}
            </li>
        `;
        }
    }

    // CHECK IF USER EXISTS
    static async checkIfUserExists() {
        const response = await fetch(`http://localhost:3000/users`);
        const users = await response.json();
        // SELECTOR | Input Field
        const inputField = document.getElementById('input') as HTMLInputElement;
        // LOOP THROUGH THE RESPONSE
        for (let user of users) {
            if (inputField.value === user.userName) {
                alert('User already exists!');
                return;
            } else {
                debug(user);
                return;
            }
        }
    }
}

App.getUsers();
