import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSpecifications1668385831659 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {	
		await queryRunner.createTable(	
			new Table({			
				name: "specifications",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true
					},
					{
						name: "name",
						type: "varchar"
					},
					{
						name: "description",
						type: "varchar"
					},
					{
						name: "created_at",
						type: "timestamp with time zone",
						default: "now()"
					}          
				],  
			})
    );
	}
	
	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("specifications");
	}
}
