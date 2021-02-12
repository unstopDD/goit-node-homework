const contacts = require("./contacts.js");
const { argv } = require("./lib/yargs");

const { listContacts, getContactById, removeContact, addContact } = contacts;

// listContacts();
// getContactById(2);
// addContact("name", " name@mail.com", 2333222);
// removeContact("82327837-502e-4a03-99c7-e5e81c524e28");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      getContactById(id);
      break;

    case "add":
      addContact(name, email, phone);
      break;

    case "remove":
      removeContact(id);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
