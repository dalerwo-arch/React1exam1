import React from "react";

const Section4 = () => {
  return (
    <section className="section4">

      {/* ПРОБНЫЙ РАЦИОН */}
      <div className="trial">
        <h2>Пробный рацион</h2>

        <p>
          Сомневаетесь? Протестируйте наш сервис и еду.
        </p>

        <p>
          Начните с пробного меню на два дня со скидкой 20% за 2 800 ₽ (1 120 ккал)
        </p>

        <button type="button">
          Попробовать
        </button>
      </div>


      {/* РАССЫЛКА */}
      <div className="newsletter">

        <div className="newsletter-left">
          <h2>Будьте всегда в курсе!</h2>

          <div className="newsletter-info">
            <span className="mail-icon">✉</span>

            <p>
              Подпишитесь на рассылку и будьте всегда в курсе
              новинок, акций и новостей!
            </p>
          </div>
        </div>


        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Укажите вашу почту"
          />

          <button type="button">
            Подписаться
          </button>
        </div>

      </div>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-top">

          <div className="footer-phone">
            <h3>+7 988 500-1-700</h3>
            <p>Ежедневно с 09:00 до 21:00</p>
          </div>


          <div className="footer-email">
            <h3>hello@pora-poest.com</h3>
          </div>


          <div className="socials">
            <a href="#" aria-label="Telegram">
              ●
            </a>

            <a href="#" aria-label="WhatsApp">
              ●
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>
          </div>

        </div>


        {/* ADDRESS */}
        <div className="address">
          ООО «ПораПоесть», г. Краснодар, ул. Кубанская Набережная,
          дом 5, офис 4
        </div>


        {/* COPYRIGHT */}
        <div className="copyright">
          © 2021 ПораПоесть — сервис доставки прогрессивного питания.
        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <div className="policy">

            <p>
              Фотографии блюд на сайте являются рекламными. Внешний вид
              блюд может отличаться от фотографий на сайте.
            </p>

            <p>
              Указывая электронную почту и номер телефона на сайте,
              вы соглашаетесь с условиями{" "}
              <span>Публичной оферты</span> и{" "}
              <span>Политикой конфиденциальности</span>
            </p>

          </div>


          {/* PAYMENT */}
          <div className="payments">
            <div>VISA</div>
            <div>●●●</div>
            <div>МИР</div>
            <div> Pay</div>
            <div>G Pay</div>
          </div>

        </div>

      </footer>

    </section>
  );
};

export default Section4;