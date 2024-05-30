import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from "#models/product";

export default class extends BaseSeeder {
  async run() {
    await Product.createMany([
        {
            name: 'FIFA 22',
            description: 'La nouvelle version de FIFA',
            price: 69.99,
            thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/fifa-22-ps4-psn-account-account-global-i10000263306047/6a3e5c2f2d144e9c9135a112',
            averageRating: 4.5,
            activationCode: 'FIFA22-2024',
        },
        {
            name: 'Cyberpunk 2077',
            description: 'Le jeu de l\'année',
            price: 49.99,
            thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/cyberpunk-2077-pc-steam-account-account-global-i10000156543020/5d64d16146177c08243974c2',
            averageRating: 4.5,
            activationCode: 'CYBERPUNK2077-2024',
        },
        {
            name: 'Assassin\'s Creed Valhalla',
            description: 'Le jeu de l\'année',
            price: 59.99,
            thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/assassins-creed-valhalla-pc-steam-account-account-global-i10000195319070/5eafb2137e696c3d7e0ba4f2',
            averageRating: 3.5,
            activationCode: 'ASSASSINSCREEDVALHALLA-2024',
        },
        {
            name: 'FIFA 22',
            description: 'La nouvelle version de FIFA',
            price: 69.99,
            thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/fifa-22-ps4-psn-account-account-global-i10000263306047/6a3e5c2f2d144e9c9135a112',
            averageRating: 4.5,
            activationCode: 'FIFA22-2024',
        },
        {
            name: 'Cyberpunk 2077',
            description: 'Le jeu de l\'année',
            price: 49.99,
            thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/cyberpunk-2077-pc-steam-account-account-global-i10000156543020/5d64d16146177c08243974c2',
            averageRating: 4.5,
            activationCode: 'CYBERPUNK2077-2024',
        },
        {
            name: 'Assassin\'s Creed Valhalla',
            description: 'Le jeu de l\'année',
            price: 59.99,
            thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/assassins-creed-valhalla-pc-steam-account-account-global-i10000195319070/5eafb2137e696c3d7e0ba4f2',
            averageRating: 3.5,
            activationCode: 'ASSASSINSCREEDVALHALLA-2024',
        },
        {
            name: 'FIFA 22',
            description: 'La nouvelle version de FIFA',
            price: 69.99,
            thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/fifa-22-ps4-psn-account-account-global-i10000263306047/6a3e5c2f2d144e9c9135a112',
            averageRating: 4.5,
            activationCode: 'FIFA22-2024',
        },
        {
            name: 'Cyberpunk 2077',
            description: 'Le jeu de l\'année',
            price: 49.99,
            thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/cyberpunk-2077-pc-steam-account-account-global-i10000156543020/5d64d16146177c08243974c2',
            averageRating: 4.5,
            activationCode: 'CYBERPUNK2077-2024',
        },
        {
            name: 'Assassin\'s Creed Valhalla',
            description: 'Le jeu de l\'année',
            price: 59.99,
            thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/assassins-creed-valhalla-pc-steam-account-account-global-i10000195319070/5eafb2137e696c3d7e0ba4f2',
            averageRating: 3.5,
            activationCode: 'ASSASSINSCREEDVALHALLA-2024',
        }
    ]);
  }
}
