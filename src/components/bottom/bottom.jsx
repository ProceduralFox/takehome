import styles from './bottom.module.scss';

const Bottom = () => {
    return ( 
    <section className={styles.bottom}>
        <div className={styles.bottom_left}>
            <div className={styles.left_first}>
                <h2>Pioneering software</h2>
                <h1>Did you know?</h1>
                <p>Established in 2006, LiveAgent was the first solution on the market to offer live chat and help desk capabilities. As of 2021, LiveAgent is the best rated and most reviewed help desk solution on the market, serving over 150 million users and 40,000 businesses worldwide.</p>
            </div>

            <div className={styles.left_second}>
                <img className={styles.elemnts} src="./elements.png" alt="" />
                <img className={styles.graph }src="./graph.png" alt="" />
            </div>
        </div>


        <div className={styles.bottom_right}>
            <div>
                <div className={styles.benefit_card}>
                    <h1>30%</h1>
                    <div>
                        <h2>Generate more revenues</h2>
                        <p>Create memorable customer experiences that boost revenue.</p>
                    </div>
                </div>
                <div className={styles.benefit_card}> 
                    <h1>97%</h1>
                    <div>
                        <h2>Improve satisfaction</h2>
                        <p>Delight your customers with lighting-fast respones.</p>
                    </div>
                </div>
                <div className={styles.benefit_card}>
                    <h1>16%</h1>
                    <div>
                        <h2>Boost customer value</h2>
                        <p>Make more sales by keeping your customers loyal to your brand</p>
                    </div>
                </div>
            </div>

            <button>Make your business goals a reality</button>
        </div>
    </section> );
}
 
export default Bottom;