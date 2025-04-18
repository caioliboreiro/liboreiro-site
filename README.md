# Liboreiro Asset Management — Site Institucional

Este é um site institucional fictício para uma empresa gestora de investimentos, desenvolvido com React no frontend e Node.js (Express) no backend. O site permite que visitantes entrem em contato por meio de um formulário.

## 🧠 Funcionalidades

- **Página Home** — Apresentação da empresa.
- **Página Sobre** — Informações institucionais.
- **Página Serviços** — Detalhes sobre os serviços oferecidos.
- **Página Contato** — Formulário para envio de mensagens.

### 📝 Formulário de Contato
- Validação de inputs (nome, email e mensagem).
- Envio dos dados para uma API REST.
- Armazenamento no banco de dados PostgreSQL via Prisma ORM.
- Exibição de notificações via `react-toastify`.

### 📈 Gráficos
- Visualização de desempenho de ativos por meio de gráficos interativos utilizando `Chart.js`.

## ⚙️ Tecnologias Utilizadas

### Frontend
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Chart.js](https://www.chartjs.org/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Zod](https://zod.dev/) para validação dos dados no backend

## 📦 Como executar

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/liboreiro-site.git
cd liboreiro-site
```

2. Configure a variável de ambiente
```.env
DATABASE_URL="postgresql://[USUARIO]:[SENHA]@[LOCALIZACAO][:PORTA]/[BANCO DADOS]"
```

3. Frontend

```bash
cd frontend
npm install
npm run dev
```

4. Backend

```bash
cd backend
npm install
npx prisma migrate dev
node app.js
```

## 🌐 Endpoints

```json
{
  "name": "João",
  "email": "joao@email.com",
  "message": "Gostaria de saber mais sobre os investimentos."
}
```

## Capturas de Tela 

![image](https://github.com/user-attachments/assets/a23892e7-ee64-4856-86de-9d2211b2f17e)
![image](https://github.com/user-attachments/assets/09c4ce55-be72-4f97-9e40-d6b17724d94d)
![image](https://github.com/user-attachments/assets/0665202d-5975-4b03-8a8e-4975c9ca4dc3)
![image](https://github.com/user-attachments/assets/5ffe0b93-293f-4b09-92c2-ab0c73f9fc77)



