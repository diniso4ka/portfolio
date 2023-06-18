import { AboutMe } from '@/modules/about/AboutMe';
import { BackCallForm } from '@/modules/backcall';
import { Portfolio } from '@/modules/portfolio/Portfolio';

const MainPage = () => {
    return (
        <div>
            <AboutMe />
            <Portfolio />
            <BackCallForm />
        </div>
    );
};

export default MainPage;
