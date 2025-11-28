# Projekt: JobSpot

## Opis

**"JobSpot"** to aplikacja internetowa typu **multi-page**, obecnie w fazie realizacji, mająca na celu stworzenie nowoczesnej **platformy do wyszukiwania ofert pracy i publikowania ogłoszeń przez pracodawców**.  
Celem projektu jest dostarczenie estetycznego, intuicyjnego i funkcjonalnego narzędzia dla użytkowników poszukujących zatrudnienia oraz dla firm pragnących znaleźć odpowiednich kandydatów.

Aplikacja będzie zawierać następujące sekcje:

- **Strona główna** – wprowadzenie do platformy i szybki dostęp do wyszukiwania ofert pracy
- **Oferty pracy** – przegląd dostępnych ogłoszeń z filtrami i kategoriami
- **Pracodawcy** – lista firm współpracujących wraz z ich profilami
- **Blog** _(w przygotowaniu)_ – sekcja artykułów związanych z rynkiem pracy, poradami i trendami zawodowymi
- **Logowanie / Rejestracja** – formularze autentykacji użytkowników
- **Panel pracodawcy** _(w przygotowaniu)_ – miejsce zarządzania ofertami pracy i aplikacjami
- **Panel użytkownika** _(w przygotowaniu)_ – historia aplikacji i personalizacja profilu

## Aktualny stan projektu

Projekt **JobSpot** znajduje się w fazie **deweloperskiej**. Obecnie opracowywane są główne widoki interfejsu użytkownika oraz konfiguracja routingu aplikacji.  
W kolejnych etapach planowane jest wdrożenie logiki backendowej, integracji z bazą danych oraz systemu autentykacji.

## Funkcjonalności

- **Struktura wielostronicowa**: Home, Kariera (oferty pracy), Blog, O Nas, Logowanie/Rejestracja
- **Responsywność**: Layout dostosowany do urządzeń mobilnych i desktopowych
- **Nawigacja**: Wykorzystanie `React Router` do obsługi ścieżek i podstron
- **Filtry ofert pracy**: Możliwość zawężania wyników wg stanowiska, lokalizacji, trybu pracy itp.
- **Panel pracodawcy i użytkownika**: (planowane) zarządzanie kontem i ofertami
- **Stylizacja**: Projekt utrzymany w nowoczesnej, czytelnej stylistyce z użyciem jasnych kolorów, prostych ikon i wyraźnej typografii

## Instrukcje uruchomienia projektu (dla dewelopera)

1. **Instalacja zależności**:

   Aby zainstalować wszystkie wymagane zależności, uruchom polecenie:

   ```bash
   npm install

   ```

2. **Uruchomienie projektu lokalnie**:

   Aby uruchomić stronę w trybie deweloperskim, użyj polecenia:

   ```bash
   npm start

   ```

   Strona bazowo będzie dostępna pod adresem http://localhost:5173.

3. **Generowanie wersji produkcyjnej**:

   AAby przygotować wersję produkcyjną strony, uruchom:

   ```bash
   npm run build

   ```

   Pliki produkcyjne zostaną zapisane w folderze dist/, gotowe do wdrożenia na serwerze.

## Struktura katalogów

