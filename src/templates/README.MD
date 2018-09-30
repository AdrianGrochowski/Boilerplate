![Alt text](http://www.aflofarm.com.pl/static/images/aflofarm_logo2.png)


* W folderze **templates** znajdują się pliki html. W projekcie dzielimy kolejno wszystkie sekcje na osobne pliki html, które następnie dodajemy do pliku **index**, który znajduje się bezpośrednio w folderze **src**, tak jak w przykładzie:
**${require('./templates/headers/header.html')}**
lub **${require('./templates/partials/1a.html')}**

* Folder templates składa się z folderu **headers**, w którym znajdują się 3 różne nagłówki.
* Kolejne foldery zawierają 4 przykładowe opcje landingów. Tak jak opisano wyżej landingi podzialone są na sekcje, lecz każdy landing zawiera też plik zbiorczy, w którym znajduje się cały szablon sekcji ułożonych w odpowiedniej kolejność. Taki plik także można dodać do pliku **index** w folderze **src**.
```
${require('./templates/landing4/landing.html')}
```
lub
```
${require('./templates/full_landing/landing1.html')}
```
