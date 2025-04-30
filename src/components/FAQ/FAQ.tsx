import React, { useState } from "react";
import "./FAQ.scss";

export interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button 
        className="faq-question" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="question-text">{question}</span>
        <span className="toggle-icon">
          <i className={`bi ${isOpen ? 'bi-dash-circle' : 'bi-plus-circle'}`}></i>
        </span>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </article>
  );
};

export interface FAQSectionProps {
  faqItems?: {
    question: string;
    answer: string;
  }[];
  trackConversion?: (eventName: string, eventData?: any) => void;
  initialItems?: number;
  loadMoreIncrement?: number;
}

export const FAQ: React.FC<FAQSectionProps> = ({ 
  faqItems = [],
  trackConversion,
  initialItems = 6,
  loadMoreIncrement = 6
}) => {
  // Estado para manejar el número de elementos visibles
  const [visibleItems, setVisibleItems] = useState(initialItems);
  
  // Verificar si hay más elementos para mostrar
  const hasMoreItems = visibleItems < faqItems.length;
  
  // Función para cargar más elementos
  const loadMore = () => {
    if (trackConversion) {
      trackConversion('faq_load_more', {
        current_visible: visibleItems,
        total_items: faqItems.length
      });
    }
    setVisibleItems(prev => Math.min(prev + loadMoreIncrement, faqItems.length));
  };

  return (
    <section 
      id="FAQ" 
      className="faq-section"
      data-aos="fade-up"
      data-aos-duration="1500"
      aria-label="Preguntas frecuentes"
    >
      <div className="container">
        <h2 className="section-title text-center">Preguntas Frecuentes</h2>
        <div className="section-title-divider"></div>
        
        <div className="faq-container">
          <div className="faq-decoration left"></div>
          <div className="faq-content">
            {faqItems.slice(0, visibleItems).map((item, index) => (
              <FAQItem 
                key={index} 
                question={item.question} 
                answer={item.answer} 
              />
            ))}
            
            {hasMoreItems && (
              <div className="ver-mas-container text-center">
                <button 
                  className="ver-mas-btn"
                  onClick={loadMore}
                  aria-label={`Ver ${Math.min(loadMoreIncrement, faqItems.length - visibleItems)} preguntas más`}
                >
                  Ver más preguntas <i className="bi bi-chevron-down"></i>
                </button>
              </div>
            )}
          </div>
          <div className="faq-decoration right"></div>
        </div>
        
        <div className="faq-cta-container">
          <p className="faq-cta-text">¿Tienes más preguntas? ¡Estamos para ayudarte!</p>
          <a
            className="aPages secondary-cta"
            href="https://wa.me/573185725324?text=Hola%20JustiExpress,%20tengo%20una%20consulta%20adicional"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp para más información"
            onClick={() => {
              if (trackConversion) {
                trackConversion('whatsapp_conversion', {position: 'faq_button'});
              }
              return true;
            }}
          >
            Contáctanos ahora <i className="bi bi-arrow-right" ></i>
          </a>
        </div>
      </div>
    </section>
  );
};