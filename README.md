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
src
   ├── App.tsx
   ├── assets
   ├── components
   ├── main.tsx
   ├── pages
   ├── routes
   │   └── routes.tsx
   ├── styles
   │   ├── globals.css.ts
   │   ├── index.ts
   │   └── theme.css.ts
   └── vite-env.d.ts
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

*4 listopada 2025*