@include('sources/codesnippet.source.js');


var menu = {
    'What\’s new': {
        'path': 'whats-new.html'
    },
    'FAQ': {
        'path': 'faq.html'
    },
    'Getting started': {
        'path': 'getting-started/about.html',
        'folder': 'getting-started',
        'subpages': [
            {
                'title': 'About',
                'path': 'about.html'
            },
            {
                'title': 'Roadmap',
                'path': 'roadmap.html'
            }
        ]
    },
    'Elements': {
        'path': 'elements/type.html',
        'folder': 'elements',
        'subpages': [
            {
                'title': 'Type',
                'tabs': [
                    {
                        'label': 'Basics',
                        'path': 'type.html'
                    },
                    {
                        'label': 'Usage',
                        'path': 'type-usage.html'
                    }
                ]
            },

            {
                'title': 'Grid',
                'tabs': [
                    {
                        'label': 'Basics',
                        'path': 'grid.html'
                    },
                    {
                        'label': 'Usage',
                        'path': 'grid-usage.html'
                    }
                ]
            },

            {
                'title': 'Color',
                'tabs': [
                    {
                        'label': 'Palette',
                        'path': 'color.html'
                    },
                    {
                        'label': 'Usage',
                        'path': 'color-usage.html'
                    }
                ]
            },

            {
                'title': 'Icons',
                'tabs': [
                    {
                        'label': 'Library',
                        'path': 'icons.html'
                    },
                    {
                        'label': 'Usage',
                        'path': 'icon-usage.html'
                    }
                ]
            }
        ]
    },
    'Design guidelines': {
        'path': 'design-guidelines/layout.html',
        'folder': 'design-guidelines',
        'subpages': [
            /*{
                'title': 'Duo ready',
                'path': 'duo-ready.html'
            },*/
            {
                'title': 'Layout',
                'path': 'layout.html',
                'tabs': [
                    {
                        'label': 'Overview',
                        'path': 'layout.html'
                    },
                    {
                        'label': 'Patterns',
                        'path': 'layout-patterns.html'
                    }
                ]
            },
            {
                'title': 'Co-branding',
                'path': 'co-branding/'

            },
            {
                'title': 'Date time',
                'path': 'date-time/'

            },
            /*{
                'title': 'Design checklist',
                'path': 'design-checklist/'

            },*/
            {
                'title': 'Photography',
                'path': 'photography/',
                'tabs': [
                    {
                        'label': 'Overview',
                        'path': 'photography-overview.html'
                    },
                    {
                        'label': 'Usage',
                        'path': 'photography-usage.html'
                    }
                ]

            },
            {
                'title': 'Infographics',
                'path': 'infographics/'

            },
            {
                'title': 'Social media icons',
                'path': 'social-media-icons/'

            }
            /*{
                'title': 'Migration of acquisitions',
                'path': 'migration-of-acquisitions/'

            },*/
            /*{
                'title': 'Responsive design',
                'path': 'responsive-design/'

            },*/
        ]
    },
    'Code guidelines': {
        'path': 'code-guidelines/cookies/',
        'folder': 'code-guidelines',
        'subpages': [
            {
                'title': 'Accessibility training',
                'path': 'accessibility-training/'
            },
            {
                'title': 'Browser support',
                'path': 'browser-support/'
            },
            {
                'title': 'Cookies',
                'path': 'cookies/'
            },
            /*
            {
                'title': 'CSS classes',
                'path': 'css-classes/'

            },
            */
            {
                'title': 'CSS3',
                'path': 'css3/'

            },
            {
                'title': 'Disable modules',
                'path': 'disable-modules/'

            },
            {
                'title': 'Disable widgets',
                'path': 'disable-widgets/'

            },
            {
                'title': 'Embedding content',
                'path': 'embedding-content/'
            },
            {
                'title': 'Full width sections',
                'path': 'full-width-sections/'

            },
            {
                'title': 'Hide images',
                'path': 'hide-images/'

            },
            {
                'title': 'HTML5',
                'path': 'html5/'

            },
            {
                'title': 'Image circles',
                'path': 'image-circles/'

            },
            {
                'title': 'Masthead search',
                'path': 'masthead-search/'

            },
            {
                'title': 'Media objects',
                'path': 'media-objects/'

            },
            {
                'title': 'MTE modules',
                'path': 'mte-modules/'

            },
            {
                'title': 'Page configuration',
                'path': 'page-configuration/'

            },
            {
                'title': 'RSS feed display',
                'path': 'rss-feed-display/'

            },
            {
                'title': 'Scroll tracker',
                'path': 'scroll-tracker/'

            },
            {
                'title': 'Scrollbar widged',
                'path': 'scrollbar-widget/'

            },
            {
                'title': 'Scrolled into view',
                'path': 'scrolled-into-view/'

            },
            {
                'title': 'SEO',
                'path': 'seo/'

            },
            {
                'title': 'Set same height',
                'path': 'set-same-height/'

            },
            {
                'title': 'Share this content',
                'path': 'share-this-content/'

            },
            {
                'title': 'Spacing classes',
                'path': 'spacing-classes/'

            },
            {
                'title': 'Survey module',
                'path': 'survey-module/'

            },
            {
                'title': 'Text alignment',
                'path': 'text-alignment/'

            },
            {
                'title': 'Third party',
                'path': 'third-party/'

            },
            {
                'title': 'Video looper',
                'path': 'video-looper/'

            },
            {
                'title': 'Widgets',
                'path': 'widgets/'

            }
        ]
    },
    'Components': {
        'path': 'components/adaptive-line-breaks/',
        'folder': 'components',
        'subpages': [
            {
                'title': 'Adaptive line breaks',
                'path': 'adaptive-line-breaks/'

            },
            {
                'title': 'Anchor links',
                'path': 'anchor-links/'

            },
            {
                'title': 'Attachment links',
                'path': 'attachment-links/'

            },
            {
                'title': 'Audio player',
                'path': 'audio-player/'

            },
            {
                'title': 'Back to top',
                'path': 'back-to-top/'

            },
            {
                'title': 'Block links',
                'path': 'block-links/'

            },
            {
                'title': 'Breadcrumbs',
                'path': 'breadcrumbs/'

            },
            {
                'title': 'Buttons',
                'path': 'buttons/'

            },
            {
                'title': 'Cards',
                'path': 'cards/'

            },
            {
                'title': 'Contact module',
                'path': 'contact-module/'

            },
            {
                'title': 'Data tables',
                'path': 'data-tables/'

            },
            {
                'title': 'Date picker',
                'path': 'date-picker/'

            },
            {
                'title': 'External links',
                'path': 'external-links/'

            },
            {
                'title': 'Footers',
                'path': 'footers/'

            },
            {
                'title': 'Forms',
                'path': 'forms/'

            },
            {
                'title': 'Horizontal rules',
                'path': 'horizontal_rules/'

            },
            {
                'title': 'Lead spaces',
                'path': 'lead-spaces/'

            },
            {
                'title': 'Legal footer',
                'path': 'legal-footer/'

            },
            {
                'title': 'Lists',
                'path': 'lists/'

            },
            {
                'title': 'Loading spinner',
                'path': 'loading-spinner/'

            },
            {
                'title': 'Local selector',
                'path': 'locale-selector/'

            },
            {
                'title': 'Logo animation',
                'path': 'logo-animation/'

            },
            {
                'title': 'Mastheads',
                'path': 'mastheads/'

            },
            {
                'title': 'Navigation',
                'path': 'navigation/'

            },
            {
                'title': 'Notice choice',
                'path': 'notice-choice/'

            },
            {
                'title': 'Overlays',
                'path': 'overlays/'

            },

            {
                'title': 'Pagination controls',
                'path': 'pagination-controls/'

            },
            {
                'title': 'Parallax',
                'path': 'parallax/'

            },

            {
                'title': 'Pull quotes',
                'path': 'pull-quotes/'

            },
            {
                'title': 'Show hide',
                'path': 'show-hide/'

            },
            {
                'title': 'Social media',
                'path': 'social-media/'

            },
            {
                'title': 'Step indicator',
                'path': 'step-indicator/'

            },
            {
                'title': 'Syntax highlighter',
                'path': 'syntax-highlighter/'

            },
            {
                'title': 'Tags',
                'path': 'tags/'

            },
            {
                'title': 'Tooltip',
                'path': 'tooltip/'

            },
            {
                'title': 'Video',
                'path': 'video/'

            }
        ]
    },
    'Coming soon': {
        'path': 'components/coming-soon/',
        'folder': 'components',
        'subpages': [
            {
                'title': 'Accordion',
                'path': 'coming-soon/accordion/'

            },
            {
                'title': 'Button',
                'path': 'coming-soon/button/'

            },
            {
                'title': 'Checkbox',
                'path': 'coming-soon/checkbox/'

            },
            {
                'title': 'Dropdown',
                'path': 'coming-soon/dropdown/'

            },
            {
                'title': 'Link',
                'path': 'coming-soon/link/'

            },
            {
                'title': 'List',
                'path': 'coming-soon/list/'

            },
            {
                'title': 'Number input',
                'path': 'coming-soon/number-input/'

            },
            {
                'title': 'Radio button',
                'path': 'coming-soon/radio-button/'

            },
            {
                'title': 'Tabs',
                'path': 'coming-soon/tabs/'

            },
            {
                'title': 'Tag',
                'path': 'coming-soon/tag/'

            },
            {
                'title': 'Text input',
                'path': 'coming-soon/text-input/'

            }
        ]
    }
};

