import React from 'react'
import "../../App.css"
import { BannerForStartIT } from '../../components/StartIT.js/BannerForStartIT';
import backendFrontedImage from "../../assets/img/frontBack.png";
import chatGPTlogo from "../../assets/img/chatgpt.png";
import linkedInLogo from "../../assets/img/linkedin.png";
import gitHubLogo from "../../assets/img/github.png";
import douLogo from "../../assets/img/dou.png";
import djinyLogo from "../../assets/img/djiny.png";


import { useNavigate } from 'react-router';


function StartIT() {
    const navigate = useNavigate();
    function handleClick() {
      navigate("/starthtml");
    }

  return (
    <div>
      <BannerForStartIT />
      <section>
        <div className="study_page">
          <div>
            <h1>
              Зазвичай в IT-індустрії можна виділити декілька основних секторів:
            </h1>
            <ul>
              <li>
                <strong> (Software Development) :</strong> Розробка програмного
                забезпечення команда програмістів розробляє нові програми та
                додатки для різних платформ, таких як комп'ютери, смартфони та
                планшети.
              </li>
              <li>
                <strong>(Web Development) :</strong> Веб-розробка веб-розробники
                створюють та підтримують веб-сайти, веб-додатки та інші
                онлайн-ресурси.
              </li>
              <li>
                <strong>(IT Consulting) : </strong>ІТ-консалтинг консультанти
                пропонують свої послуги з планування та розробки ІТ-проектів, а
                також з управління ІТ-інфраструктурою компаній.
              </li>
              <li>
                <strong>(Cloud Computing) :</strong> Хмарні технології хмарні
                сервіси забезпечують доступ до комп'ютерних ресурсів через
                Інтернет, що дозволяє користувачам зберігати та обробляти дані в
                онлайн-режимі.
              </li>
              <li>
                <strong>(Cybersecurity) :</strong> Кібербезпека спеціалісти з
                кібербезпеки займаються захистом комп'ютерних систем та мереж
                від хакерських атак та вірусів.
              </li>
            </ul>
            <p>
              Кожен з цих секторів має свої власні методи роботи та процеси
              розробки, але всі вони базуються на використанні комп'ютерів та
              програмного забезпечення. Робота в IT-індустрії вимагає високої
              кваліфікації та знань у сфері технологій, а також здатності до
              постійного навчання та саморозвитку, оскільки цей сектор змінює
            </p>
            <h1>Напрями Backend та Frontend</h1>
            <h2>
              Backend та frontend є двома важливими напрямками веб-розробки, які
              відповідають за створення різних частин веб-додатків.
            </h2>
            <li>
              <strong>Frontend</strong>- це частина веб-додатка, з якою
              користувач безпосередньо взаємодіє. Це означає, що все, що ви
              бачите на екрані свого комп'ютера або мобільного пристрою,
              зроблено за допомогою фронтенд-розробки. Основними інструментами
              для розробки фронтенду є мови розмітки, такі як HTML, CSS та
              JavaScript. HTML використовується для створення структури
              сторінки, CSS відповідає за її вигляд та оформлення, а JavaScript
              додає інтерактивність до веб-сторінок.
            </li>
            <li>
              <strong>Backend</strong>- це частина веб-додатка, яка працює на
              сервері і відповідає за логіку додатка, зберігання та обробку
              даних. Backend-розробка використовує різноманітні мови
              програмування, такі як Python, Ruby, Java, PHP та інші, для
              створення серверного програмного забезпечення. Для зберігання
              даних зазвичай використовують бази даних, такі як MySQL,
              PostgreSQL та інші.
            </li>
            <p style={{ marginTop: "20px" }}>
              -Оскільки фронтенд та бекенд взаємодіють один з одним, розробники
              часто використовують різні фреймворки та бібліотеки для спрощення
              цього процесу. Наприклад, React та Angular є популярними
              фреймворками для розробки фронтенду, а Django та Flask - для
              розробки бекенду. Таким чином, бекенд та фронтенд є
              взаємодоповнюючими частинами веб-додатків, і їх взаємодія
              відповідає за роботу та відображення вмісту на веб-сторінках.
            </p>
            <h1>Приклад роботи веб-додатка</h1>
            <img src={backendFrontedImage} className="demonstrate_image"></img>
            <p>
              Наприклад, якщо ви відкриваєте веб-сайт, щоб купити товар, то
              спочатку відбувається запит на сервер, де розміщена веб-сторінка з
              товаром. Сервер обробляє цей запит та надсилає відповідь на
              клієнтський браузер.
            </p>
            <li>
              На цьому етапі фронтенд відображає вміст сторінки на екрані,
              відображаючи текст, зображення та інші елементи дизайну. За
              допомогою JavaScript фронтенд забезпечує взаємодію з користувачем,
              наприклад, коли він натискає на кнопку "Купити", відбувається
              запит на сервер для обробки цього дії.
            </li>
            <li>
              Після того, як користувач відправив запит на сервер, бекенд
              оброблює цей запит та надає відповідь. Наприклад, бекенд може
              зберігати інформацію про товари в базі даних, виконувати операції
              з обробки платежів та відправляти повідомлення підтвердження
              покупки.
            </li>
            <p style={{ marginTop: "20px" }}>
              Таким чином, робота веб-додатка базується на взаємодії між
              фронтендом та бекендом. Кожен з цих напрямків має свої специфічні
              особливості та вимоги, але їх міцне злиття дозволяє створювати
              потужні та ефективні веб-додатки.
            </p>
            <button className="next_page_study" onClick={handleClick}>
              <span>Знайомство з HTML</span>
            </button>
            <h1>Корисні та необхідні посилання для ІТ-шника:</h1>
            <span>
              Тут невеликий список сервісів та соц.мереж які будуть корисні
              початківцю.
            </span>
            <li>
              <a href="https://github.com/">
                <img
                  src={gitHubLogo}
                  style={{
                    width: "35px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                ></img>
              </a>
              GitHub - це веб-сервіс для зберігання та спільної роботи з
              проектами, що використовують систему контролю версій Git. GitHub
              дозволяє користувачам зберігати та збирати свої робочі проекти,
              співпрацювати з іншими користувачами, слідкувати за змінами в коді
              та використовувати проекти, що створені іншими користувачами.
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <img src={linkedInLogo} style={{ width: "35px" }}></img>
              </a>
              LinkedIn - це соціальна мережа для професіоналів, на якій люди
              можуть створювати свій профіль з інформацією про свою освіту,
              досвід роботи, навички та зацікавленості. Користувачі можуть
              знаходити та додавати нових контактів, спілкуватися з колегами та
              ділитися знаннями та досвідом. Також на LinkedIn можна шукати нові
              робочі місця та будувати кар'єру.
            </li>
            <li>
              <a href="https://djinni.co/my/dashboard/">
                <img src={djinyLogo} style={{ width: "35px" }}></img>
              </a>
              Djiny: це українська платформа для пошуку вакансій
            </li>
            <li>
              <a href="https://dou.ua/">
                <img src={douLogo} style={{ width: "35px" }}></img>
              </a>
              Dou: українська спілка програмістів, він же блог про ІТ
            </li>
            <h2>
              Проте варто знати ще один, дуже важливий аспект в ІТ
              <a href="https://openai.com/blog/chatgpt">
                <img src={chatGPTlogo} style={{ width: "35px" }}></img>
              </a>
            </h2>
            <span>
              А саме вивчення штучного інтелекту айтішнику. Наразі штучний
              інтелект є дуже важливим у роботі, навчанні, підготовці до
              співбесід, написання листів та ще дуже багато інших сфер які
              використовує ІТ
            </span>
            <span>
              Користування штучним інтелектом (AI) є важливою складовою роботи
              айтішника, оскільки ця технологія допомагає покращити різні
              аспекти розробки програмного забезпечення та веб-додатків.
            </span>
            <h4>
              Ось деякі важливі аспекти, пов'язані з користуванням AI для
              айтішника:
            </h4>
            <li>
              Оптимізація розробки: AI може бути використаний для автоматизації
              рутинних задач, що допомагає зменшити час, необхідний для розробки
              програмного забезпечення та знизити ризик помилок.
            </li>
            <li>
              Покращення взаємодії з користувачами: AI може бути використаний
              для створення систем розумного аналізу та відповіді на запитання
              користувачів. Це допомагає забезпечити більш ефективну взаємодію з
              користувачами та підвищити задоволеність користувачів.
            </li>
            <li>
              Аналіз даних: AI може бути використаний для аналізу великих
              обсягів даних та виявлення складних залежностей, що допомагає
              зробити точні та швидкі прогнози.
            </li>
            <li>
              Оптимізація роботи: AI може бути використаний для автоматизації
              рутинних задач, таких як тестування програмного забезпечення або
              моніторинг роботи веб-сайту. Це допомагає зменшити навантаження на
              айтішника та забезпечити більш ефективну роботу.
            </li>
            <p>
              Отже, користування штучним інтелектом є дуже важливим для
              айтішника, оскільки ця технологія допомагає покращити ефективність
              роботи та забезпечити більш точні результати.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StartIT