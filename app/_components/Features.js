const data = [
  {
    id: "0",
    tag: "Quality",
    title: "Change quality",
    description:
      "Dynamically change quality of your image. Based on your preference you can choose how much you want to compress your images.",
    image: "./feature_quality.png",
  },
  {
    id: "1",
    tag: "Dimensions",
    title: "Set max width and height",
    description:
      "Specify the maximum width and height for your images to fit within the specified dimensions while maintaining the aspect ratio.",
    image: "./feature_wh.png",
  },
  {
    id: "2",
    tag: "Readability",
    title: "Add file suffix",
    description:
      "Add a custom suffix to the filenames of your compressed images to help differentiate them from the original files.",
    image: "./feature_suffix.png",
  },
];

export default function Features() {
  return (
    <section id="features" className="container mx-auto flex flex-col gap-20">
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-brand-500 font-bold">Features</span>
        <h2 className="text-4xl font-black text-grey-900">
          Overflowing with useful features
        </h2>
        <p className="text-grey-500 w-full max-w-[480px] text-center">
          Discover the powerful features of our image compression service
          designed to provide you with the best experience.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-4">
        {data.map((feature) => (
          <Feature
            key={feature.id}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            tag={feature.tag}
          />
        ))}
      </div>
    </section>
  );
}

function Feature({ tag, title, description, image }) {
  return (
    <div className="flex flex-col gap-2 relative p-6 rounded-xl bg-grey-50 justify-start items-start max-w-[420px] w-full">
      <div className="mb-2 bg-white max-w-[420px] w-full h-[140px] flex justify-center items-center rounded-xl p-2">
        <img src={image} alt={title} />
      </div>
      <span className="text-brand-500 font-bold">{tag}</span>
      <h4 className="text-xl font-bold text-grey-900">{title}</h4>
      <p className="text-grey-500 text-left">{description}</p>
    </div>
  );
}
