# Angular Portfolio Deployment Script
# This script builds and prepares your Angular app for deployment

Write-Host "Building Angular application..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful!" -ForegroundColor Green
    Write-Host "Your built files are in: dist/portfolio-angular/" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Upload the contents of dist/portfolio-angular/ to your web server" -ForegroundColor White
    Write-Host "2. Configure your domain subodhbhandari.com to point to your hosting" -ForegroundColor White
    Write-Host "3. Or use one of the deployment guides (deploy-*.md files)" -ForegroundColor White
} else {
    Write-Host "Build failed! Please check the errors above." -ForegroundColor Red
} 