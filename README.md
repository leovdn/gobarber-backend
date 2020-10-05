# GoBarber - Backend

## Sobre
Servidor backend da aplicação GoBarber desenvolvida a partir do módulo 02 no bootcamp Gostack. Utilizando conceitos de SOLID e Test Driven Design e migrations. 
Após realização do levantamento de requisitos, a aplicação foi desenvolvida a partir da criação de testes simulando as funcionalidades reais do projeto.

## How to Integrate
- run yarn dev:server

# Análise de Requisitos / Funcionalidades

## 1.Recuperação de senha
**RF (Requisitos Funcionais)**

- Usuário deve poder recuperar sua senha informando seu e-mail;
- Usuário deve receber e-mail com instruções de recuperação de senha;
- Usuário deve poder resetar sua senha;


**RNF (Requisitos Não Funcionais)**
- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES(Simple Email Service) para envios em produção;
- Envio de e-mails deve acontecer em segundo plano (Background Job);

**RN (Regras de Negócio)**

- O link enviado por e-mail para reset de senha deve expirar em 2 horas;
- Usuário precisa confirmar nova senha ao solicitar reset;

---

## 2.Atualização do perfil
**RF (Requisitos Funcionais)**
- Usuário deve poder atualizar seu nome, e-mail, senha;

**RNF (Requisitos Não Funcionais)**


**RN (Regras de Negócio)**
- Usuário não pode alterar seu e-mail para um e-mail já utilizado por outro usuário
- Para atualizar senha o usuário deve informar a senha antiga;
- Para atualizar senha o usuário precisa confirmar a nova senha;

---

## 3.Painel do Prestador
**RF (Requisitos Funcionais)**

- Usuário deve poder listar seus agendamentos de um dia específico;
- Prestador deve receber notificação sempre que houver novo agendamento;
- Prestador deve poder visualizar notificações não lidas;

**RNF (Requisitos Não Funcionais)**

- Agendamentos do prestador no dia deve ser armazenado em cache;
- Notificações do prestador devem ser armazenadas no MongoDB;
- Notificações devem ser enviadas em tempo real utilizando Socket.io;

**RN (Regras de Negócio)**

- Notificação deve ter status de lida ou não-lida para que o prestador possa obter controle;

---
## 4.Agendamento de serviços

**RF (Requisitos Funcionais)**

- Usuário deve poder listar todos os prestadores de serviço cadastrados;
- Usuário deve poder listar os dias de um mês com ao menos um horário disponível de um prestador;
- Usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- Usuário deve poder realizar um novo agendamento com um prestador;

**RNF (Requisitos Não Funcionais)**

- A listagem de prestadores deve ser armazenada em cache;

**RN (Regras de Negócio)**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro horário às 8h, último às 17h);
- Usuário não pode agendar em um horário já ocupado;
- Usuário não pode agendar em um horário que já passou;
- Usuário não pode agendar serviços consigo mesmo;
---
