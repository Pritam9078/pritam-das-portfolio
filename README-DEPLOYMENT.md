# Free Deployment Options for Your Portfolio

## 🌟 Option 1: Vercel (Recommended for Full-Stack)

1. **Create GitHub Repository**:
   - Go to [GitHub.com](https://github.com)
   - Create a new repository called `pritam-das-portfolio`
   - Upload all your project files

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "Import Project" and select your repository
   - Vercel will automatically detect and deploy your app
   - **Free tier includes**: 100GB bandwidth, custom domains, SSL

## 🚀 Option 2: Netlify (Great for Static Sites)

1. **Build for Static Deployment**:
   - Run `npm run build` locally
   - Upload the `dist/public` folder to Netlify

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `dist/public` folder
   - **Free tier includes**: 100GB bandwidth, 300 build minutes

## 🛤️ Option 3: Railway (Node.js Focused)

1. **Connect GitHub**:
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Railway will auto-deploy
   - **Free tier**: $5 monthly credit

## 📋 Quick Setup Instructions

### For Vercel (Easiest):
1. Push code to GitHub
2. Connect GitHub to Vercel
3. Deploy automatically
4. Get live URL: `https://pritam-das-portfolio.vercel.app`

### For Netlify:
1. Build: `npm run build`
2. Deploy: Upload `dist/public` folder
3. Get live URL: `https://your-site.netlify.app`

## 🔧 Configuration Files Included:
- `vercel.json` - Vercel deployment configuration
- `netlify.toml` - Netlify deployment settings
- `package.json.deploy` - Production dependencies

## ✅ Your Portfolio Features:
- Working EmailJS contact form
- GitHub resume integration
- Responsive design
- Social media links
- Project showcases
- Terminal easter egg

**Choose your preferred platform and follow the steps above to get your portfolio live for free!**