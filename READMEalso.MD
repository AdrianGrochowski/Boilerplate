![Alt text](http://www.aflofarm.com.pl/static/images/aflofarm_logo2.png)

# Boiler Plate

Zbiór dobrych praktyk zawiera wskazówki i wytyczne do projektowania
stron www produktów należących do portfolio Aflofarm. Zbiór powstał
dla projektantów oraz webdeveloperów celem zapewnienia
użytkownikom najlepszych doświadczeń w obrębie każdej witryny
należącej do Aflofarm.


### Wykorzystane technologie


  * TypeScript
  * jQuery
  * ES6
  * Bootstrap v4
  * Sass


### Instrukcja wykorzystania


##### 1. Fork repozytorium
##### 2. Klonowanie zforkowanego repozytorium
```
git clone 
```
##### 4. Instalacja pakietu / zależności
```
npm i
```
##### 5. Wykonanie serwisu / Produkcja strony
Do celów developerskich odpalamy Webpack
```
npm run dev
```
Po wpisaniu komendy w przeglądarce odpali się projekt na serwerze developerskim pod adresem **http://localhost:8080/**
Wszelkie zmiany będą automatycznie akutalizowane na stronie.
###### Proces postępowania

  * Folder **data** służy do przechowywania plików z rozszerzeniem "json"
  * Wszystkie zdjęcia należy trzymać w folderze **images**
  * Pliki JavaScript oraz TypeScript znajdują się w folderze **scripts**
  * W folderze **vendor** dodajemy osobne pliki JavaScript, które następnie dodajemy do pliku **vendor.js** za pomocą funkcji **require()**
  * Webpack kompiluje pliki js za pomocą pluginu babel, dzięki czemu możliwe jest swobodne pisanie w es6 i rozdzielanie logiki na wiele plików
  * W folderze **styles** znajdują się 3 foldery: app, common oraz vendor
  * W folderze **app** w piku **base** dodajemy podstawowe style dla całego projektu
  * W folderze **common** w pliku core zaimportowane są funkcje, zmienne oraz mixiny z Bootstrap 4, a także osobny plik ze zmiennymi
  * Osobny plik ze zmiennymi **variables** istnieje w celu modyfikacji zmiennych z Bootstrap oraz w celu dopisywania dodatkowych
  * Plik **vendor** zbiera wszystkie pliki scss z projektu. Kolejne pliki należy dodawać poprzez metodę **@import**
  * W folderze **templates** znajdują się pliki html. W projekcie dzielimy kolejno wszystkie sekcje na osobne pliki html, które następnie dodajemy do pliku **index**, który znajduje sie w folderze **src**, tak jak w przykładzie:
  ** ${require('./templates/headers/header.html')} **
  * W pliku **settings.js**, który znajduje się bezpośrednio w folderze brandbook-webpack, należy ustawić wszelkie zmienne, które mogą się powtarzać w projekcie. W plikach html należy je wywowałać poprzez:
      <%= JSON.stringify(htmlWebpackPlugin.options.<i>zmienna</i>) %>
  * W pliku **ftp_settings.js**, który także jest bezpośrednio w folderze brandbook-webpack, należy wprowadzić wszelkie potrzebne dane do FTP.


##### 6. Stworzenie gotowej paczki
Po ukończeniu tworzenia serwisu w celu utworzenia końcowej paczki należy uzyć komendy:
```
npm run build
```
W folderze **public_html** zostanie utworzony gotowy projekt.

##### 7. Wgranie na staging oraz stworzenie gotowej paczki
Po ukończeniu tworzenia serwisu należy wgrać go na staging oraz utworzyć końcową paczkę. W tym celu należy uzupełnić dane do FTP w plilku **ftp_settings.js**, a następnie użyć komendy:
```
npm run ftp
```
Serwis zostanie wgrany na staging oraz w folderze **public_html** utworzy się gotowy projekt.

##### 8. Uzyskanie akceptacji
##### 9. Push gotowego serwisu do repozytorium
