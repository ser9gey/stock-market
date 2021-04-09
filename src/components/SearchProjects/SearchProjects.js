export const SearchProjects = ({searchFilter}) => {
    return (
        <div className="content__search">
            <input className="content__search-field" type="text" placeholder="Search..." onChange={searchFilter}/>
        </div>
    )
}