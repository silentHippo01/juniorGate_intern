import { Button } from 'Components/Button';
import cls from './Card.module.scss';
import { memo, useCallback, useState } from 'react';
import { ColorPeaker } from 'Components/ColorPeaker';
import { ICardItem } from '../types/types';

interface CardProps {
    className?: string;
    item: ICardItem;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        item
    } = props;

    const [selectedColor, setSelectedColor] = useState<string>('red');

    const clickHandler1 = useCallback(() => {
        //функционал
    }, [])

    const clickHandler2 = useCallback(() => {
        //функционал
    }, [])

    const handleColorChange = useCallback((color: string) => {
        setSelectedColor(color);
      }, [setSelectedColor]);

    return (
        <div className={cls.Card}>
            <img className={cls.image} src={item.image}></img>
            <div className={cls.info}>
                <div className={cls.price}>${item.price}</div>
                <h3 className={cls.title}>{item.title}</h3>
                <p className={cls.description}>
                    {item.description}
                </p>
            </div>

            <ColorPeaker 
                currentColor={selectedColor}
                onClick={handleColorChange}
                colors={item.colors} 
                className={cls.colors}
            />

            <Button
                theme='primary'
                onClick={clickHandler1}
                className={cls.btn}
            >
                Add to cart
            </Button>

            <Button
                theme='outline'
                onClick={clickHandler2}
                className={cls.btn}
            >
                Buy now
            </Button>

            <a href='#'>Read reviews</a>
        </div>
    );
});
