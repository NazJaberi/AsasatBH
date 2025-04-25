// pages/Contact.js
import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';

function Contact() {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team for any inquiries',
      info: {
        title: 'Contact Information',
        address: 'Office 501, Al Bahrain Tower,',
        addressLine2: 'Manama, Kingdom of Bahrain',
        phone: 'Phone: +973 xxxx xxxx',
        email: 'Email: info@asasatalbahrain.com',
        hours: 'Working Hours: Sunday - Thursday, 8:00 AM - 5:00 PM'
      },
      form: {
        title: 'Send a Message',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Thank you! Your message has been sent successfully.'
      },
      map: 'Our Location'
    },
    ar: {
      title: 'اتصل بنا',
      subtitle: 'تواصل مع فريقنا لأي استفسارات',
      info: {
        title: 'معلومات الاتصال',
        address: 'مكتب 501، برج البحرين،',
        addressLine2: 'المنامة، مملكة البحرين',
        phone: 'هاتف: +973 xxxx xxxx',
        email: 'البريد الإلكتروني: info@asasatalbahrain.com',
        hours: 'ساعات العمل: الأحد - الخميس، 8:00 صباحًا - 5:00 مساءً'
      },
      form: {
        title: 'إرسال رسالة',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        subject: 'الموضوع',
        message: 'رسالتك',
        submit: 'إرسال الرسالة',
        success: 'شكراً لك! تم إرسال رسالتك بنجاح.'
      },
      map: 'موقعنا'
    }
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // For demo purposes, simulate a successful submission
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>{content[language].title}</h1>
          <p>{content[language].subtitle}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-container">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>{content[language].info.title}</h2>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <p>{content[language].info.address}</p>
                  <p>{content[language].info.addressLine2}</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-phone-alt"></i>
                <p>{content[language].info.phone}</p>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <p>{content[language].info.email}</p>
              </div>
              <div className="info-item">
                <i className="fas fa-clock"></i>
                <p>{content[language].info.hours}</p>
              </div>
              
              {/* Google Maps Embed */}
              <h3 className="map-title">{content[language].map}</h3>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28633.942867673177!2d50.5217024!3d26.221297349999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a56880f11dd7%3A0x4c52a655ea06114c!2sSeef%20Mall!5e0!3m2!1sen!2sbh!4v1745548521135!5m2!1sen!2sbh" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form">
              <h2>{content[language].form.title}</h2>
              
              {isSubmitted && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <p>{content[language].form.success}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{content[language].form.name}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{content[language].form.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">{content[language].form.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">{content[language].form.subject}</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">{content[language].form.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  {content[language].form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero {
          background-color: var(--secondary-color);
          color: var(--white);
          padding: 80px 0;
          text-align: center;
        }
        
        .page-hero h1 {
          font-size: 40px;
          margin-bottom: 15px;
        }
        
        .page-hero p {
          font-size: 20px;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 50px;
        }
        
        .contact-info {
          background-color: var(--white);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .contact-info h2 {
          margin-bottom: 25px;
          color: var(--primary-color);
        }
        
        .info-item {
          display: flex;
          margin-bottom: 20px;
          align-items: flex-start;
        }
        
        .info-item i {
          color: var(--primary-color);
          font-size: 20px;
          margin-right: 15px;
          margin-top: 3px;
        }
        
        .rtl .info-item i {
          margin-right: 0;
          margin-left: 15px;
        }
        
        .map-title {
          margin-top: 30px;
          margin-bottom: 15px;
          color: var(--primary-color);
          font-size: 20px;
        }
        
        .map-container {
          height: 300px;
          margin-bottom: 20px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }
        
        .contact-form {
          background-color: var(--white);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .contact-form h2 {
          margin-bottom: 25px;
          color: var(--primary-color);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }
        
        input, textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-family: inherit;
          font-size: 16px;
          transition: var(--transition);
        }
        
        input:focus, textarea:focus {
          border-color: var(--primary-color);
          outline: none;
        }
        
        .success-message {
          display: flex;
          align-items: center;
          background-color: #e8f5e9;
          color: #2e7d32;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        
        .success-message i {
          font-size: 20px;
          margin-right: 10px;
        }
        
        .rtl .success-message i {
          margin-right: 0;
          margin-left: 10px;
        }
        
        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
          
          .contact-info {
            order: 2;
          }
          
          .contact-form {
            order: 1;
          }
        }
        
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          .page-hero {
            padding: 60px 0;
          }
          
          .page-hero h1 {
            font-size: 32px;
          }
          
          .map-container {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;