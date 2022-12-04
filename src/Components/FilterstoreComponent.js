const FilterstoreComponent = () => {

    const onFilterValueChanged = (e) => {
        console.log(e.target.value);
      }
    return(
        <div>
            <select className="form-select store-type-mb" onChange={(e)=>onFilterValueChanged}>
              <option value="restaurant">Restaurant</option>
              <option value="bakery">Bakery</option>
              <option value="cafe">Cafe</option>
            </select>
        </div>
    )
}

export default FilterstoreComponent