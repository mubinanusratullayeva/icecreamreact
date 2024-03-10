import stylehome from './home.module.scss';

import { Container } from "../../components/container";
import { Button } from '../../components/standardBTN';
import { Card } from '../../components/Card';

import Lorry from '../../assets/lorry.png';
import QuickP from '../../assets/Group.png';
import MoneyBack from '../../assets/cash-back.png';
import FastD from '../../assets/fast-delivery.png';
import oatmea from '../../assets/oatmea82.png';
import oatmea2x from '../../assets/oatmea822x.png';

export function Home() {
    return (
        <>
            <header className={stylehome.hero}>
                <Container>
                    <div className={stylehome.hero_box}>
                        <h6 className={stylehome.hero_box__toptitle}>Sweet fun, full of milk.</h6>
                        <h1 className={stylehome.hero_box__title}>Feel inside cold with our delicious <span>ice-cream.</span></h1>
                        <p className={stylehome.hero_box__desc}>Some food has looked so awful that
                            it's looked like something that the dog's brought home, yet after one mouthful
                            I've been left eating my thoughts, my words.</p>
                        <Button text='buy now' />
                    </div>
                </Container>
            </header>
            <section>
                <Container>
                    <div className={stylehome.cards}>
                        <Card asset={Lorry} title='free shipping' desc='Last Chance! Free shipping on all orders ends today.' />
                        <Card asset={QuickP} title='Quick packaging' desc='Last Chance! Free shipping on all orders ends today.' />
                        <Card asset={MoneyBack} title='100% money back' desc='Last Chance! Free shipping on all orders ends today.' />
                        <Card asset={FastD} title='fast delivery' desc='Last Chance! Free shipping on all orders ends today.' />
                    </div>
                </Container>
            </section>
            <section className={stylehome.oatmea}>
                <Container>
                    <div className={stylehome.oatmea_disp}>
                        <div className={stylehome.oatmea_disp__cont}>
                            <h2>brown sugar oatmea</h2>
                            <p>Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous.</p>
                            <Button text='See Details' />
                        </div>
                        <img width={655} height={656.8} src={oatmea} alt="oatmea ice-cream" srcset={oatmea2x} />
                    </div>
                </Container>
            </section>
        </>
    )
}