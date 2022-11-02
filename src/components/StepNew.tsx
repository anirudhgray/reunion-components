import React from 'react';
import '/node_modules/primeflex/primeflex.css'
import './stepNew.css';


type StepNewProps = {
    /**
     * All the steps (strings)
     */
    steps?: string[];

    /**
     * Which step is the user on?
     */
    currentStep?: number;

    /**
     * Color of the progress bar
     */
    progressColor?: string;

    /**
     * Default empty click handler.
     */
    onClick?: () => void;

    /**
     * User styles. Applied on outer div.
     */
    style?: object;

    /**
     * User classnames. Applied on outer div.
     */
    className?: string;
}

export const StepNew: React.FC<StepNewProps> = ({
    className, style, steps, currentStep = 2, progressColor
}: StepNewProps) => {

    return (
        <div style={{ ...style }} className={`flex flex-row gap-2 ${className}`}>
            {steps?.map((step, index) => {
                return (
                    <div className='text-md step-new--step relative'>
                        <p className='step-new--text font-light pb-2'>{index + 1}/{steps.length}: {step}</p>
                        <hr className='step-new--hr absolute w-12 bottom-0 block z-0'></hr>
                        <hr style={{ 'borderColor': progressColor }} className={`step-new--hr-done absolute bottom-0 z-1 ${currentStep - 1 > index ? 'w-12' : currentStep - 1 < index ? 'w-0' : 'w-6'}`}></hr>
                    </div>
                )
            })}
        </div>
    );
};
