
import '@carbon/ibmdotcom-web-components/es/components/dotcom-shell/index.js';
import '@carbon/ibmdotcom-web-components/es/components/masthead/masthead-composite.js';
import '@carbon/ibmdotcom-web-components/es/components/scroll-animations/index.js'
import '@carbon/ibmdotcom-web-components/es/components/table-of-contents/index.js';

import '@carbon/ibmdotcom-web-components/es/components/leadspace/index.js';

import '@carbon/ibmdotcom-web-components/es/components/cta/text-cta.js';
import '@carbon/ibmdotcom-web-components/es/components/cta-block/index.js';
import '@carbon/ibmdotcom-web-components/es/components/cta-section/index.js'
import '@carbon/ibmdotcom-web-components/es/components/link-list/index.js';
import '@carbon/ibmdotcom-web-components/es/components/video-player/video-player-container.js';
import '@carbon/ibmdotcom-web-components/es/components/lightbox-media-viewer/lightbox-video-player-container.js';
import '@carbon/ibmdotcom-web-components/es/components/link-with-icon/index.js';

import '@carbon/ibmdotcom-web-components/es/components/tabs-extended/index.js'

import '@carbon/ibmdotcom-web-components/es/components/content-group-pictograms/index.js';
import '@carbon/ibmdotcom-web-components/es/components/pictogram-item/index.js';
import '@carbon/ibmdotcom-web-components/es/components/card-group/index.js';
import '@carbon/ibmdotcom-web-components/es/components/content-group-banner/index.js';
import '@carbon/ibmdotcom-web-components/es/components/content-group-simple/index.js';
import '@carbon/ibmdotcom-web-components/es/components/content-group-horizontal/index.js';
import '@carbon/ibmdotcom-web-components/es/components/content-item-horizontal/index.js';

import ArrowRight20 from 'carbon-web-components/es/icons/arrow--right/20.js';
import Launch20 from 'carbon-web-components/es/icons/launch/20.js';


const l1Data = {
  title: "Stock Charts",
  url: "https://example.com",
  menuItems: [
    {
      title: "Lorem ipsum dolor sit amet",
      titleEnglish: "Lorem ipsum dolor sit amet",
      url: "",
      hasMenu: true,
      hasMegapanel: false,
      menuSections: [
        {
          heading: "Explore",
          menuItems: [
            {
              title: "Link 1",
              url: "",
              megapanelContent: {
                headingTitle: "",
                headingUrl: "",
                description: "",
                quickLinks: {
                  title: "Title",
                  links: [
                    {
                      title: "Subnav 1",
                      url: ""
                    },
                    {
                      title: "Subnav 2",
                      url: ""
                    },
                    {
                      title: "Subnav 3",
                      url: ""
                    },
                    {
                      title: "Subnav 4",
                      url: ""
                    }
                  ]
                },
                feature: {
                  heading: "",
                  imageUrl: "",
                  linkTitle: "",
                  linkUrl: ""
                }
              }
            },
            {
              title: "Menu dropdown item with extra long text",
              url: ""
            }
          ]
        }
      ]
    },
    {
      title: "TITLE1",
      titleEnglish: "TITLE1",
      url: "https://example.com"
    },
    {
      title: "TITLE2",
      titleEnglish: "TITLE2",
      url: "https://example.com",
      menuItems: [
        {
          title: "SUB1",
          titleEnglish: "SUB1",
          url: "https://example.com"
        },
        {
          title: "SUB2",
          titleEnglish: "SUB2",
          url: "https://example.com"
        },
        {
          title: "SUB3",
          titleEnglish: "SUB3",
          url: "https://example.com"
        }
      ]
    }
  ]
};

const navLinks = [
  {
    title: "NAV1",
    titleEnglish: "NAV1",
    url: "https://example.com"
  },
  {
    title: "NAV2",
    titleEnglish: "NAV2",
    url: "https://example.com"
  },
  {
    title: "NAV3",
    titleEnglish: "SUB3",
    url: "https://example.com"
  }
];

document.querySelector("dds-masthead-composite").l1Data = l1Data;