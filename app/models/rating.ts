import Product from '#models/product'
import User from '#models/user'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasOne } from '@adonisjs/lucid/orm'

export default class Rating extends BaseModel {
    @beforeCreate()
    static generateUUID(model: Rating) {
        model.id = crypto.randomUUID()
    }

    @column({ isPrimary: true })
    declare id: string

    @column()
    declare rating: number

    @column()
    declare comment: string

    @hasOne(() => User)
    declare user: HasOne<typeof User>

    @hasOne(() => Product)
    declare product: HasOne<typeof Product>

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime
}
