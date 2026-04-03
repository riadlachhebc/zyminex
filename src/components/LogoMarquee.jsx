import React from 'react'
import './LogoMarquee.css'

const LogoMarquee = ({ items = [], direction = 'left', variant = 'poster' }) => {
  if (items.length === 0) return null

  // Doubling the list twice to ensure enough content for a seamless infinite loop
  const totalItems = [...items, ...items, ...items, ...items]

  return (
    <div className={`marquee-container variant-${variant}`} id={`marquee-${variant}-${direction}`}>
      <div className={`marquee-content scroll-${direction}`} id={`marquee-content-${variant}-${direction}`}>
        {totalItems.map((item, index) => (
          <div key={index} className="marquee-item">
            {item.src ? (
               <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="marquee-img" 
                  loading="lazy"
                  decoding="async"
                  width={variant === 'poster' ? 189 : 221}
                  height={variant === 'poster' ? 284 : 39}
                />
            ) : (
               <div className="marquee-placeholder" style={{ background: item.bg || 'var(--surface-container-high)' }}>
                  <span className="material-icons-outlined" style={{ fontSize: '2rem' }}>{item.icon || 'tv'}</span>
                  <span className="label-md">{item.label}</span>
               </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoMarquee
