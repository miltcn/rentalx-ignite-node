import { Category } from "./src/modules/cars/entities/Category";
import { Specification } from "./src/modules/cars/entities/Spercification";

module.exports = {
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "qwe123",
	database: "rentx",
	entities: [
		Category,
		Specification,
	],
	migrations: ["./src/database/migrations/*.ts"],
	cli: {
		migrationsDir: "./src/database/migrations"
	}
}

