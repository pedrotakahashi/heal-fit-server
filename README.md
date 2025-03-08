# 🏋️‍♂️ HealFit - Backend do Sistema de Academia

## 📌 Sobre o Projeto
O **HealFit** é um sistema completo de gerenciamento de academias, desenvolvido para oferecer um controle eficiente de alunos, planos e pagamentos. Esta é a parte **backend** do projeto, responsável por fornecer uma API REST estruturada e escalável.

Este projeto foi desenvolvido utilizando **NestJS, Prisma e PostgreSQL**, seguindo boas práticas de desenvolvimento e arquitetura modular.

## 🎯 Funcionalidades Implementadas
- ✅ **Cadastro e autenticação de usuários (admin, professores, etc.)**
- ✅ **Gerenciamento de alunos e planos de treino**
- ✅ **Registro e controle de pagamentos dos alunos**
- ✅ **API REST documentada e testável com Postman**
- ✅ **Criptografia de senhas com `bcrypt` para segurança**
- ✅ **Arquitetura modular utilizando NestJS e Prisma ORM**

---

## 🛠️ Tecnologias Utilizadas

### **Back-end:**
- [NestJS](https://nestjs.com/) - Framework Node.js para construção de APIs escaláveis
- [Prisma ORM](https://www.prisma.io/) - ORM moderno para interação com o banco de dados
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Hash de senhas para segurança
- [Docker](https://www.docker.com/) (opcional) - Para rodar o banco de dados localmente

### **Ferramentas e DevOps:**
- [DBeaver](https://dbeaver.io/) - Gerenciador de banco de dados
- [Postman](https://www.postman.com/) - Testes de API
- [Railway](https://railway.app/) ou [Render](https://render.com/) - Para deploy gratuito

---


## 📌 Rotas da API (CRUD)
### **Usuários**
- `POST /usuarios` → Criar usuário
- `GET /usuarios` → Listar usuários
- `GET /usuarios/:id` → Buscar usuário por ID

### **Alunos**
- `POST /alunos` → Criar aluno
- `GET /alunos` → Listar alunos
- `PUT /alunos/:id` → Atualizar aluno
- `DELETE /alunos/:id` → Remover aluno

### **Planos**
- `POST /planos` → Criar plano
- `GET /planos` → Listar planos

### **Pagamentos**
- `POST /pagamentos` → Registrar pagamento
- `PUT /pagamentos/:id/status` → Atualizar status

