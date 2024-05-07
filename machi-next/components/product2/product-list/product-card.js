import React from 'react';
import Link from 'next/link';
import styles from './product.module.scss';
import Image from 'next/image';
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5';

export default function ProductCard({ product }) {
    const imageUrl = `/images/product/card/${product.id + 1}.jpg`;
    return (
        <>
            <div className="col-6">
                <div className={styles.cardBody}>
                    <Link href="/product/detail" passHref>
                        <Image
                            src="/images/product/list/strawberry-tart-01.jpg"
                            className={styles.cardImg}
                            alt="productImg"
                            placeholder="blur"
                            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" // 這是一個空白的 GIF，你需要根據你的需求來設定這個值
                            width={230} // 你需要根據你的需求來設定這個值
                            height={230} // 你需要根據你的需求來設定這個值
                        />
                    </Link>
                    <div className={styles.cardInfo}>
                        <IoHeartOutline className={styles.heartIcon} />
                        <h5 className={styles.cardText}>小山園草莓塔</h5>
                        <h5 className={styles.cardText}> {product.name}</h5>
                        <p className={styles.typeText}>塔派甜點</p>
                        <h5 className={styles.currency}>NT$ 680</h5>
                        <button className={styles.cartBtn}>
                            <IoCartOutline className={styles.cartIcon} /> 加入購物車
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}