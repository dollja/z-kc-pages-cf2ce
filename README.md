# IBM Z content solutions application
The z-kc-pages app is composed of an **E**xpress web framework, **N**unjucks templating engine and a **N**ode.js runtime.

## Getting started
This file includes the environment setup and development instructions you need to create and update content solution homepages.  

## Before you begin

1) [Install Github Desktop](https://desktop.github.com/)
  - sign in as [github enterprise](http://github.ibm.com)
  - for location make it c:/github

2) [Install	VSCode](https://code.visualstudio.com/)

- to open github code in visual studio 
    - windows (file - options - advanced) mac (github desktop - preferences - advance)
    - if you dont get the option go to mac (repository - open in visual studio)

3) [Install Node.js and NPM](https://nodejs.org/) 

## Running the application locally

1) run `git clone z-kc-pages` to clone this repository
2) run `npm install` to set it up locally
3) run `npm start` to start developing

## Updating the homepages

VIDEO [Video: How to update a content solution homepage (6 min)](https://ibm.ent.box.com/folder/70895609929)

Right now, we use [Nunjucks](https://mozilla.github.io/nunjucks/) to construct pages because v18 sample layouts are available here: [github - Northstar v18 external website](https://github.ibm.com/webstandards/northstar-website-external). BUT soon we will use:
[a Carbon Gatsby theme](https://gatsby-theme-carbon.now.sh/)

## Publishing an update
The CI/CD build happens every Friday between 4-5 pm. Updates appear within 10 minutes at https://www.ibm.com/support/z-content-solutions/
A log of the CI/CD build is posted to [Slack app git-kc-pages](https://ibm-systems-z.slack.com/archives/CG3E1FAPQ)

**IMPORTANT** Pushing commits to the master branch on a Friday can trigger a build process to publish unwanted changes to live homepages. Avoid committing changes directly to the `master` branch. Be sure to commit to the name of the branch that you are working on eg: `origin/preview-cloud-broker`, `fix-links-list`, etc. Once you are ready to publish your changes, merge your branch into the `master` branch.

## IBM Design guidelines
- [IBM Design Web](https://www.ibm.com/standards/web/)
- [IBM Design Web SEO](https://www.ibm.com/standards/web/code-guidelines/seo/)
- [Video Requirements](https://w3.ibm.com/w3publisher/ibm-video-standard#OM) For captioning, be sure to include a document with the video's script with the form. (also see Casey's new rubric)

## References

- [Carbon Design System](https://github.com/carbon-design-system)
- [V2R4 IBM Documentation](https://www.ibm.com/support/knowledgecenter/SSLTBW_2.4.0/com.ibm.zos.v2r4.izs/izs.htm)
- [github - Northstar v18 external website](https://github.ibm.com/webstandards/northstar-website-external)

