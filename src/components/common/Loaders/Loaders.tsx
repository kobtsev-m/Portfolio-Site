import {
  ClassicSpinnerStyled,
  SolarSpinnerWrapper,
  SpinnerPropsType
} from './Loaders.style';

export const ClassicSpinner = ClassicSpinnerStyled;

export const SolarSpinner = (props: SpinnerPropsType) => (
  <SolarSpinnerWrapper {...props}>
    <div className='solar-system'>
      <div className='earth-orbit orbit'>
        <div className='planet earth' />
        <div className='venus-orbit orbit'>
          <div className='planet venus' />
          <div className='mercury-orbit orbit'>
            <div className='planet mercury' />
            <div className='sun' />
          </div>
        </div>
      </div>
    </div>
  </SolarSpinnerWrapper>
);
