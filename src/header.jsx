import { FiChevronLeft, FiSearch, FiChevronDown, FiBell } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white h-16 px-4 border-b border-gray-200">
      {/* Left section */}
      <div className="flex items-center gap-3">
        {/* Logo and name */}
        <div className="flex items-center gap-2 bg-[#2C6BED] text-white px-3 py-1.5 rounded-md">
          <div className="w-5 h-5 rounded-sm bg-white/30 flex items-center justify-center text-xs font-bold">
            F
          </div>
          <span className="text-sm font-semibold">FlexDelivery</span>
        </div>

        {/* Collapse arrow */}
        <button className="text-gray-500 hover:text-gray-700">
          <FiChevronLeft size={18} />
        </button>
      </div>

      {/* Middle section */}
      <div className="flex items-center gap-4 flex-1 max-w-3xl ml-6">
        {/* Search bar */}
        <div className="flex items-center flex-1 bg-gray-100 rounded-lg px-3 py-2">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            className="bg-transparent outline-none text-sm flex-1"
            placeholder="Search for anything"
          />
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-1 text-gray-700 text-sm cursor-pointer hover:text-gray-900">
          <span>Quick actions</span>
          <FiChevronDown size={16} />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Divider */}
        <div className="w-px h-6 bg-gray-200" />

        {/* Notification with badge */}
        <div className="relative">
          <FiBell className="text-gray-600" size={20} />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold rounded-full px-[5px]">
            2
          </span>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200" />

        {/* Avatars */}
        <div className="flex -space-x-2">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 8}`}
                className="w-8 h-8 rounded-full border-2 border-white"
                alt=""
              />
            ))}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200" />

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium">
            B
          </div>
          <span className="text-sm font-medium text-gray-700">
            Bright Eyegheleme
          </span>
          <FiChevronDown size={16} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
}
