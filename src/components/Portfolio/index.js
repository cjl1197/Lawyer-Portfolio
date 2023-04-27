import './index.scss';
import React from 'react';
import CPlusPlus from '../../assets/images/PrisonBreak.png';
import HTML from '../../assets/images/HTML_UI.png';
import VB from '../../assets/images/Yahtzee_UI.png';
import Javascript from '../../assets/images/LotteryGame.png';
import ReactImg from '../../assets/images/MemoryGame_UI.png';
import SQL from '../../assets/images/sql_ui.png';
import AndroidUI from '../../assets/images/SafeTowing_UI.png';
import PHPImg from '../../assets/images/PHP_UI.png';
import Unity from '../../assets/images/Unity_UI.png';

const Portfolio = () => { 




    return (
        <>
            <div className="scrollable-container">
            <div className="container portfolio-page">
                <h1 className="page-title">
                   Portfolio
                </h1>
                <div className="images-container">
                    <div className='image-box image-box-1'>
                        <img 
                            className="img-cplusplus" 
                            src={CPlusPlus}
                            alt="c++ code snippet"
                        />
                        <div className='content'>
                            <p>Prison Escape</p>
                            <h4 className='description'>Zork like text based
                                game using C++.</h4>
                            <button
                                className='btn'
                                onClick={() => window.open('https://github.com/cjl1197/PrisonEscape')}
                            >Link</button>
                        </div>
                    </div>
                    <div className='image-box image-box-2'>
                        <img 
                            className="img-html" 
                            src={HTML}
                            alt="html code snippet"
                        />
                        <div className='content'>
                            <p>Registration Form</p>
                            <h4 className='description'>HTML and CSS.</h4>
                            <button
                                className='btn'
                                onClick={() => window.open('https://github.com/cjl1197/HTML-Assignment')}
                            >Link</button>
                        </div>
                    </div>
                    <div className='image-box image-box-3'>
                    <div className='test'>
                        <img 
                            className="img-vb" 
                            src={VB}
                            alt="visual basic code snippet"
                        />
                        </div>
                        <div className='content'>
                            <p>Yahtzee Game</p>
                            <h4 className='description'>Game was programmed using Visual Basic.</h4>
                            <button
                                className='btn'
                                onClick={() => window.open('https://github.com/cjl1197/Yahtzee-Game')}
                            >Link</button>
                        </div>
                    </div>
                     <div className='image-box image-box-4'>
                    <div className='test'>
                        <img 
                            className="img-javascript" 
                            src={Javascript}
                            alt="javascript code snippet"
                        />
                        </div>
                        <div className='content'>
                            <p>Lottery Game</p>
                            <h4 className='description'>Game was programmed html and javascript.</h4>
                            <button
                                className='btn'
                                onClick={() => window.open('https://github.com/cjl1197/Lottery')}
                            >Link</button>
                        </div>
                    </div>
                     <div className='image-box image-box-5'>
                    <div className='test'>
                        <img 
                            className="img-react" 
                            src={ReactImg}
                            alt="react code snippet"
                        />
                        </div>
                        <div className='content'>
                            <p>Memory Game</p>
                            <h4 className='description'>Game was programmed using react. </h4>
                            <button
                                className='btn'
                                onClick={() => window.open('https://github.com/cjl1197/Memory')}
                            >Link</button>
                        </div>
                    </div>
                    <div className='image-box image-box-6'>
                    <div className='test'>
                        <img 
                            className="img-sql" 
                            src={SQL}
                            alt="mysql code snippet"
                        />
                        </div>
                        <div className='content'>
                            <p>MySql</p>
                            <h4 className='description'>Database manipulation with sql statements. </h4>
                            <button
                                className='btn'
                                onClick={() => window.open('https://github.com/cjl1197/SQL')}
                            >Link</button>
                        </div>
                    </div>
                    <div className='image-box image-box-7'>
                    <div className='test'>
                        <img 
                            className="img-php" 
                            src={PHPImg}
                            alt="php code snippet"
                        />
                        </div>
                        <div className='content'>
                            <p>Insert Form</p>
                            <h4 className='description'>Programmed with html and php to insert into a mysql database. </h4>
                            <button
                                className='btn'
                                onClick={() => window.open('https://lawyer-php-portfolio.000webhostapp.com/')}
                            >Link</button>
                        </div>
                    </div>
                    <div className='image-box image-box-8'>
                    <div className='test'>
                        <img 
                            className="img-android" 
                            src={AndroidUI}
                            alt="Android app screenshot"
                        />
                        </div>
                        <div className='content'>
                            <p>Tow Safe</p>
                            <h4 className='description'>Android app programmed with React Native using Expo. </h4>
                            <button
                                className='btn'
                                onClick={() => window.open('https://github.com/cjl1197/Tow-Safe')}
                            >Link</button>
                        </div>
                    </div>
                     <div className='image-box image-box-9'>
                    <div className='test'>
                        <img 
                            className="img-unity" 
                            src={Unity}
                            alt="unity aim trainer screenshot"
                        />
                        </div>
                        <div className='content'>
                            <p>Aim Trainer</p>
                            <h4 className='description'>Unity and C#. </h4>
                            <button
                                className='btn'
                                onClick={() => window.open('https://drive.google.com/file/d/1KQiYci01U1yQWyAljIlKLJ6s7D5jM0s-/view?usp=share_link')}
                            >Download</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Portfolio;