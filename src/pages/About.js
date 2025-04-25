// pages/About.js
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

function About() {
  const { language } = useContext(LanguageContext);
  
  const content = {
    en: {
      title: 'About Asasat Albahrain',
      subtitle: 'Building a stronger Bahrain, one project at a time',
      history: {
        title: 'Our History',
        text: 'Established in 2010, Asasat Albahrain has grown from a small local contractor to one of the leading construction companies in the Kingdom of Bahrain. Over the past decade, we have successfully completed numerous projects across residential, commercial, and infrastructure sectors, building a reputation for excellence, reliability, and innovation.'
      },
      mission: {
        title: 'Our Mission',
        text: 'To deliver exceptional construction services that exceed client expectations while maintaining the highest standards of quality, safety, and integrity. We are committed to contributing to the development and growth of Bahrain through our construction expertise.'
      },
      vision: {
        title: 'Our Vision',
        text: 'To be the most trusted and respected construction company in Bahrain, recognized for our innovation, quality, and contribution to the community.'
      },
      values: {
        title: 'Our Values',
        items: [
          {
            title: 'Quality',
            description: 'We are committed to delivering the highest quality in every project we undertake.'
          },
          {
            title: 'Integrity',
            description: 'We conduct our business with honesty, transparency, and ethical standards.'
          },
          {
            title: 'Safety',
            description: 'The safety of our team, clients, and the public is our top priority.'
          },
          {
            title: 'Innovation',
            description: 'We continuously seek innovative solutions to improve our processes and outcomes.'
          },
          {
            title: 'Community',
            description: 'We are dedicated to making a positive impact on the communities we serve.'
          },
          {
            title: 'Sustainability',
            description: 'We integrate sustainable practices in our operations to protect the environment.'
          }
        ]
      },
      team: {
        title: 'Our Leadership Team',
        subtitle: 'The experienced professionals guiding our company',
        members: [
          {
            name: 'Ahmed Al Bahraini',
            position: 'Chief Executive Officer',
            bio: 'With over 25 years of experience in the construction industry, Ahmed leads our company with vision and expertise.'
          },
          {
            name: 'Fatima Khalid',
            position: 'Chief Operations Officer',
            bio: 'Fatima ensures operational excellence across all our projects with her meticulous approach and industry knowledge.'
          },
          {
            name: 'Mohammed Hassan',
            position: 'Chief Technical Officer',
            bio: 'Mohammed brings innovative engineering solutions to our projects, keeping us at the forefront of construction technology.'
          }
        ]
      }
    },
    ar: {
      title: 'عن أساسات البحرين',
      subtitle: 'بناء بحرين أقوى، مشروع تلو الآخر',
      history: {
        title: 'تاريخنا',
        text: 'تأسست أساسات البحرين في عام 2010، ونمت من مقاول محلي صغير إلى واحدة من شركات البناء الرائدة في مملكة البحرين. على مدار العقد الماضي، أكملنا بنجاح العديد من المشاريع في القطاعات السكنية والتجارية والبنية التحتية، وبنينا سمعة للتميز والموثوقية والابتكار.'
      },
      mission: {
        title: 'مهمتنا',
        text: 'تقديم خدمات بناء استثنائية تتجاوز توقعات العملاء مع الحفاظ على أعلى معايير الجودة والسلامة والنزاهة. نحن ملتزمون بالمساهمة في تطوير ونمو البحرين من خلال خبرتنا في البناء.'
      },
      vision: {
        title: 'رؤيتنا',
        text: 'أن نكون شركة البناء الأكثر ثقة واحتراماً في البحرين، معترف بها لابتكارنا وجودتنا ومساهمتنا في المجتمع.'
      },
      values: {
        title: 'قيمنا',
        items: [
          {
            title: 'الجودة',
            description: 'نحن ملتزمون بتقديم أعلى جودة في كل مشروع نقوم به.'
          },
          {
            title: 'النزاهة',
            description: 'نحن ندير أعمالنا بصدق وشفافية ومعايير أخلاقية.'
          },
          {
            title: 'السلامة',
            description: 'سلامة فريقنا وعملائنا والجمهور هي أولويتنا القصوى.'
          },
          {
            title: 'الابتكار',
            description: 'نبحث باستمرار عن حلول مبتكرة لتحسين عملياتنا ونتائجنا.'
          },
          {
            title: 'المجتمع',
            description: 'نحن مكرسون لإحداث تأثير إيجابي على المجتمعات التي نخدمها.'
          },
          {
            title: 'الاستدامة',
            description: 'ندمج الممارسات المستدامة في عملياتنا لحماية البيئة.'
          }
        ]
      },
      team: {
        title: 'فريق القيادة لدينا',
        subtitle: 'المهنيون ذوو الخبرة الذين يوجهون شركتنا',
        members: [
          {
            name: 'أحمد البحراني',
            position: 'الرئيس التنفيذي',
            bio: 'مع أكثر من 25 عامًا من الخبرة في صناعة البناء، يقود أحمد شركتنا برؤية وخبرة.'
          },
          {
            name: 'فاطمة خالد',
            position: 'رئيس العمليات',
            bio: 'تضمن فاطمة التميز التشغيلي في جميع مشاريعنا بنهجها الدقيق ومعرفتها بالصناعة.'
          },
          {
            name: 'محمد حسن',
            position: 'المدير التقني',
            bio: 'يجلب محمد حلول هندسية مبتكرة لمشاريعنا، مما يجعلنا في طليعة تكنولوجيا البناء.'
          }
        ]
      }
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>{content[language].title}</h1>
          <p>{content[language].subtitle}</p>
        </div>
      </section>

      {/* History Section */}
      <section className="section">
        <div className="container">
          <div className="about-section">
            <div className="about-content">
              <div className="about-text">
                <h2>{content[language].history.title}</h2>
                <p>{content[language].history.text}</p>
              </div>
              <div className="about-image">
                <div className="image-container">
                  {}
                  <img 
                    src="https://unionplastics.biz/wp-content/uploads/2022/06/IMG-Set-3-58.png" 
                    alt="Asasat Albahrain Landmark Project" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-light">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box">
              <h2>{content[language].mission.title}</h2>
              <p>{content[language].mission.text}</p>
            </div>
            <div className="vision-box">
              <h2>{content[language].vision.title}</h2>
              <p>{content[language].vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{content[language].values.title}</h2>
          </div>
          
          <div className="values-grid">
            {content[language].values.items.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">
                  <i className={`fas fa-${['award', 'handshake', 'shield-alt', 'lightbulb', 'users', 'leaf'][index]}`}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>{content[language].team.title}</h2>
            <p>{content[language].team.subtitle}</p>
          </div>
          
          <div className="team-grid">
            {content[language].team.members.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-image">
                  {/* Team member images */}
                  <img 
                    src={
                      index === 0 
                        ? "https://st2.depositphotos.com/1011643/9196/i/450/depositphotos_91965412-stock-photo-arabian-man-standing-near-house.jpg" 
                        : index === 1
                          ? "https://www.shutterstock.com/image-photo/real-emirati-arab-woman-indoors-600nw-2341972843.jpg"
                          : "https://www.shutterstock.com/image-photo/handsome-arab-middleeastern-man-traditional-600nw-2310435237.jpg"
                    } 
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-position">{member.position}</span>
                  <p>{member.bio}</p>
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
        
        .about-section {
          margin-bottom: 50px;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        
        .image-container {
          height: 400px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .mission-vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        
        .mission-box, .vision-box {
          background-color: var(--white);
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .mission-box h2, .vision-box h2 {
          color: var(--primary-color);
          margin-bottom: 20px;
          font-size: 26px;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .value-card {
          background-color: var(--white);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: var(--transition);
        }
        
        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .value-icon {
          font-size: 40px;
          color: var(--primary-color);
          margin-bottom: 20px;
        }
        
        .value-card h3 {
          margin-bottom: 15px;
          font-size: 22px;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .team-card {
          background-color: var(--white);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .team-image {
          height: 300px;
          overflow: hidden;
        }
        
        .team-info {
          padding: 20px;
          text-align: center;
        }
        
        .team-info h3 {
          margin-bottom: 5px;
          font-size: 22px;
        }
        
        .team-position {
          color: var(--primary-color);
          font-weight: 500;
          display: block;
          margin-bottom: 15px;
        }
        
        .bg-light {
          background-color: var(--light-bg);
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          
          .about-image {
            order: -1;
          }
          
          .mission-vision-grid {
            grid-template-columns: 1fr;
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

export default About;