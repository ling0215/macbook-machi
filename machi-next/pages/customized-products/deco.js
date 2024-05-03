import Steps from '@/components/customize/steps'
import StepTitle from '@/components/customize/step-titles'
import CakeSize from '@/components/customize/cake-size'
import styles from '@/components/customize/customize.module.css'

export default function CustomizedDeco() {
  return (
    <>
      <div>
        <div className="lynn-custom-row">
          <Steps
            bgStyle={styles['bg-yellow']}
            textStyle={styles['custom-text-border-yellow']}
            stepNumber="1"
            stepText="選擇蛋糕尺寸"
          />
          <Steps stepNumber="2" stepText="選擇蛋糕口味及樣式" />
          <Steps stepNumber="3" stepText="加入購物車" />
        </div>
        <StepTitle title="Step1 : 選擇蛋糕尺寸" shouldHide1 />
        <div className="lynn-choose-size">
          <div className="lynn-cake4">
            <CakeSize imageSize={100} size="4吋" price="420元" />
          </div>
          <div className="lynn-cake6">
            <CakeSize imageSize={140} size="6吋" price="650元" />
          </div>
          <div className="lynn-cake9">
            <CakeSize imageSize={160} size="9吋" price="1,080元" />
          </div>
        </div>
      </div>
    </>
  )
}
