const fs = require("fs").promises;
const path = require("path");
const { uuid } = require("uuidv4");

const { handleError } = require("./lib/erorHandler.js");

const contactsPath = path.resolve("db/contacts.json");

// // TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const result = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(result);
    console.table(contacts);
  } catch (error) {
    handleError(error);
  }
}

async function getContactById(contactId) {
  try {
    const result = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(result);
    const requiredContact = contacts.filter(
      (contact) => contact.id === contactId
    );
    console.table(requiredContact);
  } catch (error) {
    handleError(error);
  }
}

async function removeContact(contactId) {
  try {
    const result = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(result);
    if (contacts.find((contact) => contact.id === contactId)) {
      console.log("found a contact you want to delete");
      const updatedContactList = contacts.filter(
        (contact) => contact.id !== contactId
      );
      await fs.writeFile(contactsPath, JSON.stringify(updatedContactList));
      console.log(`contact with id ${contactId} was deleted`);
      listContacts();
      return;
    }
    listContacts();
  } catch (error) {
    handleError(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const result = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(result);
    const newContact = { id: uuid(), name, email, phone };
    const updatedContactList = [...contacts, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(updatedContactList));
    console.log(` ${name} was added to contacts`);
    listContacts();
  } catch (error) {
    handleError(error);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
