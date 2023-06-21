import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const listProf = [
  {
    prof: "Web-разработчиков",
    discr: `Создают сложные и очень сложные сайты. Продумывают, чтобы
пользователям было быстро и удобно.`},
  {
    prof: "Гейм-девелоперов",
    discr: `Создают видеоигры. Погружают всех нас в новые миры.`
  },
  {
    prof: "AI/ML-cпециалистов",
    discr: `Используют в деле искусственный интеллект и машинное
обучение. Фактами и прогнозами делает бизнесу хорошо.`},
  {
    prof: "Аналитиков данных",
    discr: `С помощью чисел решают, куда двигаться компаниям. Помогают
бизнесу получать еще больше денег.`},
  {
    prof: "Мобильных разработчиков",
    discr: `Создают мобильные приложения, которые найдут тебя везде.
Умещают на маленьких экранах максимальный функционал.`}
];

const listImg = ["fefu_logo.jpg", "imct_logo.png"]

const listDir = [
  {
    dir: "Прикладная информатика в компьютерном дизайне",
    discr: `Программа ориентирована на подготовку специалистов в сфере анализа,
  проектирования и разработки программного обеспечения, 
  а также проектирования пользовательских интерфейсов, 
  обеспечения человеко-машинного взаимодействия, компьютерной графики.`,
    limit: "75",
    passScore: "210"
  },
  {
    dir: "Цифровая трансформация экономики",
    discr: `Задачи программы: подготовка специалистов в области проектирования,
     создания, администрирования, эксплуатации и сопровождения автоматизированных информационных систем, 
     используемых для автоматизации деятельности предприятий и организаций.`,
    limit: "50",
    passScore: "210"
  },
  {
    dir: "Программная инженерия",
    discr: `Направление подготовки «Программная инженерия» появилось в нашей стране сравнительно недавно. 
    Оно отвечает сложившейся в настоящее время мировой практике в области разработки программного обеспечения и представлениям
     о перспективах развития этой отрасли.`,
    limit: "125",
    passScore: "206"
  },
]

function Head(props) {

  const logoImages = listImg.map((img, index) =>
    <img key={index} src={img} />
  );
  return (
    <div className="head">
      {logoImages}
    </div>
  )
}

function Tagline() {

  return (
    <h1>
      Хватит уже игр, <br /> пора <br /> разрабатывать и зарабатывать
    </h1>
  )
}

function Button(props) {

  return (
    <a href="#dirAnchor" >
      <input className="button" type="button" value={props.val} />
    </a>
  )
}

function Professions(props) {
  const listProf = props.list.map((item, index) =>
    <ProfItem key={index} prof={item.prof} discr={item.discr} />
  );
  return (
    <div className="prof">
      <h2>{props.title} </h2>
      <ul>
        {listProf}
      </ul>
    </div>
  )
}

function ProfItem(props) {

  const [isOpen, setOpenClose] = React.useState(false);
  const press = () => {
    setOpenClose(!isOpen);
  }
  return (
    <li onClick={press}>
      <span className="left">{props.prof}</span>
      <span className="right">{isOpen ? "×" : "+"}</span>
      {isOpen &&
        <p> {props.discr}</p>
      }
    </li>
  )
}

function Directions(props) {
  const listDirs = props.list.map((item, index) =>
    <DirItem key={index} dir={item.dir} limit={item.limit} passScore={item.passScore} discr={item.discr} />
  );
  return (
    <a id="dirAnchor">
      <div className="dir">
        <h2>{props.title} </h2>
        <ul>
          {listDirs}
        </ul>
      </div>
    </a>
  )
}

function DirItem(props) {
  const [isOpen, setOpenClose] = React.useState(false);
  const press = () => {
    setOpenClose(!isOpen);
  }
  return (
    <li onClick={press}>
      <span className="left"><span>{props.dir}</span><span> Бюджетных мест: {props.limit}</span><span> Проходной балл: {props.passScore}</span></span>
      <span className="right">{isOpen ? "×" : "+"}</span>
      {isOpen &&
        <p> {props.discr}</p>
      }
    </li>
  )
}

function Content() {

  return (
    <>
      <Head listImg={listImg} />
      <Tagline />
      <Button val="Хочу учиться!" />
      <Professions title="Обучаем на:" list={listProf} />
      <Directions title="Направления подготовки:" list={listDir} />
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Content />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
