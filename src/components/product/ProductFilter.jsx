function ProductFilter({
  options,
  selected,
  onSelect,
  type
}) {
  return (
    <div className="filter-options">
      {
        options?.map((item) => (
          <label
            key={item.value}
            className="filter-option"
          >
            <input
              type="checkbox"
              checked={
                type === "category"
                  ?
                  selected === item.value
                  :
                  selected?.includes(item.value)
              }
              onChange={() => {
                if (type === "category") {
                  onSelect(item.value);
                }
                else {
                  if (selected.includes(item.value)) {
                    onSelect(
                      selected.filter(
                        v => v !== item.value
                      )
                    );
                  }
                  else {
                    onSelect([
                      ...selected,
                      item.value
                    ]);
                  }
                }
              }}
            />
            <span>
              {item.label}
            </span>
          </label>
        ))
      }
    </div>
  )
}
export default ProductFilter;