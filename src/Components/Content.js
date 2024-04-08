import React from 'react'
import PlayStationPlus from '../icon/img.webp';
import facebook from '../icon/facebook.webp'
import instagram from '../icon/instagram.webp'
import youtube from '../icon/youtube.webp'
import twitter from '../icon/twitter.webp'
function Content() {



    return (
        <section className='overlay'>
            {/* <div className='darkOverlay'></div> */}
            <div className='darkOverlay2'></div>
            <picture className='spooder'>
                <source
                    srcSet="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-story-trailer-homepage-hero-banner-desktop-01-en-18jul23?$4000px$"
                    media="(min-width: 3000px)"
                />
                <source
                    srcSet="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-story-trailer-homepage-hero-banner-desktop-01-en-18jul23?$3200px$"
                    media="(min-width: 1920px)"
                />
                <source
                    srcSet="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-story-trailer-homepage-hero-banner-desktop-01-en-18jul23?$2400px$"
                    media="(min-width: 1367px)"
                />
                <source
                    srcSet="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-story-trailer-homepage-hero-banner-desktop-01-en-18jul23?$1600px$"
                    media="(min-width: 1024px)"
                />
                <source
                    srcSet="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-story-trailer-homepage-hero-banner-desktop-01-en-18jul23?$1200px$"
                    media="(min-width: 768px)"
                />
                <source
                    srcSet="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-story-trailer-homepage-hero-banner-mobile-01-en-18jul23?$800px$"
                    media="(min-width: 320px)"
                />
                <img
                    src="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-story-trailer-homepage-hero-banner-desktop-01-en-18jul23?$4000px$"
                    className="spidermanImage"
                    alt="Descriptive text for the image"
                />
            </picture>
            <div className="content-overlay">
                <picture className="marvelImageContainer">
                    <source
                        srcSet="https://gmedia.playstation.com/is/image/SIEPDC/marvels-spider-man-2-logo-02-en-02dec22?$1200px--t$"
                        media="(min-width: 768px)"
                    />
                    <source
                        srcSet="https://gmedia.playstation.com/is/image/SIEPDC/marvels-spider-man-2-logo-02-en-02dec22?$800px--t$"
                        media="(min-width: 320px)"
                    />
                    <img
                        className="marvelImage"
                        src="https://gmedia.playstation.com/is/image/SIEPDC/marvels-spider-man-2-logo-02-en-02dec22?$800px--t$"
                        alt="Marvel Image"
                    />
                </picture>
                <h2 className="content-overlay-heading">"We're going to heal the world"</h2>
                <p className="content-overlay-para">
                    Catch up with Peter Parker & Miles Morales in the brand new story
                    trailer for Marvel's Spider-Man 2, coming to PS5 on October 20
                </p>
                <button type="button" className="btn btn-danger">Find out more</button>
            </div>
            {/*  fourth section  cards} */}
            <section className="card_section">
                <div className="card_section-cards">
                    <div>
                        <picture>
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/ps5-promotion-wave-2-keyart-01-en-14jul23?$1200px$
              "
                                media="(min-width: 768px)" />
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/ps5-promotion-wave-2-keyart-01-en-14jul23?$800px$
              "
                                media="(min-width: 320px)" />
                            <noscript
                            ><img
                                    src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-promotion-wave-2-keyart-01-en-14jul23?$100px$"
                                    alt="PS5 Console"
                                /></noscript>
                            <img alt="PS5 Console"
                            /></picture>
                    </div>

                    <div>
                        <picture>
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/summer-sale-keyart-01-10jul23$en-in?$1200px$
              "
                                media="(min-width: 768px)"
                            />
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/summer-sale-keyart-01-10jul23$en-in?$800px$
              "
                                media="(min-width: 320px)"
                            />
                            <noscript
                            ><img
                                    itemprop="contentUrl"
                                    src="https://gmedia.playstation.com/is/image/SIEPDC/summer-sale-keyart-01-10jul23$en-in?$100px$"
                                    alt="Summer Sale Promo keyart"
                                /></noscript>
                            <img alt="Summer Sale Promo keyart" />
                        </picture>
                    </div>

                    <div>
                        <picture>
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-story-trailer-keyart-01-en-18jul23?$1200px$
              "
                                media="(min-width: 768px)"
                            />
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-story-trailer-keyart-01-en-18jul23?$800px$
              "
                                media="(min-width: 320px)"
                            />
                            <noscript
                            ><img
                                    itemprop="contentUrl"
                                    src="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-story-trailer-keyart-01-en-18jul23?$100px$"
                                    alt="Spiderman 2 Key art"
                                /></noscript>
                            <img alt="Spiderman 2 Key art" />
                        </picture>
                    </div>

                    <div>
                        <picture>
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/21-games-keyart-01-07jun23$en?$1200px$
              "
                                media="(min-width: 768px)"
                            />
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/21-games-keyart-01-07jun23$en?$800px$
              "
                                media="(min-width: 320px)"
                            />
                            <noscript
                            ><img
                                    itemprop="contentUrl"
                                    src="https://gmedia.playstation.com/is/image/SIEPDC/21-games-keyart-01-07jun23$en?$100px$"
                                    alt="Games you might have missed keyart"
                                /></noscript>
                            <img alt="Games you might have missed keyart" />
                        </picture>
                    </div>

                    <div>
                        <picture>
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/diablo-iv-s1-keyart-01-en-18jul23?$1200px$
              "
                                media="(min-width: 768px)" />
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/diablo-iv-s1-keyart-01-en-18jul23?$800px$
              "
                                media="(min-width: 320px)" />
                            <noscript
                            ><img
                                    itemprop="contentUrl"
                                    src="https://gmedia.playstation.com/is/image/SIEPDC/diablo-iv-s1-keyart-01-en-18jul23?$100px$"
                                    alt="Diablo IV - Season 1 keyart"
                                /></noscript>
                            <img alt="Diablo IV - Season 1 keyart"
                            /></picture>
                    </div>

                    <div>
                        <picture>
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/GranTurismo-DOM-Keyart-01-18jul23$en?$1200px$
              "
                                media="(min-width: 768px)" />
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/GranTurismo-DOM-Keyart-01-18jul23$en?$800px$
              "
                                media="(min-width: 320px)" />
                            <noscript
                            ><img
                                    itemprop="contentUrl"
                                    src="https://gmedia.playstation.com/is/image/SIEPDC/GranTurismo-DOM-Keyart-01-18jul23$en?$100px$"
                                    alt="Gran Turismo keyart"
                                /></noscript>
                            <img alt="Gran Turismo keyart"
                            /></picture>
                    </div>

                    <div>
                        <picture>
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/firewall-ultra-digital-deluxe-keyart-01-14jul23$en?$1200px$
              "
                                media="(min-width: 768px)" />
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/firewall-ultra-digital-deluxe-keyart-01-14jul23$en?$800px$
              "
                                media="(min-width: 320px)" />
                            <noscript
                            ><img
                                    itemprop="contentUrl"
                                    src="https://gmedia.playstation.com/is/image/SIEPDC/firewall-ultra-digital-deluxe-keyart-01-14jul23$en?$100px$"
                                    alt="Blackout Keyart"
                                /></noscript>
                            <img alt="Blackout Keyart"
                            /></picture>
                    </div>

                    <div>
                        <picture>
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/access-controller-keyart-01-en-19jun23?$1200px$
              "
                                media="(min-width: 768px)" />
                            <source
                                srcSet="
                https://gmedia.playstation.com/is/image/SIEPDC/access-controller-keyart-01-en-19jun23?$800px$
              "
                                media="(min-width: 320px)" />
                            <noscript
                            ><img
                                    itemprop="contentUrl"
                                    src="https://gmedia.playstation.com/is/image/SIEPDC/access-controller-keyart-01-en-19jun23?$100px$"
                                    alt="Access controller key art"
                                /></noscript>
                            <img alt="Access controller key art"
                            /></picture>
                    </div>
                </div>
            </section>

            <section className='ps5'>
                <div className='ps5Head'>
                    <h1>Introducing the PS5 console and accessories</h1>
                    <h3>PlayStation 5 Console</h3>
                    <p>Experience an-all new generation of incredible PlayStation games.</p>
                    <button type='button' className='btn btn-primary'>Find out more</button>
                </div>
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-disc-console-featured-hardware-image-block-02-en-15nov23?$1600px$" alt="PS5" />
            </section>

            <section className='games'>
                <h1>Great PS4 & PS5 games out now or coming soon</h1>
                <button className='switch'>
                    <button type='button' className='new' autoFocus>New Releases</button>
                    <button type='button' className='soon'>Coming Soon</button>
                </button>

                <section className='cards'>
                    <div className='gameCard'>
                        <img src="http://127.0.0.1:5501/new%20releases/image2.webp" alt="Diablo IV" />
                        <p>Diablo IV</p>
                    </div>
                    <div className='gameCard'>
                        <img src="https://gmedia.playstation.com/is/image/SIEPDC/dragons-dogma-2-store-artwork-03-en-18jan23" alt="Diablo IV" />
                        <p>Dragon's Dogma 2</p>
                    </div>
                    <div className='gameCard'>
                        <img src="https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-store-artwork-01-en-14jun23" alt="Diablo IV" />
                        <p>Tekken 8</p>
                    </div>
                    <div className='gameCard'>
                        <img src="https://gmedia.playstation.com/is/image/SIEPDC/The-last-of-us-part-ii-remastered-packshot-01-26feb24$en" alt="Diablo IV" />
                        <p>The Last of Us Part-2</p>
                    </div>
                    <div className='gameCard'>
                        <img src="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-listing-thumb-01-09sep21$en" alt="Diablo IV" />
                        <p>God of War Ragnarok</p>
                    </div>
                    <div className='gameCard'>
                        <img src="https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-modern-warfare-3-pack-01-en-22aug23" alt="Diablo IV" />
                        <p>Call of Duty: Modern Warfare III</p>
                    </div>
                    <div className='gameCard'>
                        <img src="https://gmedia.playstation.com/is/image/SIEPDC/suicide-squad-KtJL-storeart-01-en-9dec21" alt="Diablo IV" />
                        <p>Suicide Squad</p>
                    </div>
                    <div className='gameCard'>
                        <img src="https://gmedia.playstation.com/is/image/SIEPDC/final-fantasy-xvi-pack-01-en-15jun23" alt="Diablo IV" />
                        <p>Final Fantasy XVI</p>
                    </div>
                    <div className='gameCard'>
                        <img src="https://gmedia.playstation.com/is/image/SIEPDC/marvels-spider-man-2-thumbnail-02-en-01oct21" alt="Diablo IV" />
                        <p>Spider-Man 2</p>
                    </div>
                    <div className='gameCard'>
                        <img src="https://gmedia.playstation.com/is/image/SIEPDC/lego-fortnite-pack-01-en-01dec23" alt="Diablo IV" />
                        <p>Lego Fortnite</p>
                    </div>
                </section>
            </section>

            <section className='psPlus'>
                <img src={PlayStationPlus} alt="PS Plus" />
                <h1>Discover Playstation Plus</h1>
                <p>Play hundreds of incredible PS5, PS4 and classic PlayStation games, and discover epic adventures, unique indies, family favourites, and everything in between.</p>

                <div className="carousel-slide">
                    <button className="carousel-control-prev" type="button" data-bs-target="#Indicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <div className="carouselInner">
                        <div className="carousel-item active">
                            <div className='card'>
                                <div className='text'>
                                    <h5>Premium</h5>
                                    <h4>PlayStation Plus Premium</h4>
                                    <p>Enjoy all the PlayStation Plus benefits from the Extra and Essential plans, plus exclusive benefits like game trials, cloud streaming, and Classics Catalogue.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='card'>
                                <div className='text'>
                                    <h5>Premium</h5>
                                    <h4>PlayStation Plus Premium</h4>
                                    <p>Enjoy all the PlayStation Plus benefits from the Extra and Essential plans, plus exclusive benefits like game trials, cloud streaming, and Classics Catalogue.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='card'>
                                <div className='text'>
                                    <h5>Premium</h5>
                                    <h4>PlayStation Plus Premium</h4>
                                    <p>Enjoy all the PlayStation Plus benefits from the Extra and Essential plans, plus exclusive benefits like game trials, cloud streaming, and Classics Catalogue.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-next" type="button" data-bs-target="#Indicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="carouselIndicators">
                    <button type="button" data-bs-target="#Indicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#Indicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#Indicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <button type="button" className="discover">Dicover PlayStation Plus</button>

            </section>

            <section className='VR'>
                <div className='text'>
                    <h1>Feel a New Real</h1>
                    <p>Immerse yourself in an epic world that go beyond reality, with the groundbreaking PlayStation VR2 headset and the PlayStation VR2 Sense controller</p>
                    <div className='xyz'>
                        <button type='button' className='find'>Find out more</button>
                        <button type='button' className='buy'>Buy now</button>
                    </div>
                </div>
            </section>

            <section className='thisMonth'>
                <div className='tmonth'>
                    <div className='month'>
                        <h1 className='this'>This Month</h1>
                        <h1>On PlayStation</h1>
                        <p>Check out this month's biggest releases along with dedicated features, guides and more</p>
                        <button type='button'>Find out more</button>
                    </div>
                </div>

                <section class="eigth-section-cards">
                    <div class="eigth-section-cards-card-1">
                        <picture>
                            <source
                                srcset="
              https://gmedia.playstation.com/is/image/SIEPDC/21-games-keyart-01-07jun23$en?$1600px$
            "
                                media="(min-width: 1024px)" />

                            <source
                                srcset="
              https://gmedia.playstation.com/is/image/SIEPDC/21-games-keyart-01-07jun23$en?$1200px$
            "
                                media="(min-width: 768px)" />

                            <source
                                srcset="
              https://gmedia.playstation.com/is/image/SIEPDC/21-games-keyart-01-07jun23$en?$800px$
            "
                                media="(min-width: 320px)" />
                            <noscript
                            ><img
                                    itemprop="contentUrl"
                                    src="https://gmedia.playstation.com/is/image/SIEPDC/21-games-keyart-01-07jun23$en?$100px$"
                                    alt="Artwork compilation featuring key art from Like A Dragon: Ishin!, Humanity, Moss: Book II, One Piece Odyssey, Dead Island 2 and POST VOID."
                                /></noscript>
                            <img
                                alt="Artwork compilation featuring key art from Like A Dragon: Ishin!, Humanity, Moss: Book II, One Piece Odyssey, Dead Island 2 and POST VOID."
                            /></picture>
                        <p>21 great games you might've missed in 2023</p>
                    </div>
                    <div class="eigth-section-cards-card-2">
                        <picture>
                            <source
                                srcset="
              https://gmedia.playstation.com/is/image/SIEPDC/best-fighting-games-keyart-02-en-27jun23?$1600px$
            "
                                media="(min-width: 1024px)" />

                            <source
                                srcset="
              https://gmedia.playstation.com/is/image/SIEPDC/best-fighting-games-keyart-02-en-27jun23?$1200px$
            "
                                media="(min-width: 768px)" />

                            <source
                                srcset="
              https://gmedia.playstation.com/is/image/SIEPDC/best-fighting-games-keyart-02-en-27jun23?$800px$
            "
                                media="(min-width: 320px)" />
                            <noscript
                            ><img
                                    itemprop="contentUrl"
                                    src="https://gmedia.playstation.com/is/image/SIEPDC/best-fighting-games-keyart-02-en-27jun23?$100px$"
                                    alt="Original artwork for the PlayStation fighting games collection."
                                /></noscript>
                            <img
                                alt="Original artwork for the PlayStation fighting games collection."
                            /></picture>
                        <p>The best fighting games on PS4 and PS5</p>
                    </div>
                    <div class="eigth-section-cards-card-3">
                        <picture>
                            <source
                                srcset="
              https://gmedia.playstation.com/is/image/SIEPDC/single-player-action-keyart-01-en-21oct22?$1600px$
            "
                                media="(min-width: 1024px)" />

                            <source
                                srcset="
              https://gmedia.playstation.com/is/image/SIEPDC/single-player-action-keyart-01-en-21oct22?$1200px$
            "
                                media="(min-width: 768px)" />

                            <source
                                srcset="
              https://gmedia.playstation.com/is/image/SIEPDC/single-player-action-keyart-01-en-21oct22?$800px$
            "
                                media="(min-width: 320px)" />
                            <noscript
                            ><img
                                    itemprop="contentUrl"
                                    src="https://gmedia.playstation.com/is/image/SIEPDC/single-player-action-keyart-01-en-21oct22?$100px$"
                                    alt="Best single player games promotional artwork featuring key art from Horizon Forbidden West, God of War Ragnarök and The Last of Us Part I."
                                /></noscript>
                            <img
                                alt="Best single player games promotional artwork featuring key art from Horizon Forbidden West, God of War Ragnarök and The Last of Us Part I."
                            /></picture>
                        <p>Best single-player story-driven games on PS4 and PS5</p>
                    </div>
                </section>
            </section>

            <section className='social' >
                <h1>Follow us on social media</h1>
                <div className='follow'>
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
                    <img src={youtube} alt="youtube" />
                </div>
            </section>
        </section >


    )
}

export default Content