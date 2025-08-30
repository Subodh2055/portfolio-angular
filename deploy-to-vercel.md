# Deploy to Vercel - Dashboard Method

## Step 1: Prepare Your Project
Your project is already built and ready! The `dist/portfolio-angular` folder contains your production build.

## Step 2: Deploy via Vercel Dashboard

### Option A: Upload Method (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Choose "Upload" option
4. **Upload your entire project folder** (excluding node_modules)
5. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist/portfolio-angular`
   - Install Command: `npm install`
6. Click "Deploy"

### Option B: GitHub Integration (Best for updates)
1. Push your code to GitHub first
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings as above
6. Deploy

## Step 3: Configure Custom Domain
After deployment:
1. Go to your project in Vercel dashboard
2. Settings > Domains
3. Add: `subodhbhandari.com.np`
4. Configure DNS as instructed

## Your Portfolio Will Be Live At:
- **Vercel URL**: `https://your-project-name.vercel.app`
- **Custom Domain**: `https://subodhbhandari.com.np`

## Automatic Deployments
Once connected to GitHub, Vercel will automatically deploy on every push to your main branch!
