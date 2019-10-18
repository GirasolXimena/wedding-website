import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { EngagementPicsStrings } from '../Strings/Strings'

const { TITLE } = EngagementPicsStrings

const EngagementPicsSection = () => (
  <ScrollableAnchor id="Engagement">
    <section className="h-screen bg-orange-800">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="header">{TITLE}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <a
              className="fancybox"
              rel="group"
              href="img/eng_pics/_RFX2942-lg.jpg"
            >
              <div className="img-wrap">
                <div className="overlay">
                  <i className="fa fa-search" />
                </div>
                <img src="img/eng_pics/_RFX2942-sm.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-md-2">
            <a
              className="fancybox"
              rel="group"
              href="img/eng_pics/IMG_3483-lg.jpg"
            >
              <div className="img-wrap">
                <div className="overlay">
                  <i className="fa fa-search" />
                </div>
                <img src="img/eng_pics/IMG_3483-sm.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-md-2">
            <a
              className="fancybox"
              rel="group"
              href="img/eng_pics/_RFX2992-lg.jpg"
            >
              <div className="img-wrap">
                <div className="overlay">
                  <i className="fa fa-search" />
                </div>
                <img src="img/eng_pics/_RFX2992-sm.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-md-2">
            <a
              className="fancybox"
              rel="group"
              href="img/eng_pics/_RFX3064-lg.jpg"
            >
              <div className="img-wrap">
                <div className="overlay">
                  <i className="fa fa-search" />
                </div>
                <img src="img/eng_pics/_RFX3064-sm.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-md-2">
            <a
              className="fancybox"
              rel="group"
              href="img/eng_pics/NGP_4089-lg.jpg"
            >
              <div className="img-wrap">
                <div className="overlay">
                  <i className="fa fa-search" />
                </div>
                <img src="img/eng_pics/NGP_4089-sm.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-md-2">
            <a
              className="fancybox"
              rel="group"
              href="img/eng_pics/NGP_4119-lg.jpg"
            >
              <div className="img-wrap">
                <div className="overlay">
                  <i className="fa fa-search" />
                </div>
                <img src="img/eng_pics/NGP_4119-sm.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hidden-lg hidden-md hidden-xs">
          <div className="col-xs-12 section-border section-padding" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="diamond floating-logo">
            <img src="img/sketch-logo.png" alt="Sketch Logo" />
            <div className="ring" />
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
)

export default EngagementPicsSection
