interface NovaLuxOrderData {
  nom: string;
  prenom: string;
  telephone: string;
  wilaya: string;
  adresse: string;
  livraison: string;
  timestamp: string;
}

const NOVALUX_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwgGkjk8aOKfdnr_ieNxgwj5Rh3IhuyZ0QMHpkFdLft8IcQ3AmtA5fG-OXbUsHxt-g/exec";

export const sendOrderToNovaLuxSheets = async (orderData: NovaLuxOrderData): Promise<boolean> => {
  try {
    console.log('🚀 Sending order to Nova Lux Sheets:', orderData);
    console.log('📡 Nova Lux URL:', NOVALUX_SHEETS_URL);
    
    const response = await fetch(NOVALUX_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
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

    console.log('📥 Nova Lux Response type:', response.type);

    // With no-cors, we can't read the response, but we'll assume success if no error
    if (response.type === 'opaque') {
      console.log('✅ Order sent to Nova Lux Sheets successfully!');
      return true;
    }

    console.log('✅ Nova Lux Sheets submission completed');
    return true;
    
  } catch (error) {
    console.error('❌ Error sending order to Nova Lux Sheets:', error);
    console.error('❌ Error details:', error.message);
    return false;
  }
};
