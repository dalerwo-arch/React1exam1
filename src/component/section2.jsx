import React, { useState } from 'react';

const Section2 = () => {
  const [gender, setGender] = useState('Ж');
  const [selectedCalorie, setSelectedCalorie] = useState('1250');
  const [selectedDuration, setSelectedDuration] = useState('2 недели');
  const [selectedDaysCount, setSelectedDaysCount] = useState(5);
  const [selectedDay, setSelectedDay] = useState('пятница');

  const caloriesOptions = [
    { value: '900', label: '900 ккал', sub: '3 блюда' },
    { value: '1250', label: '1 250 ккал', sub: '4 блюда' },
    { value: '1600', label: '1 600 ккал', sub: '5 блюд' },
    { value: '2050', label: '2 050 ккал', sub: '6 блюд' },
    { value: 'custom', label: 'индивидуально подобрать', sub: '' },
  ];

  const durationOptions = [
    { label: 'Пробные 2 дня', price: 'за 2 900 ₽' },
    { label: '1 неделя', price: '1 700 ₽ в день' },
    { label: '2 недели', price: '1 600 ₽ в день' },
    { label: '3 недели', price: '1 520 ₽ в день' },
    { label: '4 недели', price: '1 450 ₽ в день' },
  ];

  const daysOfWeek = [
    'понедельник',
    'вторник',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье',
  ];

  const meals = [
    {
      type: 'Завтрак',
      weight: '230/250 гр',
      title: 'Утренний боул с перепелиным яйцом, киноа и лососем',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80',
    },
    {
      type: 'Обед',
      weight: '320/30 гр',
      title: 'Боул с куриными фрикадельками в кунжуте, брокколи и миндальным соусом',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80',
    },
    {
      type: 'Полдник',
      weight: '60/30 гр',
      title: 'Кукурузные блинчики с кокосовым припеком и фруктовым тар-таром',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80',
    },
    {
      type: 'Ужин',
      weight: '100/100 гр',
      title: 'Морепродукты в соусе Гарсиа со стручковой фасолью',
      image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div style={{ width: '98%', margin: 'auto', fontFamily: 'sans-serif', color: '#2d3748', backgroundColor: '#f4f3ee', padding: '20px', borderRadius: '24px' }}>

      <div style={{ backgroundColor: '#e2dec9', borderRadius: '20px', padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px', color: '#1a1a1a' }}>
          Подберите рацион для своих целей
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '3px 6px', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', padding: '0 8px', color: '#888' }}>Пол</span>
            <button
              type="button"
              onClick={() => setGender('Ж')}
              style={{
                backgroundColor: gender === 'Ж' ? '#d8c5ad' : 'transparent',
                border: 'none', borderRadius: '15px', padding: '6px 12px', cursor: 'pointer', fontWeight: 'bold'
              }}
            >Ж</button>
            <button
              type="button"
              onClick={() => setGender('М')}
              style={{
                backgroundColor: gender === 'М' ? '#d8c5ad' : 'transparent',
                border: 'none', borderRadius: '15px', padding: '6px 12px', cursor: 'pointer', fontWeight: 'bold'
              }}
            >М</button>
          </div>

          <input placeholder="Ваш вес" style={{ padding: '10px 16px', borderRadius: '20px', border: '1px solid #fff', outline: 'none', backgroundColor: '#fff' }} />
          <input placeholder="Ваш рост" style={{ padding: '10px 16px', borderRadius: '20px', border: '1px solid #fff', outline: 'none', backgroundColor: '#fff' }} />
          <input placeholder="Ваш возраст" style={{ padding: '10px 16px', borderRadius: '20px', border: '1px solid #fff', outline: 'none', backgroundColor: '#fff' }} />

          <select style={{ padding: '10px 16px', borderRadius: '20px', border: '1px solid #fff', backgroundColor: '#fff', cursor: 'pointer' }}>
            <option>Активность</option>
          </select>

          <select style={{ padding: '10px 16px', borderRadius: '20px', border: '1px solid #fff', backgroundColor: '#fff', cursor: 'pointer' }}>
            <option>Выберите цель</option>
          </select>

          <button type="button" style={{ backgroundColor: '#488165', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>
            Рассчитать рацион
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Программа ПремиумБоул</h1>
          <span style={{ color: '#488165', fontSize: '14px', fontWeight: '500' }}>🌱 Каждый день новое меню</span>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontWeight: '600', marginBottom: '10px', fontSize: '14px' }}>Калорийность</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
            {caloriesOptions.map((item) => (
              <div
                key={item.value}
                onClick={() => setSelectedCalorie(item.value)}
                style={{
                  padding: '16px',
                  borderRadius: '16px',
                  border: '1px solid #eee',
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: selectedCalorie === item.value ? '#d8c5ad' : '#fff',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{item.label}</div>
                {item.sub && <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>{item.sub}</div>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontWeight: '600', marginBottom: '10px', fontSize: '14px' }}>Продолжительность</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
            {durationOptions.map((item) => (
              <div
                key={item.label}
                onClick={() => setSelectedDuration(item.label)}
                style={{
                  padding: '16px',
                  borderRadius: '16px',
                  border: '1px solid #eee',
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: selectedDuration === item.label ? '#d8c5ad' : '#fff',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.label}</div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '13px', color: '#555' }}>Выберите, сколько дней в неделю вы хотите питаться</span>
          <div style={{ display: 'flex', gap: '6px', backgroundColor: '#f2efe9', padding: '4px', borderRadius: '16px' }}>
            {[5, 6, 7].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setSelectedDaysCount(num)}
                style={{
                  border: 'none',
                  borderRadius: '12px',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  backgroundColor: selectedDaysCount === num ? '#d8c5ad' : 'transparent',
                }}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>Пример дневного рациона</h3>
          <p style={{ fontSize: '12px', color: '#888' }}>
            6 блюд. Калорийность — 1 235 ккал. Белки — 103 г; жиры — 37 г; углеводы — 120 г
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {daysOfWeek.map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => setSelectedDay(day)}
              style={{
                border: '1px solid #eee',
                borderRadius: '20px',
                padding: '8px 18px',
                backgroundColor: selectedDay === day ? '#d8c5ad' : '#fff',
                cursor: 'pointer',
                fontWeight: selectedDay === day ? 'bold' : 'normal',
                fontSize: '13px',
              }}
            >
              {day}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          {meals.map((meal, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 12px auto', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }}>
                <img src={meal.image} alt={meal.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <p style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>
                <span style={{ fontWeight: 'bold', color: '#333' }}>{meal.type}</span> {meal.weight}
              </p>
              <p style={{ fontSize: '12px', fontWeight: '500', lineHeight: '1.4', color: '#222' }}>{meal.title}</p>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: '#98b093',
          borderRadius: '20px',
          padding: '20px 24px',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          color: '#fff'
        }}>
          <div>
            <button type="button" style={{ backgroundColor: '#488165', border: 'none', color: '#fff', padding: '12px 20px', borderRadius: '14px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', marginBottom: '6px' }}>
              Заказать 10 дней питания за 16 000 ₽
            </button>
            <p style={{ fontSize: '12px', opacity: 0.9 }}>1 250 ккал за 1 600 ₽ в день</p>
          </div>

          <div style={{ flex: '1', minWidth: '240px', fontSize: '11px', lineHeight: '1.5', opacity: 0.95 }}>
            <p style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '4px' }}>Будем доставлять наборы каждый день.</p>
            <p>Доставка осуществляется каждый день с 06:00 до 12:00. Выбор интервала — 2 часа. Заявки принимаются не позднее, чем за день до предполагаемой доставки.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section2;