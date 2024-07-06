import styles from './home-card.module.scss';

export default function HomeCard() {
    return <div className={`${styles.home_card} d-flex flex-column align-items-center justify-content-center gap-2 px-2 w-[30%]`}>
        <figure>
            <span className={styles.home_card_avatar}></span>
        </figure>
        <p className='font-manrope text-[#767C8C] font-[400] text-[16px] leading-[22px] text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only t</p>
    </div>
}