var resources = {
    'Design kit': {
        'path': 'design-kit/'
    },
    'Repository': {
        'external': true,
        'path': 'https://github.ibm.com/webstandards/v19a'
    },
    'Research': {
        'external': false,
        'path': 'research/'
    },
    'Drupal': {
        'path': 'resources/drupal/'
    }
};

var icons = [
    {
        category: 'Arrows',
        columns: [
            {
                icons: [
                    'anchor-down',
                    'anchor-up',
                    'back',
                    'forward'
                ]
            },
            {
                icons: [
                    'chevron-down',
                    'chevron-up',
                    'chevron-left',
                    'chevron-right'
                ]
            },
            {
                icons: [
                    'top',
                    'bottom'
                ]
            }
        ]
    },
    {
        category: 'Contact',
        columns: [
            {
                icons: [
                    'chat',
                    'email'
                ]
            },
            {
                icons: [
                    'phone',
                    'requestquote'
                ]
            }
        ]
    },
    {
        category: 'Controls',
        columns: [
            {
                icons: [
                    'close',
                    'ellipsis',
                    'help',
                    'maximize',
                    'menu'
                ]
            },
            {
                icons: [
                    'minimize',
                    'renew',
                    'search',
                    'top',
                    'sort-down'
                ]
            },
            {
                icons: [
                    'sort',
                    'sort-up',
                    'toc',
                    'view'

                ]
            }
        ]
    },
    {
        category: 'IBM',
        columns: [
            {
                icons: [
                    'bee'
                ]
            }
        ]
    },
    {
        category: 'Links',
        columns: [
            {
                icons: [
                    'external',
                    'link'
                ]
            },
            {
                icons: [
                    'list',
                    'popup'
                ]
            }

        ]
    },
    {
        category: 'Media',
        columns: [
            {
                icons: [
                    'attachment',
                    'audio',
                    'document',
                    'filter',
                    'pause'
                ]
            },
            {
                icons: [
                    'pdf',
                    'picture',
                    'play',
                    'rss',
                    'stop'
                ]
            },
            {
                icons: [
                    'ticket',
                    'video',
                    'videochat'
                ]
            }
        ]
    },
    {
        category: 'Pagination',
        columns: [
            {
                icons: [
                    'firstpage',
                    'lastpage'
                ]
            },
            {
                icons: [
                    'next',
                    'previous'
                ]
            }
        ]
    },
    {
        category: 'Ratings',
        columns: [
            {
                icons: [
                    'like',
                    'recommended'
                ]
            },
            {
                icons: [
                    'share',
                    'star-full'
                ]
            },
            {
                icons: [
                    'star-half',
                    'star-none'
                ]
            }
        ]
    },
    {
        category: 'Social',
        columns: [
            {
                icons: [
                    'blip',
                    'delicious',
                    'digg',
                    'facebook',
                    'flickr',
                    'googleplus',
                    'instagram'
                ]
            },
            {
                icons: [
                    'linkedin',
                    'livestream',
                    'pinterest',
                    'skype',
                    'snapchat',
                    'stumbleupon'
                ]
            },
            {
                icons: [
                    'tumblr',
                    'twitter',
                    'wykop',
                    'xing',
                    'yahoo',
                    'youtube'
                ]
            }
        ]
    },
    {
        category: 'Status',
        columns: [
            {
                icons: [
                    'alert',
                    'caution'
                ]
            },
            {
                icons: [
                    'information',
                    'password'
                ]
            },
            {
                icons: [
                    'non-secure',
                    'secure'
                ]
            }
        ]
    },
    {
        category: 'Tools',
        columns: [
            {
                icons: [
                    'admin',
                    'blog',
                    'bookmark',
                    'calculator',
                    'calendar',
                    'cart',
                    'clock',
                    'cloud',
                    'collaborate',
                    'copy'
                ]
            },
            {
                icons: [
                    'desktop',
                    'event',
                    'folder',
                    'forum',
                    'location',
                    'mobile',
                    'payment',
                    'person',
                    'print',
                    'relationship'
                ]
            },
            {
                icons: [
                    'role',
                    'tag',
                    'task',
                    'tile',
                    'tools',
                    'user-follow',
                    'profile',
                    'wiki',
                    'world'
                ]
            }
        ]
    },
    {
        category: 'Tools',
        columns: [
            {
                icons: [
                    'confirm',
                    'edit'
                ]
            },
            {
                icons: [
                    'reset',
                    'refresh'
                ]
            },
            {
                icons: [
                    'download',
                    'upload'
                ]
            }
        ]
    }
];

