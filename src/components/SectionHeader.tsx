export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-bold font-epilogue tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-outfit  font-bold text-4xl md:text-6xl text-center mt-6">
        {title}
      </h2>
      <p
        className="text-center font-outfit
       md:text-lg text-white/60 mt-4 max-w-md lg:text-xl mx-auto"
      >
        {description}
      </p>
    </>
  );
};
