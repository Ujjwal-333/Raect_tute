function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-8 py-4 shadow">
        <h1 className="text-2xl font-bold text-blue-600">
          My Website
        </h1>

        <div className="flex gap-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            Services
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      </nav>


      {/* Hero Section */}
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">

        <h2 className="text-5xl font-bold text-gray-800">
          Welcome to My Website
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          This is a simple website made using React and Tailwind CSS.
          I am learning React and improving my frontend skills.
        </p>

        <button className="mt-8 rounded bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Get Started
        </button>

      </div>


      {/* Cards */}
      <div className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-xl font-bold text-gray-800">
            React
          </h3>

          <p className="mt-3 text-gray-600">
            Learn components, props, state and hooks in React.
          </p>

          <button className="mt-5 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Learn More
          </button>
        </div>


        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-xl font-bold text-gray-800">
            Tailwind CSS
          </h3>

          <p className="mt-3 text-gray-600">
            Create clean and responsive designs using Tailwind CSS.
          </p>

          <button className="mt-5 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Learn More
          </button>
        </div>


        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-xl font-bold text-gray-800">
            JavaScript
          </h3>

          <p className="mt-3 text-gray-600">
            Improve your JavaScript knowledge for better React development.
          </p>

          <button className="mt-5 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Learn More
          </button>
        </div>

      </div>


      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center text-white">
        <p>
          © 2026 My Website
        </p>
      </footer>

    </div>
  )
}

export default App

