import RestarauntData from '../components/data/RestarauntData';
import RestarauntFinder from '../components/display/RestarauntFinder';
import './index.scss';

export default function Home() {
    return (
        <RestarauntData>
            <RestarauntFinder />
        </RestarauntData>
    );
}
