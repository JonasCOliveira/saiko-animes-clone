import { React, useState, useEffect } from "react";

import "./Home.css";
import "./Calendario.css";

const calendario = {
  domingo: {
    yamada: {
      nome: "Yamada-kun to Lv999 no Koi wo Suru",
      temporadas: 1,
      img: "yamada-kun",
    },

    nier: {
      nome: "Nier",
      temporadas: 1,
      img: "nier",
    },

    jigoraku: {
      nome: "Jigoraku",
      temporadas: 1,
      img: "yamada-kun",
    },

    bleach: {
      nome: "Jigoraku",
      temporadas: 1,
      img: "yamada-kun",
    },

    naruto: {
      nome: "Jigoraku",
      temporadas: 1,
      img: "yamada-kun",
    },

    qualquer: {
      nome: "Jigoraku",
      temporadas: 1,
      img: "yamada-kun",
    },
  },
  segunda: {
    yamada: {
      nome: "Yamada-kun to Lv999 no Koi wo Suru",
      temporadas: 1,
      img: "yamada-kun",
    },
  },
  terca: {
    yamada: {
      nome: "Yamada-kun to Lv999 no Koi wo Suru",
      temporadas: 1,
      img: "yamada-kun",
    },
  },
  quarta: {
    yamada: {
      nome: "Yamada-kun to Lv999 no Koi wo Suru",
      temporadas: 1,
      img: "yamada-kun",
    },
  },
  quinta: {
    yamada: {
      nome: "Yamada-kun to Lv999 no Koi wo Suru",
      temporadas: 1,
      img: "yamada-kun",
    },
  },
  sexta: {
    yamada: {
      nome: "Yamada-kun to Lv999 no Koi wo Suru",
      temporadas: 1,
      img: "yamada-kun",
    },
  },
  sabado: {
    yamada: {
      nome: "Yamada-kun to Lv999 no Koi wo Suru",
      temporadas: 1,
      img: "yamada-kun",
    },
  },
};

function Domingo() {
  return (
    <>
      {Object.values(calendario["domingo"]).map((el) => {
        return (
          <div className="anime">
            <a href="">
              <div className="relative bottom-8">
                <img src={`./assets/${el.img}.jpg`} alt="" />
                <div className="over"></div>
                <div className="title">{el.nome}</div>
                <div className="subtitle">{el.temporadas}</div>
                <div className="year">{el.nome}</div>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
}

function Segunda() {
  return (
    <>
      {Object.values(calendario["segunda"]).map((el) => {
        return <div key={el.nome}>{el.nome}</div>;
      })}
    </>
  );
}

function Terca() {
  return (
    <>
      {Object.values(calendario["terca"]).map((el) => {
        return <div>{el.nome}</div>;
      })}
    </>
  );
}

function Calendario() {
  const [diaAtivo, setDiaAtivo] = useState("domingo");

  useEffect(() => {
    renderAnimes();
  }, [diaAtivo]);

  function renderAnimes() {
    switch (diaAtivo) {
      case "domingo":
        return <Domingo />;

      case "segunda":
        return <Segunda />;

      case "terca":
        return <Domingo />;

      case "quarta":
        return <Domingo />;

      case "quinta":
        return <Domingo />;

      case "sexta":
        return <Domingo />;

      case "sabado":
        return <Domingo />;
    }
  }

  const setActive = (el) => {
    setDiaAtivo(el.id);
  };

  return (
    <>
      <div
        className="flex items-center justify-center px-10 py-10 w-full"
        style={{
          zIndex: "1",
          position: "fixed",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.51) 0%, #00000005 100%)",
        }}
      >
        <div className="flex items-center">
          <img src="./assets/logo.png" alt="" />
          <img src="./assets/saiko-animes-logo.png" alt="" />
        </div>
      </div>

      <div className="container-fluid px-10 pt-36">
        <ul className="flex flex-row gap-2 w-full justify-center">
          <li
            id="domingo"
            className={diaAtivo == "domingo" ? "active" : ""}
            onClick={(e) => {
              setActive(e.target);
            }}
          >
            Domingo
          </li>
          <li
            id="segunda"
            className={diaAtivo == "segunda" ? "active" : ""}
            onClick={(e) => setActive(e.target)}
          >
            Segunda
          </li>
          <li
            id="terca"
            className={diaAtivo == "terca" ? "active" : ""}
            onClick={(e) => setActive(e.target)}
          >
            Terça
          </li>
          <li
            id="quarta"
            className={diaAtivo == "quarta" ? "active" : ""}
            onClick={(e) => setActive(e.target)}
          >
            Quarta
          </li>
          <li
            id="quinta"
            className={diaAtivo == "quinta" ? "active" : ""}
            onClick={(e) => setActive(e.target)}
          >
            Quinta
          </li>
          <li
            id="sexta"
            className={diaAtivo == "sexta" ? "active" : ""}
            onClick={(e) => setActive(e.target)}
          >
            Sexta
          </li>
          <li
            id="sabado"
            className={diaAtivo == "sabado" ? "active" : ""}
            onClick={(e) => setActive(e.target)}
          >
            Sábado
          </li>
        </ul>
      </div>

      <div className="animes grid gap-3 m-auto place-items-center mt-12 mx-12 ">
        {renderAnimes()}
      </div>
    </>
  );
}

export default Calendario;