<!-- prettier-ignore-start -->
```plaintext
├── .gitignore
├── README.md
├── apps
│   ├── backend
│   │   ├── eslint.config.mjs
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   ├── prisma
│   │   │   ├── migrations
│   │   │   │   ├── 20251122142514_init
│   │   │   │   │   └── migration.sql
│   │   │   │   └── migration_lock.toml
│   │   │   └── schema.prisma
│   │   ├── prisma.config.ts
│   │   ├── src
│   │   │   ├── app
│   │   │   │   └── api
│   │   │   │       ├── login
│   │   │   │       │   └── route.ts
│   │   │   │       ├── logout
│   │   │   │       │   └── route.ts
│   │   │   │       ├── me
│   │   │   │       │   └── route.ts
│   │   │   │       ├── register
│   │   │   │       │   └── route.ts
│   │   │   │       └── user
│   │   │   │           └── route.ts
│   │   │   ├── lib
│   │   │   │   └── prisma.ts
│   │   │   ├── middleware.ts
│   │   │   ├── services
│   │   │   │   └── user.service.ts
│   │   │   └── utils
│   │   │       ├── auth.ts
│   │   │       ├── cookie.util.ts
│   │   │       └── validation.ts
│   │   └── tsconfig.json
│   └── frontend
│       ├── eslint.config.js
│       ├── index.html
│       ├── package-lock.json
│       ├── package.json
│       ├── src
│       │   ├── App.tsx
│       │   ├── api
│       │   │   └── api.ts
│       │   ├── assets
│       │   │   ├── icons
│       │   │   │   ├── email.svg
│       │   │   │   ├── facebook.svg
│       │   │   │   ├── gps.svg
│       │   │   │   ├── index.ts
│       │   │   │   ├── instagram.svg
│       │   │   │   ├── linkedin.svg
│       │   │   │   ├── localisation.png
│       │   │   │   ├── phone.svg
│       │   │   │   ├── search.svg
│       │   │   │   ├── time-job.png
│       │   │   │   └── youtube.svg
│       │   │   ├── images
│       │   │   │   ├── apostrophe.png
│       │   │   │   ├── arrow-off.png
│       │   │   │   ├── arrow-on.png
│       │   │   │   ├── auth-backdrop.png
│       │   │   │   ├── cat-electrician.png
│       │   │   │   ├── cat-engineering.png
│       │   │   │   ├── cat-finance.png
│       │   │   │   ├── cat-marketing.png
│       │   │   │   ├── cat-media.png
│       │   │   │   ├── cat-product.png
│       │   │   │   ├── cat-projects.png
│       │   │   │   ├── cat-services.png
│       │   │   │   ├── ellipse.png
│       │   │   │   ├── es-account.png
│       │   │   │   ├── es-apply.png
│       │   │   │   ├── es-cv.png
│       │   │   │   ├── in-progress.png
│       │   │   │   ├── index.ts
│       │   │   │   ├── learning-pana.png
│       │   │   │   ├── multiple-choice.png
│       │   │   │   └── not-found.png
│       │   │   └── mockDatas
│       │   │       ├── mockCategories.ts
│       │   │       ├── mockOffers.json
│       │   │       └── mockOpinions.json
│       │   ├── components
│       │   │   ├── auth
│       │   │   │   ├── AuthLoaderWrapper.tsx
│       │   │   │   ├── ProtectedRoute.tsx
│       │   │   │   ├── PublicOnlyRoute.tsx
│       │   │   │   └── index.ts
│       │   │   ├── common
│       │   │   │   ├── button
│       │   │   │   │   ├── Button.tsx
│       │   │   │   │   └── button.css.ts
│       │   │   │   ├── card
│       │   │   │   │   ├── Card.tsx
│       │   │   │   │   └── card.css.ts
│       │   │   │   ├── cardWrapper
│       │   │   │   │   ├── CardWrapper.tsx
│       │   │   │   │   └── cardWrapper.css.ts
│       │   │   │   ├── headline
│       │   │   │   │   ├── Headline.tsx
│       │   │   │   │   └── headline.css.ts
│       │   │   │   ├── index.ts
│       │   │   │   ├── section
│       │   │   │   │   ├── Section.tsx
│       │   │   │   │   └── section.css.ts
│       │   │   │   └── track
│       │   │   │       ├── Track.tsx
│       │   │   │       └── track.css.ts
│       │   │   ├── features
│       │   │   │   ├── account
│       │   │   │   │   ├── authWrapper
│       │   │   │   │   │   ├── AuthWrapper.tsx
│       │   │   │   │   │   └── authWrapper.css.ts
│       │   │   │   │   ├── components
│       │   │   │   │   │   ├── checkbox
│       │   │   │   │   │   │   ├── Checkbox.tsx
│       │   │   │   │   │   │   └── checkbox.css.ts
│       │   │   │   │   │   ├── index.ts
│       │   │   │   │   │   └── input
│       │   │   │   │   │       ├── Input.tsx
│       │   │   │   │   │       └── input.css.ts
│       │   │   │   │   └── index.ts
│       │   │   │   ├── gallery
│       │   │   │   │   ├── Gallery.tsx
│       │   │   │   │   ├── components
│       │   │   │   │   │   ├── galleryCard
│       │   │   │   │   │   │   ├── GalleryCard.tsx
│       │   │   │   │   │   │   └── galleryCard.css.ts
│       │   │   │   │   │   ├── galleryControls
│       │   │   │   │   │   │   ├── GalleryControls.tsx
│       │   │   │   │   │   │   └── galleryControls.css.ts
│       │   │   │   │   │   ├── galleryFilters
│       │   │   │   │   │   │   ├── GalleryFilters.tsx
│       │   │   │   │   │   │   └── galleryFilters.css.ts
│       │   │   │   │   │   └── index.ts
│       │   │   │   │   ├── gallery.css.ts
│       │   │   │   │   └── index.ts
│       │   │   │   ├── index.ts
│       │   │   │   └── opinionsSlider
│       │   │   │       ├── OpinionsSlider.tsx
│       │   │   │       ├── components
│       │   │   │       │   ├── index.ts
│       │   │   │       │   ├── opinionCard
│       │   │   │       │   │   ├── OpinionCard.tsx
│       │   │   │       │   │   └── opinionCard.css.ts
│       │   │   │       │   └── sliderProgress
│       │   │   │       │       ├── SliderProgress.tsx
│       │   │   │       │       └── sliderProgress.css.ts
│       │   │   │       ├── hooks
│       │   │   │       │   └── useAutoScroll.ts
│       │   │   │       ├── index.ts
│       │   │   │       └── opinionSlider.css.ts
│       │   │   └── layout
│       │   │       ├── Layout.tsx
│       │   │       ├── authNavigation
│       │   │       │   ├── AuthNavigation.tsx
│       │   │       │   └── authNavigation.css.ts
│       │   │       ├── backdrop
│       │   │       │   ├── Backdrop.tsx
│       │   │       │   └── backdrop.css.ts
│       │   │       ├── footer
│       │   │       │   ├── Footer.tsx
│       │   │       │   └── footer.css.ts
│       │   │       ├── index.ts
│       │   │       └── navigation
│       │   │           ├── MenuToggle.tsx
│       │   │           ├── Navigation.tsx
│       │   │           └── navigation.css.ts
│       │   ├── hooks
│       │   │   ├── useAuthStatus.ts
│       │   │   ├── useCardWidth.ts
│       │   │   ├── useDeviceCategory.ts
│       │   │   ├── useGalleryScroll.ts
│       │   │   ├── useLogin.ts
│       │   │   ├── useLogout.ts
│       │   │   ├── useMediaQuery.ts
│       │   │   ├── useMobileNavigation.ts
│       │   │   ├── useNavbarHeight.ts
│       │   │   └── useRegister.ts
│       │   ├── main.tsx
│       │   ├── pages
│       │   │   ├── account
│       │   │   │   ├── index.ts
│       │   │   │   ├── login
│       │   │   │   │   ├── Login.tsx
│       │   │   │   │   └── login.css.ts
│       │   │   │   ├── profile
│       │   │   │   │   └── Profile.tsx
│       │   │   │   └── register
│       │   │   │       ├── Register.tsx
│       │   │   │       └── register.css.ts
│       │   │   ├── home
│       │   │   │   ├── Home.tsx
│       │   │   │   ├── getStarted
│       │   │   │   │   ├── GetStarted.tsx
│       │   │   │   │   └── getStarted.css.ts
│       │   │   │   ├── hero
│       │   │   │   │   ├── Hero.tsx
│       │   │   │   │   └── hero.css.ts
│       │   │   │   ├── jobCategories
│       │   │   │   │   ├── JobCategories.tsx
│       │   │   │   │   └── jobCategories.css.ts
│       │   │   │   ├── jobGalleries
│       │   │   │   │   └── JobGalleries.tsx
│       │   │   │   ├── jobInfo
│       │   │   │   │   ├── JobInfo.tsx
│       │   │   │   │   └── jobInfo.css.ts
│       │   │   │   └── opinions
│       │   │   │       └── Opinions.tsx
│       │   │   ├── index.ts
│       │   │   ├── notFound
│       │   │   │   ├── NotFound.tsx
│       │   │   │   └── notFound.css.ts
│       │   │   └── underConstruction
│       │   │       ├── UnderConstruction.tsx
│       │   │       └── underConstruction.css.ts
│       │   ├── routes
│       │   │   └── routes.tsx
│       │   ├── store
│       │   │   └── authStore.ts
│       │   ├── styles
│       │   │   ├── globals.css.ts
│       │   │   ├── index.ts
│       │   │   └── theme.css.ts
│       │   ├── types
│       │   │   └── auth.ts
│       │   ├── utils
│       │   │   └── getComputedStyle.ts
│       │   └── vite-env.d.ts
│       ├── tsconfig.app.json
│       ├── tsconfig.json
│       ├── tsconfig.node.json
│       └── vite.config.ts
├── infra
│   └── db
│       └── docker-compose.yml
├── package-lock.json
└── package.json
```
<!-- prettier-ignore-end -->

## Konserwacja i aktualizacje

1. Aktualizacje treści:

   - Edytuj treści w odpowiednich komponentach (np. src/pages/Home.tsx, src/components/Contact.tsx).
   - Zmieniaj obrazy w folderze src/assets/.

2. Dodawanie nowych sekcji:

   - Stwórz nowy komponent w src/pages/ lub src/components/.
   - Zaktualizuj plik src/routes/index.tsx, aby nowa sekcja była dostępna w nawigacji.

## Wsparcie

Aplikacja jest w trakcie realizacji. W przypadku pytań dotyczących funkcjonalności, postępu prac lub potrzeby wprowadzenia zmian, prosimy o kontakt.

## Licencja

Aplikacja została stworzona na potrzeby projektu i jest własnością twórcy. Kod źródłowy jest dostępny wyłącznie w celu wsparcia i konserwacji, chyba że umowa stanowi inaczej.

## Ostatnia aktualizacja

*28 listopada 2025*