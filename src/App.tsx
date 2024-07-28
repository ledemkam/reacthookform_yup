export default function App() {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
          <form className="mt-8">
            <div className="rounded-md shadow-md p-3">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none" />
              </div>
            </div>
            <div className="rounded-md shadow-md p-3">
              <div className="mb-4">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                <input type="number" name="age" id="age" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none" />
              </div>
            </div>
            <div className="rounded-md shadow-md p-3">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none" />
              </div>
            </div>
            <div className="rounded-md shadow-md p-3">
              <div className="mb-4">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">Site Web</label>
                <input type="url" name="website" id="website" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none" />
              </div>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                validieren
              </button>
            </div>
          </form>
      </div>
    </div>
    <div>
    </div>
    </>
  )
}