var types = [
    {
        objType: 'subset-heading',
        name:'Code snippet set'
    },
    {
        name: 'Code 01',
        copy: 'code snippet &lt;p class="ibm-type-mono"&gt;Mono&lt;/p&gt;',
        class: 'ibm-type-a ibm-type-mono',
        weight: '400',
        size: '12px',
        lheight: '16px',
        bm: '16px',
        ls: '0.32px'
    },
    {
        name: 'Code 02',
        copy: 'code snippet &lt;p class="ibm-type-mono"&gt;Mono&lt;/p&gt;',
        class: 'ibm-type-b ibm-type-mono',
        weight: '400',
        size: '14px',
        lheight: '20px',
        bm: '16px',
        ls: '0.16px'
    },
    {
        objType: 'subset-heading',
        name:'Body text set'
    },
    {
        name: 'Body 01',
        copy: 'Small copy',
        class: 'ibm-type-a',
        weight: '400',
        size: '12px',
        lheight: '16px',
        bm: '16px',
        ls: '0.32px'
    },

    {
        name: 'Body 02',
        copy: 'This is an example for text paragraph with body copy style. It is fourteen over twenty. It is a good size for long reading. We always flush left type. We always look for better type rag. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        class: 'ibm-type-b',
        weight: '400',
        size: '14px',
        lheight: '20px',
        bm: '16px',
        ls: '0.16px'
    },

    {
        name: 'Body 03',
        copy: 'This is an example for text paragraph with body copy style. It is sixteen over twenty-four. It is a good size for long reading. We always flush left type. We always look for better type rag. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum giat nulla pariatur.',
        class: 'ibm-type-c',
        weight: '400',
        size: '16px',
        lheight: '24px',
        bm: '24px',
        ls: '0px'
    },
    {
        objType: 'subset-heading',
        name:'Heading set'
    },
    {
        name: 'Heading 01',
        copy: 'This is an example for short headline using body copy style with no more than 4 lines.',
        class: 'ibm-type-b',
        weight: '400',
        size: '14px',
        lheight: '18px',
        bm: '16px',
        ls: '0.16px'
    },

    {
        name: 'Heading 02',
        copy: 'This is an example for short headline using body copy style alt with no more than 4 lines.',
        class: 'ibm-type-c ibm-type-c--tight',
        weight: '400',
        size: '16px',
        lheight: '22px',
        bm: '24px',
        ls: '0.32px'
    },

    {
        name: 'Heading 03',
        copy: 'This is an example for short heading',
        class: 'ibm-type-d',
        weight: '600',
        size: '16px',
        lheight: '22px',
        bm: '24px',
        ls: '0px'
    },

    {
        name: 'Heading 04',
        copy: 'This is an example for short heading ',
        class: 'ibm-type-e',
        weight: '400',
        size: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 1.5 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(1.25 * rem + (1.47059 * vwp - 1.20588 * rem));
            } else {
                return 20;
            }
        },
        lheight: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 1.875 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(1.625 * rem + (1.47059 * vwp - 1.20588 * rem));
            } else {
                return 26;
            }
        },
        bm: '24px',
        ls: '0px'
    },
    {
        name: 'Heading 05',
        copy: 'This style is for section headings or high level paragraphs.',
        class: 'ibm-type-f',
        weight: '400',
        size: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 2 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(1.75 * rem + (1.47059 * vwp - 1.20588 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(1.5 * rem + (1.5625 * vwp - 1.03125 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(1.25 * rem + (1.04167 * vwp - 0.4375 * rem));
            } else {
                return 20;
            }
        },
        lheight: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 2.5 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(2.25 * rem + (1.47059 * vwp - 1.20588 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(1.875 * rem + (2.34375 * vwp - 1.54688 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(1.625 * rem + (1.04167 * vwp - 0.4375 * rem));
            } else {
                return 26;
            }
        },
        bm: '24px',
        ls: '0px'
    },
    {
        name: 'Heading 06',
        copy: 'Heading style',
        class: 'ibm-type-i',
        weight: '300',
        size: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 3.75 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(3 * rem + (4.41176 * vwp - 3.61765 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(2.625 * rem + (2.34375 * vwp - 1.54688 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(2.25 * rem + (1.5625 * vwp - 0.65625 * rem));
            } else {
                return Math.round(1.75 * rem + (2.27273 * vwp - 0.45455 * rem));
            }
        },
        lheight: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 4.375 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(3.5 * rem + (5.14706 * vwp - 4.22059 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(3.125 * rem + (2.34375 * vwp - 1.54688 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(2.75 * rem + (1.5625 * vwp - 0.65625 * rem));
            } else {
                return Math.round(2.25 * rem + (2.27273 * vwp - 0.45455 * rem));
            }
        },
        bm: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 42 * rem) {
                return Math.round(2 * rem);
            } else {
                return Math.round(1.5 * rem + (2.27273 * vwp - 0.45455 * rem));
            }
        },
        ls: '0px'
    },
    {
        objType: 'subset-heading',
        name:'Quotation set'
    },
    {
        name: 'Quotation 01',
        copy: '“Quote.”',
        class: 'ibm-type-f ibm-type-serif',
        weight: '400',
        size: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 2 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(1.75 * rem + (1.47059 * vwp - 1.20588 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(1.5 * rem + (1.5625 * vwp - 1.03125 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(1.25 * rem + (1.04167 * vwp - 0.4375 * rem));
            } else {
                return 20;
            }
        },
        lheight: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 2.5 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(2.25 * rem + (1.47059 * vwp - 1.20588 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(1.875 * rem + (2.34375 * vwp - 1.54688 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(1.625 * rem + (1.04167 * vwp - 0.4375 * rem));
            } else {
                return 26;
            }
        },
        bm: '24px',
        ls: '0px'
    },

    {
        name: 'Quotation 02',
        copy: '“Quote.”',
        class: 'ibm-type-i ibm-type-serif',
        weight: '300',
        size: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 3.75 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(3 * rem + (4.41176 * vwp - 3.61765 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(2.625 * rem + (2.34375 * vwp - 1.54688 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(2.25 * rem + (1.5625 * vwp - 0.65625 * rem));
            } else {
                return Math.round(1.75 * rem + (2.27273 * vwp - 0.45455 * rem));
            }
        },
        lheight: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 4.375 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(3.5 * rem + (5.14706 * vwp - 4.22059 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(3.125 * rem + (2.34375 * vwp - 1.54688 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(2.75 * rem + (1.5625 * vwp - 0.65625 * rem));
            } else {
                return Math.round(2.25 * rem + (2.27273 * vwp - 0.45455 * rem));
            }
        },
        bm: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 42 * rem) {
                return Math.round(2 * rem);
            } else {
                return Math.round(1.5 * rem + (2.27273 * vwp - 0.45455 * rem));
            }
        },
        ls: '0px'
    },
    {
        objType: 'subset-heading',
        name:'Display set'
    },
    {
        name: 'Display 01',
        objType: 'coming-soon',
        copy: 'Display',
        class: 'ibm-type-i',
        weight: '300',
        size: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 4.75 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(3.625 * rem + (12.5 * vwp - 10.25 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(3.375 * rem + (11.71875 * vwp - 7.73438 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(2.625 * rem + (6.25 * vwp - 2.625 * rem));
            } else {
                return Math.round(2.625 * rem + (7.38636 * vwp - 1.47727 * rem));
            }
        },
        lheight: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 5.375 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(4.375 * rem + (12.5 * vwp - 10.25 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(4 * rem + (10.9375 * vwp - 7.21875 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(3.125 * rem + (6.25 * vwp - 2.625 * rem));
            } else {
                return Math.round(3.125 * rem + (7.95455 * vwp - (1.59091 * rem)));
            }
        },
        bm: '32px',
        ls: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 0;
            } else if (vw >= 82 * rem) {
                return Math.round(-0.11765 * vwp - (-0.09647 * rem));
            } else if (vw >= 66 * rem) {
                return 0;
            } else if (vw >= 42 * rem) {
                return Math.round(-0.07 * rem);
            } else {
                return 0;
            }
        }
    },
    {
        name: 'Display 02',
        objType: 'coming-soon',
        copy: 'Display',
        class: 'ibm-type-i ibm-type-semibold',
        weight: '300',
        size: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 4.75 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(3.625 * rem + (12.5 * vwp - 10.25 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(3.375 * rem + (11.71875 * vwp - 7.73438 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(2.625 * rem + (6.25 * vwp - 2.625 * rem));
            } else {
                return Math.round(2.625 * rem + (7.38636 * vwp - 1.47727 * rem));
            }
        },
        lheight: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 5.375 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(4.375 * rem + (12.5 * vwp - 10.25 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(4 * rem + (10.9375 * vwp - 7.21875 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(3.125 * rem + (6.25 * vwp - 2.625 * rem));
            } else {
                return Math.round(3.125 * rem + (7.95455 * vwp - (1.59091 * rem)));
            }
        },
        bm: '32px',
        ls: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 0 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(0 * rem + (-0.11765 * vwp - (-0.09647 * rem)));
            } else if (vw >= 66 * rem) {
                return Math.round(0 * rem);
            } else if (vw >= 42 * rem) {
                return Math.round(0 * vwp - (0.07 * rem));
            } else {
                return 0;
            }
        }
    },
    {
        name: 'Display 03',
        copy: 'Display',
        class: 'ibm-type-j',
        weight: '300',
        size: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 9.75 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(7.625 * rem + (12.5 * vwp - 10.25 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(5.75 * rem + (11.71875 * vwp - 7.73438 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(4.25 * rem + (6.25 * vwp - 2.625 * rem));
            } else {
                return Math.round(2.625 * rem + (7.38636 * vwp - 1.47727 * rem));
            }
        },
        lheight: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 10.25 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(8.125 * rem + (12.5 * vwp - 10.25 * rem));
            } else if (vw >= 66 * rem) {
                return Math.round(6.375 * rem + (10.9375 * vwp - 7.21875 * rem));
            } else if (vw >= 42 * rem) {
                return Math.round(4.875 * rem + (6.25 * vwp - 2.625 * rem));
            } else {
                return Math.round(3.125 * rem + (7.95455 * vwp - (1.59091 * rem)));
            }
        },
        bm: '32px',
        ls: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return -0.06 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(-0.04 * rem + (-0.11765 * vwp - (-0.09647 * rem)));
            } else if (vw >= 66 * rem) {
                return Math.round(-0.04 * rem);
            } else if (vw >= 42 * rem) {
                return Math.round(-0.16667 * vwp - (0.07 * rem));
            } else {
                return 0;
            }
        }
    },
    {
        name: 'Display 04',
        copy: 'Display',
        class: 'ibm-type-k',
        weight: '600',
        size: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 9.75 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(7.625 * rem + (12.5 * vwp - (10.25 * rem)));
            } else if (vw >= 66 * rem) {
                return Math.round(5.75 * rem + (11.71875 * vwp - (7.73438 * rem)));
            } else if (vw >= 42 * rem) {
                return Math.round(4.25 * rem + (6.25 * vwp - (2.625 * rem)));
            } else {
                return Math.round(2.625 * rem + (7.38636 * vwp - (1.47727 * rem)));
            }
        },
        lheight: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return 10.25 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(8.125 * rem + (12.5 * vwp - (10.25 * rem)));
            } else if (vw >= 66 * rem) {
                return Math.round(6.375 * rem + (10.9375 * vwp - (7.21875 * rem)));
            } else if (vw >= 42 * rem) {
                return Math.round(4.875 * rem + (6.25 * vwp - (2.625 * rem)));
            } else {
                return Math.round(3.125 * rem + (7.95455 * vwp - (1.59091 * rem)));
            }
        },
        bm: '32px',
        ls: function (vw) {
            var rem = 16;
            var vwp = vw / 100;
            if (vw >= 99 * rem) {
                return -0.06 * rem;
            } else if (vw >= 82 * rem) {
                return Math.round(-0.04 * rem + (-0.11765 * vwp - (-0.09647 * rem)));
            } else if (vw >= 66 * rem) {
                return Math.round(-0.04 * rem);
            } else if (vw >= 42 * rem) {
                return Math.round(-0.16667 * vwp - (-0.07 * rem));
            } else {
                return 0;
            }
        }
    }
];

var breakPoints = [
    {
        name: 'Sm',
        min: 320
    },
    {
        name: 'Md',
        min: 672
    },
    {
        name: 'Lg',
        min: 1056
    },
    {
        name: 'Xlg',
        min: 1312
    },
    {
        name: 'Max',
        min: 1584
    }
];

var fullScreenPages = [
    'components/lead-spaces/examples'
];

jQuery(document).ready(function () {
    createNavigation();
    createIconLists();
    createTypesTable();
    adjustStickyTypeTableHeader();
    initializePreviewTool();
});

function reinitializeStickyTabs() {
    jQuery('.dd-tabs').stickytabs();
}


function createNavigation() {
    // create vertical menu
    var topLevel = '';

    var secondLevelBegin = '<ul class=\"ibm-plain-list\">';
    var secondLevelEnd = '</ul>';

    // Determine if the page is full Screen (no side-nav)
    var isFullScreenPage = false;

    for(var i = 0; i < fullScreenPages.length; i++) {
        if(document.URL.indexOf(fullScreenPages[i]) >= 0){
            isFullScreenPage = true;
            break;
        }
    }

    // DEFAULT ROUTE = Production server and localhost routes.
    var serverRoute = '/standards/web/';

    // For the repo's GH pages, change the path.
    // For the w3 design site.
    if (document.URL.indexOf('pages.github.ibm.com/webstandards/northstar-website-external/') >= 0) {
        serverRoute = '/webstandards/northstar-website-external/web/';
    }
    else if (document.URL.indexOf('/design/digital/') >= 0) {
        serverRoute = '/design/digital/';
    }

    // create top nav menu item
    jQuery('#ibm-home').after('<div class="ibm-parent-site-name"><div class="dr-masthead-divider"></div><a class="dr-home ibm-type-d ibm-mb-0" href=\"' + serverRoute + '\">Digital Design</a></div>');

    if(!isFullScreenPage){
        Object.keys(menu).forEach(function (pageKey) {

            var mainMenuItem = menu[pageKey];
            var TLmenuItemBeing = '';

            var submenuClassOpen = mainMenuItem.subpages !== undefined ? 'open' : '';
            var submenuClassClosed = mainMenuItem.subpages !== undefined ? 'closed' : '';

            var isPageOpen = document.URL.indexOf(mainMenuItem.path) >= 0;
            var isSubpageOpen = false;

            var hasSubnav = mainMenuItem.subpages ? "custom-showhide " : "" ;

            if (mainMenuItem.subpages !== undefined) {
                mainMenuItem.subpages.forEach(function (subpageObj) {
                    if (subpageObj.path !== undefined && document.URL.indexOf(subpageObj.path) >= 0) {
                        isSubpageOpen = true;
                    }
                    if (subpageObj.tabs !== undefined) {
                        subpageObj.tabs.forEach(function (tabObj) {
                            if (document.URL.indexOf(tabObj.path) >= 0) {
                                isSubpageOpen = true;
                            }
                        });
                    }
                });
            }

            if (isPageOpen === true || isSubpageOpen === true) {
                TLmenuItemBeing = '<li class=\'' + hasSubnav + submenuClassOpen + '\'><a class="ibm-type-b ibm-type-b--tight ibm-type-semibold ibm-textcolor-gray-100 ibm-mb-0 ' + (isSubpageOpen === true ? '' : 'active') + '" href="' + serverRoute + mainMenuItem.path + '">';
            } else {
                var TLmenuItemBeing = '<li class=\'' + hasSubnav + submenuClassClosed + '\'><a class="ibm-type-b ibm-type-b--tight ibm-type-semibold ibm-textcolor-gray-60 ibm-mb-0 " href="' + serverRoute + mainMenuItem.path + '">';
            }

            if (mainMenuItem.subpages !== undefined) {

                var secondLevel = secondLevelBegin;

                mainMenuItem.subpages.forEach(function (subpageObj) {

                    // console.log('subpageObj===', subpageObj.title);

                    var SLmenuItemBeing = '';

                    var isRightPage = false;
                    if (subpageObj.tabs !== undefined) {
                        subpageObj.tabs.forEach(function (tabObj) {
                            if (document.URL.indexOf(tabObj.path) >= 0) {
                                isRightPage = true;
                            }
                        });
                    }

                    if (isRightPage === true) {
                        SLmenuItemBeing = '<li><a class="ibm-type-b ibm-type-b--tight ibm-textcolor-gray-100 active ibm-mb-0 " href="' + serverRoute + mainMenuItem.folder + '/' + subpageObj.tabs[0].path + '">';

                        // insert tabs
                        var tabMenu = '<div data-widget="stickytabs" class="dd-tabs ibm-graphic-tabs ibm-pb-0 ibm-background-gray-100"> <div class="ibm-tab-section ibm-pb-0 ibm-grid-container"> <div class="ibm-grid-col-lg-16-4"></div> <ul class="ibm-tabs" role="tablist">';
                        if (subpageObj.tabs !== undefined) {
                            subpageObj.tabs.forEach(function (tabObj) {
                                tabMenu = tabMenu + '<li><a aria-selected="' + (window.location.href.indexOf(tabObj.path) >= 0) + '" role="tab" href="' + tabObj.path + '" class="ibm-type-c ibm-type-c--tight ibm-mb-0">' + tabObj.label + '</a></li>';
                            });
                        }
                        tabMenu = tabMenu + '</ul> <div class="ibm-grid-col-sm-4-1 ibm-grid-col-md-8-1 ibm-grid-col-lg-16-3"></div> </div> </div>';
                        var $tabWrapEl = jQuery('#ibm-primary-tabs');
                        if ($tabWrapEl.length < 1) {
                            jQuery('.custom-leadspace').after(tabMenu);
                        } else {
                            $tabWrapEl.replaceWith(tabMenu);
                        }

                    } else if (subpageObj.tabs !== undefined) {
                        SLmenuItemBeing = '<li><a class="ibm-type-b ibm-type-b--tight ibm-textcolor-gray-60 ibm-mb-0 " href="' + serverRoute + mainMenuItem.folder + '/' + subpageObj.tabs[0].path + '">';
                    } else {
                        SLmenuItemBeing = '<li><a class="ibm-type-b ibm-type-b--tight ibm-textcolor-gray-60 ibm-mb-0 ' + (document.URL.indexOf(subpageObj.path) >= 0 ? 'active' : '') + '" href="' + serverRoute + mainMenuItem.folder + '/' + subpageObj.path + '">';
                    }

                    secondLevel += SLmenuItemBeing + subpageObj.title + '</a></li>';
                });

                topLevel += TLmenuItemBeing + pageKey + '</a>' + secondLevel + secondLevelEnd + '</li>';

            } else {
                topLevel += TLmenuItemBeing + pageKey + '</a></li>';
            }

        });

        //console.log('topLevel===', topLevel);


        jQuery('main[role=main]').append('<nav role="navigation"><div id="ibm-navigation"><nav class="dr-menu"><ul id="ibm-primary-links"  class="ibm-plain-list ibm-textcolor-gray-60">' + topLevel + '</ul></nav></div></nav>');


        // create resources section
        var html = '';

        jQuery.each(resources, function (key, value) {
            html += '<li><a class=\"ibm-type-b ibm-type-semibold ibm-mb-0 ibm-textcolor-gray-60\" target="' + (value.external ? '_blank' : '_self') + '\"' + 'href=\"' + (value.external ? '' : serverRoute) + value.path + '\">' + key + '</a></li>';
        });

        jQuery('.dr-menu').append('<div class=\"dr-resources\"><div class="dr-resources-spacer ibm-pt-2"></div><ul class="ibm-plain-list">' + html + '</ul></div>');
    }

    // Setup show/hide:
    jQuery(".custom-showhide > a").on("click", function (evt) {
        evt.preventDefault();
        jQuery(evt.delegateTarget).parent().toggleClass("open closed");
        jQuery(evt.delegateTarget).parent().children("ul").slideToggle();
    });

    jQuery(".custom-showhide:not(.open)").children("ul").css("display","none");

}


jQuery(window).load(function () {
    adjustMenu();
    reinitializeStickyTabs();
});


jQuery(window).click(function () {
    adjustMenu();
});


// position and dimensions of menu
jQuery(window).on("scroll resize", function (event) {
    adjustMenu();
});

var leftMenuTop = 32;

function adjustMenu() {
    var el = jQuery('footer');

    var scroll = jQuery(window).scrollTop();
    if (jQuery('#ibm-com').hasClass('ibm-masthead-sticky-showing')) {
        jQuery('.dr-menu').css('top', leftMenuTop + 'px');
        jQuery('.dr-menu').css('height', 'calc(100% - ' + (33 - heightOffset(el)) + 'px)');
    } else {
        if (scroll <= 0) {
            jQuery('.dr-menu').css('top', leftMenuTop + 'px');
            jQuery('.dr-menu').css('height', 'calc(100% - ' + (33 - heightOffset(el)) + 'px)');
        } else if (scroll > 0) {
            if (scroll >= leftMenuTop) {
                scroll = leftMenuTop;
            }
            jQuery('.dr-menu').css('top', (leftMenuTop - scroll) + 'px');
            jQuery('.dr-menu').css('height', 'calc(100% - ' + (33 - scroll - heightOffset(el)) + 'px)');
        }
    }
}

// find out how much of the element is visible on screen (in PX)
function heightOffset(elem) {
    var docViewBottom = jQuery(window).scrollTop() + jQuery(window).height();

    if ((jQuery(document).height() - docViewBottom) < jQuery(elem).height()) {
        return (jQuery(document).height() - docViewBottom) - jQuery(elem).height();
    } else {
        return 0;
    }

}

function createIconLists() {
    var iconContainer = jQuery('#icon-container');
    if (iconContainer.length) {
        var html = '';

        icons.forEach(function (iconCategory) {
            var header = '<div class="ibm-grid-container"><div class="ibm-grid-col-sm-4-0 ibm-grid-col-lg-16-4"></div><div class="ibm-grid-col-sm-4-4 ibm-grid-col-lg-16-12"><h5 class="ibm-mb-2 ibm-mt-6 ibm-bold">' + iconCategory.category + '</h5></div></div> <div class="ibm-grid-container"><div class="ibm-grid-col-sm-4-0 ibm-grid-col-lg-16-4"></div>';
            var icons = '';


            iconCategory.columns.forEach(function (iconColumn, index) {
                var openTag = '<div class="ibm-grid-col-sm-4-4 ibm-grid-col-md-8-4 ibm-grid-col-lg-16-4">';
                var column = '';

                iconColumn.icons.forEach(function (icon) {
                    column += '<p class="ibm-icon-nolink ibm-pb-0"><span class="ibm-' + icon + '-link">ibm-' + icon + '-link</span></p>';
                });
                icons += openTag + column + '</div>';
            });
            html += header + icons + '</div>';
        });

        iconContainer.append(html);
    }
}


function createTypesTable() {
    var typesTable = jQuery('#types-table');

    if (typesTable.length) {
        var html = '';

        var buttons = '';
        breakPoints.forEach(function (breakpoint, index) {
            buttons += '<li><button ' + (index === 0 ? 'aria-selected="true"' : '') + 'role="tab" data-break= ' + breakpoint.min + ' class="ibm-type-b ibm-background-white-core ibm-no-border ibm-btn-pri ibm-textcolor-gray-90">' + breakpoint.name + '</button></li>';
        });

        var menu = '<div id="breakpoint-menu--bar" class="ibm-flex ibm-background-white-core ibm-grid-col-md-8-8 ibm-grid-offset-lg-16-4 ibm-grid-lg-16-8 ibm-grid-col-seamless"><span class="ibm-p ibm-type-b ibm-mb-0">Breakpoints</span><ul class="ibm-flex ibm-plain-list">' + buttons + '</ul></div>';

        var typesMarkup = renderTypes(320);

        html += menu + typesMarkup;
        typesTable.replaceWith(html);


        jQuery('#breakpoint-menu--bar button').click(function (event) {

            // Unselect previous button
            jQuery('#breakpoint-menu--bar button').removeAttr('aria-selected');

            jQuery('.type-block').remove();

            var typesMarkup = renderTypes(parseInt(event.target.dataset.break));

            jQuery('#breakpoint-menu--bar').after(typesMarkup);

            //Select current one
            jQuery(event.target).attr('aria-selected', 'true');
        });
    }
}

function renderTypes(vw) {
    var typesMarkup = '';
    types.forEach(function (type, typeI) {

        if (type.objType === 'subset-heading') {
            typesMarkup += '<div class="type-block ibm-grid-col-sm-4-4 ibm-grid-col-lg-16-8 ibm-grid-offset-lg-16-4 ibm-mb-2 ibm-mt-'+(typeI == 0 ? '4' : '3')+'"><div class="ibm-type-b--tight ibm-type-semibold">'+type.name+'</div></div>';
        }
        else {
            var size = ((typeof type.size !== 'function') ? type.size : (type.size(vw) + 'px'));
            var lheight = ((typeof type.lheight !== 'function') ? type.lheight : (type.lheight(vw) + 'px'));
            var bm = ((typeof type.bm !== 'function') ? type.bm : (type.bm(vw) + 'px'));
            var ls = ((typeof type.ls !== 'function') ? type.ls : (type.ls(vw) + 'px'));

            // Type Copy
            var typeCopy = '<div class="type-block type-block--copy type-container ibm-background-white-core ibm-grid-col-sm-4-4 ibm-grid-col-md-8-5 ibm-grid-offset-lg-16-4 ibm-grid-col-lg-16-8 ibm-mb-1 ibm-p">' +
                '<p class="' + type.class 
                + '" style="font-size: ' + size 
                + '; line-height: ' + lheight 
                + '; margin-bottom: ' + bm 
                + '; color:' + (type.objType === 'coming-soon' ? '#A4A4A4' : '')
                + '; letter-spacing: ' + ls + ';">' + type.copy + '</p>' +
                '</div>';

            // Type Specs
            var typeSpecs = '<div class="type-block type-block--specs type-container ibm-background-white-core ibm-grid-col-sm-4-4 ibm-grid-col-md-8-3 ibm-grid-col-lg-16-4 ibm-mb-1 ibm-p">' +
                '<span class="ibm-type-a ibm-type-semibold ibm-mb-0">' + type.name + '</span><br/>' +
                (type.objType === 'coming-soon' ? '<span class="ibm-type-b">Coming soon</span>' : '') +
                '<span style="'+(type.objType === 'coming-soon' ? 'visibility:hidden;' : '')+'" class="ibm-type-a">' + type.weight + '</span><br/>' +
                '<span style="'+(type.objType === 'coming-soon' ? 'visibility:hidden;' : '')+'" class="ibm-type-a">Size: ' + size + '</span><br/>' +
                '<span style="'+(type.objType === 'coming-soon' ? 'visibility:hidden;' : '')+'" class="ibm-type-a">Line height: ' + lheight + '</span><br/>' +
                '<span style="'+(type.objType === 'coming-soon' ? 'visibility:hidden;' : '')+'" class="ibm-type-a">Bottom margin: ' + bm + '</span><br/>' +
                '<span style="'+(type.objType === 'coming-soon' ? 'visibility:hidden;' : '')+'" class="ibm-type-a">Letter spacing: ' + ls + '</span><br/>' +
                '<span style="'+(type.objType === 'coming-soon' ? 'visibility:hidden;' : '')+'" class="class-box ibm-type-a ibm-background-cool-gray-20 ibm-mt-2 ibm-mb-0">' + type.class + '</span>' +
                '</div>';
            typesMarkup += typeCopy + typeSpecs;
        }
    });
    return typesMarkup;
}


function adjustStickyTypeTableHeader() {

    var menu = jQuery('#breakpoint-menu--bar');

    // have to wrap this entire thing in condition cause otherwise it breaks v18 js on pages where there's no type widget
    if (menu.length > 0) {
        var sticky = menu.offset().top;

        jQuery(window).scroll(function () {
            if (jQuery('.ibm-sticky-tabs').length) {
                var alignmentOffset = jQuery('#alignment-table').offset().top - 200;
                var threshold = 55;
                var offset = 0;

                if (jQuery('.ibm-masthead-sticky-showing').length) {
                    offset = 50;
                }
                if (window.pageYOffset >= (sticky - threshold) && window.pageYOffset < alignmentOffset) {
                    var previousWidth = jQuery('#breakpoint-menu--bar').width();

                    menu.addClass('sticky').width(previousWidth).css({ 'top': offset });

                    if (window.innerWidth >= 1056) {
                        var containerWidth = jQuery('.ibm-grid-container').first().width();
                        menu.css({ 'margin-left': containerWidth / 4 });
                    }
                } else {
                    menu.removeClass('sticky');
                }
            }
        }).resize(function () {
            if (jQuery('#breakpoint-menu--bar.sticky').length) {
                var containerWidth = jQuery('.ibm-grid-container').first().width();
                if(window.innerWidth >= 1056) {
                    menu.css({ 'margin-left': containerWidth / 4, 'width': (containerWidth * 0.75) });
                } else {
                    menu.css({ 'margin-left': '', 'width': ''});
                }
            }
        });

    }
}

function initializePreviewTool() {
    var previewURLInput = jQuery('#preview_url_input');
    var previewFrame = jQuery('#preview_frame');
    var newTabButton = jQuery('#preview_form .ibm-btn-sec');

    if(previewURLInput.length){
        jQuery('#preview_form').submit(function(event) {
            event.preventDefault();
            var url = previewURLInput.val(); 

            url = formatPreviewURL(url);

            if(!url && previewFrame.css('display') === 'block'){
                previewFrame.css('display', 'none');
            } else if(previewFrame.css('display') === 'none'){
                previewFrame.css('display', 'block');
            }

            previewFrame.attr('src', url);
        });

        newTabButton.click(function(event){
            event.preventDefault();
            
            var url = previewURLInput.val(); 
            url = formatPreviewURL(url);
            
            if(url){
                window.open('preview-tool-fs.html?url=' + url,'_newtab');
            }
        });
    }
}

function formatPreviewURL(url){
    if(url){
		if(url.toLowerCase().indexOf('http') === -1){
			return 'https://' + url;
		}
		return url.replace('http://', 'https://');
	}
	return '';
}