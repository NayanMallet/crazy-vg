import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'products'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').primary()

            table.string('name', 255).notNullable()
            table.text('description', 'longtext').notNullable()

            table.float('price').notNullable()

            table.text('thumbnail_url', 'longtext').notNullable()
            table.float('average_rating').notNullable().defaultTo(-1)

            table.string('activation_code', 255).notNullable()

            table.timestamp('created_at')
            table.timestamp('updated_at')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
