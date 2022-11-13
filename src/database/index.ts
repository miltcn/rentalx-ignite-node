import { createConnection } from "typeorm";

try {
    createConnection();
    console.log("Data Source has been initialized!")
} catch (err) {  
    console.error("Error during Data Source initialization", err)    
}

// Local
// "type": "postgres",
// "host": "localhost",
// "port": 5432,
// "username": "postgres",
// "password": "qwe123",
// "database": "rentx"

// Docker
// "type": "postgres",
// "host": "database_ignite", // nome de serviço do banco no arquivo dacker-compose.yml
// "port": 5432,
// "username": "postgres",
// "password": "qwe123",
// "database": "rentx_docker"