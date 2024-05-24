function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-200">
      <div className="w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md">
        <div className="w-full h-32 bg-zinc-300">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="w-full px-3 py-4">
          <h2 className="font-semibold">Amazon Basic</h2>
          <p className="text-xs mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            placeat, beatae sint fuga necessitatibus accusamus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
