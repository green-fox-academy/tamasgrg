Info

- Kond: ahogy igertem, infok a lehetseges projekt technologiakrol:
1. NodeJS + React fullstack
hogyan kell elkepzelni a Reactet: https://www.youtube.com/watch?v=LZxSKNc8tig, https://www.youtube.com/watch?v=U9T6YkEDkMo
ezen a project stacken olyan technologiakkal talalkozhattok, mint: Javascript, React, Redux, SCSS, Express.js, Node.js, Jest, React Testing Library, REST API, MySQL, Git, Docker, CircleCI, JIRA
bar fullstack project, a nagyobb focust a frontend kapja, a backendet probaljuk minimal tartani
2. Java Spring backend
hogyan kell elkepzelni a Springet: https://www.youtube.com/watch?v=wVB36AUw4n0, https://www.youtube.com/watch?v=vtPkZShrvXQ
ezen a project stacken olyen technologiakkal talalkozhattok, mint: Java 8, Spring Boot, Spring Security, Hibernate, Flyway, MySQL, Rest API, JUnit, Thymeleaf, Gradle, Git, Docker, CircleCI, JIRA

- Krisz: ez elvileg egy működő reddit api: https://zimikri-reddit-backend.herokuapp.com

- Kond: here is your example orientation exam for practice:
https://github.com/green-fox-academy/orientation-example-exam/blob/master/javascript.md

