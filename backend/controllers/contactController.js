const db = require("../db/queries");
const { contactSchema } = require("../validation/contactSchema");

async function postContact(req, res) {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    const formatted = result.error.format();
    return res.status(400).json({ errors: formatted });
  }

  try {
    const { name, email, message } = req.body;
    await db.insertNewContact(name, email, message);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ message: "Mensagem recebida com sucesso!" });
}

module.exports = {
  postContact,
};
