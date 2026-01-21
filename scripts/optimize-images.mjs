// ═══════════════════════════════════════════════════════════════════════════
// SCRIPT D'OPTIMISATION DES IMAGES - Glory Cases
// Convertit toutes les images JPG/PNG en WebP avec compression optimale
// ═══════════════════════════════════════════════════════════════════════════

import sharp from 'sharp'
import { readdirSync, statSync, mkdirSync, existsSync } from 'fs'
import { join, extname, basename } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Configuration
const QUALITY = 85 // Qualité WebP (0-100)
const RESIZE_MAX_WIDTH = 1920 // Largeur max pour les images
const RESIZE_MAX_HEIGHT = 1920 // Hauteur max pour les images

// Répertoires à traiter
const directories = [
    join(__dirname, '..', 'public', 'images', 'products'),
    join(__dirname, '..', 'public', 'images', 'materials'),
    join(__dirname, '..', 'public', 'images', 'partners'),
]

// Statistiques
let stats = {
    total: 0,
    converted: 0,
    skipped: 0,
    errors: 0,
    originalSize: 0,
    optimizedSize: 0,
}

/**
 * Convertit une image en WebP
 */
async function convertToWebP(inputPath, outputPath) {
    try {
        const originalStats = statSync(inputPath)
        stats.originalSize += originalStats.size

        await sharp(inputPath)
            .resize(RESIZE_MAX_WIDTH, RESIZE_MAX_HEIGHT, {
                fit: 'inside',
                withoutEnlargement: true,
            })
            .webp({ quality: QUALITY })
            .toFile(outputPath)

        const optimizedStats = statSync(outputPath)
        stats.optimizedSize += optimizedStats.size

        const reduction = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1)
        const originalKB = (originalStats.size / 1024).toFixed(1)
        const optimizedKB = (optimizedStats.size / 1024).toFixed(1)

        console.log(`✅ ${basename(inputPath)} → ${basename(outputPath)}`)
        console.log(`   ${originalKB} KB → ${optimizedKB} KB (-${reduction}%)`)

        stats.converted++
    } catch (error) {
        console.error(`❌ Erreur: ${basename(inputPath)}`, error.message)
        stats.errors++
    }
}

/**
 * Traite tous les fichiers d'un répertoire
 */
async function processDirectory(dirPath) {
    console.log(`\n📂 Traitement de: ${dirPath}`)
    console.log('─'.repeat(80))

    if (!existsSync(dirPath)) {
        console.log(`⚠️  Répertoire inexistant: ${dirPath}`)
        return
    }

    const files = readdirSync(dirPath)

    for (const file of files) {
        const inputPath = join(dirPath, file)
        const ext = extname(file).toLowerCase()

        // Vérifier si c'est une image
        if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
            continue
        }

        stats.total++

        // Générer le nom de fichier WebP
        const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')

        // Vérifier si le fichier WebP existe déjà
        if (existsSync(outputPath)) {
            console.log(`⏭️  Déjà converti: ${basename(file)}`)
            stats.skipped++
            continue
        }

        // Convertir
        await convertToWebP(inputPath, outputPath)
    }
}

/**
 * Fonction principale
 */
async function main() {
    console.log('\n🎨 OPTIMISATION DES IMAGES - Glory Cases')
    console.log('═'.repeat(80))
    console.log(`Qualité WebP: ${QUALITY}%`)
    console.log(`Résolution max: ${RESIZE_MAX_WIDTH}x${RESIZE_MAX_HEIGHT}px`)
    console.log('═'.repeat(80))

    // Traiter chaque répertoire
    for (const dir of directories) {
        await processDirectory(dir)
    }

    // Afficher les statistiques
    console.log('\n' + '═'.repeat(80))
    console.log('📊 RÉSUMÉ')
    console.log('═'.repeat(80))
    console.log(`✅ Images converties: ${stats.converted}`)
    console.log(`⏭️  Images déjà converties: ${stats.skipped}`)
    console.log(`❌ Erreurs: ${stats.errors}`)
    console.log(`📦 Total traité: ${stats.total}`)

    if (stats.converted > 0) {
        const originalMB = (stats.originalSize / 1024 / 1024).toFixed(2)
        const optimizedMB = (stats.optimizedSize / 1024 / 1024).toFixed(2)
        const reduction = ((1 - stats.optimizedSize / stats.originalSize) * 100).toFixed(1)

        console.log(`\n💾 Taille originale: ${originalMB} MB`)
        console.log(`💾 Taille optimisée: ${optimizedMB} MB`)
        console.log(`📉 Réduction: -${reduction}%`)
    }

    console.log('\n✨ Optimisation terminée !')
    console.log('\n⚠️  IMPORTANT: Mets à jour les chemins des images dans ton code pour utiliser .webp')
}

// Exécuter
main().catch(console.error)
