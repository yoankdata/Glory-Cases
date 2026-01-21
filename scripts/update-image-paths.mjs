// ═══════════════════════════════════════════════════════════════════════════
// SCRIPT DE MISE À JOUR DES CHEMINS D'IMAGES VERS WEBP
// ═══════════════════════════════════════════════════════════════════════════

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Fichiers à mettre à jour
const files = [
    join(__dirname, '..', 'src', 'lib', 'products.ts'),
    join(__dirname, '..', 'src', 'app', 'atelier', 'page.tsx'),
    join(__dirname, '..', 'src', 'app', 'page.tsx'),
    join(__dirname, '..', 'src', 'app', 'pro', 'page.tsx'),
    join(__dirname, '..', 'src', 'app', 'layout.tsx'),
]

console.log('\n🔄 Mise à jour des chemins d\'images vers WebP...\n')

let totalReplacements = 0

files.forEach((filePath) => {
    try {
        let content = readFileSync(filePath, 'utf8')
        let replacements = 0

        // Remplacer .jpg, .jpeg, .png par .webp
        const patterns = [
            { from: /\.jpg(['"])/g, to: '.webp$1' },
            { from: /\.jpeg(['"])/g, to: '.webp$1' },
            { from: /\.png(['"])/g, to: '.webp$1' },
        ]

        patterns.forEach(({ from, to }) => {
            const matches = content.match(from)
            if (matches) {
                replacements += matches.length
                content = content.replace(from, to)
            }
        })

        if (replacements > 0) {
            writeFileSync(filePath, content, 'utf8')
            console.log(`✅ ${filePath.split('\\').pop()}: ${replacements} remplacement(s)`)
            totalReplacements += replacements
        } else {
            console.log(`⏭️  ${filePath.split('\\').pop()}: Aucun changement`)
        }
    } catch (error) {
        console.error(`❌ Erreur: ${filePath}`, error.message)
    }
})

console.log('\n' + '═'.repeat(80))
console.log(`✨ Total: ${totalReplacements} références mises à jour vers WebP`)
console.log('═'.repeat(80))
