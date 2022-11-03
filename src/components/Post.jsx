import { Navigate, useNavigate } from 'react-router-dom'

function Post() {
    const navigate = useNavigate();

    const onClick = () => {
        console.log('Hello')
        navigate('/about')
    }

    const status = 201

    if (status === 404) {
        return <Navigate to='/notfound' />
    }

    return (
        <>
            <div>Post</div>
            <button onClick={onClick}>Click</button>
        </>
    )
}

export default Post