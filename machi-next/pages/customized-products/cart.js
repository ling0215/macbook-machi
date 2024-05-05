import Steps from '@/components/customize/steps'
import StepTitle from '@/components/customize/step-titles'
import CakeSize from '@/components/customize/cake-size'
import styles from '@/components/customize/customize.module.css'

export default function CustomizedCart() {
  return (
    <>
      <div>
        <div className="lynn-custom-row">
          <Steps stepNumber="1" stepText="選擇蛋糕尺寸" />
          <Steps stepNumber="2" stepText="選擇蛋糕口味及樣式" />
          <Steps
            bgStyle={styles['bg-yellow']}
            textStyle={styles['custom-text-border-yellow']}
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
      </div>
    </>
  )
}
