import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendOrderToNovaLuxSheets } from "@/services/novaLuxSheets";

const wilayas = [
  "Adrar","Chlef","Laghouat","Oum El Bouaghi","Batna","Béjaïa","Biskra","Béchar","Blida","Bouira",
  "Tamanrasset","Tébessa","Tlemcen","Tiaret","Tizi Ouzou","Alger","Djelfa","Jijel","Sétif","Saïda",
  "Skikda","Sidi Bel Abbès","Annaba","Guelma","Constantine","Médéa","Mostaganem","M'Sila","Mascara",
  "Ouargla","Oran","El Bayadh","Illizi","Bordj Bou Arréridj","Boumerdès","El Tarf","Tindouf",
  "Tissemsilt","El Oued","Khenchela","Souk Ahras","Tipaza","Mila","Aïn Defla","Naâma","Aïn Témouchent",
  "Ghardaïa","Relizane","Timimoun","Bordj Badji Mokhtar","Ouled Djellal","Béni Abbès","In Salah",
  "In Guezzam","Touggourt","Djanet","El M'Ghair","El Meniaa"
];

const OrderForm = () => {
  const [form, setForm] = useState({ 
    nom: "", 
    prenom: "", 
    telephone: "", 
    wilaya: "", 
    adresse: "", 
    livraison: "" 
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nom.trim()) e.nom = "حقل مطلوب";
    if (!form.prenom.trim()) e.prenom = "حقل مطلوب";
    if (!form.telephone.trim() || !/^0[5-7]\d{8}$/.test(form.telephone.trim())) e.telephone = "رقم هاتف غير صالح (مثال: 0555123456)";
    if (!form.wilaya) e.wilaya = "اختر ولاية";
    if (!form.adresse.trim()) e.adresse = "حقل مطلوب";
    if (!form.livraison) e.livraison = "اختر نوع التوصيل";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Prepare order data for Nova Lux Sheets
      const orderData = {
        ...form,
        timestamp: new Date().toLocaleString('fr-DZ', { 
          timeZone: 'Africa/Algiers',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      try {
        console.log('📤 Sending order to Nova Lux Sheets...');
        
        // Send to Nova Lux Sheets
        const success = await sendOrderToNovaLuxSheets(orderData);
        
        if (success) {
          setSubmitted(true);
          console.log('✅ Order submitted to Nova Lux Sheets successfully!');
          
          // Show success message with order details
          alert(`✅ تم إرسال طلبك بنجاح!\n\n` +
                `الاسم: ${orderData.nom} ${orderData.prenom}\n` +
                `الهاتف: ${orderData.telephone}\n` +
                `الولاية: ${orderData.wilaya}\n` +
                `التوصيل: ${orderData.livraison}\n\n` +
                `تم تسجيل طلبك في نظام نوفا لوكس!\n` +
                `سنتواصل معك قريباً للتأكيد.`);
        } else {
          console.error('❌ Failed to send order to Nova Lux Sheets');
          alert('❌ خطأ في إرسال الطلب.\n\n' +
                'يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.\n' +
                'إذا استمرت المشكلة، تواصل معنا مباشرة.');
        }
      } catch (error) {
        console.error('❌ Submission error:', error);
        alert('❌ خطأ تقني أثناء الإرسال.\n\n' +
              'يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="order-form" className="py-24 px-6 bg-card">
      <div className="max-w-lg mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl text-center text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          اطلب <span className="text-gold-gradient">الآن</span>
        </motion.h2>
        <p className="font-body text-center text-muted-foreground mb-10">
          املأ النموذج أدناه لتلقي حقيبة تيرانوفا الخاصة بك.
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="bg-background rounded-3xl p-12 text-center shadow-luxury"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-display text-2xl text-foreground mb-2">تم تأكيد طلبك!</h3>
              <p className="font-body text-muted-foreground">
                شكراً لطلبك. سنتواصل معك قريباً.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="bg-background rounded-3xl p-8 md:p-10 shadow-luxury space-y-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">الاسم</label>
                  <input
                    type="text"
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className="w-full font-body bg-secondary rounded-xl px-4 py-3 text-foreground border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="اسمك"
                    maxLength={50}
                  />
                  {errors.nom && <p className="text-destructive text-xs mt-1 font-body">{errors.nom}</p>}
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">اللقب</label>
                  <input
                    type="text"
                    value={form.prenom}
                    onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                    className="w-full font-body bg-secondary rounded-xl px-4 py-3 text-foreground border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="لقبك"
                    maxLength={50}
                  />
                  {errors.prenom && <p className="text-destructive text-xs mt-1 font-body">{errors.prenom}</p>}
                </div>
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">الهاتف</label>
                <input
                  type="tel"
                  value={form.telephone}
                  onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                  className="w-full font-body bg-secondary rounded-xl px-4 py-3 text-foreground border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="0555 123 456"
                  maxLength={10}
                />
                {errors.telephone && <p className="text-destructive text-xs mt-1 font-body">{errors.telephone}</p>}
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">الولاية</label>
                <select
                  value={form.wilaya}
                  onChange={(e) => setForm({ ...form, wilaya: e.target.value })}
                  className="w-full font-body bg-secondary rounded-xl px-4 py-3 text-foreground border border-border focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">اختر ولايتك</option>
                  {wilayas.map((w, i) => (
                    <option key={i} value={w}>{`${i + 1} - ${w}`}</option>
                  ))}
                </select>
                {errors.wilaya && <p className="text-destructive text-xs mt-1 font-body">{errors.wilaya}</p>}
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">نوع التوصيل</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="relative">
                    <input
                      type="radio"
                      name="livraison"
                      value="maison"
                      checked={form.livraison === "maison"}
                      onChange={(e) => setForm({ ...form, livraison: e.target.value })}
                      className="sr-only peer"
                    />
                    <div className="font-body bg-secondary rounded-xl px-4 py-3 text-foreground border border-border cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:shadow-sm flex items-center justify-center gap-2">
                      <span>🏠</span>
                      <span>التوصيل للمنزل</span>
                    </div>
                  </label>
                  
                  <label className="relative">
                    <input
                      type="radio"
                      name="livraison"
                      value="bureau"
                      checked={form.livraison === "bureau"}
                      onChange={(e) => setForm({ ...form, livraison: e.target.value })}
                      className="sr-only peer"
                    />
                    <div className="font-body bg-secondary rounded-xl px-4 py-3 text-foreground border border-border cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:shadow-sm flex items-center justify-center gap-2">
                      <span>🏢</span>
                      <span>التوصيل للمكتب</span>
                    </div>
                  </label>
                </div>
                {errors.livraison && <p className="text-destructive text-xs mt-1 font-body">{errors.livraison}</p>}
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">العنوان الكامل</label>
                <textarea
                  value={form.adresse}
                  onChange={(e) => setForm({ ...form, adresse: e.target.value })}
                  rows={3}
                  className="w-full font-body bg-secondary rounded-xl px-4 py-3 text-foreground border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="عنوان التوصيل الخاص بك"
                  maxLength={300}
                />
                {errors.adresse && <p className="text-destructive text-xs mt-1 font-body">{errors.adresse}</p>}
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gold-gradient text-primary-foreground font-body font-semibold text-lg py-4 rounded-full shadow-luxury hover:shadow-luxury-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    جاري الإرسال...
                  </span>
                ) : (
                  "تأكيد الطلب"
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OrderForm;
