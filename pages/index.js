import RestaurantData from '../components/data/RestaurantData';
import RestaurantFinder from '../components/display/RestaurantFinder';
import './index.scss';

export default function Home() {
    return (
        <RestaurantData>
            <RestaurantFinder />
        </RestaurantData>
    );
}
