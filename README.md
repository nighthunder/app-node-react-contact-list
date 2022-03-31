# Aplicação formulário de Contatos Node + ReactJS


Configuraзгo e programas necessбrios para rodar a aplicaзгo localmente

* **Node**
	* Baixe e instale o [NodeJS](https://nodejs.org/en/download/)
		```
        node install
        ```
    * Crie uma cуpia do arquivo .env.example e renomeio-o apenas para .env
    * Crie uma instância de banco de dados 
	* No seu arquivo .env, coloque em DB_DATABASE o nome do banco que vocк criou, em DB_USERNAME coloque root e em DB_PASSWORD deixe vazio
    * Apуs criar o banco, execute banco no console do MYSQl banco que está em /dump
    * obs.: Certifique-se de que o Mysql está rodando
    * Sirva a REST FULl api com node [NodeJS](https://nodejs.org/en/download/) na porta configurada no .env
		```
        nodemon node.js ou node index.js ou node node.js
        ```
        
* **React**
	* Baixe e instale o [NodeJS](https://nodejs.org/en/download/)
	* Baixe e instale o [NodeJS](https://nodejs.org/en/download/) caso você não tenha feito
	* Dentro da pasta do React, rode o comando para instalar as dependencias no package.json
		```
        npm install
        ```
    * Com isso vocк jб pode servir a aplicaзгo react com
		```
        npm start
        ```
    * obs.: Nas prуximas vezes que for servir o react basta apenas rodar o comando para servir

	Com os dois projetos sendo servidos vocк pode acessar a aplicaзгo no localhost:3000(pode ser que esteja em outra porta, ao servir o react vai ser mostrado)
   
      
