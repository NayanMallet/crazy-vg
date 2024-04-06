import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'users'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').primary()

            table.string('first_name', 255).nullable()
            table.string('last_name', 255).nullable()
            table.date('date_of_birth').nullable()

            table.float('balance').defaultTo(0)

            table.text('avatar_url', 'longtext').nullable()
            table.string('email', 255).notNullable().unique()
            table.string('password', 255).nullable()
            table.integer('oauth_id').nullable()

            table.boolean('is_admin').defaultTo(false)

            table.timestamp('created_at')
            table.timestamp('updated_at')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
