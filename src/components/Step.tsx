import React, { useEffect } from 'react';
import '/node_modules/primeflex/primeflex.css'
import '../main.css';


type StepProps = {
    /**
     * All the steps (strings)
     */
    steps?: string[];

    /**
     * Which step is the user on?
     */
    currentStep?: number;

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

    /**
     * Background color of the "Done" step circles, and the dashed/solid lines.
     */
    doneColor?: string;

    /**
     * Background color of the "Next" step circles.
     */
    nextColor?: string;

    /**
     * Text color for the label text of each step.
     */
    labelTextColor?: string;

    /**
     * Text color for the step number in "Done" circles.
     */
    doneCircleTextColor?: string;

    /**
     * Text color for the step number in "Next" circles.
     */
    nextCircleTextColor?: string;
}

export const Step: React.FC<StepProps> = ({
    className, style, steps, doneColor = 'black', nextColor = 'white', doneCircleTextColor = 'white', nextCircleTextColor = 'black', labelTextColor, currentStep = 2
}: StepProps) => {

    useEffect(() => {
        if (steps && currentStep <= steps.length) {
            let line = document.querySelector('.step--dotted-line-done');
            (line as HTMLElement).style.width = `${((currentStep - 1) / (steps?.length - 1)) * 100}%`
        }

        let doneCircles = document.getElementsByClassName('step--index-circle-done');
        Array.from(doneCircles).forEach(element => {
            if (element instanceof HTMLElement)
                element.style.backgroundColor = doneColor;
            if (element instanceof HTMLElement)
                element.style.color = doneCircleTextColor;
        });
        let nextCircles = document.getElementsByClassName('step--index-circle');
        Array.from(nextCircles).forEach(element => {
            if (element instanceof HTMLElement && nextColor)
                element.style.backgroundColor = nextColor;
            if (element instanceof HTMLElement)
                element.style.color = nextCircleTextColor;
        });
    }, [currentStep, steps, doneColor, doneCircleTextColor, nextColor, nextCircleTextColor])

    return (
        <div style={{ ...style }} className={`flex justify-content-between relative ${className}`}>
            <span style={{ borderColor: doneColor }} className='step--dotted-line absolute'></span>
            <span style={{ borderColor: doneColor }} className='step--dotted-line step--dotted-line-done absolute'></span>
            {steps?.map((step, index) => {
                return (
                    <div className='z-1 relative flex flex-column align-items-center justify-content-center'>
                        <span style={{ boxShadow: `${doneColor} 0 0 0 2.5px inset` }} className={`${currentStep - 1 > index ? 'step--index-circle-done' : 'step--index-circle'}`}>{index + 1}</span>
                        <p style={{ color: labelTextColor }} className='absolute step--title'>{step.toUpperCase()}</p>
                    </div>
                )
            })}
        </div>
    );
};
