import styles from './mid.module.scss'

const Mid = () => {
    return ( 
    <section className={styles.mid}>
        <div className={styles.mid_left}>
            <h3>Best price</h3>
            <h1>A fair knoweldge base software</h1>
            <p>Creating your own knowledge center doesn’t have to be an expensive feat. LiveAgent offers multiple pricing plans that cater to all support needs. Get our standalone knowledge base software with the least expensive plan or take a look at other plans that offer additional features.</p>
            <button>Pricing</button>
        </div>
        <div className={styles.mid_right}>
            <div className={styles.pricing_card}>
                <div>
                    <img src="./ticket.svg" class={styles.ticket}alt="" />
                    <h2>Ticket</h2>
                    <p>For Small Businesses <br /> and Entrepreneurs</p>
                    <h3>15$ / mo</h3>
                    <button> Try it</button>
                </div>
            </div>
            <div className={styles.pricing_card}>
                <div>
                    <img src="./ticket_chat.svg" alt="" />
                    <h2>Ticket+Chat</h2>
                    <p>For Medium-sized <br /> Businesses and <br /> Professional Agencies</p>
                    <h3>29$ / mo</h3>
                    <button> Try it</button>
                </div>
            </div>
        </div>
    </section> );
}
 
export default Mid;