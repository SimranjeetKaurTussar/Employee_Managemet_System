const CreateTask = () => {
  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form className="flex flex-wrap w-full items-center justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                required
                type="text"
                placeholder="Make a UI design..."
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Due Date</h3>
              <input
                required
                type="date"
                placeholder="DD/MM/YYYY"
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input
                required
                type="text"
                placeholder="Employee Name"
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Priority</h3>
              <input
                required
                type="text"
                placeholder="High"
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                required
                type="text"
                placeholder="Web Development"
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Attachment</h3>
              <input
                required
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] cursor-pointer"
                type="file"
              />
            </div>
          </div>

          <div className="w-1/2">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              required
              name="text"
              id=""
              cols="30"
              rows="15"
              placeholder="Write Description here..."
              className="text-gray-300 h-44 text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px]"
            ></textarea>
            <button className="bg-blue-900 hover:bg-blue-600 px-5 py-2 rounded mt-4 text-sm w-full">
              Create task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
