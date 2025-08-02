# Deploy to GitHub Pages with Custom Domain (subodhbhandari.com.np)

## Step 1: Create GitHub Repository
1. Go to GitHub.com and create a new repository
2. Name it: `portfolio-angular` or `subodhbhandari-portfolio`

## Step 2: Push Your Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-angular.git
git push -u origin main
```

## Step 3: Install GitHub Pages Package
```bash
npm install --save-dev angular-cli-ghpages
```

## Step 4: Add Deploy Script to package.json
Add this to your package.json scripts:
```json
"deploy": "ng build --base-href https://subodhbhandari.com.np/ && npx angular-cli-ghpages --dir=dist/portfolio-angular"
```

## Step 5: Deploy
```bash
npm run deploy
```

## Step 6: Configure Custom Domain
1. In your GitHub repository, go to Settings > Pages
2. Add your custom domain: `subodhbhandari.com.np`
3. Create a CNAME file in your repository with content: `subodhbhandari.com.np`
4. Configure your domain's DNS to point to GitHub Pages

Your site will be available at: https://subodhbhandari.com.np 