# Domain Configuration Guide

## ✅ Domain Added Successfully!
Your domain `subodhbhandari.com.np` has been added to Vercel.

## 🔧 DNS Configuration Required

You have **2 options** to configure your domain:

### Option A: A Record (Recommended)
Add this A record to your DNS provider:
- **Type**: A
- **Name**: `subodhbhandari.com.np`
- **Value**: `76.76.21.21`
- **TTL**: 3600 (or default)

### Option B: Change Nameservers
Change your domain's nameservers to Vercel's nameservers:
- Current: `ns1.hosting.net.np`, `ns2.hosting.net.np`
- Change to: 
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`

## 📋 Step-by-Step Instructions

### If using Option A (A Record):
1. **Login to your domain registrar** (where you bought subodhbhandari.com.np)
2. **Go to DNS Management**
3. **Add A Record**:
   - Host/Name: `@` or leave empty
   - Type: `A`
   - Value: `76.76.21.21`
   - TTL: `3600`
4. **Save the record**

### If using Option B (Nameservers):
1. **Login to your domain registrar**
2. **Go to Nameserver settings**
3. **Change nameservers** to:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
4. **Save changes**

## ⏱️ Verification Time
- DNS changes can take **24-48 hours** to propagate
- Vercel will send you an email when verification is complete
- You can check status in Vercel dashboard

## 🌐 Your Portfolio URLs
- **Vercel URL**: https://portfolio-angular-a2c8sjl3m-subodh-bhandaris-projects.vercel.app
- **Custom Domain**: https://subodhbhandari.com.np (after DNS setup)

## 🔍 Check Status
Run this command to check domain status:
```bash
vercel domains ls
```

## 📧 Support
If you need help with DNS configuration, contact your domain registrar's support.
