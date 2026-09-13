import React from "react";
import img from "../assets/Vector.png";
import img1 from "../assets/Group 161.png";
import img2 from "../assets/1a9ea84523e9f0d2e5b7d7e4b22454fafd482cc3.png";
import img3 from "../assets/Ellipse 28.png";
import img4 from "../assets/Ellipse 29.png";
import img5 from "../assets/Group.svg";
import img6 from "../assets/Frame.svg";

const Section1 = () => {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#A98C64",
                    width: "100%",
                    color: "white",
                    padding: "15px 0",
                }}
            >
                <div
                    style={{
                        width: "80%",
                        maxWidth: "1100px",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <img src={img} alt="" style={{ width: "25px" }} />
                        <b>Скидка 20% на первый заказ</b>
                    </div>

                    <button
                        style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "white",
                            fontSize: "15px",
                            cursor: "pointer",
                        }}
                    >
                        Заказать →
                    </button>
                </div>
            </div>

            <section
                style={{
                    backgroundColor: "#F8F5F0",
                    minHeight: "100vh",
                    margin: "auto",
                    paddingBottom: "70px",
                }}
            >
                <header
                    style={{
                        width: "98%",
                        maxWidth: "1300px",
                        margin: "auto",
                        padding: "25px 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            fontWeight: "900",
                            fontSize: "22px",
                            lineHeight: "18px",
                        }}
                    >
                        <img src={img1} alt="" />
                    </div>

                    <nav
                        style={{
                            display: "flex",
                            gap: "28px",
                            fontSize: "12px",
                            color: "#333",
                        }}
                    >
                        <span>Подбор рациона</span>
                        <span>Программа питания</span>
                        <span>О нас</span>
                        <span>Доставка</span>
                        <span>Акции</span>
                        <span>FAQ</span>
                        <span>Отзывы</span>
                    </nav>

                    <div style={{ textAlign: "right" }}>
                        <h6 style={{ color: "#4D8F76" }} >Перезвоните мне</h6>
                        <h1 style={{ fontSize: "20px" }}>+7 988 500-1-700</h1>
                        <p style={{ fontSize: "8px", color: "#777" }}>
                            с 10:00 до 20:00
                        </p>
                    </div>
                </header>

                <div
                    style={{
                        width: "98%",
                        maxWidth: "1300px",
                        margin: "20px auto 0",
                        minHeight: "430px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ width: "48%" }}>
                        <h1
                            style={{
                                fontSize: "46px",
                                lineHeight: "1.15",
                                marginBottom: "35px",
                                color: "#111",
                            }}
                        >
                            Доставка прогрессивного
                            <br />
                            питания для гурманов
                        </h1>

                        <div style={{ display: "flex", gap: "12px" }}>
                            <button
                                style={{
                                    backgroundColor: "#4F8F7A",
                                    border: "none",
                                    borderRadius: "20px",
                                    color: "white",
                                    padding: "12px 25px",
                                    cursor: "pointer",
                                }}
                            >
                                Подобрать питание
                            </button>

                            <button
                                style={{
                                    backgroundColor: "transparent",
                                    border: "1px solid #4F8F7A",
                                    borderRadius: "20px",
                                    color: "#4F8F7A",
                                    padding: "11px 22px",
                                    cursor: "pointer",
                                }}
                            >
                                Получить консультацию
                            </button>
                        </div>
                    </div>
                    <img src={img3} alt="" className="q q2" />
                    <img src={img4} alt="" className="q q1" />
                    <div
                        style={{
                            width: "48%",
                            display: "flex",
                            justifyContent: "center",
                            zIndex: "1"
                        }}
                    >
                        <img
                            src={img2}
                            alt="Питание"
                            style={{
                                width: "100%",
                                maxWidth: "500px",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>





                <div
                    style={{
                        width: "100%",
                        maxWidth: "1300px",
                        margin: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            width: "40%",
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "110px",
                                color: "#B88D58",
                            }}
                        >
                            <img src={img5} alt="" />
                        </div>
                    </div>

                    <div style={{ width: "55%" }}>
                        <h1
                            style={{
                                fontSize: "38px",
                                marginBottom: "25px",
                            }}
                        >
                            Еда, которая сделает тебя лучше!
                        </h1>

                        <p
                            style={{
                                fontSize: "20px",
                                lineHeight: "1.7",
                                color: "#444",
                            }}
                        >
                            Мы помогаем создавать новое качество жизни для наших клиентов,
                            чтобы каждый человек был счастливым, здоровым и не отвлекался на
                            рутинные процессы.
                        </p><br />

                        <p
                            style={{
                                fontSize: "20px",
                                lineHeight: "1.7",
                                color: "#444",
                            }}
                        >
                            Для этого мы создали новый уникальный продукт на рынке доставки
                            еды и приглашаем вас окунуться в гастрономический шик уже сегодня.
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        width: "100%",
                        maxWidth: "1100px",
                        margin: "70px auto 0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "50px",
                    }}
                >
                    <div style={{ width: "55%" }}>
                        <h1
                            style={{
                                fontSize: "38px",
                                marginBottom: "25px",
                            }}
                        >
                            Изысканное меню высокой кухни
                        </h1>

                        <p
                            style={{
                                fontSize: "20px",
                                lineHeight: "1.7",
                                color: "#444",
                            }}
                        >
                            В наших блюдах мы продолжаем каждую деталь, все ингредиенты
                            тщательно подобраны и созданы по принципу высокой кухни.
                        </p><br />

                        <p
                            style={{
                                fontSize: "20px",
                                lineHeight: "1.7",
                                color: "#444",
                            }}
                        >
                            Качественные продукты, деликатесы и суперфуды, которые помогают
                            поддерживать здоровье и обмен веществ. Мы используем графские
                            ингредиенты с любовью выращенные производителями.
                        </p>
                    </div>

                    <div
                        style={{
                            width: "40%",
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "100px",
                                color: "#B88D58",
                            }}
                        >
                            <img src={img6} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section1;
