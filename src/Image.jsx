import { useParams } from "react-router"

export default function Image() {

    const params = useParams();
    return (
        <div>
            <h1>Images</h1>
            <p>Image page : {params['*']}</p>
        </div>
    )
}