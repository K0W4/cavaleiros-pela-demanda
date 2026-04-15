# 🛡️ Cavaleiros Pela Demanda

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Uma landing page interativa, imersiva e responsiva desenvolvida para o torneio de enigmas da **Ordem da Cavalaria**, promovido pelo Gabinete Estadual da Ordem DeMolay do Rio Grande do Sul (**Chama da Juventude**).

O projeto guia os Priorados através de uma jornada de quatro enigmas com mecânicas de resolução progressivas, mesclando criptografia digital, manipulação de arquivos e interações no mundo físico (ARG).

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com foco em performance e estilização temática usando as seguintes ferramentas:

* **React + TypeScript**: Interface reativa e tipagem estática para maior segurança.
* **Vite**: Ferramenta de build ultrarrápida para desenvolvimento moderno.
* **Tailwind CSS v3**: Estilização com paleta de cores personalizada (`templar-red`, `templar-gold`, etc.).
* **React Router DOM**: Gerenciamento de rotas para uma experiência de Single Page Application (SPA).
* **Canvas Confetti**: Efeitos visuais para feedback de vitória.

---

## 🧩 Os Enigmas e Mecânicas

O torneio é dividido em quatro etapas, cada uma com uma dinâmica única:

1.  **Enigma I (O Último Bastião):** Cifra de César avançada. O sistema valida a entrada ignorando espaços, acentos e diferenças entre maiúsculas/minúsculas.
2.  **Enigma II (O Segredo nas Sombras):** Mecânica de quebra da quarta parede. O usuário interage com uma imagem de exposição zero, precisando fazer o download/print e utilizar as configurações de brilho do sistema para revelar a pista.
3.  **Enigma III (A Passagem Oculta):** Tradução visual através de um alfabeto Templário (*Pigpen Cipher*) implementado em SVG.
4.  **Enigma IV (A Provação do Fogo):** Resolução híbrida (**Phygital**). A chave final é revelada fisicamente no IV EGOC através de um pergaminho e fogo, sendo inserida no sistema para selar a vitória.

---

## ⚙️ Funcionalidades Especiais

* ⏳ **Time-Gating (Liberação Programada):** Lógica de datas atrelada ao fuso horário de Brasília (GMT-3). As rotas dos enigmas só ficam disponíveis no momento exato estipulado pelo edital.
* 🧠 **Sistema Anti-Frustração:** Validação inteligente de inputs que remove ruídos de digitação.
* ⚠️ **Feedback Contínuo de Erro:** Animações controladas no React que informam falhas sem quebrar a imersão da interface.
* 📱 **Mobile-First:** Layout 100% otimizado para dispositivos móveis, prevendo o uso intenso durante o evento presencial.

---

## 🛠️ Como rodar o projeto localmente

Siga os passos abaixo para testar o projeto na sua máquina:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/cavaleiros-pela-demanda.git](https://github.com/SEU-USUARIO/cavaleiros-pela-demanda.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd cavaleiros-pela-demanda
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Abra no navegador:**
    O endereço local será exibido no terminal (geralmente `http://localhost:5173/`).

---

## 🏰 Hospedagem

O deploy oficial está configurado na **Vercel**, garantindo baixa latência e integração contínua diretamente com a branch `main`.

---

> *Desenvolvido pela glória de Deus e seu domínio.*
