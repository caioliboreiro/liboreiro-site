const { prisma } = require("../lib/prisma");

async function insertNewContact(name, email, message) {
  await prisma.contact.create({
    data: {
      name: name,
      email: email,
      message: message,
    },
  });
}

module.exports = {
  insertNewContact,
};
