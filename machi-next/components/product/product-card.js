// import React from 'react'
import Link from 'next/link'
import styles from './product.module.scss'
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'
// import LoadingImageSvg from './loading-image-svg'
import React, { useState, useEffect } from 'react';


// export default function ProductCard() {
//   return (
//     <>
//     <div className="col-6">   
//       <div className={styles.cardBody}>
//         <Link href="/product/detail" passHref>
//           <img
//             src="/images/product/list/strawberry-tart-01.jpg"
//             className={styles.cardImg}
//             alt="productImg"
//             placeholder="blur"
//           />
//         </Link>
//         <div className={styles.cardInfo}>
//           <IoHeartOutline className={styles.heartIcon} />
//           <h5 className={styles.cardText}>小山園草莓塔</h5>
//           <p className={styles.typeText}>塔派甜點</p>
//           <h5 className={styles.currency}>NT$ 680</h5>
//           <button className={styles.cartBtn}>
//             <IoCartOutline className={styles.cartIcon} /> 加入購物車
//           </button>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

function ProductCard() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/product')
      .then(response => response.json())
      .then(data => setProduct(data));
  }, []);

  return (
    <div>
      {product.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;

{/* 原始檔案 */}
{/* <div className="col">
  <div className="card h-100" aria-hidden="true">
    <Image
      className="card-img-top"
      src={`/images/product/thumb/${item.photos.split(',')[0]}`}
      alt="..."
      width={300}
      height={200}
      placeholder="blur"
      blurDataURL={`/images/product/thumb/${item.photos.split(',')[0]}`}
      style={{ width: '100%', height: 'auto' }} // optional
    />

    <div className="card-body">
      <h5 className="card-title placeholder-glow  limit-text-lines1">
        {item.name}
      </h5>
      <p className="card-text  max-lines"></p>
      <a href="#" className="btn btn-primary">
        了解更多
      </a>
    </div>
  </div>
</div> */}


// 在 React 中，你可以使用生命週期方法或 Hooks 來從資料庫獲取資料。以下是一個使用 useEffect 和 fetch 的範例：

// 在這個範例中，我們首先使用 useState 建立一個名為 products 的狀態變數，並設定其初始值為空陣列。

// 然後，我們使用 useEffect 在元件掛載時從資料庫獲取資料。我們使用 fetch 函數來發送 HTTP 請求，並將回應的 JSON 資料設定為 products 的值。

// 最後，我們在 render 方法中將 products 陣列中的每個產品渲染為一個 div 元素。

// 請注意，你需要將 'your-database-url/products' 替換為你的資料庫的實際 URL。此外，這個範例假設你的資料庫回應的 JSON 資料是一個包含產品物件的陣列，並且每個產品物件都有 id、name 和 description 屬性。如果你的資料庫的結構不同，你可能需要調整這個範例以符合你的需求。

// import React, { useState, useEffect } from 'react';

// function ProductComponent() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('your-database-url/products')
//       .then(response => response.json())
//       .then(data => setProducts(data));
//   }, []);

//   return (
//     <div>
//       {products.map(product => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductComponent;
