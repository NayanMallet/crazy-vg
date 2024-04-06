import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'ratings'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').primary()

            table.float('rating').notNullable()
            table.text('comment').notNullable()

            table.uuid('user_id').references('users.id').onDelete('CASCADE')
            table.uuid('product_id').references('products.id').onDelete('CASCADE')

            table.timestamp('created_at')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
