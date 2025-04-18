const z = require("zod");

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres." })
    .max(100, { message: "O nome é muito longo." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." })
    .max(1000, { message: "A mensagem é muito longa." }),
});

module.exports = { contactSchema };
