const InfoSection = () => {
  const infoData = [
    {
      title: "¿What is this?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "¿Where do I start?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="mt-12 px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {infoData.map((info, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 p-6 rounded-md shadow-sm"
        >
          <h3 className="text-lg font-bold text-gray-700">{info.title}</h3>
          <p className="text-gray-600 mt-2">{info.content}</p>
        </div>
      ))}
    </section>
  );
};

export default InfoSection; 
