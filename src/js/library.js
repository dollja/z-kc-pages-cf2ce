(function (factory) {
  typeof define === 'function' && define.amd ? define(['@carbon/ibmdotcom-web-components/es/components/masthead/masthead-composite.js', '@carbon/ibmdotcom-web-components/es/components/leadspace/index.js', '@carbon/carbon-web-components/es/icons/arrow--right/20.js', '@carbon/ibmdotcom-web-components/es/components/leadspace-block/index', '@carbon/ibmdotcom-web-components/es/components/link-list/index', '@carbon/ibmdotcom-web-components/es/components/lightbox-media-viewer/lightbox-video-player-container.js', '@carbon/ibmdotcom-web-components/es/components/tabs-extended/index.js', '@carbon/ibmdotcom-web-components/es/components/content-group-pictograms/index.js', '@carbon/ibmdotcom-web-components/es/components/pictogram-item/index.js', '@carbon/ibmdotcom-web-components/es/components/card-group/index.js'], factory) :
  factory();
})((function () { 'use strict';

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
    
    document.querySelector("dds-masthead-composite").l1Data = l1Data;

}));
//# sourceMappingURL=library.js.map
