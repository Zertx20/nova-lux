interface OrderData {
  nom: string;
  prenom: string;
  telephone: string;
  wilaya: string;
  adresse: string;
  livraison: string;
  timestamp: string;
}

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbxUTToAyGNA32ExBec4TaZr72jDjO9cGHgUM55nvaGsTQHSzXiSmlq0G0KlIgvml9Fe1w/exec";

export const sendOrderToGoogleSheets = async (orderData: OrderData): Promise<boolean> => {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
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

    if (response.ok) {
      const result = await response.json();
      console.log('Order sent to Google Sheets:', result);
      return true;
    } else {
      console.error('Failed to send order to Google Sheets:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error sending order to Google Sheets:', error);
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
