# 🐾 Pet Manager - Sistema de Gestão de Pets e Tutores

Este projeto é uma Single Page Application (SPA) desenvolvida para o gerenciamento de pets e seus respectivos tutores. A aplicação permite o cadastro, listagem, edição e exclusão de registros, consumindo uma API REST externa.


#🏛️ Arquitetura Reativa (RxJS + Facade)

O grande diferencial técnico deste projeto é a implementação da Arquitetura Reativa. Em vez de gerenciar estados complexos apenas com useState, utilizei o Pattern Facade aliado ao RxJS:

BehaviorSubjects: Utilizados para manter o estado atual da aplicação de forma imutável e acessível por múltiplos componentes.

Encapsulamento: Os componentes React não conhecem a implementação da API ou a lógica de negócio; eles apenas assinam fluxos de dados (Observables) expostos pelas Facades.

Desacoplamento: Facilita a manutenção e permite que a lógica de estado seja testada de forma independente da interface.


# 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

* **React 19** (Vite)
* **TypeScript**
* **RxJS** (Para gerenciamento de estado e fluxos de dados)
* **Tailwind CSS** (Estilização)
* **Axios** (Consumo de API)
* **Docker & Docker Compose** (Containerização)
* **Vitest** (Testes unitários)

---


# 📂 Organização do Projeto
A estrutura de pastas foi planejada seguindo princípios de Clean Architecture e S.O.L.I.D., separando responsabilidades de forma clara:

Plaintext
src/
├── @types/             # Definições de tipos globais e extensões de interfaces
├── app/
│   ├── core/           # O "Cérebro" da aplicação
│   │   ├── services/   # Comunicação direta com a API (Axios/Observables)
│   │   ├── facades/    # Camada de abstração que une lógica e estado (Pattern Facade)
│   │   ├── models/     # Interfaces e Types das entidades de negócio
│   │   └── state/      # Gerenciamento de estado reativo com RxJS
│   │
│   ├── shared/         # Tudo que é reutilizável no app
│   │   ├── components/ # UI Components (Botões, Modais, Cards)
│   │   ├── pipes/      # Formatadores de dados (Data, Moeda, CPF)
│   │   ├── hooks/      # Hooks customizados para lógica React
│   │   └── validators/ # Lógica de validação de formulários
│   │
│   └── features/       # Módulos por domínio de negócio
│       ├── auth/       # Login, Logout e Recuperação de senha
│       ├── pets/       # Listagem, Cadastro e Edição de Pets
│       └── tutores/    # Listagem, Cadastro e Edição de Tutores
│
├── assets/             # Imagens, ícones e fontes
├── styles/             # Configurações globais do Tailwind e CSS base
├── environments/      # Configurações para diferentes ambientes (Dev/Prod)
└── main.tsx            # Ponto de entrada e configuração de rotas


# 🐳 Infraestrutura e DevOps
O projeto está pronto para produção utilizando as melhores práticas de containerização:

Dockerfile: Dividido em dois estágios:

build: Compila o código TypeScript e gera os assets otimizados via Vite.

production: Utiliza uma imagem leve do Nginx Stable Alpine para servir os arquivos, garantindo segurança e baixo consumo de recursos.

Docker Compose: Orquestra o container da aplicação mapeando as portas e variáveis de ambiente necessárias.


# 🛠️ Guia de Execução do Projeto 

Este projeto foi totalmente containerizado. Siga os passos abaixo para subir o ambiente.

	1. Pré-requisitos
		Certifique-se de ter instalado em sua máquina:		
			* Git;
			* Docker (versão 20.10+);
			* Docker Compose (versão 2.0+);

	2. Passo a Passo
		1. Clonar o repositório:
			git clone https://github.com/rodolfosantanasiqueira011405/projeto-pets-tutores.git
			cd projeto-pets-tutores
			
		2. Subir o container: Não é necessário instalar o Node.js ou dependências localmente. O Docker cuidará de todo o processo de build e configuração do servidor Nginx.
			docker-compose up -d --build
		
		Obs: O parâmetro --build garante que o Docker compile a versão mais recente do código React antes de subir o servidor.

	3. Acessar a aplicação: Assim que o comando terminar, abra o seu navegador em: 👉 http://localhost:8080

