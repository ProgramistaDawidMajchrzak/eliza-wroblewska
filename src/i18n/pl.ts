/**
 * Teksty strony – wersja polska.
 * Dane, które się zmieniają (wyniki, ranking, starty, pakiety…), są w src/data/*.yaml.
 * Tu są stałe teksty: nagłówki, opisy sekcji, etykiety przycisków.
 * Wersja angielska (en.ts) musi mieć dokładnie te same klucze.
 */
export const pl = {
  meta: {
    siteName: 'Eliza Wróblewska',
    locale: 'pl_PL',
    home: {
      title: 'Eliza Wróblewska – judo, -78 kg, reprezentantka Polski',
      description:
        'Eliza Wróblewska: judoczka, reprezentantka Polski w kategorii -78 kg. 4× mistrzyni Polski, 25 medali międzynarodowych. Współpraca i sponsoring.',
    },
    partnership: {
      title: 'Współpraca i sponsoring – Eliza Wróblewska',
      description:
        'Zostań partnerem reprezentantki Polski w judo. Pakiety dla firm, wystąpienia, ulga sponsoringowa 150%. Poznań i Wielkopolska.',
    },
    media: {
      title: 'Dla mediów – Eliza Wróblewska',
      description:
        'Biogram w trzech długościach, najważniejsze fakty, zdjęcia i kontakt dla mediów – Eliza Wróblewska, judo -78 kg.',
    },
    privacy: {
      title: 'Polityka prywatności – Eliza Wróblewska',
      description: 'Jak przetwarzamy dane osobowe przesłane przez formularz kontaktowy.',
    },
    thanks: {
      title: 'Dziękujemy za wiadomość – Eliza Wróblewska',
      description: 'Wiadomość została wysłana.',
    },
    notFound: {
      title: 'Nie znaleziono strony – Eliza Wróblewska',
      description: 'Ta strona nie istnieje.',
    },
    ogAlt: 'Eliza Wróblewska – judo, -78 kg, reprezentantka Polski',
    jobTitle: 'Judoczka, reprezentantka Polski',
    nationality: 'Polska',
  },

  common: {
    skip: 'Przejdź do treści',
    tagline: ['Judo', '-78 kg', 'reprezentantka Polski'],
    ctaPartner: 'Zostań partnerem',
    ctaMediaKit: 'Pobierz media kit',
    menu: 'Menu',
    menuOpen: 'Otwórz menu',
    langName: 'English',
    langShort: 'EN',
    langLabel: 'English version',
    photoBy: 'Fot.',
    asOf: 'stan na',
    points: 'pkt',
    newTab: '(otwiera się w nowej karcie)',
    placeholderPhoto: 'Miejsce na zdjęcie',
    placeholderVideo: 'Miejsce na wideo',
    homeLink: 'Strona główna',
  },

  nav: {
    rise: 'Na fali',
    story: 'Historia',
    results: 'Osiągnięcia',
    events: 'Starty',
    gallery: 'Galeria',
    contact: 'Kontakt',
    partnership: 'Współpraca',
    media: 'Media',
    label: 'Nawigacja główna',
  },

  anchors: {
    rise: 'na-fali',
    story: 'historia',
    results: 'osiagniecia',
    events: 'starty',
    gallery: 'galeria',
    contact: 'kontakt',
    why: 'dlaczego',
    packages: 'pakiety',
    tax: 'ulga',
    partners: 'partnerzy',
    faq: 'faq',
    bio: 'biogram',
    facts: 'fakty',
    photos: 'zdjecia',
    pressContact: 'kontakt-dla-mediow',
  },

  result: {
    gold: 'Złoto',
    silver: 'Srebro',
    bronze: 'Brąz',
    start: 'Start',
    place: (n: number) => `${n}. miejsce`,
    placeShort: (n: number) => `${n}.`,
    category: 'Kategoria',
  },

  hero: {
    lead: 'Reprezentantka Polski z PGE Akademii Judo Poznań. W niecały rok w kategorii -78 kg: medale European Open, mistrzostwo Polski i 5. miejsce w Grand Slamie.',
    boardLabel: 'Tablica wyników',
    country: 'POL',
    rankingLabel: 'miejsce w światowym rankingu IJF',
  },

  rise: {
    kicker: 'Na fali',
    title: 'Nowa kategoria. Od razu na podium.',
    lead: 'W 2025 roku Eliza przeszła z kategorii -70 do -78 kg. W niecały rok zdobyła medale European Open, tytuł mistrzyni Polski i 5. miejsce w Grand Slamie w Budapeszcie.',
    body: 'To najlepszy moment, żeby dołączyć. Partner, który wchodzi teraz, buduje tę historię od początku – zamiast dopisywać się do niej, gdy będzie już głośna.',
    switchLabel: 'Zmiana kategorii',
    listTitle: 'Od zmiany kategorii',
    cta: 'Zobacz, co zyskuje partner',
  },

  band: {
    text: 'Szukasz sportowej historii dla swojej marki? Ta właśnie nabiera tempa.',
    cta: 'Zobacz pakiety partnerskie',
  },

  story: {
    kicker: 'Historia i wartości',
    title: 'Wróbelek z Poznania',
    paragraphs: [
      'Eliza reprezentuje PGE Akademię Judo Poznań. Pseudonim „Wróbelek” brzmi niepozornie – zwłaszcza gdy na macie staje zawodniczka mierząca 182 cm.',
      'Jako kadetka walczyła w kategorii -63 kg, potem przez lata w -70 kg. W tej wadze trzy razy zostawała mistrzynią Polski seniorek i zdobywała medale na zawodach międzynarodowych. W 2025 roku przeszła do -78 kg.',
      'Po drodze były kontuzje i powroty do rywalizacji. W sporcie wyczynowym to część pracy, o której rzadko się mówi – a która uczy najwięcej.',
    ],
    valuesTitle: 'Judo to szkoła szacunku i dyscypliny',
    values: [
      {
        title: 'Szacunek',
        text: 'Każda walka zaczyna się i kończy ukłonem. Rywalka to partnerka, dzięki której można się rozwijać.',
      },
      {
        title: 'Dyscyplina',
        text: 'Waga, plan treningowy, regeneracja. Zmiana kategorii wagowej wymaga konsekwencji każdego dnia.',
      },
      {
        title: 'Powroty',
        text: 'Kontuzje są częścią sportu wyczynowego. Liczy się to, co dzieje się po nich.',
      },
    ],
    videoLabel: 'Wideo: Eliza w Poznaniu',
  },

  results: {
    kicker: 'Osiągnięcia',
    title: 'Najważniejsze wyniki',
    lead: '4× mistrzyni Polski seniorek i 25 medali międzynarodowych. Poniżej sześć wybranych wyników, a pod nimi pełna lista.',
    timeline: 'Pełna oś czasu – wszystkie wyniki',
    profiles: 'Oficjalne profile:',
  },

  events: {
    kicker: 'Najbliższe starty',
    title: 'Gdzie zobaczyć Elizę na macie',
    empty: 'Kalendarz kolejnych startów pojawi się wkrótce.',
    rankingTitle: 'Ranking IJF',
    rankingCta: 'Profil w IJF',
  },

  gallery: {
    kicker: 'Galeria',
    title: 'Na macie',
    lead: 'Zdjęcia z zawodów. Autorów podajemy przy każdym zdjęciu.',
  },

  contact: {
    kicker: 'Kontakt',
    title: 'Porozmawiajmy o współpracy',
    lead: 'Napisz kilka słów o swojej firmie i o tym, czego szukasz. Przygotujemy propozycję dopasowaną do Twojej marki.',
    direct: 'Wolisz e-mail?',
    emailTodo: 'TODO: e-mail do współpracy',
    press: 'Piszesz o sporcie? Biogram, zdjęcia i kontakt dla mediów znajdziesz na stronie',
    pressLink: 'Media',
  },

  form: {
    name: 'Imię i nazwisko',
    company: 'Firma',
    email: 'E-mail',
    type: 'Rodzaj współpracy',
    typePlaceholder: 'Wybierz…',
    typeOptions: [
      { value: 'Partner Główny', label: 'Partner Główny', pkg: 'partner-glowny' },
      { value: 'Partner', label: 'Partner', pkg: 'partner' },
      { value: 'Partner Lokalny', label: 'Partner Lokalny', pkg: 'partner-lokalny' },
      { value: 'Wystąpienie lub event firmowy', label: 'Wystąpienie lub event firmowy', pkg: '' },
      { value: 'Media', label: 'Media', pkg: '' },
      { value: 'Inne', label: 'Inne', pkg: '' },
    ],
    message: 'Wiadomość',
    messagePlaceholder: 'Np. branża, budżet, termin, pomysł na współpracę',
    consentBefore: 'Wyrażam zgodę na przetwarzanie moich danych w celu odpowiedzi na wiadomość. Szczegóły w',
    consentLink: 'polityce prywatności',
    required: 'wymagane',
    optional: 'opcjonalnie',
    submit: 'Wyślij wiadomość',
    honeypot: 'Zostaw to pole puste',
    subject: 'Wiadomość ze strony Elizy Wróblewskiej',
    todoEndpoint:
      'TODO: formularz nie jest jeszcze podłączony – uzupełnij „form.endpoint” w src/data/site.yaml (instrukcja w README).',
  },

  partnership: {
    kicker: 'Współpraca',
    title: 'Wejdź na matę z reprezentantką Polski',
    lead: 'Partnerstwo z Elizą Wróblewską łączy międzynarodowe starty w cyklu IJF World Tour, lokalne korzenie w Wielkopolsce i wartości, które pasują do każdej firmy: szacunek, dyscyplinę i konsekwencję.',
    ctaTalk: 'Porozmawiajmy',
    ctaPackages: 'Zobacz pakiety',

    whyJudoKicker: 'Dlaczego judo',
    whyJudoTitle: 'Sport, który uczy postawy',
    whyJudo: [
      {
        title: 'Szacunek wpisany w zasady',
        text: 'Każda walka zaczyna się i kończy ukłonem. Szacunek do rywala to w judo reguła, a nie gest.',
      },
      {
        title: 'Sport dla każdego',
        text: 'Judo trenują dzieci, dorośli i całe rodziny. To naturalny pomysł na wydarzenie dla pracowników lub ich dzieci.',
      },
      {
        title: 'Międzynarodowa scena',
        text: 'Zawody cyklu IJF World Tour odbywają się na kilku kontynentach i śledzą je kibice z całego świata.',
      },
    ],

    whyElizaKicker: 'Dlaczego Eliza',
    whyElizaTitle: 'Dlaczego właśnie Eliza – i dlaczego teraz',
    whyEliza: [
      {
        title: 'Jest na fali',
        text: 'W niecały rok w kategorii -78 kg: medale European Open, mistrzostwo Polski, 5. miejsce w Grand Slamie w Budapeszcie i 7. w Abu Zabi.',
      },
      {
        title: 'Startuje w świecie',
        text: 'IJF World Tour i mistrzostwa świata. Twoja marka podróżuje razem z nią – na odzieży, w relacjach i w social mediach.',
      },
      {
        title: 'Jest stąd',
        text: 'Zawodniczka poznańskiego klubu. Partnerstwo to jasny sygnał dla klientów i pracowników z Wielkopolski: wspieramy sport z regionu.',
      },
      {
        title: 'Działa z firmami',
        text: 'Wykład dla zespołu, event firmowy, trening judo dla pracowników lub ich dzieci – wystąpienia są częścią pakietów.',
      },
    ],
    citiesTitle: 'Gdzie startowała',
    citiesHome: 'Poznań',
    citiesHomeLabel: 'klub',

    packagesKicker: 'Pakiety',
    packagesTitle: 'Co dostaje partner',
    packagesLead:
      'Trzy poziomy współpracy – od lokalnego wsparcia po wyłączność branżową. Zakres każdego pakietu ustalamy indywidualnie.',
    recommended: 'Największa ekspozycja',
    priceLabel: 'Cena',
    priceTodo: 'TODO: cena',
    packageCta: 'Zapytaj o ten pakiet',
    judogiTitle: 'Dlaczego nie logo na judodze?',
    judogiText:
      'Na zawodach IJF reklama na stroju zawodniczym jest ściśle regulowana. Dlatego ekspozycję marki budujemy na odzieży treningowej, dresie i torbie, na stronie i w social mediach.',

    taxKicker: 'Korzyść podatkowa',
    taxQualifies: 'Ulga obejmuje m.in.:',

    partnersKicker: 'Partnerzy',
    partnersTitle: 'Obecni partnerzy',
    partnersEmpty: 'Miejsce na Twoje logo',
    partnersTodo: 'TODO: logotypy partnerów (po podpisaniu umów)',
    tiers: {
      'partner-glowny': 'Partner Główny',
      partner: 'Partner',
      'partner-lokalny': 'Partner Lokalny',
    } as Record<string, string>,

    faqKicker: 'FAQ',
    faqTitle: 'Najczęstsze pytania',

    contactTitle: 'Porozmawiajmy',
  },

  media: {
    kicker: 'Media',
    title: 'Dla mediów',
    lead: 'Biogram, najważniejsze fakty, zdjęcia i kontakt w jednym miejscu.',
    toc: 'Na tej stronie',
    mediaKit: 'Media kit (PDF)',
    mediaKitTodo: 'TODO: PDF media kitu',
    bioTitle: 'Biogram',
    bioVersions: {
      short: 'Krótki · ok. 50 słów',
      medium: 'Średni · ok. 150 słów',
      long: 'Pełny · ok. 400 słów',
    },
    copy: 'Kopiuj',
    copied: 'Skopiowano',
    updated: 'Aktualizacja:',
    factsTitle: 'Fakty',
    facts: {
      name: 'Imię i nazwisko',
      nickname: 'Pseudonim',
      born: 'Data urodzenia',
      height: 'Wzrost',
      club: 'Klub',
      category: 'Kategoria',
      categorySince: 'od',
      previous: 'Wcześniej',
      ranking: 'Ranking IJF',
      nationalTitles: 'Mistrzostwa Polski seniorek',
      medals: 'Medale międzynarodowe',
      worlds: 'Starty w mistrzostwach świata',
      coach: 'Trener',
      coachTodo: 'TODO: trener (do potwierdzenia)',
      profiles: 'Profile',
    },
    photosTitle: 'Zdjęcia do pobrania',
    photosLead: 'Przy publikacji podaj autora zdjęcia.',
    download: 'Pobierz JPG',
    licenseTodo: 'TODO: potwierdzić licencję na udostępnianie mediom',
    contactTitle: 'Kontakt dla mediów',
    contactNameTodo: 'TODO: osoba do kontaktu',
    contactEmailTodo: 'TODO: e-mail dla mediów',
    contactPhoneTodo: 'TODO: telefon (opcjonalnie)',
  },

  thanks: {
    title: 'Dziękujemy!',
    text: 'Wiadomość została wysłana. Odpowiemy na podany adres e-mail.',
    back: 'Wróć na stronę główną',
    partnership: 'Zobacz pakiety partnerskie',
  },

  notFound: {
    title: 'Nie ma takiej strony',
    text: 'Link może być nieaktualny. Zacznij od strony głównej albo sprawdź, jak możesz zostać partnerem.',
  },

  footer: {
    pages: 'Strona',
    profiles: 'Profile',
    social: 'Social media',
    contact: 'Kontakt',
    club: 'Klub',
    privacy: 'Polityka prywatności',
    rights: 'Wszelkie prawa zastrzeżone.',
    photos: 'Autorzy zdjęć podani są przy zdjęciach.',
    socialTodo: 'TODO',
  },
};
