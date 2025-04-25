// pages/Home.js
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { Link } from 'react-router-dom';

function Home() {
  const { language } = useContext(LanguageContext);
  
  const content = {
    en: {
      hero: {
        title: 'Building Excellence in Bahrain',
        subtitle: 'Creating landmark constructions with quality and precision',
        cta: 'Explore Our Projects'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive construction solutions for your needs',
        items: [
          {
            title: 'Residential Construction',
            description: 'Building homes that blend comfort, style, and functionality.'
          },
          {
            title: 'Commercial Construction',
            description: 'Creating business spaces that enhance productivity and impression.'
          },
          {
            title: 'Infrastructure Development',
            description: 'Developing vital infrastructure that supports community growth.'
          },
          {
            title: 'Renovation Services',
            description: 'Transforming existing structures with modern updates and repairs.'
          }
        ]
      },
      about: {
        title: 'Why Choose Us',
        points: [
          'Over 15 years of excellence in construction',
          'Dedicated team of professionals',
          'Commitment to quality and timeliness',
          'Modern technology and techniques'
        ],
        cta: 'Learn More About Us'
      },
      projects: {
        title: 'Featured Projects',
        subtitle: 'Some of our recent construction achievements',
        cta: 'View All Projects'
      },
      contact: {
        title: 'Ready to Start Your Project?',
        description: 'Contact us today for a consultation and quote',
        cta: 'Contact Us'
      }
    },
    ar: {
      hero: {
        title: 'بناء التميز في البحرين',
        subtitle: 'إنشاء مباني بارزة بجودة ودقة عالية',
        cta: 'استكشف مشاريعنا'
      },
      services: {
        title: 'خدماتنا',
        subtitle: 'حلول بناء شاملة لتلبية احتياجاتك',
        items: [
          {
            title: 'بناء المساكن',
            description: 'بناء منازل تجمع بين الراحة والأناقة والوظائف العملية.'
          },
          {
            title: 'البناء التجاري',
            description: 'إنشاء مساحات أعمال تعزز الإنتاجية والانطباع.'
          },
          {
            title: 'تطوير البنية التحتية',
            description: 'تطوير بنية تحتية حيوية تدعم نمو المجتمع.'
          },
          {
            title: 'خدمات التجديد',
            description: 'تحويل الهياكل الموجودة مع التحديثات والإصلاحات الحديثة.'
          }
        ]
      },
      about: {
        title: 'لماذا تختارنا',
        points: [
          'أكثر من 15 عامًا من التميز في البناء',
          'فريق متخصص من المحترفين',
          'الالتزام بالجودة والالتزام بالمواعيد',
          'التكنولوجيا والتقنيات الحديثة'
        ],
        cta: 'تعرف أكثر علينا'
      },
      projects: {
        title: 'مشاريع مميزة',
        subtitle: 'بعض إنجازاتنا الأخيرة في البناء',
        cta: 'عرض جميع المشاريع'
      },
      contact: {
        title: 'جاهز لبدء مشروعك؟',
        description: 'اتصل بنا اليوم للحصول على استشارة وعرض سعر',
        cta: 'اتصل بنا'
      }
    }
  };

  // Placeholder data for featured projects
  const featuredProjects = [
    {
      id: 1,
      image: 'https://rsiconference.org/wp-content/uploads/2024/04/RSI-Conference-Hotel-Image.png',
      title: { en: 'Luxury Villa Complex', ar: 'مجمع فلل فاخرة' },
      category: { en: 'Residential', ar: 'سكني' }
    },
    {
      id: 2,
      image: 'https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg?w=400&h=300&c=crop',
      title: { en: 'Commercial Tower', ar: 'برج تجاري' },
      category: { en: 'Commercial', ar: 'تجاري' }
    },
    {
      id: 3,
      image: 'https://www.mingtiandi.com/wp-content/uploads/2018/05/the-spire-london-tower-400x300.jpg',
      title: { en: 'Coastal Highway', ar: 'الطريق الساحلي' },
      category: { en: 'Infrastructure', ar: 'بنية تحتية' }
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>{content[language].hero.title}</h1>
          <p>{content[language].hero.subtitle}</p>
          <Link to="/portfolio" className="btn btn-primary">
            {content[language].hero.cta}
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-title">
            <h2>{content[language].services.title}</h2>
            <p>{content[language].services.subtitle}</p>
          </div>
          
          <div className="services-grid">
            {content[language].services.items.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <i className={`fas fa-${['home', 'building', 'road', 'tools'][index]}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* About Section */}
<section className="section about-section">
  <div className="container">
    <div className="about-content">
      <div className="about-text">
        <h2>{content[language].about.title}</h2>
        <ul className="about-list">
          {content[language].about.points.map((point, index) => (
            <li key={index}>
              <i className="fas fa-check-circle"></i> {point}
            </li>
          ))}
        </ul>
        <Link to="/about" className="btn btn-outline">
          {content[language].about.cta}
        </Link>
      </div>
      <div className="about-image">
        <div className="image-container">
          {/* Replace the placeholder with an actual image */}
          <img 
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Architecture" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Featured Projects */}
      <section className="section projects-section">
        <div className="container">
          <div className="section-title">
            <h2>{content[language].projects.title}</h2>
            <p>{content[language].projects.subtitle}</p>
          </div>
          
          <div className="project-grid">
            {featuredProjects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title[language]} />
                </div>
                <div className="project-info">
                  <h3>{project.title[language]}</h3>
                  <span className="project-category">{project.category[language]}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-40">
            <Link to="/portfolio" className="btn btn-primary">
              {content[language].projects.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{content[language].contact.title}</h2>
            <p>{content[language].contact.description}</p>
            <Link to="/contact" className="btn btn-secondary">
              {content[language].contact.cta}
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          height: calc(100vh - 90px);
          min-height: 600px;
          background-image: url('https://mrwallpaper.com/images/hd/bahrain-sample-structures-829vx09pc6r1pnh0.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
          color: var(--white);
          display: flex;
          align-items: center;
          text-align: center;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero h1 {
          font-size: 48px;
          margin-bottom: 20px;
        }
        
        .hero p {
          font-size: 20px;
          margin-bottom: 30px;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .service-card {
          background-color: var(--white);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: var(--transition);
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .service-icon {
          font-size: 40px;
          color: var(--primary-color);
          margin-bottom: 20px;
        }
        
        .service-card h3 {
          margin-bottom: 15px;
          font-size: 22px;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        
        .about-list {
          margin: 25px 0;
        }
        
        .about-list li {
          margin-bottom: 15px;
          display: flex;
          align-items: flex-start;
        }
        
        .about-list i {
          color: var(--primary-color);
          margin-right: 10px;
          margin-top: 5px;
        }
        
        .rtl .about-list i {
          margin-right: 0;
          margin-left: 10px;
        }
        
        .image-container {
          height: 400px;
          border-radius: 10px;
          overflow: hidden;
        }
        
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .project-card {
          background-color: var(--white);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: var(--transition);
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .project-image {
          height: 200px;
          overflow: hidden;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        
        .project-card:hover .project-image img {
          transform: scale(1.1);
        }
        
        .project-info {
          padding: 20px;
        }
        
        .project-category {
          display: inline-block;
          background-color: var(--light-bg);
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 14px;
          margin-top: 10px;
        }
        
        .contact-cta {
          background-color: var(--primary-color);
          color: var(--white);
          text-align: center;
        }
        
        .cta-content {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .cta-content h2 {
          font-size: 36px;
          margin-bottom: 20px;
        }
        
        .cta-content p {
          margin-bottom: 30px;
          font-size: 18px;
        }
        
        .text-center {
          text-align: center;
        }
        
        .mt-40 {
          margin-top: 40px;
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 36px;
          }
          
          .hero p {
            font-size: 18px;
          }
          
          .about-content {
            grid-template-columns: 1fr;
          }
          
          .about-image {
            order: -1;
          }
          
          .cta-content h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;