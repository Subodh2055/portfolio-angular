# Deploy to Vercel

## Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

## Step 2: Deploy
```bash
vercel
```

## Step 3: Follow the Prompts
1. Login to Vercel (if not already logged in)
2. Choose to link to existing project or create new
3. Set project name: `subodhbhandari-portfolio`
4. Set build command: `npm run build`
5. Set output directory: `dist/portfolio-angular`
6. Deploy!

## Step 4: Configure Custom Domain
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Domains
4. Add custom domain: `subodhbhandari.com`
5. Configure DNS as instructed

## Alternative: GitHub Integration
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push
3. Set build settings in Vercel dashboard

Your site will be available at: https://subodhbhandari.com 