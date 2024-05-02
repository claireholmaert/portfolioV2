
function Projects() {
  return (
    <div className="max-w-6xl mx-auto ">
        <div className="flex items-center justify-center my-10">
        <h2 className="text-xl font-primary px-7 py-3 bg-primary rounded-lg uppercase inline-block tracking-widest">
            Mes projets
        </h2>
        </div>
        
    <div className="grid grid-cols-3 gap-3">
      <div className="w-full h-72 bg-gray rounded-lg"></div>
      <div className="w-full h-72 bg-gray rounded-lg"></div>
      <div className="w-full h-72 bg-gray rounded-lg"></div>
    </div>
    </div> 
  )
}

export default Projects;
