import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Header.css";

export default function Example() {
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

      <div
        className="vh-100 relative"
        style={{
          backgroundImage: "url(" + "./assets/chainsaw-man.jpg" + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-gradient-to-t from-grayBack vh-100">
          <div className="bg-gradient-to-r from-grayBack vh-100 flex items-center justify-center py-20">
            <div className="max-w-7xl px-10" style={{ width: "1600px" }}>
              <div
                className="slide-logo"
                style={{
                  backgroundImage: "url(" + "./assets/chainsaw-man.webp" + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "250px",
                  height: "250px",
                  aspectRatio: "1",
                }}
              ></div>
              <div className="slide-gen flex py-10 px-1">
                <div>AÇÃO</div>
                <div>SHOUNEN</div>
                <div>SOBRENATURAL</div>
              </div>
              <div className="slide-sinopse">
                Denji é um jovem extremamente pobre que junto de Pochita, seu
                demônio de estimação, trabalha feito um condenado como Caçador
                de Demônios para pagar a imensa dívida que possui. Mas sua vida
                de miséria está prestes a mudar graças a uma traição brutal!!
                Aqui começa a história de um novo...
              </div>

              <div className="flex py-6 px-1">
                <a className="slide-detalhes" href="">
                  +Detalhes
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="slide-icon absolute w-full flex justify-center"
          style={{
            fontSize: "26pt",
            marginTop: "-50px",
            color: "#FFF",
            bottom: "37px",
          }}
        >
          <div className="flex justify-center flex-col">
            <ChevronDoubleDownIcon style={{ height: "30px" }} />
            {/* <i className="bi bi-mouse floating-animation"></i> */}
          </div>
        </div>
      </div>

      <div className="container-fluid px-10" style={{ paddingTop: "9rem" }}>
        <div id="ep-legendados">
          <div className="title-area">
            <span>Episódios Legendados em Exibição</span>
            <span className="btn-mais">Ver Todos</span>
          </div>

          <div className="glide">
            <div className="glide-slide">
              <ul>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
              </ul>
              {/* <div className="glide-arrows">
                <button className="glide-arrow glide-arrow--left">
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button className="glide-arrow glide-arrow--rigth">
                  <i className="bi bi-chevron-left"></i>
                </button>
              </div> */}

              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                slidesOffsetAfter={30}
                slidesOffsetBefore={30}
                className="mySwiper"
              >
                <SwiperSlide>
                  <a href="">
                    <div className="zoom-img glide-poster">
                      <img src="./assets/bleach.jpg" alt="" />
                      <div className="name-poster">
                        <div>Bleach: Sennen Kessen-hen</div>
                        <div>EP: 11</div>
                      </div>
                      <div className="img-over"></div>
                    </div>
                  </a>
                </SwiperSlide>

                <SwiperSlide>
                  <a href="">
                    <div className="zoom-img glide-poster">
                      <img src="./assets/bleach.jpg" alt="" />
                      <div className="name-poster">
                        <div>Bleach: Sennen Kessen-hen</div>
                        <div>EP: 11</div>
                      </div>
                      <div className="img-over"></div>
                    </div>
                  </a>
                </SwiperSlide>

                <SwiperSlide>
                  <a href="">
                    <div className="zoom-img glide-poster">
                      <img src="./assets/bleach.jpg" alt="" />
                      <div className="name-poster">
                        <div>Bleach: Sennen Kessen-hen</div>
                        <div>EP: 11</div>
                      </div>
                      <div className="img-over"></div>
                    </div>
                  </a>
                </SwiperSlide>

                <SwiperSlide>
                  <a href="">
                    <div className="zoom-img glide-poster">
                      <img src="./assets/bleach.jpg" alt="" />
                      <div className="name-poster">
                        <div>Bleach: Sennen Kessen-hen</div>
                        <div>EP: 11</div>
                      </div>
                      <div className="img-over"></div>
                    </div>
                  </a>
                </SwiperSlide>

                <SwiperSlide>
                  <a href="">
                    <div className="zoom-img glide-poster">
                      <img src="./assets/bleach.jpg" alt="" />
                      <div className="name-poster">
                        <div>Bleach: Sennen Kessen-hen</div>
                        <div>EP: 11</div>
                      </div>
                      <div className="img-over"></div>
                    </div>
                  </a>
                </SwiperSlide>

                <SwiperSlide>
                  <a href="">
                    <div className="zoom-img glide-poster">
                      <img src="./assets/bleach.jpg" alt="" />
                      <div className="name-poster">
                        <div>Bleach: Sennen Kessen-hen</div>
                        <div>EP: 11</div>
                      </div>
                      <div className="img-over"></div>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
              <div style={{ position: "absolute" }}>
                  <button>teste</button>
                </div>
            </div>
          </div>
        </div>

        <div id="ep-dublados">
          <div className="title-area">
            <span>Episódios Dublados em Exibição</span>
            <span className="btn-mais">Ver Todos</span>
          </div>

          <div className="glide">
            <div className="glide-slide">
              <ul>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div id="ultimos-adicionados">
          <div className="title-area">
            <span>Últimos animes adicionados</span>
            <span className="btn-mais">Ver Todos</span>
          </div>

          <div className="glide">
            <div className="glide-slide">
              <ul>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
                <a href="">
                  <div className="zoom-img glide-poster">
                    <img src="./assets/bleach.jpg" alt="" />
                    <div className="name-poster">
                      <div>Bleach: Sennen Kessen-hen</div>
                      <div>EP: 11</div>
                    </div>
                    <div className="img-over"></div>
                  </div>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="plex-bg flex justify-center"
        style={{
          backgroundImage: "url(./assets/bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-20 pb-10">
          <div
            className="py-10 px-20 text-center uppercase"
            style={{
              borderTop: "2px solid #f2000d",
              background: "#00000042",
              maxWidth: "525px",
            }}
          >
            <div className="flex flex-col text-center justify-center">
              <div className="flex justify-center">
                <img src="./assets/logo.png" alt="" className="w-20 mb-4" />
              </div>
              <span>Assine o Saikô pass!</span>
              <span style={{ marginBottom: "1.25rem" }}>
                Desbloqueie todo o conteúdo do site e baixe ou assista nossos
                animes em qualquer dispositivo e em qualidade Full HD. Conheça a
                Saikô PLEX
              </span>

              <a href="/home" className="flex justify-center">
                <div className="ad-btn">Assinar</div>
              </a>
            </div>

            <div className="flex justify-center">
              <div className="icons-header my-6">Disponível em</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer flex justify-center mt-auto py-3 px-5">
        <div className="social flex">
          <i className="bi bi-youtube"></i>
          <i className="bi bi-youtube"></i>
          <i className="bi bi-youtube"></i>
        </div>
      </footer>
    </>
  );
}
