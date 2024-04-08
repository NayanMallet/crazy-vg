import Product from '#models/product'
import User from '#models/user'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, computed, hasMany, hasOne } from '@adonisjs/lucid/orm'
import crypto from 'node:crypto'

export default class Order extends BaseModel {
    @beforeCreate()
    static generateUuid(model: Order) {
        model.id = crypto.randomUUID()
    }

    @computed()
    get orderNumber() {
        return `#${this.number.toString().padStart(4, '0')}`
    }

    @column({ isPrimary: true })
    declare id: string

    @column()
    declare number: number

    @hasOne(() => User)
    declare user: HasOne<typeof User>

    @column()
    declare invoiceUrl: string | null

    @hasMany(() => Product)
    declare products: HasMany<typeof Product>

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime
}
