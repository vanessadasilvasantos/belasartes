import '../Catalog.css'


function CatalogItem(props) {
    return (
        <>
        <div className='catalogItemContainer'>
            <img src={props.image} className='imageItemCatalog'/>
            <h2 className='titleCatalogItem'>{props.title}</h2>
        </div>
        </>
    )
}

export default CatalogItem