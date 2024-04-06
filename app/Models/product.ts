import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import crypto from 'node:crypto'

export default class Product extends BaseModel {
    @beforeCreate()
    static generateUuid(model: Product) {
        model.id = crypto.randomUUID()
    }

    @column({ isPrimary: true })
    declare id: string

    @column()
    declare name: string

    @column()
    declare description: string

    @column()
    declare price: number

    @column()
    declare thumbnailUrl: string

    @column()
    declare averageRating: number

    @column()
    declare activationCode: string

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
}
