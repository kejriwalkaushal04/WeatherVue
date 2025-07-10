

function Header(prop) {

  return (
    <div>
      <div className="flex justify-between min-w-screen place-items-center px-4 py-5 text-green-500 bg-white md:px-16">
        <a href="/" className="text-2xl font-bold">
          Weather App
        </a>

        <ul className="flex gap-5 font-semibold text-base">
          <form
            className="relative w-48 xl:w-96"
            onSubmit={prop.handlesearch}
          >
            <input
              type="text"
              name="query"
              value={prop.city}
              onChange={(e) => prop.setCity(e.target.value)}
              placeholder="Enter City Name"
              className="w-full text-black border-2 border-green-500 rounded-md pl-2 py-2 placeholder-green-500"
            />
            <button type="submit">
              <i className="bx bx-search absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-2xl"></i>
            </button>
          </form>
        </ul>
      </div>
    </div>
  );
}

export default Header;
