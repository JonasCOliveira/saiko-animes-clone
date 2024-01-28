import { React, useState } from "react";
import {
  PlayIcon,
  ArrowDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Detalhes.css";

const temporadas = [
  {
    nome: "Bleach",
    temporada: 1,
    episodios: 366,
    ano: 2004,
    fansub: "Dublado",
    img: "",
  },
  {
    nome: "Bleach: Sennen Kessen-hen",
    temporada: 2,
    episodios: 52,
    ano: 2022,
    fansub: "Dublado",
    img: "",
  },
];

const animes = [
  {
    nome: "Dr Stone",
    img: "dr-stone",
  },

  {
    nome: "Gleipnir",
    img: "gleipnir",
  },

  {
    nome: "Goblin Slayer",
    img: "goblin-slayer",
  },

];

export default function Detalhes() {
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

      <div className="flex flex-col">
        <div className="poster-anime flex w-full relative">
          <div
            className="poster-image w-full h-full"
            style={{
              backgroundImage: "url(" + "./assets/bleach-bg.jpg" + ")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="shadow absolute w-full h-full"></div>
          </div>

          <div className="info-anime px-10 flex justify-start z-10 absolute">
            <div className=" flex flex-col w-full max-w-lg pb-8 self-end">
              <div className="sort-ani">Série</div>
              <div className="title-ani">Bleach</div>
              <div className="subtitle-ani">Bleach</div>
              <div className="btn-ani">
                <a href="" className="flex p-3 gap-2">
                  <PlayIcon width={"20px"}></PlayIcon>
                  <span>Assistir Online</span>
                </a>
              </div>
              <div className="tag-ani flex items-center gap-6 my-6">
                <div className="tag-nota flex items-center">
                  <div
                    className="icon-mal"
                    style={{
                      backgroundImage: "url(" + "./assets/mal.png" + ")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      width: "37px",
                      height: "13px",
                    }}
                  ></div>
                  <span>7.91</span>
                </div>
                <div>2004-2022</div>
                <div>Em exibição</div>
              </div>
              <div className="genres-ani flex w-full px-2 py-4 max-w-lg flex-wrap gap-2">
                <div className="btn-genre">Ação</div>
                <div className="btn-genre">Artes marciais</div>
                <div className="btn-genre">Shounen</div>
                <div className="btn-genre">Sobrenatural</div>
              </div>
              <div className="sinopse-ani">
                <div className="sinopse-content">
                  Ichigo Kurosaki é um adolescente de 15 anos com um talento
                  indesejado para ver espíritos. Esse talento lhe permite
                  detectar a Shinigami Rukia Kuchiki, a quem sem querer
                  interfere durante as suas funções. Quando Rukia é ferida por
                  um Hollow que ataca a casa de Ichigo, Ichigo é forçado a
                  assumir temporariamente seus poderes de Shinigami para
                  derrotar o Hollow. No dia seguinte, Rukia aparece na escola de
                  Ichigo como um ser humano normal. Ela lhe diz que perdeu todos
                  os seus poderes, ao invés de apenas a fração que pretendia dar
                  a ele, e não pode realizar seus deveres. Ichigo deve assumir
                  seu lugar como Shinigami da cidade de Karakura, enquanto ela
                  se recupera, guiando almas para a vida após a morte e
                  defendendo as pessoas de ataques de Hollows.
                </div>
                <div className="readmore flex justify-center">
                  <a
                    href=""
                    className="pt-3 uppercase text-white"
                    style={{ fontSize: "11px" }}
                  >
                    Mostrar mais
                  </a>
                </div>
                <div className="modal"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 px-10">
          <div>Área de Download</div>
          <div>
            <div className="flex gap-3">
              {/* <Swiper> */}

              {temporadas.map((el) => {
                return (
                  <div className="col-ani flex flex-col p-5">
                    <a href="">
                      <div className="relative w-full">
                        <img
                          src="./assets/bleach.jpg"
                          alt=""
                          style={{ borderRadius: "10px" }}
                        />

                        <div className="hover">
                          <div className="flex">
                            <div className="info gap-1">
                              <ChevronUpIcon width={"20px"}></ChevronUpIcon>
                              <span>Mais Informações</span>
                            </div>

                            <div className="info-content">
                              <div>Episódios: {el.episodios}</div>
                              <div>Ano: {el.ano} </div>
                              <div>Fansub: {el.fansub} </div>
                            </div>

                            <div className="format-temp"></div>
                          </div>
                          <div className="hover-div flex justify-center items-center h-full">
                            <div className={`hover-icon`}>
                              <ArrowDownIcon
                                className="self-center"
                                width={"35px"}
                              ></ArrowDownIcon>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="season-name">{el.nome}</div>
                    <div className="season-temp">Temporada {el.temporada}</div>
                  </div>
                );
              })}

              {/* </Swiper> */}
            </div>
          </div>
        </div>

        <div className="px-10 py-10">Assista também</div>

        <div className="px-10">
          <Swiper
            spaceBetween={30}
            modules={[Navigation]}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1000: {
                slidesPerView: 2,
              },
              1300: {
                slidesPerView: 4,
              },
              1800: {
                slidesPerView: 6,
              },
            }}
          >
            {animes.map((el) => {
              return (
                <SwiperSlide>
                  <a href="">
                    <div className="zoom-img glide-poster">
                      <img src={`./assets/${el.img}.jpg`} alt="" />
                      <div className="name-poster">
                        <div>{el.nome}</div>
                      </div>
                      <div className="img-over"></div>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <footer className="footer flex justify-center mt-10 py-3 px-5">
        <div className="social flex">
          <i className="bi bi-youtube"></i>
          <i className="bi bi-youtube"></i>
          <i className="bi bi-youtube"></i>
        </div>
      </footer>
    </>
  );
}
