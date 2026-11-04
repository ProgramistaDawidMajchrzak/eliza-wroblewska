/**
 * Site copy – English version. Must have exactly the same keys as pl.ts.
 */
import type { pl } from './pl';

export const en: typeof pl = {
  meta: {
    siteName: 'Eliza Wróblewska',
    locale: 'en_GB',
    home: {
      title: 'Eliza Wróblewska – judo, -78 kg, Polish national team',
      description:
        'Eliza Wróblewska: judoka and member of the Polish national team at -78 kg. Four-time Polish champion, 25 international medals. Partnerships and sponsorship.',
    },
    partnership: {
      title: 'Partnership and sponsorship – Eliza Wróblewska',
      description:
        'Partner with a Polish national team judoka. Packages for companies, appearances, Polish sponsorship tax relief. Poznań, Greater Poland.',
    },
    media: {
      title: 'Press – Eliza Wróblewska',
      description:
        'Bio in three lengths, key facts, photos and press contact – Eliza Wróblewska, judo -78 kg.',
    },
    privacy: {
      title: 'Privacy policy – Eliza Wróblewska',
      description: 'How we process personal data sent through the contact form.',
    },
    thanks: {
      title: 'Thank you for your message – Eliza Wróblewska',
      description: 'Your message has been sent.',
    },
    notFound: {
      title: 'Page not found – Eliza Wróblewska',
      description: 'This page does not exist.',
    },
    ogAlt: 'Eliza Wróblewska – judo, -78 kg, Polish national team',
    jobTitle: 'Judoka, member of the Polish national team',
    nationality: 'Poland',
  },

  common: {
    skip: 'Skip to content',
    tagline: ['Judo', '-78 kg', 'Polish national team'],
    ctaPartner: 'Become a partner',
    ctaMediaKit: 'Download media kit',
    menu: 'Menu',
    menuOpen: 'Open menu',
    langName: 'Polski',
    langShort: 'PL',
    langLabel: 'Wersja polska',
    photoBy: 'Photo:',
    asOf: 'as of',
    points: 'pts',
    newTab: '(opens in a new tab)',
    placeholderPhoto: 'Photo placeholder',
    placeholderVideo: 'Video placeholder',
    homeLink: 'Home',
  },

  nav: {
    rise: 'On the rise',
    story: 'Story',
    results: 'Results',
    events: 'Events',
    gallery: 'Gallery',
    contact: 'Contact',
    partnership: 'Partnership',
    media: 'Press',
    label: 'Main navigation',
  },

  anchors: {
    rise: 'on-the-rise',
    story: 'story',
    results: 'results',
    events: 'events',
    gallery: 'gallery',
    contact: 'contact',
    why: 'why',
    packages: 'packages',
    tax: 'tax-relief',
    partners: 'partners',
    faq: 'faq',
    bio: 'bio',
    facts: 'facts',
    photos: 'photos',
    pressContact: 'press-contact',
  },

  result: {
    gold: 'Gold',
    silver: 'Silver',
    bronze: 'Bronze',
    start: 'Competed',
    place: (n: number) => `${n}${ordinal(n)} place`,
    placeShort: (n: number) => `${n}${ordinal(n)}`,
    category: 'Category',
  },

  hero: {
    lead: 'Polish national team judoka from PGE Akademia Judo Poznań. Less than a year at -78 kg: European Open medals, the Polish title and fifth place at a Grand Slam.',
    boardLabel: 'Scoreboard',
    country: 'POL',
    rankingLabel: 'in the IJF World Ranking List',
  },

  rise: {
    kicker: 'On the rise',
    title: 'New weight class. Straight onto the podium.',
    lead: 'In 2025 Eliza moved up from -70 kg to -78 kg. Within a year she won European Open medals, the Polish title and fifth place at the Budapest Grand Slam.',
    body: 'This is the best moment to join. A partner who comes in now helps write this story from the start – instead of joining once everyone is already talking about it.',
    switchLabel: 'Weight class change',
    listTitle: 'Since moving up',
    cta: 'See what a partner gets',
  },

  band: {
    text: 'Looking for a sports story for your brand? This one is just picking up speed.',
    cta: 'See partnership packages',
  },

  story: {
    kicker: 'Story and values',
    title: '“Wróbelek” – the little sparrow from Poznań',
    paragraphs: [
      'Eliza competes for PGE Akademia Judo Poznań. Her nickname, “Wróbelek” (little sparrow), sounds modest – especially once a 182 cm athlete steps onto the mat.',
      'As a cadet she fought at -63 kg, then spent years at -70 kg, where she won three Polish senior titles and medals at international events. In 2025 she moved up to -78 kg.',
      'Along the way there were injuries and comebacks. In elite sport that is the part of the work people rarely talk about – and the part that teaches you the most.',
    ],
    valuesTitle: 'Judo is a school of respect and discipline',
    values: [
      {
        title: 'Respect',
        text: 'Every bout starts and ends with a bow. Your opponent is a partner who helps you grow.',
      },
      {
        title: 'Discipline',
        text: 'Weight, training plan, recovery. Changing weight class takes consistency every single day.',
      },
      {
        title: 'Comebacks',
        text: 'Injuries are part of elite sport. What matters is what happens after them.',
      },
    ],
    videoLabel: 'Video: Eliza in Poznań',
  },

  results: {
    kicker: 'Results',
    title: 'Key results',
    lead: 'Four-time Polish senior champion with 25 international medals. Six selected results below, followed by the full list.',
    timeline: 'Full timeline – all results',
    profiles: 'Official profiles:',
  },

  events: {
    kicker: 'Upcoming events',
    title: 'Where to see Eliza on the mat',
    empty: 'The next competitions will be announced soon.',
    rankingTitle: 'IJF World Ranking',
    rankingCta: 'IJF profile',
  },

  gallery: {
    kicker: 'Gallery',
    title: 'On the mat',
    lead: 'Competition photos. Photographers are credited on each image.',
  },

  contact: {
    kicker: 'Contact',
    title: 'Let’s talk about a partnership',
    lead: 'Tell us a little about your company and what you are looking for. We will come back with a proposal tailored to your brand.',
    direct: 'Prefer email?',
    emailTodo: 'TODO: partnership email',
    press: 'Writing about sport? Bio, photos and press contact are on the',
    pressLink: 'Press page',
  },

  form: {
    name: 'Full name',
    company: 'Company',
    email: 'Email',
    type: 'Type of partnership',
    typePlaceholder: 'Choose…',
    typeOptions: [
      { value: 'Main Partner', label: 'Main Partner', pkg: 'partner-glowny' },
      { value: 'Partner', label: 'Partner', pkg: 'partner' },
      { value: 'Local Partner', label: 'Local Partner', pkg: 'partner-lokalny' },
      { value: 'Talk or company event', label: 'Talk or company event', pkg: '' },
      { value: 'Press', label: 'Press', pkg: '' },
      { value: 'Other', label: 'Other', pkg: '' },
    ],
    message: 'Message',
    messagePlaceholder: 'E.g. industry, budget, timing, your idea for a partnership',
    consentBefore: 'I agree to the processing of my data in order to reply to my message. Details in the',
    consentLink: 'privacy policy',
    required: 'required',
    optional: 'optional',
    submit: 'Send message',
    honeypot: 'Leave this field empty',
    subject: 'Message from the Eliza Wróblewska website',
    todoEndpoint:
      'TODO: the form is not connected yet – set “form.endpoint” in src/data/site.yaml (see README).',
  },

  partnership: {
    kicker: 'Partnership',
    title: 'Step onto the mat with a Polish national team athlete',
    lead: 'A partnership with Eliza Wróblewska combines international competition on the IJF World Tour, local roots in Greater Poland and values that fit any company: respect, discipline and consistency.',
    ctaTalk: 'Let’s talk',
    ctaPackages: 'See packages',

    whyJudoKicker: 'Why judo',
    whyJudoTitle: 'A sport that builds character',
    whyJudo: [
      {
        title: 'Respect is in the rules',
        text: 'Every bout starts and ends with a bow. In judo, respect for your opponent is a rule, not a gesture.',
      },
      {
        title: 'A sport for everyone',
        text: 'Children, adults and whole families train judo. It is a natural idea for an event for employees or their children.',
      },
      {
        title: 'An international stage',
        text: 'IJF World Tour events take place on several continents and are followed by fans around the world.',
      },
    ],

    whyElizaKicker: 'Why Eliza',
    whyElizaTitle: 'Why Eliza – and why now',
    whyEliza: [
      {
        title: 'She is on the rise',
        text: 'Less than a year at -78 kg: European Open medals, the Polish title, fifth at the Budapest Grand Slam and seventh in Abu Dhabi.',
      },
      {
        title: 'She competes worldwide',
        text: 'IJF World Tour and World Championships. Your brand travels with her – on her kit, in coverage and on social media.',
      },
      {
        title: 'She is local',
        text: 'An athlete from a Poznań club. A partnership sends a clear message to customers and employees in Greater Poland: we back local sport.',
      },
      {
        title: 'She works with companies',
        text: 'A talk for your team, a company event, a judo session for employees or their children – appearances are part of the packages.',
      },
    ],
    citiesTitle: 'Where she has competed',
    citiesHome: 'Poznań',
    citiesHomeLabel: 'club',

    packagesKicker: 'Packages',
    packagesTitle: 'What a partner gets',
    packagesLead:
      'Three levels of partnership – from local support to industry exclusivity. The scope of each package is agreed individually.',
    recommended: 'Maximum exposure',
    priceLabel: 'Price',
    priceTodo: 'TODO: price',
    packageCta: 'Ask about this package',
    judogiTitle: 'Why not a logo on the judogi?',
    judogiText:
      'Advertising on competition judogi at IJF events is strictly regulated. That is why we build your brand’s exposure on training wear, the tracksuit and kit bag, on the website and on social media.',

    taxKicker: 'Tax benefit',
    taxQualifies: 'The relief covers, among others:',

    partnersKicker: 'Partners',
    partnersTitle: 'Current partners',
    partnersEmpty: 'Your logo here',
    partnersTodo: 'TODO: partner logos (once agreements are signed)',
    tiers: {
      'partner-glowny': 'Main Partner',
      partner: 'Partner',
      'partner-lokalny': 'Local Partner',
    } as Record<string, string>,

    faqKicker: 'FAQ',
    faqTitle: 'Frequently asked questions',

    contactTitle: 'Let’s talk',
  },

  media: {
    kicker: 'Press',
    title: 'Press',
    lead: 'Bio, key facts, photos and contact – all in one place.',
    toc: 'On this page',
    mediaKit: 'Media kit (PDF)',
    mediaKitTodo: 'TODO: media kit PDF',
    bioTitle: 'Bio',
    bioVersions: {
      short: 'Short · approx. 50 words',
      medium: 'Medium · approx. 150 words',
      long: 'Full · approx. 400 words',
    },
    copy: 'Copy',
    copied: 'Copied',
    updated: 'Updated:',
    factsTitle: 'Facts',
    facts: {
      name: 'Name',
      nickname: 'Nickname',
      born: 'Date of birth',
      height: 'Height',
      club: 'Club',
      category: 'Weight class',
      categorySince: 'since',
      previous: 'Previously',
      ranking: 'IJF World Ranking',
      nationalTitles: 'Polish Senior Championships',
      medals: 'International medals',
      worlds: 'World Championships',
      coach: 'Coach',
      coachTodo: 'TODO: coach (to be confirmed)',
      profiles: 'Profiles',
    },
    photosTitle: 'Photos to download',
    photosLead: 'Please credit the photographer when publishing.',
    download: 'Download JPG',
    licenseTodo: 'TODO: confirm licence for press use',
    contactTitle: 'Press contact',
    contactNameTodo: 'TODO: contact person',
    contactEmailTodo: 'TODO: press email',
    contactPhoneTodo: 'TODO: phone (optional)',
  },

  thanks: {
    title: 'Thank you!',
    text: 'Your message has been sent. We will reply to the email address you provided.',
    back: 'Back to the homepage',
    partnership: 'See partnership packages',
  },

  notFound: {
    title: 'Page not found',
    text: 'The link may be out of date. Start from the homepage or see how you can become a partner.',
  },

  footer: {
    pages: 'Site',
    profiles: 'Profiles',
    social: 'Social media',
    contact: 'Contact',
    club: 'Club',
    privacy: 'Privacy policy',
    rights: 'All rights reserved.',
    photos: 'Photographers are credited next to each photo.',
    socialTodo: 'TODO',
  },
};

function ordinal(n: number): string {
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 13) return 'th';
  return ({ 1: 'st', 2: 'nd', 3: 'rd' } as Record<number, string>)[n % 10] ?? 'th';
}
