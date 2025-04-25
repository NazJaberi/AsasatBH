// pages/Portfolio.js
import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';

function Portfolio() {
  const { language } = useContext(LanguageContext);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const content = {
    en: {
      title: 'Our Portfolio',
      subtitle: 'Explore our diverse range of construction projects',
      filters: {
        all: 'All Projects',
        residential: 'Residential',
        commercial: 'Commercial',
        infrastructure: 'Infrastructure',
        renovation: 'Renovation'
      }
    },
    ar: {
      title: 'معرض أعمالنا',
      subtitle: 'استكشف مجموعتنا المتنوعة من مشاريع البناء',
      filters: {
        all: 'جميع المشاريع',
        residential: 'سكني',
        commercial: 'تجاري',
        infrastructure: 'بنية تحتية',
        renovation: 'تجديد'
      }
    }
  };

  // Sample project data
  const projects = [
    {
      id: 1,
      title: { en: 'Luxury Villa Complex', ar: 'مجمع فلل فاخرة' },
      category: 'residential',
      location: { en: 'Riffa, Bahrain', ar: 'الرفاع، البحرين' },
      year: '2023',
      description: { 
        en: 'A modern complex of 15 luxury villas with contemporary design and high-end finishes.',
        ar: 'مجمع حديث يتكون من 15 فيلا فاخرة بتصميم معاصر وتشطيبات راقية.'
      },
      image: 'https://geographical.co.uk/wp-content/uploads/shutterstock_252677680-600x400.jpg'
    },
    {
      id: 2,
      title: { en: 'Bahrain Bay Tower', ar: 'برج خليج البحرين' },
      category: 'commercial',
      location: { en: 'Bahrain Bay, Manama', ar: 'خليج البحرين، المنامة' },
      year: '2022',
      description: { 
        en: 'A 30-story commercial tower featuring offices, retail spaces, and a rooftop restaurant.',
        ar: 'برج تجاري من 30 طابقًا يضم مكاتب ومساحات للبيع بالتجزئة ومطعمًا على السطح.'
      },
      image: 'https://www.cisco.com/content/dam/cisco-cdc/site/images/legacy/assets/swa/img/600/smart-city-tech-600x400.jpg'
    },
    {
      id: 3,
      title: { en: 'Coastal Highway', ar: 'الطريق الساحلي' },
      category: 'infrastructure',
      location: { en: 'East Coast, Bahrain', ar: 'الساحل الشرقي، البحرين' },
      year: '2021',
      description: { 
        en: 'A 15 km coastal highway connecting major cities along the eastern coast with modern infrastructure.',
        ar: 'طريق ساحلي بطول 15 كم يربط المدن الرئيسية على طول الساحل الشرقي ببنية تحتية حديثة.'
      },
      image: 'https://www.shutterstock.com/image-photo/new-york-united-states-panorama-600nw-2474249733.jpg'
    },
    {
      id: 4,
      title: { en: 'Heritage Hotel Renovation', ar: 'تجديد الفندق التراثي' },
      category: 'renovation',
      location: { en: 'Muharraq, Bahrain', ar: 'المحرق، البحرين' },
      year: '2022',
      description: { 
        en: 'Complete renovation of a historic hotel, preserving architectural heritage while adding modern amenities.',
        ar: 'تجديد كامل لفندق تاريخي، مع الحفاظ على التراث المعماري مع إضافة وسائل الراحة الحديثة.'
      },
      image: 'https://www.theglobeandmail.com/resizer/v2/XUK3V5MFRZEIROUHKEUFEJVV44.jpg?auth=a9b0ab3c30a7ca7fa56c47674220d0faa365ad8825cb18318c7a46e7d62472e7&width=600&height=400&quality=80&smart=true'
    },
    {
      id: 5,
      title: { en: 'Seef Residences', ar: 'مساكن السيف' },
      category: 'residential',
      location: { en: 'Seef District, Bahrain', ar: 'منطقة السيف، البحرين' },
      year: '2023',
      description: { 
        en: 'A high-rise residential building with 120 luxury apartments and premium amenities.',
        ar: 'مبنى سكني مرتفع يضم 120 شقة فاخرة ومرافق متميزة.'
      },
      image: 'https://www.theglobeandmail.com/resizer/v2/XW6SB5LON5ECJHUIDNFMLTWJ2M.jpg?auth=c7e95d7d0f80285d3791108478809d1f8ca30b189950b289decdca1d8c1ad9af&width=600&quality=80'
    },
    {
      id: 6,
      title: { en: 'Bahrain Mall', ar: 'مول البحرين' },
      category: 'commercial',
      location: { en: 'Juffair, Bahrain', ar: 'الجفير، البحرين' },
      year: '2021',
      description: { 
        en: 'A premier shopping destination with over 200 retail outlets, entertainment facilities, and dining options.',
        ar: 'وجهة تسوق رئيسية تضم أكثر من 200 متجر للبيع بالتجزئة ومرافق ترفيهية وخيارات لتناول الطعام.'
      },
      image: 'https://geographical.co.uk/wp-content/uploads/shutterstock_2319821837-1-1-600x400.webp'
    },
    {
      id: 7,
      title: { en: 'Water Treatment Plant', ar: 'محطة معالجة المياه' },
      category: 'infrastructure',
      location: { en: 'Northern Governorate, Bahrain', ar: 'المحافظة الشمالية، البحرين' },
      year: '2020',
      description: { 
        en: 'A state-of-the-art water treatment facility with a capacity of 15 million gallons per day.',
        ar: 'منشأة حديثة لمعالجة المياه بسعة 15 مليون جالون يوميًا.'
      },
      image: 'https://mymagicearth.com/wp-content/uploads/2020/03/Ulm-Walking-Tour-in-a-German-City-with-the-Highest-Church-Spire-in-the-World-01-600x400.jpg'
    },
    {
      id: 8,
      title: { en: 'Historic Market Renovation', ar: 'تجديد السوق التاريخي' },
      category: 'renovation',
      location: { en: 'Manama Old Town, Bahrain', ar: 'المدينة القديمة بالمنامة، البحرين' },
      year: '2023',
      description: { 
        en: 'Careful restoration of a traditional market, maintaining its cultural significance and enhancing functionality.',
        ar: 'ترميم دقيق لسوق تقليدي، مع الحفاظ على أهميته الثقافية وتعزيز وظائفه.'
      },
      image: 'https://www.greaterbay-airlines.com/adobe/dynamicmedia/deliver/dm-aid--c5a4615c-e7ea-479a-b36d-e285d78fa1be/hkg.png?preferwebp=true&quality=100'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>{content[language].title}</h1>
          <p>{content[language].subtitle}</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section portfolio-section">
        <div className="container">
          {/* Filters */}
          <div className="portfolio-filters">
            {Object.entries(content[language].filters).map(([key, value]) => (
              <button 
                key={key}
                className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
                onClick={() => setActiveFilter(key)}
              >
                {value}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title[language]} />
                </div>
                <div className="project-info">
                  <h3>{project.title[language]}</h3>
                  <div className="project-meta">
                    <span>{project.location[language]}</span>
                    <span>{project.year}</span>
                  </div>
                  <p>{project.description[language]}</p>
                  <button className="btn btn-outline view-details">
                    {language === 'en' ? 'View Details' : 'عرض التفاصيل'}
                  </button>
                </div>
              </div>
            ))}
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
        
        .portfolio-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 40px;
          gap: 10px;
        }
        
        .filter-btn {
          padding: 10px 20px;
          border-radius: 30px;
          background-color: var(--light-bg);
          color: var(--secondary-color);
          font-weight: 500;
          transition: var(--transition);
          border: none;
          cursor: pointer;
        }
        
        .filter-btn.active {
          background-color: var(--primary-color);
          color: var(--white);
        }
        
        .projects-grid {
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
          height: 250px;
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
          padding: 25px;
        }
        
        .project-info h3 {
          margin-bottom: 10px;
          font-size: 22px;
        }
        
        .project-meta {
          display: flex;
          justify-content: space-between;
          color: var(--gray);
          margin-bottom: 15px;
          font-size: 14px;
        }
        
        .project-info p {
          margin-bottom: 20px;
        }
        
        .view-details {
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .portfolio-filters {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 10px;
            justify-content: flex-start;
          }
          
          .page-hero {
            padding: 60px 0;
          }
          
          .page-hero h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
}

export default Portfolio;