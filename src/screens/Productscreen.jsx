import { useParams } from 'react-router-dom'



export default function Productscreen() {
    const params = useParams();
    const { slug } = params;
    return (
        <div>
            <h1>{slug}</h1>
        </div>
    )
}