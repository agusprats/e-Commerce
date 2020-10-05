import React from 'react';
import "./Home.css";
import Product from './Product';
import Fade from 'react-reveal/Fade';

function Home (){

    return (
    
        <div className="home">
            <div className="home__container">

        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg" class="d-block w-100" alt="..."/>
            </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>

            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
        </div>

            <Fade bottom>
            <div className="home__row">
                <Product 
                id="12121212"
                title=" Apple MacBook Air (13-inch, 8GB RAM, 512GB SSD Storage) - Golden (Latest Model) "
                price={1299}
                image="/images/1.jpg"
                rating={5}/>

                <Product 
                id="13187613"
                title="Apple MacBook Air (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray (Latest Model)"
                price={1244}
                image="/images/2.jpg"
                rating={5}/>
                
            </div>

            <div className="home__row">
            <Product  
                id="1222313"
                title="Apple MacBook Pro MF839LL/A 128GB Flash Storage - 8GB LPDDR3"
                price={809}
                image="/images/3.jpg"
                rating={5}/>

            <Product 
                id="131111"
                title="Apple 15in MacBook Pro, 16GB RAM, 512GB SSD, Space Gray"
                price={1674}
                image="/images/4.jpg"
                rating={5}/>

            <Product 
                id="1222313"
                title="Apple MacBook Pro MF839LL/A 128GB Flash Storage - 8GB LPDDR3"
                price={769}
                image="/images/5.jpg"
                rating={5}/>
            </div>

            <div className="home__row">
            <Product 
                id="1553353"
                title=" New Apple iMac (21.5-inch, 8GB RAM, 256GB SSD Storage) "
                price={1099}
                image="/images/6.jpg"
                rating={5}/>
            <Product 
                id="3161741"
                title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 512GB SSD Storage)"
                price={1869}
                image="/images/7.jpg"
                rating={5}/>
            </div>

            <div className="home__row">
            <Product 
                id="1553353"
                title=" New Apple iMac (27.5-inch, 8GB RAM, 512GB SSD Storage) "
                price={1899}
                image="/images/8.jpg"
                rating={5}/>
                </div>

                </Fade>
                
            </div>
        </div>
    );
}

export default Home;


