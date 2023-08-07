import { Card } from "Components/Card";
import Image from 'app/images/image 2.png';
import cls from './Main.module.scss';

const item = {
    id: '1',
    title: 'Zebronics head phone',
    price: 100,
    description: 'A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.',
    image: Image,
    colors: ['red', 'blue', 'black'],
}

export const Main = () => {
    return (
        <div className={cls.MainPage}>
            <Card item={item}/> 
        </div>
    );
};
