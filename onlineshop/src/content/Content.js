import './Content.css';
import CarouselContent from '../carousel/Carousel';
import Card from '../card/Card';
const Content = () => {
    return (
        <section>
            <div className="slide-carousel">
                <CarouselContent />
            </div>
            
            <h1>Welcome to <span>Game</span><span>Shop</span></h1>
            <Card />
            <Card />
            <Card />
            <Card />

        </section>
    )
}

export default Content;