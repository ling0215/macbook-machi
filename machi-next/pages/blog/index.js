import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogIndex() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="input-container">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="請輸入關鍵字"
                            />
                            <i className="fa fa-search" />
                        </div>
                        <br />
                        <div className="latest-articles">
                            <h6 className="article-sidebar">最新文章</h6>
                            <ul>
                                <li>
                                    <div className="image-text">
                                        <img src="/image/article1.jpg" alt="" />
                                        <p>
                                            若你是懂吃又懂拍的女孩的話，近期火紅的「Kōhī
                                            Bar」將會是你的新地標！
                                            採外帶式設計，但店門外有一整排的座位區，可供客人休息，下午時間陽光灑下超舒適。療癒的雪人可可不只好喝還很好拍，店內的甜點也堪稱一絕，還有號稱有甜點迷心中前三名的司康。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="image-text">
                                        <img src="/image/article1.jpg" alt="" />
                                        <p>
                                            若你是懂吃又懂拍的女孩的話，近期火紅的「Kōhī
                                            Bar」將會是你的新地標！
                                            採外帶式設計，但店門外有一整排的座位區，可供客人休息，下午時間陽光灑下超舒適。療癒的雪人可可不只好喝還很好拍，店內的甜點也堪稱一絕，還有號稱有甜點迷心中前三名的司康。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="image-text">
                                        <img src="/image/article1.jpg" alt="" />
                                        <p>
                                            若你是懂吃又懂拍的女孩的話，近期火紅的「Kōhī
                                            Bar」將會是你的新地標！
                                            採外帶式設計，但店門外有一整排的座位區，可供客人休息，下午時間陽光灑下超舒適。療癒的雪人可可不只好喝還很好拍，店內的甜點也堪稱一絕，還有號稱有甜點迷心中前三名的司康。
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <h6 className="article-sidebar">文章分類</h6>
                            <ul>
                                <li>
                                    <div className="article-category py-2">
                                        <input type="checkbox" />
                                        <span className="mx-3">蛋糕</span>
                                        <i className="fa-solid fa-circle-chevron-down" />
                                    </div>
                                </li>
                                <li>
                                    <div className="article-category py-2">
                                        <input type="checkbox" />
                                        <span className="mx-3">蛋糕</span>
                                        <i className="fa-solid fa-circle-chevron-down" />
                                    </div>
                                </li>
                                <li>
                                    <div className="article-category py-2">
                                        <input type="checkbox" />
                                        <span className="mx-3">蛋糕</span>
                                        <i className="fa-solid fa-circle-chevron-down" />
                                    </div>
                                </li>
                                <li>
                                    <div className="article-category py-2">
                                        <input type="checkbox" />
                                        <span className="mx-3">蛋糕</span>
                                        <i className="fa-solid fa-circle-chevron-down" />
                                    </div>
                                </li>
                                <h6 className="article-sidebar pt-2">日期區間</h6>
                                <div>
                                    <input id="myDatepicker" placeholder="點擊選擇所需日期" />
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="container ">
                            <ul>
                                <li>
                                    <div className="article-content">
                                        <img src="/image/article1.jpg" alt="" />
                                        <div className="mx-4">
                                            <ul style={{ display: "flex" }}>
                                                <li
                                                    style={{ backgroundColor: "#69833f" }}
                                                    className="p-1 me-3"
                                                >
                                                    蛋糕
                                                </li>
                                                <li style={{ backgroundColor: "#4a5042" }} className="p-1">
                                                    蛋糕
                                                </li>
                                            </ul>
                                            <h5 className="pt-4">甜點控注意！</h5>
                                            <div className="py-2">time</div>
                                            <p>
                                                現代人人手一杯咖啡已是常態，不只品嚐咖啡的美味，更成為手上時髦單品。
                                                除了求快的上班族需要來一杯「手拿式咖啡」，更多的是要坐下來好好享受一下午後美好的悠閒時光，來杯溫暖的手沖咖啡，配上美味的甜點，浪費一整個下午的時間都不覺得奢侈。
                                                今天則推薦 7
                                                家捷運信義安和站咖啡廳，不只咖啡好喝甜點也迷人，尤其是肉桂捲更是讓人難忘。
                                            </p>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                style={{ textAlign: "right" }}
                                            >
                                                繼續閱讀
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer>{/* place footer here */}</footer>
        </>

    )
}
