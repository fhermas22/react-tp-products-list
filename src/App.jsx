const PRODUCTS = [  
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function App() {

  return (
    <>
      <SearchBar />
      <ProductTable />
    </>
  )
}

// SearchBar Component and his sub-components
function SearchBar() {
  return (
    <div>
      <Input />
      <Checkbox />
    </div>
  )
}

function Input() {
  return (
    <div>
      <div className="mt-2 mb-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <input
            id="search"
            name="search"
            type="text"
            placeholder="Search..."
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
      </div>
    </div>
  )
}

function Checkbox() {
  return (
    <div className="flex items-center">
      <input
        id="filter"
        type="checkbox"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <label for="filter" className="ml-2 block text-sm text-gray-900">
        Only show products in stock
      </label>
    </div>
  )
}


// ProductTable Component and his sub-components
function ProductTable() {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 mx-20 mt-8 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-center text-sm font-medium text-gray-500">Name</th>
                  <th scope="col" className="px-6 py-3 text-center text-sm font-medium text-gray-500">Price</th>
                </tr>
              </thead>
              <tbody>
                <ProductCategoryRow />

                <ProductRow />

                <ProductRow />

                <ProductRow />

                <ProductCategoryRow />

                <ProductRow />

                <ProductRow />

                <ProductRow />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductRow() {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Apple</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$1</td>
    </tr>
  )
}

function ProductCategoryRow() {
  return (
    <th scope="col" colSpan={2} className="px-6 py-3 text-center text-sm font-medium text-gray-600 bg-gray-100">Fruits</th>
  )
}


export default App
