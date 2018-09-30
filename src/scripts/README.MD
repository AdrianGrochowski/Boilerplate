![Alt text](http://www.aflofarm.com.pl/static/images/aflofarm_logo2.png)


* Pliki JavaScript oraz TypeScript znajdują się w folderze **scripts**
* W folderze **vendor** dodajemy pliki JavaScript lub TypeScript, które następnie dodajemy do pliku **vendor.js** za pomocą funkcji **require()**
* Plik **bootstrap** dodajemy potrzebne funkcjonalności z Bootstrap 4 do naszego projektu za pomocą funckji **require('')**
* Plik **displayDetect** odpowiada za lazyloading zdjęć dopiero po pojawieniu się w oknie przeglądarki. Jest to rekomendowane rozwiązanie usprawniające szybkie ładowanie serwisu. W celu wykorzystania jej do zdjęcia należy dodać ścieżkę zdjęcia w **data-src** natomiast w **src** scieżkę loader'a np. z rozszerzeniem .gif. Ostatnim krokiem jest dodanie klasy **display_detect** do zdjęcia.
* Plik **modal_videosrc** odpowiada za pobieranie adresu filmu youtube w modalu
* Plik **smoothscroll** odpowiada za płynne przewijanie np. w navbarze.
* W celu wykorzystania funkcji smoothscroll do elementu do którego okno przeglądarki ma się przewinąć dodajemy odpowiednie **id**, natomiast do hyperlinku **a** dodajemy wartość **href**, w której przekazujemy **id** tak jak w przykładzie:
<pre>href="#element"
</pre>
Dodatkowo do hyperlinku dodajemy klasę **smooth-scroll**
* Plik **displayDetect** odpowiada za lazy loading obrazków, dopóki nie pojawią się w oknie przeglądarki dla szybszego ładowania serwisu
* W celu wykorzystania funkcji displayDetect należy w pierwszej kolejności do wybranego zdjęcia dodać klasę **display_detect** w atrybucie **data-src** dodać źródło zdjęcia oraz w atrybucie **src** dodać źródło wskaźnika ładowania, który pokaże się w czasię ładowania zdjęcia.
* Webpack kompiluje pliki js za pomocą pluginu babel, dzięki czemu możliwe jest swobodne pisanie w es6 i rozdzielanie logiki na wiele plików
