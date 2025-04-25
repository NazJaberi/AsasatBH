// pages/Portfolio.js
import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';

function Portfolio() {
  const { language } = useContext(LanguageContext);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
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
      },
      modalLabels: {
        location: 'Location',
        year: 'Year',
        category: 'Category',
        description: 'Description',
        challenge: 'Challenge',
        solution: 'Our Solution',
        result: 'Result',
        close: 'Close'
      },
      categories: {
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
      },
      modalLabels: {
        location: 'الموقع',
        year: 'السنة',
        category: 'الفئة',
        description: 'الوصف',
        challenge: 'التحدي',
        solution: 'الحل الذي قدمناه',
        result: 'النتيجة',
        close: 'إغلاق'
      },
      categories: {
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
      challenge: {
        en: 'Creating unique designs for each villa while maintaining a cohesive community aesthetic and meeting strict timelines.',
        ar: 'إنشاء تصاميم فريدة لكل فيلا مع الحفاظ على جمالية مجتمعية متماسكة وتلبية جداول زمنية صارمة.'
      },
      solution: {
        en: 'We implemented a modular construction approach with standardized luxury elements and custom façades, utilizing our integrated project management system.',
        ar: 'قمنا بتنفيذ نهج بناء نمطي مع عناصر فاخرة موحدة وواجهات مخصصة، باستخدام نظام إدارة المشاريع المتكامل لدينا.'
      },
      result: {
        en: 'All 15 villas were completed on schedule with distinct characters while sharing premium quality. The project won a regional architectural award.',
        ar: 'تم الانتهاء من جميع الفيلات الـ 15 في الموعد المحدد بطابع مميز مع الحفاظ على الجودة الممتازة. فاز المشروع بجائزة معمارية إقليمية.'
      },
      image: 'https://geographical.co.uk/wp-content/uploads/shutterstock_252677680-600x400.jpg',
      additionalImages: [
        'https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg?w=600&h=400&c=crop',
        'https://www.mingtiandi.com/wp-content/uploads/2018/05/the-spire-london-tower-600x400.jpg'
      ]
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
      challenge: {
        en: 'Constructing a landmark tower in a coastal area with challenging soil conditions while implementing state-of-the-art smart building technology.',
        ar: 'بناء برج معلم في منطقة ساحلية ذات ظروف تربة صعبة مع تنفيذ تكنولوجيا المباني الذكية المتطورة.'
      },
      solution: {
        en: 'We developed a specialized deep foundation system and collaborated with international smart building experts to integrate advanced systems throughout the design.',
        ar: 'قمنا بتطوير نظام أساس عميق متخصص وتعاونا مع خبراء دوليين في المباني الذكية لدمج الأنظمة المتقدمة في جميع أنحاء التصميم.'
      },
      result: {
        en: 'The tower was completed on budget and now stands as one of the most energy-efficient buildings in Bahrain, achieving a LEED Gold certification.',
        ar: 'تم الانتهاء من البرج في حدود الميزانية وهو الآن يعد من أكثر المباني كفاءة في استخدام الطاقة في البحرين، حيث حصل على شهادة LEED الذهبية.'
      },
      image: 'https://www.cisco.com/content/dam/cisco-cdc/site/images/legacy/assets/swa/img/600/smart-city-tech-600x400.jpg',
      additionalImages: [
        'https://i.ibb.co/C0KPnzW/cityscape-new-york.jpg',
        'https://i.ibb.co/dbYFM4d/city-buildings-night.jpg'
      ]
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
      challenge: {
        en: 'Managing environmental impact while constructing a major highway directly adjacent to sensitive coastal ecosystems.',
        ar: 'إدارة التأثير البيئي أثناء بناء طريق سريع رئيسي مجاور مباشرة للنظم البيئية الساحلية الحساسة.'
      },
      solution: {
        en: 'We implemented comprehensive environmental protection measures and innovative construction techniques to minimize disruption to marine habitats.',
        ar: 'نفذنا تدابير شاملة لحماية البيئة وتقنيات بناء مبتكرة لتقليل الاضطراب في الموائل البحرية.'
      },
      result: {
        en: 'The highway was completed 3 months ahead of schedule and has reduced travel times by 40% while preserving the coastal environment.',
        ar: 'تم الانتهاء من الطريق السريع قبل 3 أشهر من الجدول الزمني وقد خفض أوقات السفر بنسبة 40٪ مع الحفاظ على البيئة الساحلية.'
      },
      image: 'https://www.shutterstock.com/image-photo/new-york-united-states-panorama-600nw-2474249733.jpg',
      additionalImages: [
        'https://geographical.co.uk/wp-content/uploads/shutterstock_2319821837-1-1-600x400.webp',
        'https://mymagicearth.com/wp-content/uploads/2020/03/Ulm-Walking-Tour-in-a-German-City-with-the-Highest-Church-Spire-in-the-World-01-600x400.jpg'
      ]
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
      challenge: {
        en: 'Balancing the preservation of a 70-year-old structure with the need to meet modern hotel standards and safety regulations.',
        ar: 'تحقيق التوازن بين الحفاظ على مبنى عمره 70 عامًا والحاجة إلى تلبية معايير الفنادق الحديثة ولوائح السلامة.'
      },
      solution: {
        en: 'Our team carefully documented all historic elements and developed restoration techniques that preserved character while integrating modern infrastructure.',
        ar: 'قام فريقنا بتوثيق جميع العناصر التاريخية بعناية وطور تقنيات الترميم التي حافظت على الطابع مع دمج البنية التحتية الحديثة.'
      },
      result: {
        en: 'The renovated hotel has received heritage preservation recognition while achieving a 5-star rating for its facilities and service.',
        ar: 'حصل الفندق المجدد على تقدير الحفاظ على التراث مع تحقيق تصنيف 5 نجوم لمرافقه وخدماته.'
      },
      image: 'https://www.theglobeandmail.com/resizer/v2/XUK3V5MFRZEIROUHKEUFEJVV44.jpg?auth=a9b0ab3c30a7ca7fa56c47674220d0faa365ad8825cb18318c7a46e7d62472e7&width=600&height=400&quality=80&smart=true',
      additionalImages: [
        'https://www.greaterbay-airlines.com/adobe/dynamicmedia/deliver/dm-aid--c5a4615c-e7ea-479a-b36d-e285d78fa1be/hkg.png?preferwebp=true&quality=100',
        'https://www.theglobeandmail.com/resizer/v2/XW6SB5LON5ECJHUIDNFMLTWJ2M.jpg?auth=c7e95d7d0f80285d3791108478809d1f8ca30b189950b289decdca1d8c1ad9af&width=600&quality=80'
      ]
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
      challenge: {
        en: 'Designing a residential tower that maximizes sea views while ensuring privacy and creating community spaces within a limited footprint.',
        ar: 'تصميم برج سكني يعظم إطلالات البحر مع ضمان الخصوصية وإنشاء مساحات مجتمعية ضمن مساحة محدودة.'
      },
      solution: {
        en: 'We implemented an innovative floor plan design with staggered balconies and created multi-level community spaces including rooftop gardens.',
        ar: 'نفذنا تصميمًا مبتكرًا لمخطط الطابق مع شرفات متدرجة وأنشأنا مساحات مجتمعية متعددة المستويات بما في ذلك حدائق السطح.'
      },
      result: {
        en: 'The project sold out pre-completion and has established a new benchmark for luxury residential developments in the Seef area.',
        ar: 'تم بيع المشروع بالكامل قبل الانتهاء وأسس معيارًا جديدًا للتطورات السكنية الفاخرة في منطقة السيف.'
      },
      image: 'https://www.theglobeandmail.com/resizer/v2/XW6SB5LON5ECJHUIDNFMLTWJ2M.jpg?auth=c7e95d7d0f80285d3791108478809d1f8ca30b189950b289decdca1d8c1ad9af&width=600&quality=80',
      additionalImages: [
        'https://geographical.co.uk/wp-content/uploads/shutterstock_252677680-600x400.jpg',
        'https://www.cisco.com/content/dam/cisco-cdc/site/images/legacy/assets/swa/img/600/smart-city-tech-600x400.jpg'
      ]
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
      challenge: {
        en: 'Creating an architecturally distinctive mall with flexible spaces that could adapt to changing retail needs and visitor patterns.',
        ar: 'إنشاء مركز تسوق متميز معماريًا بمساحات مرنة يمكن أن تتكيف مع احتياجات البيع بالتجزئة المتغيرة وأنماط الزوار.'
      },
      solution: {
        en: 'We designed a modular interior system with reconfigurable storefronts and incorporated advanced climate control to create comfortable year-round shopping environment.',
        ar: 'صممنا نظامًا داخليًا معياريًا مع واجهات متاجر قابلة لإعادة التكوين وقمنا بدمج التحكم المتقدم في المناخ لخلق بيئة تسوق مريحة على مدار العام.'
      },
      result: {
        en: 'The mall has maintained 95% occupancy since opening and has become a key attraction for both locals and tourists in Bahrain.',
        ar: 'حافظ المول على نسبة إشغال 95٪ منذ افتتاحه وأصبح من أهم مناطق الجذب لكل من السكان المحليين والسياح في البحرين.'
      },
      image: 'https://geographical.co.uk/wp-content/uploads/shutterstock_2319821837-1-1-600x400.webp',
      additionalImages: [
        'https://www.greaterbay-airlines.com/adobe/dynamicmedia/deliver/dm-aid--c5a4615c-e7ea-479a-b36d-e285d78fa1be/hkg.png?preferwebp=true&quality=100',
        'https://www.theglobeandmail.com/resizer/v2/XUK3V5MFRZEIROUHKEUFEJVV44.jpg?auth=a9b0ab3c30a7ca7fa56c47674220d0faa365ad8825cb18318c7a46e7d62472e7&width=600&height=400&quality=80&smart=true'
      ]
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
      challenge: {
        en: 'Building a high-capacity treatment plant that meets international environmental standards while optimizing energy consumption.',
        ar: 'بناء محطة معالجة عالية السعة تلبي المعايير البيئية الدولية مع تحسين استهلاك الطاقة.'
      },
      solution: {
        en: 'We incorporated renewable energy sources and implemented an advanced filtration system that reduces chemical usage while improving water quality.',
        ar: 'قمنا بدمج مصادر الطاقة المتجددة وتنفيذ نظام ترشيح متقدم يقلل من استخدام المواد الكيميائية مع تحسين جودة المياه.'
      },
      result: {
        en: 'The facility has reduced regional water treatment costs by 30% while increasing capacity by 40% compared to the previous infrastructure.',
        ar: 'خفضت المنشأة تكاليف معالجة المياه الإقليمية بنسبة 30٪ مع زيادة السعة بنسبة 40٪ مقارنة بالبنية التحتية السابقة.'
      },
      image: 'https://mymagicearth.com/wp-content/uploads/2020/03/Ulm-Walking-Tour-in-a-German-City-with-the-Highest-Church-Spire-in-the-World-01-600x400.jpg',
      additionalImages: [
        'https://www.shutterstock.com/image-photo/new-york-united-states-panorama-600nw-2474249733.jpg',
        'https://www.cisco.com/content/dam/cisco-cdc/site/images/legacy/assets/swa/img/600/smart-city-tech-600x400.jpg'
      ]
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
      challenge: {
        en: 'Restoring a 200-year-old market structure while adding modern amenities without compromising its historical authenticity.',
        ar: 'ترميم هيكل سوق عمره 200 عام مع إضافة وسائل راحة حديثة دون المساس بأصالته التاريخية.'
      },
      solution: {
        en: 'Our team worked with heritage experts to document and preserve original features while sensitively integrating climate control and lighting systems.',
        ar: 'عمل فريقنا مع خبراء التراث لتوثيق والحفاظ على الميزات الأصلية مع دمج أنظمة التحكم في المناخ والإضاءة بشكل حساس.'
      },
      result: {
        en: 'The renovated market has revitalized the area, increasing visitor numbers by 120% while receiving a UNESCO heritage recognition award.',
        ar: 'أعاد السوق المجدد الحيوية إلى المنطقة، مما أدى إلى زيادة عدد الزوار بنسبة 120٪ مع حصوله على جائزة اعتراف التراث من اليونسكو.'
      },
      image: 'https://www.greaterbay-airlines.com/adobe/dynamicmedia/deliver/dm-aid--c5a4615c-e7ea-479a-b36d-e285d78fa1be/hkg.png?preferwebp=true&quality=100',
      additionalImages: [
        'https://mymagicearth.com/wp-content/uploads/2020/03/Ulm-Walking-Tour-in-a-German-City-with-the-Highest-Church-Spire-in-the-World-01-600x400.jpg',
        'https://geographical.co.uk/wp-content/uploads/shutterstock_2319821837-1-1-600x400.webp'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

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
                  <button 
                    className="btn btn-outline view-details"
                    onClick={() => openModal(project)}
                  >
                    {language === 'en' ? 'View Details' : 'عرض التفاصيل'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {modalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <h2>{selectedProject.title[language]}</h2>
            </div>
            
            <div className="modal-body">
              <div className="modal-gallery">
                <div className="main-image">
                  <img src={selectedProject.image} alt={selectedProject.title[language]} />
                </div>
                <div className="additional-images">
                  {selectedProject.additionalImages && selectedProject.additionalImages.map((img, index) => (
                    <div key={index} className="thumbnail">
                      {/* Fixed alt text to remove the word "Image" */}
                      <img src={img} alt={`${selectedProject.title[language]} ${index + 2}`} />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="project-details">
                <div className="details-row">
                  <div className="detail-item">
                    <span className="detail-label">{content[language].modalLabels.location}</span>
                    <span className="detail-value">{selectedProject.location[language]}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{content[language].modalLabels.year}</span>
                    <span className="detail-value">{selectedProject.year}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{content[language].modalLabels.category}</span>
                    <span className="detail-value">{content[language].categories[selectedProject.category]}</span>
                  </div>
                </div>
                
                <div className="project-description">
                  <h3>{content[language].modalLabels.description}</h3>
                  <p>{selectedProject.description[language]}</p>
                </div>
                
                <div className="project-challenge">
                  <h3>{content[language].modalLabels.challenge}</h3>
                  <p>{selectedProject.challenge[language]}</p>
                </div>
                
                <div className="project-solution">
                  <h3>{content[language].modalLabels.solution}</h3>
                  <p>{selectedProject.solution[language]}</p>
                </div>
                
                <div className="project-result">
                  <h3>{content[language].modalLabels.result}</h3>
                  <p>{selectedProject.result[language]}</p>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={closeModal}>
                {content[language].modalLabels.close}
              </button>
            </div>
          </div>
        </div>
      )}

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
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 20px;
        }
        
        .modal-content {
          background-color: var(--white);
          width: 90%;
          max-width: 1000px;
          max-height: 90vh;
          border-radius: 10px;
          overflow-y: auto;
          position: relative;
        }
        
        .modal-close {
          position: absolute;
          top: 15px;
          right: 20px;
          font-size: 30px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--secondary-color);
          z-index: 10;
        }
        
        .modal-header {
          padding: 20px 30px;
          border-bottom: 1px solid #eee;
        }
        
        .modal-header h2 {
          font-size: 26px;
          color: var(--primary-color);
        }
        
        .modal-body {
          padding: 30px;
        }
        
        .modal-gallery {
          margin-bottom: 30px;
        }
        
        .main-image {
          height: 400px;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 15px;
        }
        
        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .additional-images {
          display: flex;
          gap: 15px;
          overflow-x: auto;
          padding-bottom: 10px;
        }
        
        .thumbnail {
          flex: 0 0 150px;
          height: 100px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
        }
        
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .thumbnail:hover img {
          transform: scale(1.1);
        }
        
        .details-row {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 25px;
          padding-bottom: 25px;
          border-bottom: 1px solid #eee;
        }
        
        .detail-item {
          flex: 1;
          min-width: 150px;
        }
        
        .detail-label {
          display: block;
          font-weight: bold;
          color: var(--secondary-color);
          margin-bottom: 5px;
        }
        
        .detail-value {
          font-size: 16px;
        }
        
        .project-description,
        .project-challenge,
        .project-solution,
        .project-result {
          margin-bottom: 25px;
        }
        
        .project-description h3,
        .project-challenge h3,
        .project-solution h3,
        .project-result h3 {
          color: var(--primary-color);
          margin-bottom: 10px;
          font-size: 20px;
        }
        
        .modal-footer {
          padding: 20px 30px;
          border-top: 1px solid #eee;
          text-align: center;
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
          
          .main-image {
            height: 250px;
          }
          
          .details-row {
            flex-direction: column;
            gap: 15px;
          }
          
          .modal-content {
            width: 95%;
            max-height: 80vh;
          }
        }
      `}</style>
    </div>
  );
}

export default Portfolio;