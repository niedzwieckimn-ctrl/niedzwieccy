# Niedźwieccy — wdrożenie na Netlify

Strona jest statyczna i nie wymaga procesu budowania.

W pakiecie znajdują się:

- krótka strona główna `index.html` z trzema wybranymi modelami,
- interaktywny katalog `katalog.html` z 26 kartami modeli,
- historia i produkcja na osobnej stronie `marka.html`,
- współpraca B2B i wyszukiwarka dystrybutorów według miasta w `partnerzy.html`,
- oryginalny katalog PDF dostępny do pobrania,
- wersje językowe PL, DE, EN, ES, FR i IT.

## Najprostsze wdrożenie

1. W panelu Netlify wybierz **Add new site → Deploy manually**.
2. Przeciągnij cały folder `niedzwieccy-premium` do okna wdrożenia.
3. Po sprawdzeniu adresu testowego wejdź w **Domain management → Add a domain**.
4. Dodaj `niedzwieccy.com` oraz `www.niedzwieccy.com` i zastosuj rekordy DNS pokazane przez Netlify.

Nie zmieniaj rekordów domeny, dopóki wersja testowa nie zostanie zaakceptowana.

Przy aktualizacji istniejącej strony Netlify wgraj cały folder w zakładce **Deploys** tej strony. Paczka zawiera komplet plików wszystkich czterech stron.

Język pozostaje wybrany przy przechodzeniu między podstronami. Dotychczasowe odnośniki do sekcji `#craft`, `#production` i `#b2b` prowadzą do odpowiednich nowych podstron.

Po wdrożeniu katalog będzie dostępny pod adresem `https://www.niedzwieccy.com/katalog`. Tego adresu można użyć w kodzie QR na kartach targowych.
