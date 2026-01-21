// ═══════════════════════════════════════════════════════════════════════════
// SCRIPT DE VÉRIFICATION DES IMAGES - Glory Cases
// Ce script vérifie que toutes les images référencées dans products.ts existent
// ═══════════════════════════════════════════════════════════════════════════

import { products } from './src/lib/products'
import { existsSync } from 'fs'
import { join } from 'path'

console.log('🔍 Vérification des images produits...\n')

let missingImages: string[] = []
let existingImages: string[] = []

products.forEach((product) => {
    product.images.forEach((imagePath) => {
        // Convertir le chemin relatif en chemin absolu
        const fullPath = join(process.cwd(), 'public', imagePath)

        if (existsSync(fullPath)) {
            existingImages.push(imagePath)
            console.log(`✅ ${product.title}: ${imagePath}`)
        } else {
            missingImages.push(imagePath)
            console.log(`❌ MANQUANT - ${product.title}: ${imagePath}`)
        }
    })
})

console.log('\n' + '═'.repeat(80))
console.log('📊 RÉSUMÉ')
console.log('═'.repeat(80))
console.log(`✅ Images présentes: ${existingImages.length}`)
console.log(`❌ Images manquantes: ${missingImages.length}`)
console.log(`📦 Total produits: ${products.length}`)

if (missingImages.length > 0) {
    console.log('\n⚠️  IMAGES MANQUANTES:')
    missingImages.forEach(img => console.log(`   - ${img}`))
    process.exit(1)
} else {
    console.log('\n✨ Toutes les images sont présentes !')
    process.exit(0)
}
