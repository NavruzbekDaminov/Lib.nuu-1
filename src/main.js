import React from 'react';
import {Link} from 'react-router-dom';
import {Parallax} from 'react-parallax';
import CountUp from 'react-countup';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import img1 from './img/unsplash_HDxZIoiuhYk.png'
import "./main.scss";
import Footer from "./components/footer";


function Main(props) {
    return (
        <>
            <div className="main">
                <div className="CaruselBox">
                    <img src="img/1.jpg" alt=""/>
                    <img src="img/2.jpg" alt=""/>
                    <img src="img/3.jpg" alt=""/>

                </div>
                <div className="box">
                    <div className="line">
                        <div className="navbar">
                            <a href="https://nuu.uz/" target="_blank">
                                <img src="./img/logo_Milliy.svg" alt=""/>
                            </a>
                            <div className="right">
                                <Link to="/Kitoblar">
                                    <button className='btn'>Kitoblar</button>
                                </Link>
                                <Link to="/Yangiliklar">
                                    <button className='btn'>Yangiliklar</button>
                                </Link>

                                <Link to="#">
                                    <button className='btn'>O'zbek</button>
                                </Link>
                                <Link to="/Kirish">
                                    <button className='btn'>Kirish</button>
                                </Link>

                            </div>
                        </div>
                        <div className="libLogo">
                            <img src="./img/logo_lib.svg" alt=""/>
                        </div>
                        <div className="serch">
                            <input className="" type="text" placeholder="Kitob qidiring"/>
                            <button className="btn">
                                <img src="./img/shape.svg" alt=""/>
                            </button>

                        </div>
                        <div className="title">
                            Mirzo ulug’bek nomidagi O’zbekiston milliy universiteti kutubxonosining rasmiy veb sayti, 70
                            mingdan ziyod elektron kitoblar mavjud.
                        </div>
                    </div>
                </div>
                <div className="Kitoblar">
                    <div className="title" align={"center"}>
                        Eng ko’p qidirilgan kitoblar
                    </div>
                    <hr/>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="Kitob_card">
                                <div className="boxcha">
                                    <div className="left">
                                        <img src="./img/Rectangle17.png" alt=""/>
                                    </div>
                                    <div className="right">
                                        <div className="title">Maks fray</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                            assumenda commodi consequatur, dicta dignissimos dolor est exercitationem
                                            expedita hic inventore ipsam labore !
                                        </p>
                                        <img src="./img/QR_code_for_mobile_English_Wikipedia.svg.png" alt=""/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="downloadFooter">
                                    <div className="left">
                                        <img src="./img/Group5.png" alt=""/>
                                        <span>101</span> yuklab olingan
                                    </div>
                                    <div className="right">
                                        <button className="btn">Yuklab olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="Kitob_card">
                                <div className="boxcha">
                                    <div className="left">
                                        <img src="./img/Rectangle22.png" alt=""/>
                                    </div>
                                    <div className="right">
                                        <div className="title">Moy put</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                            assumenda commodi consequatur, dicta dignissimos dolor est exercitationem !
                                        </p>
                                        <img src="./img/QR_code_for_mobile_English_Wikipedia.svg.png" alt=""/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="downloadFooter">
                                    <div className="left">
                                        <img src="./img/Group5.png" alt=""/>
                                        <span>101</span> yuklab olingan
                                    </div>
                                    <div className="right">
                                        <button className="btn">Yuklab olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="Kitob_card">
                                <div className="boxcha">
                                    <div className="left">
                                        <img src="./img/Rectangle17.png" alt=""/>
                                    </div>
                                    <div className="right">
                                        <div className="title">Maks fray</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                            assumenda commodi consequatur, dicta dignissimos dolor est exercitationem
                                            expedita hic inventore ipsam labore !
                                        </p>
                                        <img src="./img/QR_code_for_mobile_English_Wikipedia.svg.png" alt=""/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="downloadFooter">
                                    <div className="left">
                                        <img src="./img/Group5.png" alt=""/>
                                        <span>101</span> yuklab olingan
                                    </div>
                                    <div className="right">
                                        <button className="btn">Yuklab olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="Kitob_card">
                                <div className="boxcha">
                                    <div className="left">
                                        <img src="./img/Rectangle22.png" alt=""/>
                                    </div>
                                    <div className="right">
                                        <div className="title">Moy put</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                            assumenda commodi consequatur, dicta dignissimos dolor est exercitationem !
                                        </p>
                                        <img src="./img/QR_code_for_mobile_English_Wikipedia.svg.png" alt=""/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="downloadFooter">
                                    <div className="left">
                                        <img src="./img/Group5.png" alt=""/>
                                        <span>101</span> yuklab olingan
                                    </div>
                                    <div className="right">
                                        <button className="btn">Yuklab olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="Kitob_card">
                                <div className="boxcha">
                                    <div className="left">
                                        <img src="./img/Rectangle17.png" alt=""/>
                                    </div>
                                    <div className="right">
                                        <div className="title">Maks fray</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                            assumenda commodi consequatur, dicta dignissimos dolor est exercitationem
                                            expedita hic inventore ipsam labore !
                                        </p>
                                        <img src="./img/QR_code_for_mobile_English_Wikipedia.svg.png" alt=""/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="downloadFooter">
                                    <div className="left">
                                        <img src="./img/Group5.png" alt=""/>
                                        <span>101</span> yuklab olingan
                                    </div>
                                    <div className="right">
                                        <button className="btn">Yuklab olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="Kitob_card">
                                <div className="boxcha">
                                    <div className="left">
                                        <img src="./img/Rectangle22.png" alt=""/>
                                    </div>
                                    <div className="right">
                                        <div className="title">Moy put</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                            assumenda commodi consequatur, dicta dignissimos dolor est exercitationem !
                                        </p>
                                        <img src="./img/QR_code_for_mobile_English_Wikipedia.svg.png" alt=""/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="downloadFooter">
                                    <div className="left">
                                        <img src="./img/Group5.png" alt=""/>
                                        <span>101</span> yuklab olingan
                                    </div>
                                    <div className="right">
                                        <button className="btn">Yuklab olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn barchasi">
                            <Link to="/Kitoblar"> Barchasini korish</Link>
                        </button>
                    </div>
                </div>

                <Parallax bgImage={img1} className="parallax" strength={300}>
                    <div className="statistika">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <CountUp
                                        start={0}
                                        end={695}
                                        delay={0}
                                        duration={3}
                                    >

                                        {({countUpRef}) => (
                                            <p className="CountUp" ref={countUpRef}></p>
                                        )}
                                    </CountUp>
                                    <p className="barcha">Umumiy kitobxonlar soni</p>
                                </div>
                                <div className="col-3">
                                    <CountUp
                                        start={0}
                                        end={753}
                                        delay={0}
                                        duration={3}
                                    >

                                        {({countUpRef}) => (

                                            <p className="CountUp" ref={countUpRef}></p>
                                        )}
                                    </CountUp>
                                    <p className="barcha">Axborat-resurs markazi fondi</p>
                                </div>
                                <div className="col-3">
                                    <CountUp
                                        start={0}
                                        end={813}
                                        delay={0}
                                        duration={3}
                                    >

                                        {({countUpRef}) => (

                                            <p className="CountUp" ref={countUpRef}></p>
                                        )}
                                    </CountUp>
                                    <p className="barcha">Elektron resurslar soni</p>
                                </div>
                                <div className="col-3">
                                    <CountUp
                                        start={0}
                                        end={561}
                                        delay={0}
                                        duration={3}
                                    >

                                        {({countUpRef}) => (

                                            <p className="CountUp" ref={countUpRef}></p>
                                        )}
                                    </CountUp>
                                    <p className="barcha">Eng ko'p resurslar</p>
                                </div>
                            </div>
                        </div>
                        <div className="numberStatic"></div>
                    </div>
                </Parallax>

                <div className="galereya">Foto Galereya</div>

                <OwlCarousel
                    className="owl-theme"
                    items="3"
                    autoplay={true}
                    autoplayTimeout="2000"
                    nav={false}
                    loop={true}
                    dots={false}
                >
                    <div className="item">
                        <img src="./img/galerey1.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="./img/galerey2.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="./img/galerey3.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="./img/galerey4.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="./img/galerey5.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="./img/galerey6.png" alt=""/>
                    </div>

                </OwlCarousel>

            </div>
            <Footer/>
        </>

    );
}

export default Main;