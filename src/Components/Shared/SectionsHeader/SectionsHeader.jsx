const SectionsHeader = ({title,subTitle}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center mx-auto w-[75%] gap-5 my-5">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-lg">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionsHeader;
