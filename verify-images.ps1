# ═══════════════════════════════════════════════════════════════════════════
# SCRIPT DE VÉRIFICATION DES IMAGES - Glory Cases
# Vérifie que toutes les images référencées dans le code existent
# ═══════════════════════════════════════════════════════════════════════════

Write-Host "`n🔍 Vérification des images Glory Cases...`n" -ForegroundColor Cyan

# Liste des images attendues (extraites de products.ts)
$expectedImages = @(
    "etui-cowrie-tribal.jpg",
    "etui-geo-blue.jpg",
    "etui-kente-finish.jpg",
    "étui avec bijoux 2.jpg",
    "étui gravure perso 2.jpg",
    "etui-black-minimal.jpg",
    "etui-navy-classic.jpg",
    "etui simple bleu.jpg",
    "étui simple bleu nuit.jpg",
    "étui simple noir.jpg",
    "etui-terra-logo.jpg",
    "etui-wax-abstrait.jpg",
    "etui-wax-coral.jpg",
    "etui-wax-sombre.jpg",
    "etui-wax-tribal.jpg",
    "etui simple bleu doublé.jpg",
    "étui en jean.jpg",
    "étui double tissu.jpg",
    "étui motif rouge.jpg",
    "étui avec cory.jpg",
    "étui avce cory.jpg",
    "étui form géo avec cory.jpg",
    "étui avec bijou 2.jpg",
    "example étui avec marque gravé.jpg",
    "example étui avec marque gravé 2.jpg",
    "tui gravure perso.jpg",
    "étui gravur perso 3.jpg"
)

$productsPath = "public\images\products"
$missingImages = @()
$existingImages = @()

foreach ($image in $expectedImages) {
    $fullPath = Join-Path $productsPath $image
    if (Test-Path $fullPath) {
        $size = (Get-Item $fullPath).Length / 1KB
        Write-Host "✅ $image " -ForegroundColor Green -NoNewline
        Write-Host "($([math]::Round($size, 2)) KB)" -ForegroundColor Gray
        $existingImages += $image
    } else {
        Write-Host "❌ MANQUANT: $image" -ForegroundColor Red
        $missingImages += $image
    }
}

# Vérification des images matières
Write-Host "`n📦 Vérification des images matières...`n" -ForegroundColor Cyan
$materialsPath = "public\images\materials"
$expectedMaterials = @("wax.jpg", "cuir.jpg", "raphia.jpg")

foreach ($material in $expectedMaterials) {
    $fullPath = Join-Path $materialsPath $material
    if (Test-Path $fullPath) {
        $size = (Get-Item $fullPath).Length / 1KB
        Write-Host "✅ $material " -ForegroundColor Green -NoNewline
        Write-Host "($([math]::Round($size, 2)) KB)" -ForegroundColor Gray
    } else {
        Write-Host "❌ MANQUANT: $material" -ForegroundColor Red
    }
}

# Vérification des images partenaires
Write-Host "`n🤝 Vérification des images partenaires...`n" -ForegroundColor Cyan
$partnersPath = "public\images\partners"
$expectedPartners = @("optic-bel-vue.jpg", "select-optic.png")

foreach ($partner in $expectedPartners) {
    $fullPath = Join-Path $partnersPath $partner
    if (Test-Path $fullPath) {
        $size = (Get-Item $fullPath).Length / 1KB
        Write-Host "✅ $partner " -ForegroundColor Green -NoNewline
        Write-Host "($([math]::Round($size, 2)) KB)" -ForegroundColor Gray
    } else {
        Write-Host "❌ MANQUANT: $partner" -ForegroundColor Red
    }
}

# Résumé
Write-Host "`n" + ("═" * 80) -ForegroundColor Cyan
Write-Host "📊 RÉSUMÉ" -ForegroundColor Yellow
Write-Host ("═" * 80) -ForegroundColor Cyan
Write-Host "✅ Images produits présentes: $($existingImages.Count)/$($expectedImages.Count)" -ForegroundColor Green
Write-Host "❌ Images produits manquantes: $($missingImages.Count)" -ForegroundColor $(if ($missingImages.Count -eq 0) { "Green" } else { "Red" })

if ($missingImages.Count -gt 0) {
    Write-Host "`n⚠️  IMAGES MANQUANTES:" -ForegroundColor Yellow
    foreach ($img in $missingImages) {
        Write-Host "   - $img" -ForegroundColor Red
    }
    exit 1
} else {
    Write-Host "`n✨ Toutes les images sont présentes !" -ForegroundColor Green
    
    # Calcul de la taille totale
    $totalSize = (Get-ChildItem -Path "public\images" -Recurse -File | Measure-Object -Property Length -Sum).Sum / 1MB
    Write-Host "📦 Taille totale des images: $([math]::Round($totalSize, 2)) MB" -ForegroundColor Cyan
    
    exit 0
}
