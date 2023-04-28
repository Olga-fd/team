import React, { useEffect, useState } from "react";
import "./cardpart.css";
import { useDispatch, useSelector } from "react-redux";
import { setPressedLike } from "../../store/store";
import { Header } from "../utils/Header/Header";
import { Button } from "../utils/Button/Button";
import { Layout } from "../Layout/Layout";

export function CardOfPartner() {
  const data = useSelector((state) => state.users);
  return (
    <>
      <Header>
        <Button className="header__btn_back" title="Назад" />
        <div className="main__info">
          <div className="header__person-data">
            <img className="header__img" src="../img/artur.jpg" />
            <div className="header__name">
              <h1>Артур Королев</h1>
              <p className="header__job">Партнер</p>
            </div>
          </div>
        </div>
      </Header>

      <main className="main">
        <Layout>
          <div className="main__info">
            <div className="main__text">
              <p className="main__paragraph">
                Клиенты видят в&nbsp;нем эксперта по&nbsp;вопросам разработки
                комплексных решений финансовых продуктов, включая такие аспекты,
                как организационная структура, процессы, аналитика
                и&nbsp;ИТ-компоненты. Он&nbsp;помогает клиентам лучше понимать
                структуру рисков их&nbsp;бизнеса, улучшать процессы за&nbsp;счет
                применения новейших технологий и&nbsp;увеличивать продажи,
                используя самые современные аналитические инструменты.
              </p>
              <p className="main__paragraph">
                В&nbsp;работе с&nbsp;клиентами недостаточно просто решить
                конкретную проблему или помочь справиться с&nbsp;трудностями.
                Не&nbsp;менее важно уделять внимание обмену знаниями:
                &laquo;Один из&nbsp;самых позитивных моментов&nbsp;&mdash; это
                осознание того, что ты&nbsp;помог клиенту перейти
                на&nbsp;совершенно новый уровень компетентности, уверенность
                в&nbsp;том, что после окончания проекта у&nbsp;клиента есть все
                необходимое, чтобы дальше развиваться самостоятельно&raquo;.
              </p>
              <p className="main__paragraph">
                Помимо разнообразных проектов для клиентов финансового сектора,
                Сорин ведет активную предпринимательскую деятельность.
                Он&nbsp;является совладельцем сети клиник эстетической медицины
                в&nbsp;Швейцарии, предлагающей инновационный подход
                к&nbsp;красоте, а&nbsp;также инвестором других бизнес-проектов.
              </p>
            </div>

            <div className="main__address">
              <a href="tel:+79543334455">+7 (954) 333-44-55</a>
              <a href={`mailto:${data[0].email}`}>{data[0].email}</a>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
