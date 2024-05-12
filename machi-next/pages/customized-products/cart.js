import Steps from '@/components/customize/steps'
import StepTitle from '@/components/customize/step-titles'
import CakeSize from '@/components/customize/cake-size'
import CakePreview from '@/components/customize/cake-preview'
import Link from 'next/link'
import { IoCartOutline } from 'react-icons/io5'

export default function CustomizedCart() {
  return (
    <>
      <div>
        <div className="lynn-custom-row">
          <Steps stepNumber="1" stepText="選擇蛋糕尺寸" />
          <Steps stepNumber="2" stepText="選擇蛋糕口味及樣式" />
          <Steps
            active={true}
            // bgStyle={styles['bg-yellow']}
            // textStyle={styles['custom-text-border-yellow']}
            stepNumber="3"
            stepText="加入購物車"
          />
        </div>
        <StepTitle
          title="Step 3 : 加入購物車"
          prvLink="/customized-products/deco"
          shouldHide2
          nextLink="/customized-products/deco"
        />
        <div className="lynn-deco-preview">
          <div className="lynn-preview-section">
            <CakePreview size="6吋" />
            <div className="lynn-preview-cake">
              <CakeSize imageSize={170} size="預覽示意圖" price=" " />
            </div>
          </div>
          <div className="lynn-cart-selection">
            <div className="lynn-cart-price-num">
              <div className="lynn-cart-price">
                <span>價格：</span>
                <span>NT$1,080</span>
              </div>
              <div className="lynn-cart-price">
                <span>數量：</span>
                <span>NT$1,080</span>
              </div>
            </div>
            <hr className="lynn-done-select" />
            <div className="lynn-cart-price">
              <span>總額：</span>
              <span>NT$1,080</span>
            </div>
            <div className="lynn-deco-confirm">
              <Link href="/customized-products/size" passHref>
                <button className="lynn-btn-grey">繼續客製蛋糕</button>
              </Link>
              <Link href="/customized-products/cart" passHref>
                <button className="lynn-btn-brown">
                  <IoCartOutline className="lynn-cart" />
                  加入購物車
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
