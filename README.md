# Eliza Wróblewska – strona internetowa

Strona judoczki Elizy Wróblewskiej (-78 kg, reprezentantka Polski).
Główny cel: pozyskanie sponsorów i partnerów. Cel dodatkowy: wizytówka dla mediów i kibiców.

- **Technologia:** Astro 7 + Tailwind CSS 4, strona w pełni statyczna (bez serwera i bazy danych).
- **Języki:** polski (`/`) i angielski (`/en/`).
- **Treści do aktualizacji:** pliki w `src/data/`. Nie trzeba dotykać kodu.

---

## Spis treści

1. [Uruchomienie na komputerze](#1-uruchomienie-na-komputerze)
2. [Mapa strony](#2-mapa-strony)
3. [Jak aktualizować treści](#3-jak-aktualizować-treści)
4. [Formularz kontaktowy](#4-formularz-kontaktowy)
5. [Wdrożenie (Vercel / Netlify)](#5-wdrożenie-vercel--netlify)
6. [Lista TODO](#6-lista-todo)
7. [Zasady, których pilnujemy](#7-zasady-których-pilnujemy)
8. [Struktura projektu](#8-struktura-projektu)

---

## 1. Uruchomienie na komputerze

Wymagany **Node.js 22.12 lub nowszy** (sprawdzisz komendą `node -v`).

```bash
npm install        # tylko za pierwszym razem
npm run dev        # podgląd na żywo: http://localhost:4321
```

Pozostałe komendy:

| Komenda           | Co robi                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| `npm run build`   | buduje gotową stronę do folderu `dist/`                                                          |
| `npm run preview` | pokazuje zbudowaną stronę (`dist/`) lokalnie                                                    |
| `npm run check`   | sprawdza kod i typy                                                                              |
| `npm run todo`    | wypisuje wszystkie znaczniki TODO z danych i tekstów                                             |

Po zapisaniu zmian w pliku z `src/data/` podgląd (`npm run dev`) odświeża się sam.

---

## 2. Mapa strony

| PL                       | EN                    | Zawartość                                                                                  |
| ------------------------ | --------------------- | ------------------------------------------------------------------------------------------ |
| `/`                      | `/en/`                | hero, Na fali, Historia i wartości, Osiągnięcia, Najbliższe starty, Galeria, Kontakt       |
| `/wspolpraca/`           | `/en/partnership/`    | dlaczego judo i Eliza, pakiety, ulga podatkowa, partnerzy, FAQ, formularz                  |
| `/media/`                | `/en/media/`          | biogram 50/150/400 słów, fakty, zdjęcia do pobrania, kontakt dla mediów                    |
| `/polityka-prywatnosci/` | `/en/privacy-policy/` | polityka prywatności (szablon RODO)                                                        |
| `/dziekujemy/`           | `/en/thank-you/`      | strona po wysłaniu formularza (niewidoczna dla Google)                                     |

Automatycznie generowane są też: `sitemap-index.xml`, `robots.txt`, tagi hreflang, Open Graph i dane strukturalne schema.org (`Person`).

---

## 3. Jak aktualizować treści

Wszystko, co się zmienia, leży w **`src/data/`** w plikach `.yaml`. Każdy plik ma na górze komentarz z instrukcją.

**Zasady edycji YAML (najczęstsze błędy):**

- wcięcia robimy **spacjami**, nie tabulatorem; trzymaj takie same wcięcia jak w sąsiednich liniach;
- tekst z dwukropkiem, cudzysłowem albo `#` wpisuj w cudzysłowie: `"Grand Slam: finał"`;
- daty zawsze w formacie `"RRRR-MM-DD"`, np. `"2026-11-13"`.

Jeśli w pliku jest błąd, build się zatrzyma i pokaże komunikat po polsku z nazwą pliku i miejscem błędu. Strona się nie zepsuje po cichu.

### 3.1. Nowy wynik → `src/data/results.yaml`

Skopiuj blok i wklej go **na górze** listy:

```yaml
- date: "2026-11-13"
  name: { pl: "Grand Prix Zagrzeb", en: "Zagreb Grand Prix" }
  city: { pl: "Zagrzeb", en: "Zagreb" }
  result: bronze          # gold | silver | bronze | 5 (miejsce) | start
  rise: true              # pokaż w sekcji „Na fali”
```

- `featured: true` umieszcza wynik w 6 wyróżnionych kartach „Osiągnięcia”. Gdy dodajesz nowy wyróżniony wynik, usuń `featured` z jednego starego, żeby zostało ich 6.
- `international: false` oznacza zawody krajowe (np. mistrzostwa Polski).
- `city` dopisuje miasto do tablicy „Gdzie startowała” na stronie współpracy.

Po nowym medalu sprawdź też liczby w hero (punkt 3.2) i biogramy (punkt 3.6).

### 3.2. Ranking i liczby w hero → `src/data/stats.yaml`

```yaml
ranking:
  position: 38            # miejsce
  points: 1120            # punkty
  asOf: "2026-12-01"      # DATA STANU – zmieniaj zawsze razem z miejscem!
```

Ranking pokazuje się w hero, w sekcji „Najbliższe starty” i na `/media`. Dwie pozostałe liczby w hero (`4×`, `25`) zmieniasz w tym samym pliku, w sekcji `hero`.

### 3.3. Kalendarz startów → `src/data/events.yaml`

```yaml
upcoming:
  - date: "2027-02-06"
    name: { pl: "Grand Slam Paryż", en: "Paris Grand Slam" }
    city: { pl: "Paryż", en: "Paris" }
    country: { pl: "Francja", en: "France" }
    level: { pl: "IJF World Tour · Grand Slam", en: "IJF World Tour · Grand Slam" }
```

Zawody, które już się odbyły, **znikają same** przy kolejnym budowaniu strony. Na Vercelu i Netlify strona buduje się przy każdej zmianie w repozytorium. Jeśli przez dłuższy czas nic nie zmieniasz, uruchom ponowne wdrożenie ręcznie (przycisk „Redeploy”), żeby minione starty zniknęły. Gdy kalendarz jest kompletny, usuń pole `todo`.

### 3.4. Pakiety i ceny → `src/data/packages.yaml`

- **Cena:** wpisz ją w `price`, np. `price: "od 30 000 zł netto / sezon"`. Puste pole pokazuje na stronie „TODO: cena”.
- **Korzyści:** to lista `benefits`. Fragment `(TODO: …)` jest na stronie podświetlany, więc usuń go, gdy znasz brakującą wartość.
- **Uwaga:** nie obiecuj logo na judodze (patrz [Zasady](#7-zasady-których-pilnujemy)).

### 3.5. Partnerzy → `src/data/partners.yaml`

1. Wrzuć logo (najlepiej SVG albo PNG z przezroczystym tłem) do folderu `src/assets/partners/`.
2. Dopisz partnera:

```yaml
partners:
  - name: "Nazwa firmy"
    tier: partner-glowny     # partner-glowny | partner | partner-lokalny
    logo: "nazwa-firmy.svg"
    url: "https://firma.pl"
```

Dopóki lista jest pusta, na stronie widać puste miejsca „Miejsce na Twoje logo”.

### 3.6. Biogramy dla mediów → `src/data/media.yaml`

Są trzy wersje (ok. 50, 150 i 400 słów), każda po polsku i angielsku. Akapity oddziela pusta linia. Po zmianie zaktualizuj datę `updated`. Liczby w biogramach (medale, ranking) **nie** aktualizują się same.

Fakty w punktach na `/media` (wzrost, klub, ranking, tytuły mistrzyni Polski, starty w MŚ) strona składa sama z `profile.yaml`, `stats.yaml` i `results.yaml`.

### 3.7. Zdjęcia i wideo → `src/data/photos.yaml`

- **Pliki:** zdjęcia trzymamy w `src/assets/photos/`. Strona sama robi z nich lekkie wersje AVIF/WebP w kilku rozmiarach.
- **`library`:** każde zdjęcie ma tu krótką nazwę, plik, opis alternatywny PL/EN (`alt`) i autora (`credit`).
- **`slots`:** wskazuje, które zdjęcie trafia do hero, „Na fali”, „Wartości” i na górę strony współpracy.
- **`gallery` i `press`:** to galeria na stronie głównej i zdjęcia do pobrania na `/media`.
- **`position`:** punkt, który zostaje w kadrze przy przycinaniu (np. `"36% 30%"` = twarz trochę na lewo i w górnej części).

**Podmiana zdjęcia w hero:** wrzuć plik do `src/assets/photos/`, dodaj wpis w `library` i w `slots → hero` wpisz jego nazwę.

**Wideo:** plik leży w `public/video/`, a ścieżkę wpisujesz w `video → file`.

### 3.8. Ulga podatkowa, FAQ, ustawienia

| Plik                       | Co zawiera                                                                       |
| -------------------------- | -------------------------------------------------------------------------------- |
| `src/data/tax-benefit.yaml`| tekst o uldze sponsoringowej (150%), podstawa prawna, zastrzeżenie               |
| `src/data/faq.yaml`        | pytania i odpowiedzi na `/wspolpraca`                                             |
| `src/data/site.yaml`       | domena, e-maile, formularz, PDF media kitu, klub, social media                    |
| `src/data/profile.yaml`    | fakty o Elizie (data ur., wzrost, kategoria, trener, profile IJF/JudoInside)      |

### 3.9. Stałe teksty strony (nagłówki, opisy, przyciski)

Są w `src/i18n/pl.ts` (polski) i `src/i18n/en.ts` (angielski). Zmieniaj tylko tekst w apostrofach `'…'`, bez ruszania nazw pól. Obie wersje muszą mieć te same pola (`npm run check` to sprawdzi).

### 3.10. Media kit PDF

Wrzuć plik do `public/media-kit/` i w `site.yaml` wpisz `mediaKitPdf: "/media-kit/nazwa-pliku.pdf"`. Od tej chwili przycisk „Pobierz media kit” pobiera PDF. Dopóki pole jest puste, przycisk prowadzi na `/media`.

### 3.11. Grafika do podglądu w social mediach (Open Graph)

Pliki `public/og/og-pl.jpg` i `public/og/og-en.jpg` (1200×630 px) to obrazki, które pojawiają się przy udostępnianiu linku. Możesz je podmienić na dowolną grafikę w tym rozmiarze, zachowując nazwy plików.

---

## 4. Formularz kontaktowy

Formularz wysyła zwykły POST (działa bez JavaScriptu). Dopóki w `src/data/site.yaml` nie ma adresu `form.endpoint`, przycisk „Wyślij” jest nieaktywny, a obok widać TODO.

**Web3Forms** (darmowy, bez konta – klucz przychodzi e-mailem):

```yaml
form:
  endpoint: "https://api.web3forms.com/submit"
  redirectField: "redirect"
  honeypotField: "botcheck"
  hidden:
    access_key: "TWÓJ-KLUCZ"
```

**Formspree:**

```yaml
form:
  endpoint: "https://formspree.io/f/xxxxxxx"
  redirectField: "_next"        # przekierowanie działa w płatnym planie; w darmowym Formspree pokaże własną stronę
  honeypotField: "_gotcha"
```

**Netlify Forms:** to opcja tylko przy hostingu na Netlify i wymaga drobnej zmiany w `src/components/ContactForm.astro` (atrybut `data-netlify="true"` i `action="/dziekujemy/"`).

Po wybraniu usługi uzupełnij jej nazwę w polityce prywatności (sekcja „Odbiorcy danych”).

---

## 5. Wdrożenie (Vercel / Netlify)

Strona jest statyczna i nie potrzebuje adaptera.

1. Wypchnij repozytorium na GitHub / GitLab.
2. **Vercel:** „Add New → Project”, wybierz repozytorium; framework Astro wykryje się sam.
   **Netlify:** „Add new site → Import an existing project”. Ustawienia: build command `npm run build`, publish directory `dist`.
3. Ustaw wersję Node na **22 lub nowszą** (jest też wpisana w `package.json → engines`).
4. Podepnij domenę i **wpisz ją w `src/data/site.yaml` → `url`**, bo od niej zależą sitemap, canonical i Open Graph.

---

## 6. Lista TODO

`npm run todo` wypisuje TODO z plików. Poniżej pełna lista z opisem. Na stronie każde TODO widać jako żółte, przerywane pole.

### Przed publikacją (blokujące)

- [ ] **Domena:** `site.yaml → url` (teraz `https://example.com`).
- [ ] **Formularz:** `site.yaml → form.endpoint` (patrz punkt 4).
- [ ] **E-mail do współpracy:** `site.yaml → contact.email`.
- [ ] **Polityka prywatności:**
  - dane administratora;
  - dostawcy (formularz, hosting, poczta);
  - transfer poza EOG;
  - okres przechowywania;
  - data aktualizacji;
  - **weryfikacja przez prawnika** (`src/components/pages/PrivacyPage.astro`).
- [ ] **Licencje na zdjęcia:** potwierdzić prawo do użycia na stronie sponsorskiej i udostępniania mediom. Na zdjęciach są znaki wodne IJF, w jednym przypadku znak wodny innego organizatora, oraz podpis fotografa (Philippe Raboin-Coulon). Po potwierdzeniu ustaw `licenseConfirmed: true` w `photos.yaml`.
- [ ] **Autorzy zdjęć bez podpisu:** `eliza-portret-niebieska-judoga.jpg` (hero) i `eliza-ippon.jpg` (strona współpracy) – pole `credit` w `photos.yaml`.
- [ ] **Wideo z Poznania:** autor nagrania oraz prawa do ścieżki dźwiękowej (jeśli to muzyka). Wideo jest domyślnie wyciszone.
- [ ] **Akceptacja treści przez Elizę:** pakiety, FAQ, biogramy, teksty „Historia i wartości”, „Na fali”, „Dlaczego Eliza”.

### Treści do uzupełnienia

- [ ] **Ceny pakietów:** `packages.yaml → price` (3×).
- [ ] **Liczba postów w social mediach** w pakiecie Partner Główny: `packages.yaml`.
- [ ] **Trener:** `profile.yaml → coach`.
- [ ] **Kalendarz startów na sezon 2027:** `events.yaml`, potem usuń pole `todo`.
- [ ] **FAQ:**
  - minimalny okres współpracy;
  - zakres raportu po sezonie;
  - dostępne formy umowy.
- [ ] **Ulga podatkowa:** potwierdzić z klubem i księgowym formę umowy i niezarobkowy status klubu (`tax-benefit.yaml`). Potem usuń pole `todo`.
- [ ] **Kontakt dla mediów:** osoba, e-mail, telefon (`site.yaml → contact`).
- [ ] **Social media:** adresy Instagram / Facebook / LinkedIn (`site.yaml → social`). Trafią też do danych strukturalnych.
- [ ] **Strona klubu:** `site.yaml → club.url`.
- [ ] **PDF media kitu:** `site.yaml → mediaKitPdf`.
- [ ] **Logotypy partnerów** po podpisaniu umów (`partners.yaml`).

### Brakujące zdjęcia i materiały (placeholdery na stronie)

- [ ] Zdjęcie z treningu w PGE Akademii Judo Poznań (poziome 3:2, min. 2000 px) – galeria.
- [ ] Wideo ze skrótem najlepszych akcji (YouTube lub MP4) – galeria. Przy osadzeniu YouTube trzeba zaktualizować politykę prywatności (cookies).
- [ ] Portret w stroju cywilnym do materiałów prasowych i partnerskich (pionowe 4:5, min. 3000 px) – `/media`.
- [ ] (opcjonalnie) Grafika Open Graph ze zdjęciem z sesji – `public/og/`.

---

## 7. Zasady, których pilnujemy

- **Bez zmyślania.**
  - Liczby, wyniki i daty pochodzą wyłącznie z potwierdzonych faktów.
  - Brakująca informacja to widoczne TODO, a nie wymyślona wartość.
  - Nie publikujemy cytatów, opinii sponsorów ani statystyk social mediów, dopóki nie są prawdziwe.
- **Bez symboliki olimpijskiej.**
  - Na stronie nie ma kół olimpijskich, słowa „olimpijski”, haseł typu „Droga do…”, „LA28” ani „Team PL”.
  - Szczególnie nie wolno ich używać przy logotypach partnerów: Reguła 40 i wytyczne PKOl.
- **Bez obietnicy logo na judodze.** Na zawodach IJF reklama na stroju zawodniczym jest ściśle regulowana.
- **Bez cudzych logotypów** w elementach graficznych strony.
  - Logo partnera pojawia się dopiero po podpisaniu umowy.
  - Logotypy widoczne na zdjęciach z zawodów (np. na judogach) to część reportażu. Zdjęcia z wyraźnymi logotypami innych firm nie stoją przy sekcji „Partnerzy”.
- **Bez zdjęć z internetu.** Używamy tylko zdjęć dostarczonych przez Elizę lub z potwierdzoną licencją.

---

## 8. Struktura projektu

```
public/
  fonts/        Archivo + Inter (Google Fonts, licencja OFL), przycięte do znaków PL – szybkie ładowanie
  og/           grafiki do podglądu linków (1200×630)
  video/        wideo z Poznania
  favicon.*, apple-touch-icon.png, icon-*.png, site.webmanifest
scripts/
  todo.mjs      komenda `npm run todo`
src/
  assets/photos/    zdjęcia (optymalizowane automatycznie)
  assets/partners/  logotypy partnerów (utwórz folder przy pierwszym partnerze)
  data/             ★ wszystkie treści do aktualizacji (YAML)
  i18n/             stałe teksty PL/EN + adresy podstron
  lib/              wczytywanie i walidacja danych, formatowanie dat, obsługa zdjęć
  components/       sekcje strony (home/, partnership/, pages/) i elementy wspólne
  layouts/Base.astro  <head>: SEO, hreflang, Open Graph, schema.org, nagłówek i stopka
  pages/            pliki stron – cienkie, korzystają z komponentów w components/pages/
  styles/global.css kolory, fonty, motyw „tablicy wyników”
```

**Kierunek wizualny:**

- **Paleta:** biel judogi (`#F7F5F0`), głęboki granat (`#0B1F3A`) i czerwień z flagi (`#C8102E`). Kontrasty spełniają WCAG AA.
- **Fonty:** nagłówki w Archivo w wersji zwężonej, tekst w Inter.
- **Motyw przewodni:** tablica wyników jak na zawodach IJF. Granatowe pola, duże cyfry i czerwony pasek „czasu walki”.

**Wydajność i prywatność:**

- JavaScript ogranicza się do kilku linii: zamykanie menu mobilnego, przyciski „Kopiuj” przy biogramach i wybór pakietu w formularzu.
- Rozwijane sekcje działają na natywnym `<details>`.
- Strona nie używa ciasteczek ani analityki.
