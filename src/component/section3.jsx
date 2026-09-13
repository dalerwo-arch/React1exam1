import React from 'react';

import img from "../assets/Group 39.png";
import img1 from "../assets/Group 40.png";
import img2 from "../assets/Group 41.png";
import img3 from "../assets/Group.png";
import img4 from "../assets/Group 42.png";
import img5 from "../assets/Group (1).png";

const Section3 = () => {
  const features = [
    {
      img: img,
      title: 'Мы используем деликатные технологии приготовления блюд',
      desc: 'Сувид, гриль без пригара и выпекание позволяют сохранить максимум полезных свойств, витаминов и микроэлементов.',
    },
    {
      img: img1,
      title: 'Меню из 90 блюд на две недели без повтора',
      desc: 'Оптимально сбалансированные блюда, содержащие в себе весь необходимый комплекс полезных элементов для комфортного питания.',
    },
    {
      img: img2,
      title: 'Здоровые рецепты',
      desc: 'Без консервантов, белого сахара и избытка соли. Каждое блюдо — это результат глубокой проработки шеф-повара и нутрициолога.',
    },
    {
      img: img3,
      title: 'Гарантия возврата',
      desc: '100% компенсация стоимости, если качество или вкус блюд вам не понравятся в течение первой недели использования.',
    },
    {
      img: img4,
      title: 'Контроль температуры',
      desc: 'Все курьеры оснащены сумками-холодильниками, что позволяет сохранять свежесть рационов при температуре от 2°C до 4°C.',
    },
    {
      img: img5,
      title: 'Забота о природе',
      desc: 'Все блюда доставляются в экологичной крафтовой упаковке со столовыми приборами из кукурузного крахмала.',
    },
  ];

  const deliveryRates = [
    {
      label: 'По городу бесплатно',
      color: '#488165',
      bg: '#eef6f2',
      border: '#a3d9bc',
    },
    {
      label: 'Пригород 25 км — 100 ₽',
      color: '#2c3e50',
      bg: '#f0f4f8',
      border: '#b8cddc',
    },
    {
      label: 'Пригород 35 км — 300 ₽',
      color: '#8a6d3b',
      bg: '#fcf8e3',
      border: '#fbeed5',
    },
    {
      label: 'Пригород 50 км — 500 ₽',
      color: '#a94442',
      bg: '#f2dede',
      border: '#ebccd1',
    },
  ];

  return (
    <div
      style={{
        width: '98%',
        margin: 'auto',
        fontFamily: 'sans-serif',
        color: '#2d3748',
        backgroundColor: '#faf9f6',
        padding: '30px 20px',
        borderRadius: '24px',
      }}
    >
      <div style={{ marginBottom: '40px' }}>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#1a1a1a',
          }}
        >
          О нашем сервисе
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '24px',
          }}
        >
          {features.map((item, index) => (
            <div key={index} style={{ padding: '10px' }}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '55px',
                  height: '55px',
                  objectFit: 'contain',
                  marginBottom: '12px',
                }}
              />

              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  lineHeight: '1.3',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '12px',
                  color: '#666',
                  lineHeight: '1.5',
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '30px',
          marginBottom: '50px',
          backgroundColor: '#fff',
          borderRadius: '24px',
          padding: '24px',
        }}
      >
        <div style={{ flex: '1 1 350px' }}>
          <h3
            style={{
              color: '#488165',
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '16px',
              lineHeight: '1.3',
            }}
          >
            Попробуйте новый формат рационов — Боулы!
            <br />
            Это богатый набор полезных веществ и масса вкусовых впечатлений!
          </h3>

          <p
            style={{
              fontSize: '13px',
              color: '#555',
              lineHeight: '1.6',
              marginBottom: '12px',
            }}
          >
            Боул — это сбалансированный вариант блюда, содержащего в себе все
            необходимые элементы за счет большого количества ингредиентов.
            Ингредиенты блюда не перемешиваются между собой, сохраняя вкусовые
            качества и эстетичность.
          </p>

          <p
            style={{
              fontSize: '13px',
              color: '#555',
              lineHeight: '1.6',
            }}
          >
            Наш сервис предлагает вам начать грамотно заботиться о своем
            здоровье, поддерживать стройность, работоспособность и прекрасное
            самочувствие!
          </p>
        </div>

        <div
          style={{
            flex: '1 1 300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <button
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid #ddd',
              backgroundColor: '#fff',
              cursor: 'pointer',
            }}
          >
            ←
          </button>

          <div
            style={{
              width: '100%',
              maxWidth: '340px',
              height: '260px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
              alt="Боул"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          <button
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid #ddd',
              backgroundColor: '#fff',
              cursor: 'pointer',
            }}
          >
            →
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#f3efe6',
          borderRadius: '24px',
          padding: '30px',
        }}
      >
        <h2
          style={{
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '8px',
          }}
        >
          Карта доставки
        </h2>

        <p
          style={{
            fontSize: '13px',
            color: '#666',
            marginBottom: '24px',
          }}
        >
          Доставка осуществляется каждый день с 06:00 до 12:00.
          <br />
          Выбор интервала — 2 часа.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              flex: '2 1 400px',
              height: '340px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #e0e0e0',
              backgroundColor: '#e5e3df',
            }}
          >
            <iframe
              title="Delivery Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150000!2d38.97!3d45.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f148971484157d%3A0x2e00000000000000!2sKrasnodar!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div
            style={{
              flex: '1 1 260px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {deliveryRates.map((rate, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: rate.bg,
                  border: `1px solid ${rate.border}`,
                  color: rate.color,
                  padding: '12px 16px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '600',
                  textAlign: 'center',
                }}
              >
                {rate.label}
              </div>
            ))}

            <div
              style={{
                marginTop: '16px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  color: '#888',
                  marginBottom: '4px',
                }}
              >
                Уточнить стоимость и время доставки
              </p>

              <a
                href="tel:+79885001700"
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#1a1a1a',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                +7 988 500-1-700
              </a>

              <p
                style={{
                  fontSize: '10px',
                  color: '#aaa',
                  marginTop: '2px',
                }}
              >
                с 09:00 до 21:00
              </p>

              <button
                type="button"
                style={{
                  backgroundColor: '#488165',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '12px 24px',
                  fontWeight: 'bold',
                  fontSize: '13px',
                  cursor: 'pointer',
                  width: '100%',
                  marginTop: '12px',
                }}
              >
                Перезвоните мне
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
