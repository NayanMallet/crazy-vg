import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import hash from '@adonisjs/core/services/hash'
import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import * as crypto from 'node:crypto'
import { compose } from '@adonisjs/core/helpers'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
    uids: ['email'],
    passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
    @beforeCreate()
    static generateUuid(model: User) {
        model.id = crypto.randomUUID()
    }

    @column({ isPrimary: true })
    declare id: string

    @column()
    declare firstName: string | null

    @column()
    declare lastName: string | null

    @column.date()
    declare dateOfBirth: DateTime | null

    @column()
    declare balance: number

    @column()
    declare avatarUrl: string | null

    @column()
    declare email: string

    @column()
    declare password: string | null

    @column()
    declare oauthId: string | null

    @column()
    declare isAdmin: boolean

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
}
