import React from 'react'
import { FaRegUser } from 'react-icons/fa6'
import styles from './customize.module.css'

export default function Comment() {
  const commentData = {
    // customerImage:
    //   'https://cdn.builder.io/api/v1/image/assets/TEMP/c21ae4ff45bedf2001bd80ddb8e51d9a915a184056e415b6e80ae0f08bf51b15?apiKey=561d4b94b26f4d038679b81a14a4536c&',
    name: 'Iris',
    customerTitle: 'Our Customer',
    text: 'text',
    testimonialText: '客製化蛋糕超好吃！不吃甜的朋友也讚不絕口！！',
  }

  return (
    <>
      <div className={styles.testimonialCard}>
        <img
          src="../../images/customize/double_comma.svg"
          alt=""
          className="decorative-image"
        />
        <p className={styles.testimonialText}>{commentData.testimonialText}</p>
        {/* <img
          src={commentData.customerImage}
          alt={`${commentData.name}'s profile`}
          className="customer-image"
        /> */}
        <hr />
        <div className={styles.customerInfo}>
          {/* <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d65c4cef5f86141391876191059573d8515577d08d00d0d3d25de9aed760d56?apiKey=561d4b94b26f4d038679b81a14a4536c&"
            alt=""
            className="quote-icon"
          /> */}
          <FaRegUser className={styles.quoteIcon} style={{ color: 'black' }} />
          <div className={styles.customerDetails}>
            {commentData.name}
            <br />
            <span className={styles.customerTitle}>
              {commentData.customerTitle}
            </span>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .testimonial-card {
          align-items: start;
          background-color: var(--Brown, #ab927d);
          border-radius: 0px 25px 25px 25px;
          box-shadow: 3px 5px 4px 0px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.8px;
          max-width: 211px;
          padding: 0 19px 61px;
        }

        .decorative-image {
          aspect-ratio: 3.03;
          object-fit: cover;
          width: 36px;
        }

        .testimonial-text {
          color: var(--primary-1, #f7f5eb);
          font-family: Roboto, sans-serif;
          margin: 16px 0 0 10px;
        }

        .customer-image {
          aspect-ratio: 1;
          border: 1px solid rgba(0, 0, 0, 1);
          margin: 20px 0 0 10px;
          object-fit: cover;
          width: 100%;
        }

        .customer-info {
          color: var(--Brown, #ab927d);
          display: flex;
          gap: 20px;
          justify-content: space-between;
          line-height: 21px;
          margin: 19px 0 0 10px;
        }

        .quote-icon {
          align-self: end;
          aspect-ratio: 0.85;
          margin-top: 28px;
          object-fit: cover;
          width: 30px;
        }

        .customer-details {
          font-family: Roboto, sans-serif;
          color: var(--white, #ffffff);
        }

        .customer-title {
          color: rgba(171, 146, 125, 1);
        }
      `}</style> */}
    </>
  )
}
