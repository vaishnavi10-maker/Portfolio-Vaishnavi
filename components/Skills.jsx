function Skills() {
  return (
    <section className="text-#fff mx-auto px-4 py-20 max-w-7xl"  id="skills">
      <h2 className="text-4xl text-[#480ebc]  mb-5">My Skills</h2>
      <p className="text-xl max-w-3xl mb-12 text-amber-50">
        A collection of tools and technologies I use to design, develop, and deploy web applications.
      </p>

      <div className="pb-10">
        <h4 className="text-base font-semibold tracking-[1px] text-[#ccc] mb-3.75">Languages and Tools</h4>
        <div className="flex flex-wrap gap-10 items-center">
          {['python', 'java', 'html', 'css', 'javascript', 'nodejs', 'vite','react','csharp','php','dotnet','kotlin','django'].map((icon, idx) => (
            <img key={idx} src={`/${icon}.svg`} alt={icon}  className="w-50px h-50px size-14 object-contain transition-transform duration-300 ease-in-out hover:scale-125
"/>
          ))}
        </div>
      </div>

      <div className="pb-10">
        <h4 className="text-base font-semibold tracking-[1px] text-[#ccc] mb-3.75">Database</h4>
        <div className="flex flex-wrap gap-10 items-center">
          <img src="/mongodb.svg" alt="gcp" className="w-50px h-50px size-14 object-contain transition-transform duration-300 ease-in-out hover:scale-125
"/>
        </div>
      </div>

      <div className="pb-10">
        <h4 className="text-base font-semibold tracking-[1px] text-[#ccc] mb-3.75">Operating Systems</h4>
        <div className="flex flex-wrap gap-10 items-center">
          <img src="/windows.svg" alt="windows"  className="w-50px h-50px size-14 object-contain transition-transform duration-300 ease-in-out hover:scale-125
"/>
          <img src="/linux.svg" alt="linux" className="w-50px h-50px size-14 object-contain transition-transform duration-300 ease-in-out hover:scale-125
"/>
        </div>
      </div>
    </section>
  );
}

export default Skills;
