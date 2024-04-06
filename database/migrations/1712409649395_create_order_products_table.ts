import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'order_products'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()

            table.uuid('order_id').references('orders.id').onDelete('CASCADE')
            table.uuid('product_id').references('products.id').onDelete('CASCADE')
            table.unique(['order_id', 'product_id'])
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
