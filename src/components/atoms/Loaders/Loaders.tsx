import { SolarSpinnerWrapper, SpinnerProps } from './Loaders.styles';

export const SolarSpinner = (props: SpinnerProps) => (
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
