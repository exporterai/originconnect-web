function ProductFilter({
  options = [],
  selected = [],
  onSelect,
  type,
}) {
  return (
    <div className="filter-options">
      {options.map((item) => {
        const checked =
          type === "category"
            ? selected === item.value
            : selected.includes(item.value);

        return (
          <label
            key={`${type}-${item.value}`}
            className="filter-option"
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => {
                if (type === "category") {
                  onSelect(item.value);
                  return;
                }

                if (checked) {
                  onSelect(
                    selected.filter(
                      (v) => v !== item.value
                    )
                  );
                } else {
                  onSelect([
                    ...selected,
                    item.value,
                  ]);
                }
              }}
            />

            <span>{item.label}</span>
          </label>
        );
      })}
    </div>
  );
}

export default ProductFilter;