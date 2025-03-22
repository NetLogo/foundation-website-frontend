import React from 'react'
import "./styles/features-section.css"

const FeaturesSection = () => {
    return (
      <div className="features-section">
        <div className="features-content">
          <div className="category-buttons">
            <button className="category-button active">
              Understanding Emergence
            </button>
            <button className="category-button">
              Scientific Research
            </button>
            <button className="category-button">
              STEM Learning
            </button>
            <button className="category-button">
              Teaching
            </button>
            <button className="category-button">
              Art & Games
            </button>
          </div>
  
          <div className="simulation-container">
            {/* The simulation graphic with green/black squares will be an image */}
            <div className="simulation-placeholder"></div>
          </div>
  
          <div className="simple-rule">
            <p>
              <span className="bold">Simple Rule:</span> Each fire ignites neighbors → 
              <span className="bold"> Emergent</span> forest fire patterns
            </p>
          </div>
  
          <div className="netlogo-description">
            <p>
              NetLogo was designed to model <span className="emphasis">emergent</span> phenomena in which large-scale 
              patterns arise from the interactions of many individual agents.
              <a href="#" className="learn-more-link">
                Learn more →
              </a>
            </p>
          </div>
        </div>
      </div>);
  }

export {FeaturesSection}