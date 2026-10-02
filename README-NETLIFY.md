# Niedźwieccy — wdrożenie na Netlify

Strona jest statyczna i nie wymaga procesu budowania.

W pakiecie znajdują się:

- strona główna `index.html`,
- interaktywny katalog `katalog.html` z 26 kartami modeli,
- oryginalny katalog PDF dostępny do pobrania,
- wersje językowe PL, DE, EN, ES, FR i IT.

## Najprostsze wdrożenie

1. W panelu Netlify wybierz **Add new site → Deploy manually**.
2. Przeciągnij cały folder `niedzwieccy-premium` do okna wdrożenia.
3. Po sprawdzeniu adresu testowego wejdź w **Domain management → Add a domain**.
4. Dodaj `niedzwieccy.com` oraz `www.niedzwieccy.com` i zastosuj rekordy DNS pokazane przez Netlify.

Nie zmieniaj rekordów domeny, dopóki wersja testowa nie zostanie zaakceptowana.

Po wdrożeniu katalog będzie dostępny pod adresem `https://www.niedzwieccy.com/katalog`. Tego adresu można użyć w kodzie QR na kartach targowych.
