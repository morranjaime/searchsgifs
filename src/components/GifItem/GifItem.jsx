
export const GifItem = (props) => {

    const { title, url } = props;
    return (
        <div className='card'>
            <img src={url} title={title} />
            <p>{title}</p>
        </div>
    )
}
