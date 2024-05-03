import Steps from '@/components/customize/steps'
import StepTitle from '@/components/customize/step-titles'
import CakeSize from '@/components/customize/cake-size'

export default function CustomizedDeco() {
  return (
    <>
      <div>
        <Steps />
        <StepTitle title="Step1 : 選擇蛋糕尺寸" />
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
