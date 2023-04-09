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
    <article className="mb-14">
      <h2 className="mb-2 text-2xl font-semibold">
        <a target="_blank" href={link}>
          {heading}
        </a>
      </h2>
      <div className="space-y-2">
        {description.map((desc) => (
          <p dangerouslySetInnerHTML={{ __html: desc }} key={desc}></p>
        ))}
      </div>
      {/* features */}
      <div className="my-5 space-y-2">
        <h3 className="text-lg font-semibold ">Features of {name}</h3>
        <ul className="ml-3 list-disc space-y-2">
          {features.map((feature, index) => {
            return (
              <li
                dangerouslySetInnerHTML={{ __html: feature }}
                key={index}
              ></li>
            )
          })}
        </ul>
      </div>
      {/* Pros */}
      <div className="my-5 space-y-2">
        <h3 className="text-lg font-semibold ">Pros of {name}</h3>
        <ul className="ml-3 list-disc space-y-2">
          {pros.map((pro, index) => {
            return (
              <li dangerouslySetInnerHTML={{ __html: pro }} key={index}></li>
            )
          })}
        </ul>
      </div>
      {/* Cons */}
      <div className="my-5 space-y-2">
        <h3 className="text-lg font-semibold ">Cons of {name}</h3>
        <ul className="ml-3 list-disc space-y-2">
          {cons.map((con, index) => {
            return (
              <li dangerouslySetInnerHTML={{ __html: con }} key={index}></li>
            )
          })}
        </ul>
      </div>
      {/* Summary */}
      <div className="mb-4 italic">
        <p dangerouslySetInnerHTML={{ __html: summary }}></p>
      </div>
      {/* Call to action button */}
      <a href={link} target="_blank">
        <div className="hover:bg-dark-secondary-2 my-5 inline-block rounded-md bg-blue-800 px-4 py-1 text-white">
          Checkout {name}
        </div>
      </a>
    </article>
  )
}

export default SingleProduct
