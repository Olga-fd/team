import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useResize } from "../../hooks/useResize";
import { Header } from "../utils/Header/Header";
import { Button } from "../utils/Button/Button";
import { Layout } from "../Layout/Layout";
import { PhoneIcon } from "../utils/Icons/PhoneIcon";
import { EnvelopeIcon } from "../utils/Icons/EnvelopeIcon";
import "./cardpart.css";

export function CardOfPartner() {
  const data = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [width] = useResize();
  const params = useParams();
  const id = params.id;
  const index = data.findIndex((user) => user.id == id);

  return (
    <>
      <Header className="card-part">
        <Button
          className={`${width > 756 ? "header__btn_back" : "back"}`}
          title={`${width > 756 ? "Назад" : ""}`}
          onClick={() => navigate("/team")}
        />
        <div className="header__info">
          <div className="header__person-data">
            <img className="header__img" src={data[index].avatar} />
            <div className="header__name">
              <h1>{data[index].first_name + " " + data[index].last_name}</h1>
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
              <a href="tel:+79543334455">
                <PhoneIcon />
                +7 (954) 333-44-55
              </a>
              <a href={`mailto:${data[index].email}`}>
                <EnvelopeIcon />
                {data[index].email}
              </a>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
