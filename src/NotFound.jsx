import { useParams } from "react-router"

export default function NoteFound() {

    const params = useParams();
    return (
        <div>
            <h1>Not Found</h1>
            <p>Not Found page : {params['*']}</p>
        </div>
    )
}