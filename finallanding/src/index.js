import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const listHero = [
  {
    name: "Pudge",
    discr: `На полях Вечной бойни, далеко на юге от Квойджа, тучная фигура упорно трудится под покровом ночи — расчленяет и потрошит павших, сгружая в кучи их конечности и потроха, — чтобы к рассвету поле боя было чисто. В этом проклятом мире ничто не разлагается само по себе — мертвецам не суждено вернуться обратно в землю, и не важно, насколько глубока могила. Окружённый стаями птиц-падальщиков, каждая из которых ждёт своего кусочка мёртвой плоти, мясник упражняется с лезвиями, и с каждым движением они становятся лишь острее. Вжик-вжик-тук. Плоть отсекается от костей, связки и сухожилия разрываются как мокрая бумага. И хоть мясницкое ремесло всегда было по вкусу тучному здоровяку, с годами у него проснулся интерес ещё и к тому, что остаётся после его работы. Сначала кусочек мускула там, потом глоточек крови здесь... Вскоре он впивался в самые крепкие тела подобно грызущей кость собаке. Даже те, кто не питают страха перед жнецом Смерти, предпочитают не связываться с мясником.`,
    photo: "pudge.png"
  },
  {
    name: "Terrorblade",
    discr: `Этот демон-мародёр обрёл славу закоренелого преступника даже среди других адских тварей. Он был невиданным бунтарём, обворовал самих Владык-демонов, отверг все установленные обряды, призванные его смирить, и преступил все законы семи кругов Ада. За это ему преподали урок: даже в преисподней есть собственный ад. После короткого, сурового суда в окружении мириады мертвецов его наконец отправили в Колодец душ — скрытое измерение, куда демоны заключают себе подобных. Но это далеко не обычная тюрьма. Колодец душ — тёмное зеркало реальности, в котором демоны обречены взирать на искривлённое отражение собственной души. Однако заключённый и не думал страдать: он подчинил себе это отражение, яростного и вороватого демона невообразимой силы. Укротив своё тёмное начало, демон разрушил фрактальные стены темницы и вырвался на свободу, дабы вселять страх во всё мироздание.`,
    photo: "terrorblade.png"
  },
  {
    name: "Глеб Стрелов",
    discr: `Сёстры Вуали, считающие убийство священной частью естественного цикла жизни, находят новых воспитанников в гаданиях. О своих жертвах сёстры узнают в медитации и пророческих изречениях. Они не принимают контрактов, и, похоже, не преследуют жертв из-за политики или корысти. Их убийства не выглядят частью какого-то замысла, и могут показаться не связанными между собой: сегодня жертвой станет человек с великой властью, завтра — крестьянин или копатель колодцев. Какой бы между убийствами ни было связи, её знают лишь сёстры. Они считают убитых жертвенным даром, а смерть от рук ордена — большой честью. Не ведающие своей личности, взращённые лишь на устоях ордена, убийцы легко заменяют друг друга, и число их неведомо. Возможно, их много; возможно, их единицы. Что лежит под вуалью — тайна без ответа. И лишь изредка эта сестра, когда никто не слышит, поднимает свою вуаль, чтобы нарушить запрет, прошептав своё имя: Мортред.`,
    photo: "phantom_assassin.png"
  }
];

const listHeroGuess = [
  {
    answer: "invoker",
    photo: "invoker.png"
  },
  {
    answer: "slark",
    photo: "slark.png"
  },
  {
    answer: "morphling",
    photo: "morphling.png"
  },
];

function Heroes(props) {
  const listHeroes = props.list.map((item, index) =>
    <Hero key={index} name={item.name} discr={item.discr} photo={item.photo} />
  );
  const [iter, Change] = React.useState(0);
  const iterChange = (dir) => {
    if (dir) {
      iter + 1 >= listHeroes.length ? Change(0) : Change(iter + 1);
    }
    else {
      iter - 1 < 0 ? Change((listHeroes.length - 1)) : Change(iter - 1);
    }
  }
  return (
    <div className="mainFrame">
      <h1>Герои доты два</h1>
      {listHeroes[iter]}
      <button onClick={() => iterChange(false)}>Предыдущий</button>
      <button onClick={() => iterChange(true)}>Следующий</button>
    </div>
  )
}

function Hero(props) {
  return (
    <div className="hero-item">
      <h3>{props.name}</h3>
      <div className="container">
        <div className="text">{props.discr}</div>
        <div className="picture"><img src={props.photo} /></div>
      </div>
    </div>
  )
}

function HeroGuesser(props) {
  const listGuesses = props.list;
  const [iter, Change] = React.useState(0);
  const iterChange = () => {
    Change(iter + 1);
  }
  const [text, tChange] = React.useState("");
  const textChange = (event) => {
    tChange(event.target.value);
  }
  const guess = () => {
    console.log(text);
    console.log(listGuesses[iter].answer);
    if (text.toUpperCase() === listGuesses[iter].answer.toUpperCase())
      iterChange();
  }
  if (iter < listGuesses.length)
    return (
      <div className="hero-guesser">
        <img src={listGuesses[iter].photo}></img>
        <div>
          Введите ваше предположение:
          <input type="text" onChange={textChange}></input>
          <button onClick={guess}>Угадать</button>
        </div>
      </div>
    )
  else
    return (
      <div className="hero-guesser">
        <h2>Вы отгадали всех персонажей!</h2>
      </div>
    )
}

root.render(<><Heroes list={listHero} />

  <HeroGuesser list={listHeroGuess} />
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
