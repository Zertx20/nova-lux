interface OrderData {
  nom: string;
  prenom: string;
  telephone: string;
  wilaya: string;
  adresse: string;
  livraison: string;
  timestamp: string;
}

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbyC4QxhDqzMZfku1kFk_rQOn47POZ3WdMjmjHn00RM08tqCocgMXEYNWJjWBnYxSY67SQ/exec";

export const sendOrderToGoogleSheets = async (orderData: OrderData): Promise<boolean> => {
  try {
    console.log('🚀 Sending order to Google Sheets:', orderData);
    console.log('📡 URL:', GOOGLE_SHEETS_URL);
    
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors', // Try with no-cors mode
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom: orderData.nom,
        prenom: orderData.prenom,
        telephone: orderData.telephone,
        wilaya: orderData.wilaya,
        adresse: orderData.adresse,
        livraison: orderData.livraison,
        timestamp: orderData.timestamp,
      }),
    });

    console.log('📥 Response status:', response.status);
    console.log('📥 Response ok:', response.ok);

    // With no-cors, we can't read the response, but we'll assume success if no error
    if (response.type === 'opaque') {
      console.log('✅ Order sent successfully (no-cors response)');
      return true;
    }

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Order sent to Google Sheets:', result);
      return true;
    } else {
      console.error('❌ Failed to send order to Google Sheets:', response.statusText);
      console.error('❌ Response:', response);
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending order to Google Sheets:', error);
    console.error('❌ Error details:', error.message);
    return false;
  }
};

// Alternative: Email service integration (if Google Sheets setup is complex)
export const sendOrderEmail = async (orderData: OrderData): Promise<boolean> => {
  try {
    // This would connect to an email service like EmailJS, SendGrid, or your own backend
    const emailData = {
      to: 'your-email@example.com', // Your email to receive orders
      subject: `Nouvelle commande - ${orderData.nom} ${orderData.prenom}`,
      message: `
        Nouvelle commande reçue:
        
        Nom: ${orderData.nom}
        Prénom: ${orderData.prenom}
        Téléphone: ${orderData.telephone}
        Wilaya: ${orderData.wilaya}
        Adresse: ${orderData.adresse}
        Livraison: ${orderData.livraison}
        Date: ${orderData.timestamp}
      `,
    };

    // For now, we'll just log it. You can integrate with EmailJS or similar service
    console.log('Order email data:', emailData);
    return true;
  } catch (error) {
    console.error('Error sending order email:', error);
    return false;
  }
};
