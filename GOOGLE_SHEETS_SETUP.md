# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets to automatically receive order information from your Nova Lux website.

## 🚀 Quick Setup (Recommended)

### Option 1: Use Google Forms + Sheets (Easiest)

1. **Create a Google Form**
   - Go to [forms.google.com](https://forms.google.com)
   - Create a new form with these fields:
     - Nom (Short answer)
     - Prénom (Short answer)
     - Téléphone (Short answer)
     - Wilaya (Dropdown or Short answer)
     - Adresse (Paragraph)
     - Type de livraison (Multiple choice: "À domicile", "Au bureau")
   - Click "Responses" tab → Link to Sheets → Create spreadsheet

2. **Get the Form URL**
   - Click "Send" → Get link → Copy the URL
   - Replace `YOUR_GOOGLE_SHEETS_WEB_APP_URL` in `src/services/googleSheets.ts` with your form URL

3. **Update the service file**
   ```typescript
   // In src/services/googleSheets.ts
   const GOOGLE_SHEETS_URL = "https://docs.google.com/forms/d/YOUR_FORM_ID/formResponse";
   ```

### Option 2: Google Apps Script (Advanced)

1. **Create Google Sheet**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Create new sheet with these headers:
     `Nom | Prénom | Téléphone | Wilaya | Adresse | Livraison | Timestamp`

2. **Create Apps Script**
   - In your sheet: Extensions → Apps Script
   - Paste this code:

   ```javascript
   function doPost(e) {
     try {
       const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
       const data = JSON.parse(e.postData.contents);
       
       sheet.appendRow([
         data.nom,
         data.prenom,
         data.telephone,
         data.wilaya,
         data.adresse,
         data.livraison,
         data.timestamp
       ]);
       
       return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
         .setMimeType(ContentService.MimeType.JSON);
     } catch(error) {
       return ContentService.createTextOutput(JSON.stringify({status: 'error', error: error.toString()}))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }
   ```

3. **Deploy as Web App**
   - Click Deploy → New Deployment
   - Type: Web app
   - Execute as: Me
   - Who has access: Anyone
   - Copy the Web app URL
   - Replace `YOUR_GOOGLE_SHEETS_WEB_APP_URL` in `src/services/googleSheets.ts`

## 📧 Alternative: Email Integration

If Google Sheets setup is complex, you can use EmailJS for email notifications:

1. **Sign up for EmailJS** at [www.emailjs.com](https://www.emailjs.com)
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with these variables:
   - `{{nom}}`, `{{prenom}}`, `{{telephone}}`, `{{wilaya}}`, `{{adresse}}`, `{{livraison}}`, `{{timestamp}}`
4. **Update the service** with your EmailJS credentials

## 🔧 Configuration Steps

### Step 1: Update the Service File
```typescript
// In src/services/googleSheets.ts
const GOOGLE_SHEETS_URL = "YOUR_ACTUAL_URL_HERE";
```

### Step 2: Test the Integration
1. Run your development server: `npm run dev`
2. Fill out the order form with test data
3. Submit the form
4. Check your Google Sheet or email for the data

### Step 3: Deploy to Production
- The same integration will work in production
- Make sure your Google Sheet/Form is publicly accessible

## 🛡️ Security Notes

- **Never expose API keys** in frontend code
- **Google Forms option** is most secure for beginners
- **Apps Script** requires careful permission management
- Consider implementing **backend validation** for production

## 📞 Support

If you need help:
1. Check browser console for errors
2. Verify your Google Sheet/Form URLs
3. Ensure proper permissions are set
4. Test with different browsers

## ✅ Testing Checklist

- [ ] Form submission works without errors
- [ ] Data appears in Google Sheet
- [ ] Loading state shows during submission
- [ ] Success message appears after submission
- [ ] Error handling works for network issues

Your order information will now be automatically captured whenever someone submits the command form!
