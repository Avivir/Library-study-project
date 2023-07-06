import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

enableProdMode();

loadDataToLocalStorage();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


function loadDataToLocalStorage() {
 const books = [

   { id: 1,
     title: 'Rosyjska Laleczka',
     description: 'Życie Vanessy zmienia się nieodwracalnie, kiedy pewnego dnia osiemnastolatka budzi się w nielegalnym domu publicznym. Nie pamięta, jak się w nim znalazła. Jej jedynymi towarzyszami są: samotność, ciemność i strach przed nieznanym.\n' +
       '\n',
     author: 'Dagmara Jakubczak',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 2,
     title: 'To jedno spojrzenie',
     description: 'Zostawia za sobą rodzinne Dźwirzyno, wyjeżdża do Warszawy i z determinacją zabiera się do realizacji swojego nowego pomysłu na życie - otwiera Salonik Spojrzeń. Wtedy w jej życiu pojawia się mężczyzna, z pozoru tak od niej inny, jak ogień różni się od wody.',
     author: 'Dorota Milli',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 3,
     title: 'Francuska dwórka',
     description: 'Giselle Morin, paryska intrygantka, bryluje na dworze Ludwika XIV. Gdy wchodzi w konflikt z samym kardynałem Mazarinem, by ratować własną głowę zmuszona jest opuścić ojczyznę.',
     author: 'Weronika Wierzchowska',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 4,
     title: 'Wszyscy na Zanzibarze',
     description: 'Na Ziemi na początku XXI wieku tłoczy się ponad siedem miliardów ludzi. Jest to epoka inteligentnych komputerów, psychodelicznych narkotyków w wolnej sprzedaży, polityki uprawianej za pomocą zabójstw i naukowców obłaskawiających wulkany poprzez palenie kadzideł Histeria niebezpiecznie przeludnionego świata przedstawiona w olśniewająco nowatorskim stylu.',
     author: 'John Brunner',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 5,
     title: 'Błyski w mroku',
     description: 'Potwory nie czają się w mroku. Prawdziwe potwory żyją wśród nas.',
     author: 'Stacy Willingham',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 6,
     title: 'Pewnego razu w Wenecji',
     description: 'znajomość z tą drugą kobietą rozpoczyna się pechowo, ale wkrótce się okazuje, że nie są dla siebie obojętni.',
     author: 'Magda Knedler',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 7,
     title: 'Papierowe pieniądze',
     description: 'Jeden dzień.\n' +
       '\n' +
       '11 godzin - 11 rozdziałów.\n' +
       '\n' +
       'Jedna redakcja - tysiąc historii.\n' +
       '\n' +
       'Wśród nich - te najważniejsze, które mogą stać się sensacją dnia. A także złamać kilka politycznych karier i wyczyścić z kont bankowych kilka zer.',
     author: 'Ken Follett',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 8,
     title: 'Hazardzista',
     description: 'Zuzanna i Wojtek próbują nadrobić stracone lata, choć czas, w którym znaleźli się zawodowo i prywatnie, zdecydowanie nie jest ich sprzymierzeńcem. Trudno budować coś na kłamstwach i niedopowiedzeniach.',
     author: 'Anna Falatyn',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 9,
     title: 'Doktor Love',
     description: 'Toby Jenner to ekspert od dobierania ludzi w pary, a przynajmniej aplikacja, którą wymyślił, jest w tym perfekcyjna. W końcu, żeby ją stworzyć, mężczyzna przeanalizował tysiące związków.',
     author: 'Leisa Rayven',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 10,
     title: 'I want your life',
     description: 'Podobnie jak inni studenci z uwagą śledzi artykuły ukazujące się w plotkarskiej gazecie uczelnianej „Last but not Least”. W zasadzie to pismo jest prawdziwą biblią dla studentów.',
     author: 'Gabriela Rygiel',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 11,
     title: 'I want your life',
     description: 'Podobnie jak inni studenci z uwagą śledzi artykuły ukazujące się w plotkarskiej gazecie uczelnianej „Last but not Least”. W zasadzie to pismo jest prawdziwą biblią dla studentów.',
     author: 'Gabriela Rygiel',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 12,
     title: 'I want your life',
     description: 'Podobnie jak inni studenci z uwagą śledzi artykuły ukazujące się w plotkarskiej gazecie uczelnianej „Last but not Least”. W zasadzie to pismo jest prawdziwą biblią dla studentów.',
     author: 'Gabriela Rygiel',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 13,
     title: 'Stukostrachy',
     description: 'Rzecz dzieje się w Haven, sielankowym i spokojnym miasteczku w stanie Maine. Jednak za sprawą pewnego pozornie błahego wydarzenia miejsce to',
     author: 'Stephen King Łukasz Praski ',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 14,
     title: 'Sztorm stulecia',
     description: 'Little Tall, mała wyspa u wybrzeży stanu Maine, przygotowuje się do nadejścia zimowej burzy, którą meteorologowie zapowiadają jako sztorm stulecia. Wraz z pierwszymi płatkami śniegu na wyspie zjawia się Andre Linoge i morduje jedną z najstarszych jej mieszkanek, Marthę Clarendon.',
     author: 'Stephen King Łukasz Praski',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 15,
     title: 'Ostatni dzień lata',
     description: 'Evelyn była przekonana, że dla innych jest niewidzialna, że nikt nie zwraca na nią uwagi. Po śmierci rodziców, pogrążona w żałobie, zamknęła się na świat, a jej skorupą było wycofanie. Lubiła samotność.',
     author: 'Aleksandra Muraszka',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},
   { id: 16,
     title: 'Zostań już na zawsze',
     description: 'Czasami przychodzi taki dzień, kiedy trzeba wszystko zostawić za sobą i odważnie ruszyć w nieznane. Kamila Bardo wie, co to znaczy stanąć na życiowym zakręcie. Niedawno wróciła do Polski i w stolicy układa swoje życie. Ma ciekawą pracę, średnio udany związek, ale z nadzieją patrzy w przyszłość.',
     author: 'Aleksandra Muraszka',
     file: '/assets/images/book.jpg' ,
     availability: 'available',
     whoHaveBook:'',
     isBookReservated: false},


 ];

  localStorage.setItem('books', JSON.stringify(books));
  //localStorage.removeItem('books');
}
loadDataToLocalStorage();


