export default function App() {
    return(
        <Toolbar
            onPlayMovie={() => alert('Playing')}
            onUploadImage={() => alert('UpLoading')}
        />

    )
}

function Toolbar({onPlayMovie, onUploadImage}){
    return (
        <div>
            <Button onClick={onPlayMovie}>
                play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        </div>
    )
}

function Button({onClick, children}){
    return (
        <button onClick = {onClick}>
            {children}
        </button>
    )
}