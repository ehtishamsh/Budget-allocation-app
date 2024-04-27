import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [select, setSelect] = useState("$");
  const [selectDepar, setSelectDepar] = useState("Marketing");
  const [budget, setBudget] = useState(0);
  const [addValue, setAddValue] = useState(0);
  const [spend, setSpend] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);

    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 20000) {
      if (inputValue >= spend) {
        setBudget(inputValue);
      } else {
        alert("Budget can't be less than the spending");
      }
    } else {
      alert("Please enter a valid number between 0 and 20,000.");
    }
  };
  function handleIncrese(id) {
    setItems((i) => {
      return i.map((value) => {
        if (id === value.id) {
          setSpend((prevSpend) => 10 + prevSpend);
          return { ...value, bug: parseInt(value.bug) + 10 };
        }
        return value;
      });
    });
  }

  function handleDecrese(id) {
    setItems((i) => {
      return i.map((value) => {
        if (id === value.id) {
          setSpend((prevSpend) => prevSpend - 10);
          return { ...value, bug: parseInt(value.bug) - 10 };
        }
        return value;
      });
    });
  }

  useEffect(() => {
    setRemaining(parseInt(budget - spend));
  }, [budget, spend]);
  const mapElement = items.map((item) => {
    return (
      <tr className="border-b border-gray-300" key={item.id}>
        <td className="px-6 py-4">{item.department}</td>
        <td className="px-6 py-4">
          {select} {item.bug}
        </td>
        <td className="px-6 py-4">
          <button
            onClick={() => handleIncrese(item.id)}
            className="border-none bg-green-500 text-white font-extrabold h-7 w-7 text-4xl m-0 rounded-full flex items-center justify-center"
          >
            <p className="m-0 mb-2">+</p>
          </button>
        </td>
        <td className="px-6 py-4">
          <button
            onClick={() => handleDecrese(item.id)}
            className="border-none bg-red-500 text-white font-extrabold h-7 w-7 text-4xl m-0 rounded-full flex items-center justify-center"
          >
            <p className="m-0 mb-2">-</p>
          </button>
        </td>
        <td className="px-6 py-4">
          <button className="border-none bg-gray-900 text-white font-bold h-7 w-7 text-lg m-0 rounded-full flex items-center justify-center">
            <p className="m-0 ">X</p>
          </button>
        </td>
      </tr>
    );
  });
  function handleSubmit(e) {
    e.preventDefault();

    const newData = {
      id: items.length + 1,
      department: selectDepar,
      bug: addValue,
    };

    if (parseInt(addValue) > parseInt(remaining)) {
      alert(`The value cannot exceed remaining funds ${select}${remaining}`);
      return;
    }

    setItems((prevItems) => {
      const departmentExists = prevItems.some((value) =>
        value.department.includes(selectDepar)
      );

      if (departmentExists) {
        return prevItems.map((value) =>
          value.department.includes(selectDepar)
            ? { ...value, bug: parseInt(value.bug) + parseInt(addValue) }
            : value
        );
      } else {
        return [...prevItems, newData];
      }
    });
    setSpend((prevSpend) => parseInt(addValue) + prevSpend);
    setAddValue(0);
  }
  return (
    <div className=" flex items-center justify-start pt-10 h-screen flex-col gap-5 px-32">
      <h1 className="text-start text-3xl w-full font-medium">
        Company's Budget Allocation
      </h1>
      <div className="w-full flex justify-center items-center gap-3">
        <div className="flex bg-gray-300 p-3 justify-start items-center rounded-md w-1/4">
          <h2 className="text-gray-700 text-lg">Budget: {select}</h2>
          <input
            type="number"
            className=" px-2 border border-gray-800"
            step={10}
            min={0}
            value={budget}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex bg-green-200/70 p-3 justify-start items-center rounded-md w-1/4">
          <h2 className="text-green-700 text-lg">
            Remaining: {select}
            {remaining}
          </h2>
        </div>
        <div className="flex bg-blue-200/70 p-3 justify-start items-center rounded-md w-1/4">
          <h2 className="text-blue-700 text-lg">
            Spend so far: {select}
            {spend}
          </h2>
        </div>
        <div className="rounded-md w-1/6 p-3 flex text-lg text-slate-100  justify-center items-center bg-green-300">
          Currency(
          <select
            onChange={(e) => setSelect(e.target.value)}
            value={select}
            className=" bg-green-300   focus:outline-none"
          >
            <option value="$" className="text-gray-700 checked:bg-gray-300">
              $ Dollar
            </option>
            <option value="£" className="text-gray-700 checked:bg-gray-300">
              £ Pound
            </option>
            <option value="€" className="text-gray-700 checked:bg-gray-300">
              € Euro
            </option>
            <option value="₹" className="text-gray-700 checked:bg-gray-300">
              ₹ Rupee
            </option>
          </select>
          )
        </div>
      </div>
      <h1 className="text-start text-3xl w-full font-medium">Allocation</h1>
      <div className="relative overflow-x-auto w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 ">
          <thead className="text-base font-bold text-gray-900">
            <tr className="border-b border-gray-300">
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                Allocated Budget
              </th>
              <th scope="col" className="px-6 py-3">
                Increase by 10
              </th>
              <th scope="col" className="px-6 py-3">
                Decrease by 10
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="text-base text-gray-900">{mapElement}</tbody>
        </table>
      </div>
      <h1 className="text-start text-3xl w-full font-medium">
        Change Allocation
      </h1>
      <form
        className="w-full flex items-center gap-11 px-9"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-start items-center ">
          <h2 className="text-gray-700 rounded-md  bg-gray-300 px-4 py-2 text-lg">
            Department
          </h2>
          <select
            onChange={(e) => setSelectDepar(e.target.value)}
            value={selectDepar}
            className="px-4 py-2 border border-gray-800"
          >
            <option>Chose A Department</option>
            <option value="Marketing">Marketing</option>
            <option value="Fianance">Fianance</option>
            <option value="Sales">Sales</option>
            <option value="Human Resource">Human Resource</option>
            <option value="IT">IT</option>
          </select>
        </div>
        <div className="flex justify-start items-center ">
          <h2 className="text-gray-700 rounded-md  bg-gray-300 px-4 py-2 text-lg">
            Allocation
          </h2>
          <select name="" id="" className="px-4 py-2 border border-gray-800">
            <option value="">Add</option>
          </select>
        </div>
        <div className="flex px-4 py-2 justify-start items-center rounded-md">
          <h2 className="text-lg text-gray-700">{select}</h2>
          <input
            onChange={(e) => setAddValue(e.target.value)}
            value={addValue}
            type="number"
            className="px-4 py-2 border border-gray-700"
          />
        </div>
        <button className="border-none bg-blue-500 text-white px-4 py-2 rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
