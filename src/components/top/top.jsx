// import '../../reset.scss';
import { useEffect, useState } from 'react';
import styles from './top.module.scss'


const Top = () => {

    const [screen, setScreen] = useState(window.innerWidth)

    useEffect(()=>{
        function handle_resize(){
            setScreen(window.innerWidth)
            
        }

        window.addEventListener('resize', handle_resize)

        return () => {
            window.removeEventListener('resize', handle_resize)
        }
    }, [])

    return ( 
        <section className={styles.top}>
        <div className={styles.top__left}>
            <div className={styles.title}>
                <h1 className={styles.title_main}>Provide excellent <span>customer</span> service</h1>
                <h2 className={styles.title_secondary}>Answer more tickets with <br /> all-in-one help desk software.</h2>

                <div className={styles.title_features}>
                    <div>
                        <h3 className={styles.title_tertiary}>✓ No setup fee</h3>
                        <h3 className={styles.title_tertiary}>✓ Customer service 24/7</h3>
                    </div>

                    <div>
                        <h3 className={styles.title_tertiary}>✓ No credit card required</h3>
                        <h3 className={styles.title_tertiary}>✓ Cancel any time</h3>
                    </div>

                </div>
            </div>
            <div className={styles.pitch_buttons}>
                <button className="btn-main"> Get Started  |  14 days free</button>
                <img src="./Play.png" alt="" />
                <h3> See it in Action</h3>

            </div>

            <div className={styles.pitch_logos_text}>
                <h3>Used by</h3>
            </div>
            <div className={styles.pitch_logos}>
                {
                    screen > 1560 ?
                    <>
                        <div className="used-by-wrapper"><img src="./Airbus.png" alt="" className="used-by-image"></img></div>
                        <div className="used-by-wrapper"><img src="./Forbes.png" alt="" className="used-by-image"></img></div>
                        <div className="used-by-wrapper"><img src="./Nascar.png" alt="" className="used-by-image"></img></div>
                        <div className="used-by-wrapper"><img src="./USC.png" alt="" className="used-by-image"></img></div>
                    </>
                    :
                    <>
                        <div className={styles.pitch_logos_wrapper}>
                            <div className="used-by-wrapper"><img src="./Airbus.png" alt="" className="used-by-image"></img></div>
                            <div className="used-by-wrapper"><img src="./Forbes.png" alt="" className="used-by-image"></img></div>
                        </div>
                        <div className={styles.pitch_logos_wrapper}>
                            <div className="used-by-wrapper"><img src="./Nascar.png" alt="" className="used-by-image"></img></div>
                            <div className="used-by-wrapper"><img src="./USC.png" alt="" className="used-by-image"></img></div>
                        </div>
                    </>
                }
            </div>
        </div>

        <div className={styles.top__right}>
            <div className={styles.chat_bubbles}>
                <div>
                    <img className={styles.agent_photo} src="./fotka.png" alt=""></img>
                    <div className={styles.bubble_agent}>Hello, I'm John, how may I help you?</div>
                </div>
                <div>
                    <div className={styles.bubble_customer}>I'd like to check my order status</div>
                </div>
                <div>
                    <img className={styles.agent_photo} src="./fotka.png" alt=""></img>
                    <div className={styles.bubble_agent}>No problem, please provide me with your order ID.</div>
                </div>
                <div>
                    <div className={`${styles.bubble_customer} ${styles.bubble_customer_small}`}>My order ID is GQ34566</div>
                </div>
                <div>
                    <img className={styles.agent_photo} src="./fotka.png" alt=""></img>
                    <div className={styles.typing}> <span>.</span> <span>.</span> <span>.</span> </div>
                </div>
            </div>

            <div className={styles.hero_wrapper}>
                {/* <img src="./hero.jpg" alt="" className="hero-image"></img> */}
            </div>
        </div>
    </section> );
}
 
export default Top;