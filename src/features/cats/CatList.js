const CatList = ({catPics}) => {
    return(
        <div>
            {catPics.map(e=><img src={e.url} alt="cat"></img>)}
        </div>
    )
}

export default CatList