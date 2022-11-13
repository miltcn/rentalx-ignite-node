import { DataSource } from "typeorm"

// // Local
// const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "qwe123",
//     database: "rentx_docker",
// })

// Docker
const AppDataSource = new DataSource({
    type: "postgres",
    host: "database_ignite", // nome de serviço do banco no arquivo dacker-compose.yml
    port: 5432,
    username: "postgres",
    password: "qwe123",
    database: "rentx_docker",
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export { AppDataSource };