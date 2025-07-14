import { useState } from "react";

export default function SearchBar({check}) {
    const [isChecked, setCheckbox] = useState(false)

const handleChange = () => {
    const newChecked = !isChecked;
    setCheckbox(newChecked);
    check(newChecked);
}

  return (
    <>
      <form action="">
        <input type="text" placeholder="Search..." /><br />
        <label htmlFor="checkbox">
            <input type="checkbox" name="checkbox" checked={isChecked} id="checkbox" onChange={handleChange} />
            Only show products in stock
        </label>
      </form>
    </>
  );
}
