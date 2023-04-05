interface Props {
  description: string[]
  heading: string
  link: string
  name: string
  features: string[]
  pros: string[]
  cons: string[]
  summary: string
}

function SingleProduct(props: Props) {
  const { description, heading, link, name, features, pros, cons, summary } =
    props
  return (
    <article>
      <h2 className="mb-3 text-xl font-semibold text-blue-900">
        <a target="_blank" href={link}>
          {heading}
        </a>
      </h2>
      <div className="space-y-3">
        {description.map((desc) => (
          <p key={desc}>{desc}</p>
        ))}
      </div>
      {/* features */}
      <div className="my-7 space-y-2">
        <h3 className="text-lg font-semibold text-purple-600">
          Features of {name}
        </h3>
        <ul className="ml-3 list-disc space-y-2">
          {features.map((feature, index) => {
            return <li key={index}>{feature}</li>
          })}
        </ul>
      </div>
      {/* Pros */}
      <div className="my-7 space-y-2">
        <h3 className="text-lg font-semibold text-green-800">Pros of {name}</h3>
        <ul className="ml-3 list-disc space-y-2">
          {pros.map((pro, index) => {
            return <li key={index}>{pro}</li>
          })}
        </ul>
      </div>
      {/* Cons */}
      <div className="my-7 space-y-2">
        <h3 className="text-lg font-semibold text-red-800">Cons of {name}</h3>
        <ul className="ml-3 list-disc space-y-2">
          {cons.map((con, index) => {
            return <li key={index}>{con}</li>
          })}
        </ul>
      </div>
      {/* Summary */}
      <div className="mb-4 italic">
        <p>{summary}</p>
      </div>
      {/* Call to action button */}
      <div className="inline-block rounded-full bg-dark-primary px-7 py-3 text-white">
        <a href={link} target="_blank">
          Buy {name}
        </a>
      </div>
    </article>
  )
}

export default SingleProduct
