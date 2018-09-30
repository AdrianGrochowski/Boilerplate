![Alt text](http://www.aflofarm.com.pl/static/images/aflofarm_logo2.png)


* W folderze **styles** znajdują się 3 foldery: app, common oraz vendor
* W folderze **app** w piku **base** dodajemy podstawowe style dla całego projektu
* W folderze **common** w pliku core zaimportowane są funkcje, zmienne oraz mixiny z Bootstrap 4, a także osobny plik ze zmiennymi
* Osobny plik ze zmiennymi **variables** istnieje w celu modyfikacji zmiennych z Bootstrap oraz w celu dopisywania dodatkowych
* W folderze **vendor** znajdują się foldery **backgrounds** oraz **headers**. Backgrounds zawiera style do czterech teł landingów, natomiast folder headers zawiera pliki ze stylami do trzech headerów.
* W folderze **backgrounds** znajdują się także dwa pliki do łatwego tworzenia teł z gradientem. W pliku **background-color-linear** tworzymy tło z gradientem liniowym poprzez zmianę kolorów w pliku **variables** w folderze **common**. To samo tyczy się tworzenia tła z gradientem kołowym w pliku **background-color-radial**. W pliku variables u góry znajdują się zmienne w których dodajemy kolejno wybrane kolory. 2 kolory do zmiennych z końcówką **odd** oraz jeden do zmiennej z końcówką **even**. W ten sposób na stronie niepatrzyste sekcje bedą posiadały gradient, natomiast parzyste będą w jednolitym kolorze.
* Plik **vendor** zbiera wszystkie pliki scss z projektu. Kolejne pliki należy dodawać poprzez metodę **import**
* W sekcji vendor najpierw dodane są style dla całego projektu, kolejno dodany jest styl dla wybranego headera: one, two, three. Ostatnim elementem jest background landingu. Do wyboru są 4 tła.
