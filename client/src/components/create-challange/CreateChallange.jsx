
export default function CreateChallange() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl"> Create Challenge 💪</h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
              Challange Name
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-2 border-gray-500 placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 sm:text-sm"
              
              />
            </div>
          </div>
          <div>
  <label className="text-lg font-semibold">Challenge Type</label>
  <select
    name="type"
    className="w-full mt-2 p-2 bg-gray-800 text-white rounded-lg"
    required
  >
    <option value="">Select challenge type</option>
    <option value="strength">Strength</option>
    <option value="cardio">Cardio</option>
    <option value="flexibility">Flexibility</option>
    <option value="weight_loss">Weight Loss</option>
  </select>
</div>

<div>
  <label className="text-lg font-semibold">Difficulty Level</label>
  <select
    name="difficulty"
    className="w-full mt-2 p-2 bg-gray-800 text-white rounded-lg"
    required
  >
    <option value="">Select difficulty</option>
    <option value="beginner">Beginner</option>
    <option value="intermediate">Intermediate</option>
    <option value="advanced">Advanced</option>
  </select>
</div>

<div>
  <label className="text-lg font-semibold">Duration</label>
  <select
    name="duration"
    className="w-full mt-2 p-2 bg-gray-800 text-white rounded-lg"
    required
  >
    <option value="">Select duration</option>
    <option value="7">7 Days</option>
    <option value="14">14 Days</option>
    <option value="30">30 Days</option>
  </select>
</div>

<div>
  <label className="text-lg font-semibold">Required Equipment</label>
  <select
    name="equipment"
    className="w-full mt-2 p-2 bg-gray-800 text-white rounded-lg"
    required
  >
    <option value="">Select required equipment</option>
    <option value="none">No Equipment</option>
    <option value="dumbbells">Dumbbells</option>
    <option value="resistance_bands">Resistance Bands</option>
    <option value="yoga_mat">Yoga Mat</option>
    <option value="barbell">Barbell</option>
    <option value="treadmill">Treadmill</option>
  </select>
</div>

<div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
              Image
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-2 border-gray-500 placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 sm:text-sm"
                placeholder="Image Url"
              />
            </div>
          </div>


          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                id="description"
                name="description"
                rows={4}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-2 border-gray-500 placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 sm:text-sm"
                defaultValue={''}
                placeholder="Description"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Challange
          </button>
        </div>
      </form>
    </div>
  )
}
