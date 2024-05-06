import Steps from '@/components/customize/steps'
import StepTitle from '@/components/customize/step-titles'
import CakePreview from '@/components/customize/cake-preview'
import CakeSize from '@/components/customize/cake-size'
import DecoSelector from '@/components/customize/deco-selector'
import styles from '@/components/customize/customize.module.css'
import Link from 'next/link'

export default function CustomizedDeco() {
  return (
    <>
      <div>
        <div className="lynn-custom-row">
          <Steps stepNumber="1" stepText="選擇蛋糕尺寸" />
          <Steps
            bgStyle={styles['bg-yellow']}
            textStyle={styles['custom-text-border-yellow']}
            stepNumber="2"
            stepText="選擇蛋糕口味及樣式"
          />
          <Steps stepNumber="3" stepText="加入購物車" />
        </div>
        <div className="lynn-step-title">
          <StepTitle
            title="Step 2 : 選擇蛋糕口味及樣式"
            prvLink="/customized-products/size"
            nextLink="/customized-products/cart"
          />
        </div>
        <div className="lynn-deco-preview">
          <div className="lynn-preview-section">
            <CakePreview size="6吋" />
            <div className="lynn-preview-cake">
              <CakeSize imageSize={170} size="預覽示意圖" price=" " />
            </div>
          </div>
          <div className="lynn-deco-selection">
            <DecoSelector
              decoTitle="請選擇蛋糕體層數"
              decoSubtitle="*3層為基本，每加一層 + NT$50"
              options={[
                { value: 'layer3', label: '3層' },
                { value: 'layer4', label: '4層' },
                { value: 'layer5', label: '5層' },
              ]}
              displayType="radio"
            />
            <DecoSelector
              decoTitle="請選擇蛋糕口味"
              decoSubtitle=""
              options={[
                { value: 'earl-grey', label: '伯爵' },
                { value: 'matcha', label: '抹茶' },
                { value: 'choco', label: '巧克力' },
              ]}
              displayType="radio"
            />
            <div className="lynn-deco-checkbox">
              <DecoSelector
                decoTitle="請選擇蛋糕表面裝飾"
                decoSubtitle="*每加一項裝飾 + NT$20"
                options={[
                  { value: 'strawberry', label: '草莓' },
                  { value: 'cherry', label: '櫻桃' },
                  { value: 'chocolate', label: '巧克力' },
                  { value: 'macaron', label: '馬卡龍' },
                  { value: 'orange', label: '蜜漬橙片' },
                  { value: 'blueberry', label: '藍莓' },
                  { value: 'photo', label: '其他：上傳圖片' },
                ]}
                displayType="checkbox"
              />
            </div>
            <hr className="lynn-done-select" />
            <div className="lynn-deco-price">
              <span>小計：</span>
              <span>NT$1,080</span>
            </div>
            <div className="lynn-deco-confirm">
              <Link href="/customized-products/deco" passHref>
                <button className="lynn-btn-grey">清除重填</button>
              </Link>
              <Link href="/customized-products/cart" passHref>
                <button className="lynn-btn-brown">確定</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
