import Image from 'next/image'

function Card() {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">Headphone Model Name</div>
        <p className="text-base text-gray-700">A brief description</p>
      </div>
      <div className="px-6 py-4">
        <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          Price: $XX
        </span>
        <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          Type: Over-ear/on-ear/in-ear
        </span>
        <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          Wireless: Yes/No
        </span>
      </div>
    </div>
  )
}

export default Card
