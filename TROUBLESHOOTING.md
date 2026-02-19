# Google Sheets Integration Troubleshooting

## 🔍 Debug Steps

### Step 1: Check Browser Console
1. Open your website: http://localhost:8080
2. Open browser console (F12 → Console tab)
3. Fill out the form and submit
4. Look for these messages:
   - 🚀 Sending order to Google Sheets: [data]
   - 📡 URL: [your URL]
   - 📥 Response status: [status]
   - ✅ Order sent successfully OR ❌ Error messages

### Step 2: Test Google Apps Script Directly
1. Open your Google Sheet
2. Go to Extensions → Apps Script
3. Click "Run" → "testFunction"
4. Check if test data appears in your sheet

### Step 3: Verify Web App Deployment
1. In Apps Script: Deploy → Deployments
2. Check that your deployment is "Enabled"
3. "Who has access" should be "Anyone"
4. Copy the Web app URL and test it in browser

## 🛠️ Common Issues & Solutions

### Issue 1: CORS Error
**Problem**: Browser blocks cross-origin requests
**Solution**: 
- Already added `mode: 'no-cors'` in the code
- Alternative: Use a backend proxy

### Issue 2: Web App Not Accessible
**Problem**: "Who has access" not set to "Anyone"
**Solution**:
1. In Apps Script: Deploy → Deployments
2. Click "Edit" → "Who has access" → "Anyone"
3. Redeploy

### Issue 3: Script Permissions
**Problem**: Apps Script doesn't have permission to write to sheet
**Solution**:
1. Run the script manually once
2. Grant all requested permissions
3. Test again

### Issue 4: Sheet Headers Mismatch
**Problem**: Headers don't match the script expectations
**Solution**:
Make sure your Google Sheet has EXACTLY these headers in row 1:
```
A1: Nom
B1: Prénom  
C1: Téléphone
D1: Wilaya
E1: Adresse
F1: Livraison
G1: Timestamp
```

### Issue 5: Network Issues
**Problem**: Internet connection or firewall blocking requests
**Solution**:
- Try different browser
- Check internet connection
- Disable browser extensions

## 🧪 Quick Test

### Test with Postman/cURL:
```bash
curl -X POST \
  "https://script.google.com/macros/s/AKfycbxUTToAyGNA32ExBec4TaZr72jDjO9cGHgUM55nvaGsTQHSzXiSmlq0G0KlIgvml9Fe1w/exec" \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Test",
    "prenom": "User", 
    "telephone": "0555123456",
    "wilaya": "Alger",
    "adresse": "Test Address",
    "livraison": "domicile",
    "timestamp": "2024-01-01 12:00"
  }'
```

## 📞 Alternative Solutions

### Option 1: Use Google Forms (Easier)
1. Create Google Form with same fields
2. Link to Google Sheet
3. Update URL to form submission URL

### Option 2: Email Notification
1. Use EmailJS service
2. Send order details to your email
3. Manual entry to Google Sheet

### Option 3: Backend Service
1. Create simple Node.js backend
2. Forward requests to Google Sheets API
3. More reliable but requires server

## ✅ Success Checklist

- [ ] Browser console shows success messages
- [ ] Test data appears in Google Sheet
- [ ] Web app URL is accessible
- [ ] Script permissions are granted
- [ ] Sheet headers match exactly
- [ ] Form submission shows loading then success

## 🆘 Still Not Working?

1. **Check console errors** - Copy any error messages
2. **Verify Web App URL** - Make sure it's correct
3. **Test script manually** - Run testFunction in Apps Script
4. **Check sheet permissions** - Ensure script can edit sheet
5. **Try alternative method** - Google Forms or email

Contact support with:
- Browser console errors
- Screenshot of your Google Sheet headers
- Your Apps Script deployment settings
