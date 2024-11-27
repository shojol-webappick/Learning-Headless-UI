import { useSelector } from 'react-redux';
import SectionTitle from '../../Utils/SectionTitle';

const Review = () => {
    const count = useSelector((state) => state);
    console.log(count);
    return (
        <div>
            <SectionTitle title={"Customer Reviews"}/>

        </div>
    );
};

export default Review;