import RestarauntData from '../components/data/RestarauntData';
import ResultsDisplay from '../components/display/ResultsDisplay';
import './styles.scss';

export default function Home() {
    return (
        <RestarauntData>
            <div className="app__content">
                <ResultsDisplay />
            </div>
        </RestarauntData>
    );
}