- Kond:
toltottem fel peldat arra, hogy pl hogyan tudjatok kuldeni a form adatot a backendnek:
https://github.com/green-fox-academy/afters-syllabus/commit/72426f3a2b7d6167452d3250a1a5cdedcb67ffbd#diff-54f28400a50073b73193c56797145ddf
azt csinaltam, hogy:
1. hogy latvanyosabb legyen, hogy oldal frissules nelkul megjelenik valami a form adatainak elkuldese utan, a mat reviewn keszitett formot beleraktam a korabbi beers.ejs  template tetejere. igy most ugy nez ki a http://localhost:3000/beers oldalunk, hogy felul a form, alatta a lista, ami mutatja a DB-ben levo soroket.
2. a new-beer.js -ben submit eventre elkuldom xhr requesttel a form adatait a POST /beers  endpointra a szervernek, majd valaszkent JSON formatumban varom a lementett beer objectet. ha ez megerkezett, hozzaadom a DOM-ba az eddig sorlista vegere.
function handleForm() {
  const beerForm = document.forms['new-beer'];
  const beerList = document.getElementById('beerList');
  beerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/beers');
    xhr.onload = () => {
      const newBeer = JSON.parse(xhr.responseText);
      const newBeerLi = document.createElement('li');
      newBeerLi.innerHTML = `${newBeer.name} | ${newBeer.type}`;
      beerList.appendChild(newBeerLi);
    }
    xhr.send(new FormData(beerForm));
  });
}
3. szerveroldalon telepitenem kellett egy uj csomagot, mert az xhr request multipart/form-data formatumban kuldi el a form adatait, amit a bodyParser nem tud kezelni, de pl a multer package igen (https://www.npmjs.com/package/multer). ezt telepiteni annyi, hogy
npm install --save multer .
4. a multer-t beallitottam az index.js fajlban uj middleware-kent, hogy aztan az enpointomban a req.body ne ures object legyen, hanem egy object a form adataival feltoltve.
...
const multer = require('multer');
...
app.use(multer().none()); 
...
5. ezutan az endpointban mar req.body  a form adatait adja vissza egy objectben. nem akartam ebben a peldaban bonyolitani az adatbazist a form osszes adataval, ezert annyit csinaltam, hogy a sok form adatbol kiveszen a sor nevet es tipusat, ebbol keszitek egy egyszerubb sor objectet, amit lementek a DB-be pont ugyanugy, mint eddig, majd ha sikeres a mentes, visszaadom a lementett sor objectet:
app.post('/beers', (req, res) => {
    const newBeer = req.body;
    const beerDbEntry = { name: newBeer.beerName, type: newBeer.beerType };
    Beer.save(beerDbEntry, (err, beer) => {
      if (err) {
        return res.render('../views/error', {
          message: 'Error during DB query',
        });
      }
      res.send(beer);
    });
  });
+1: a korabbi kodban az index.js-ben rosszul allitottuk be az express static file kezeleset, ezt javitottam, hogy megtalalja a css es js fajlt:
app.use(express.static(__dirname + '/static'));

- Kond:
preparation projectek:
https://github.com/green-fox-academy/afters-syllabus/tree/master/0th-project

- Kond:
itt a git advanced material:
https://github.com/green-fox-academy/teaching-materials/tree/master/workshop/git

- Kond:
itt a mai projekt idoszak indito (ugy tunik megszakadhatott, mert 2 reszben vette fel):
https://youtu.be/lIqaG_AotcQ
https://youtu.be/6MxSHjeNpy0
itt pedig a Java izelito:
https://youtu.be/AznZkMczTfc

Kond:
Java team:
felraktam a todo app specifikaciot:
https://github.com/green-fox-academy/afters-syllabus/blob/master/0th-project/spring-0th-project.md

Kond:
hogy karpotoljalak titeket, amit fel tudok ajanlani ezen videok helyett:
korabbi Spring introduction CA-m, ami annyival masabb es tobb, hogy ebben van server side templating is: https://www.youtube.com/watch?v=MZNzbU6ICUE
egy a mostaninal hosszabb es emiatt tobb mindenre kiterjedo React introduction material review egy masik csoportbol: https://www.youtube.com/watch?v=Gwz6WKmlntU

Kond:
plusz kozben rajottem, hogy a fenti Springes videoban nem REST endpointokat hasznalok, ezert itt egy full Springes REST material review:
https://www.youtube.com/watch?v=lXkDlq8ivlA

Kond:
ha fatal errort kapsz az eslo pullnal, akkor igy pullolj:
git pull origin master --allow-unrelated-histories

Kond:
itt az altalanos test elmeletes video:
https://youtu.be/KFDetwAxIpE

-Krisz:
en az amigoscode-os fekatol tanulok
belevagtam a koyepebe, a hello world utan
https://www.youtube.com/channel/UC2KfmYEM4KCuA1ZurravgYw

-Krisz:
itt egy haromoras kezdo java: https://www.youtube.com/watch?v=Qgl81fPcLc8
en ezt nezem: https://www.youtube.com/watch?v=r-6BwGW4Sr8

-Kond:
https://youtu.be/TMTDEme-5QY

-Krisz:
https://github.com/zimikri/todo-app

-Kond:
https://jira.greenfox.academy/
https://jira.greenfox.academy/secure/RapidBoard.jspa?rapidView=243&projectKey=ATB&view=planning.nodetail&issueLimit=100

-Zoli:
https://app.swaggerhub.com/apis-docs/greenfoxacademy/tribes/3.3.1#/users/post_register

-Kond:
https://github.com/jwtk/jjwt
raktam fel POST-os integration test peldat is:
https://github.com/green-fox-academy/afters-syllabus/blob/master/spring/bookstore/src/test/java/com/greenfoxacademy/bookstore/controllers/BookStoreControllerIT.java
itt pedig a video:
https://youtu.be/aL9-KOO2iLk

es megtalaltam az egyszoros 2 objectet osszehasonlitos megoldast is:
import static org.assertj.core.api.Assertions.assertThat;
assertThat(result).isEqualToComparingFieldByField(expected);

- Krisz:
export TRIBES_DB_HOST="localhost"
export TRIBES_DB_USER="root"
export TRIBES_DB_PWD="root"
export TRIBES_DB_NAME="tribes"
export TRIBES_DB_URL="jdbc:mysql://localhost/$TRIBES_DB_NAME?createDatabaseIfNotExist=true&serverTimezone=UTC"
export TRIBES_HIBERNATE_DIALECT="org.hibernate.dialect.MySQL5Dialect"

https://github.com/green-fox-academy/afters-tribes-backend/wiki

talaltam egy ropke 5 oras videot a spring security-rol: https://www.youtube.com/watch?v=her_7pa0vrg

ez a bcrypt-es resz: https://www.youtube.com/watch?v=her_7pa0vrg&t=3039s

- Kond:
a @Value-val behuzott valtozokat a tesztekben ugy tudjatok mockolni, hogy pl:
ReflectionTestUtils.setField(userService, "passwordMinLength", 8);
hogy ezt ne kelljen tesztenkent beallitani, mehet az elejere a setUp-ba

itt a mai video:
https://youtu.be/I05YeK3xa8A

- Zoli:
ezt a videót néztem egyébként Gergő:
https://www.youtube.com/watch?v=X80nJ5T7YpE&ab_channel=JavaBrains
meg ezt:
https://www.javainuse.com/spring/boot-jwt







