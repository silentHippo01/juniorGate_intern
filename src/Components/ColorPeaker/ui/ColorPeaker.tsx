import classNames from 'classnames';
import cls from './ColorPeaker.module.scss';

interface ColorPeakerProps {
    colors: string[];
    className?: string;
    currentColor?: string;
    onClick?: (str: string) => void;
} 

export const ColorPeaker = (props: ColorPeakerProps) => {
    const {
        colors,
        className,
        currentColor,
        onClick
    } = props;

    return (
        <div className={cls.ColorPeaker}>
            <p>Choose your colour</p>
            <div className={cls.colorList}>
                {
                    colors.map((item, index) => (
                        <div
                            className={classNames(cls.colorItem, {[cls.active]: currentColor === item}, [cls[item], className])} 
                            key={index}
                            onClick={() => onClick(item)}
                        >
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
