import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'orders'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').primary()
            table.integer('number').notNullable()

            table.uuid('user_id').references('users.id').onDelete('CASCADE')
            table.text('invoice_url', 'longtext').nullable()

            table.timestamp('created_at')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
