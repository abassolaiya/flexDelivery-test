// MarketplacePage.jsx
import React, { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  RectangleEllipsis,
  ArrowUpDown,
  Columns2,
  Calendar,
  Upload,
  ChevronLeft,
  ChevronRight,
  ArrowLeftFromLine,
  ArrowDown,
  LayoutDashboard,
  Users,
  List,
  Gift,
  MessageCircle,
  Settings,
  FileText,
  Folder,
  ClipboardList,
  DollarSign,
  HelpCircle,
} from "lucide-react";

/**
 * Standalone page: MarketplacePage.jsx
 * - Single file, no child components
 * - Uses Tailwind classes (make sure Tailwind is configured)
 * - Uses lucide-react (install before running)
 *
 * Tweak --sidebar-blue variable below to match color perfectly.
 */

const tableData = [
  {
    id: 3,
    seller: "Justin Igwe",
    price: "₦1,000",
    location: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    title: "Used Iphone 12",
    date: "12th Oct. 2025",
    status: "Pending",
  },
  {
    id: 556,
    seller: "Yinka Adebiyi",
    price: "₦1,000",
    location: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    title: "New Fan Bosch",
    date: "12th Oct. 2025",
    status: "Pending",
  },
  {
    id: 88,
    seller: "Jude Abaga",
    price: "₦1,000",
    location: "Egbeda",
    sellingMode: "Payment Protection",
    title: "Fairly Used phone",
    date: "12th Oct. 2025",
    status: "Pending",
  },
  {
    id: 89,
    seller: "Bright Eyeghleleme",
    price: "₦1,000",
    location: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    title: "Car Tyres",
    date: "12th Oct. 2025",
    status: "Pending",
  },
  {
    id: 8,
    seller: "Bright Eyeghleleme",
    price: "₦1,000",
    location: "Egbeda",
    sellingMode: "Direct Contact",
    title: "Children's Cloth",
    date: "12th Oct. 2025",
    status: "Pending",
  },
  {
    id: 9,
    seller: "Bright Eyeghleleme",
    price: "₦1,000",
    location: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    title: "Used Curtains",
    date: "12th Oct. 2025",
    status: "Pending",
  },
  {
    id: 97,
    seller: "Bright Eyeghleleme",
    price: "₦1,000",
    location: "Egbeda",
    sellingMode: "Payment Protection",
    title: "Used Fridge",
    date: "12th Oct. 2025",
    status: "Pending",
  },
  {
    id: 4,
    seller: "Bright Eyeghleleme",
    price: "₦1,000",
    location: "Egbeda",
    sellingMode: "Payment Protection",
    title: "New Freezer",
    date: "12th Oct. 2025",
    status: "Pending",
  },
  {
    id: 76,
    seller: "Bright Eyeghleleme",
    price: "₦1,000",
    location: "Egbeda",
    sellingMode: "Payment Protection",
    title: "New Iphone XR",
    date: "12th Oct. 2025",
    status: "Pending",
  },
  {
    id: 78,
    seller: "Bright Eyeghleleme",
    price: "₦1,000",
    location: "Egbeda",
    sellingMode: "Direct Contact",
    title: "New Watch",
    date: "12th Oct. 2025",
    status: "Pending",
  },
];

export default function MarketplacePage() {
  const [openMenus, setOpenMenus] = useState({
    "All Listings": true,
    Transactions: false,
    Settings: false,
  });

  const toggleMenu = (key) => setOpenMenus((s) => ({ ...s, [key]: !s[key] }));

  return (
    <div
      className="min-h-screen bg-gray-50 text-gray-800"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      <style>
        {`
          :root{
            --sidebar-blue: #153a8a; /* tweak if you want a closer sample */
            --card-border: #eef0f3;
            --muted: #6b7280;
          }
        `}
      </style>

      {/* ===== HEADER (full width) ===== */}
      <header
        className="w-screen bg-white border-b"
        style={{ borderColor: "var(--card-border)" }}
      >
        <div className="flex items-center py-4 px-12 w-full">
          {/* Left section: FLEX Delivery + logo + arrow */}
          <div className="flex items-center gap-3 min-w-[300px] flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="text-lg italic font-thin text-[var(--sidebar-blue)] tracking-tight">
                FLEX
              </div>
              <div className="font-extrabold text-[var(--sidebar-blue)] text-lg italic">
                Delivery
              </div>
              <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center text-[var(--sidebar-blue)] font-bold ml-2">
                FD
              </div>
              <div className="w-6 h-6 bg-gray-100 flex items-center justify-center rounded ml-2">
                <ArrowLeftFromLine className="w-4 h-4 text-[var(--sidebar-blue)] font-extrabold" />
              </div>
            </div>
          </div>

          {/* Search bar - move closer to the left group */}
          <div className="ml-4 flex-1 max-w-[320px]">
            <div
              className="bg-gray-50 border rounded-md px-3 py-1.5 flex items-center"
              style={{ borderColor: "var(--card-border)" }}
            >
              <Search size={16} className="text-gray-400" />
              <input
                className="ml-2 w-full bg-transparent outline-none text-sm"
                placeholder="Search for anything"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Quick actions */}
            <button className="text-sm flex items-center gap-1">
              <ArrowDown size={14} /> {/* changed to real down arrow */}
              <span className="hidden md:inline">Quick actions</span>
            </button>

            {/* Divider */}
            <div className="h-6 border-l border-gray-300"></div>

            {/* Notification */}
            <div className="relative">
              <Bell size={20} />
              <div className="absolute -top-1 -right-1.5 w-3.5 h-3.5 rounded-full bg-orange-400 text-white text-[8px] flex items-center justify-center">
                2
              </div>
            </div>

            {/* Divider */}
            <div className="h-6 border-l border-gray-300"></div>

            {/* Avatars */}
            <div className="hidden sm:flex items-center -space-x-2">
              {["A", "B", "C", "D"].map((c, i) => (
                <img
                  key={i}
                  src={`https://ui-avatars.com/api/?name=${c}&background=cccccc&color=ffffff&size=32`}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  alt={`Avatar ${c}`}
                />
              ))}
            </div>

            {/* Divider */}
            <div className="h-6 border-l border-gray-300"></div>

            {/* User profile */}
            <div className="hidden sm:flex items-center gap-3 bg-white px-3 py-2 rounded">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                BE
              </div>
              <div className="text-sm">
                <div className="font-medium">Bright Eyeghleleme</div>
                <div className="text-xs text-gray-500">ADMIN</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-full">
        {/* ===== SIDEBAR (starts under header) ===== */}
        <aside
          className="hidden lg:block w-72 min-h-[calc(100vh-72px)] bg-[#1E3A8A] relative"
          aria-label="Main sidebar"
        >
          {/* Inner dark section for menu */}
          <div className="absolute top-0 left-0 right-0 mt-12 m-5 mb-12 rounded-2xl overflow-hidden pb-0">
            <div className="bg-[#142F7C] mb-16 rounded-b-2xl">
              <div className="px-5 pt-4 pb-2">
                <div className="space-y-2">
                  {[
                    { label: "Dashboard", Icon: LayoutDashboard },
                    {
                      label: "Users",
                      Icon: Users,
                      badge: "5",
                      dropdown: true,
                      submenu: [
                        "Active Users",
                        "Pending Approval",
                        "Banned Users",
                      ],
                    },
                    {
                      label: "All Listings",
                      Icon: List,
                      dropdown: true,
                      submenu: [
                        { name: "Delivery Jobs", badge: "5" },
                        { name: "Delivery Offers" },
                        { name: "Marketplace", badge: "5" },
                      ],
                    },
                    { label: "Flex Reward", Icon: Gift },
                    { label: "Disputes", Icon: MessageCircle },
                    {
                      label: "Transactions",
                      Icon: DollarSign,
                      dropdown: true,
                      submenu: ["Payments", "Refunds"],
                    },
                    { label: "User Support Ticket", Icon: HelpCircle },
                    {
                      label: "Settings",
                      Icon: Settings,
                      dropdown: true,
                      submenu: ["Profile", "Permissions", "Integrations"],
                    },
                    { label: "Blog & Broadcast", Icon: FileText },
                    { label: "Templates", Icon: Folder },
                    { label: "Audit Logs", Icon: ClipboardList },
                  ].map((item, idx) => {
                    const Icon = item.Icon;
                    const isOpen = item.dropdown
                      ? !!openMenus[item.label]
                      : false;

                    return (
                      <div key={idx}>
                        {/* Main row */}
                        <div
                          className={`flex items-center gap-3 px-3 py-4 rounded-md transition-colors bg-[#1E3A8A] hover:bg-[#2449a4] cursor-pointer`}
                        >
                          <Icon size={14} className="text-white" />
                          <div className="text-sm font-regular text-white flex-1">
                            {item.label}
                          </div>

                          {/* Orange badge */}
                          {item.badge && (
                            <div className="mr-1 flex items-center">
                              <div className="w-4 h-4 rounded-full bg-orange-400 text-white text-[9px] flex items-center justify-center">
                                {item.badge}
                              </div>
                            </div>
                          )}

                          {item.dropdown && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleMenu(item.label);
                              }}
                              className="p-1 hover:bg-white/10 rounded"
                            >
                              <ChevronDown
                                size={14}
                                className={`text-white transition-transform ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Submenu */}
                        {item.submenu && (
                          <div
                            className={`pl-8 overflow-hidden bg-[#1E3A8A] transition-[max-height] duration-300 ${
                              isOpen ? "max-h-[350px] py-1" : "max-h-0"
                            }`}
                          >
                            {item.submenu.map((sub, sidx) => {
                              const subLabel =
                                typeof sub === "string" ? sub : sub.name;
                              const hasBadge =
                                typeof sub === "object" && !!sub.badge;
                              return (
                                <div
                                  key={sidx}
                                  className="text-sm text-white/90 flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-[#2449a4] cursor-pointer"
                                >
                                  <span className="flex-1">{subLabel}</span>
                                  {hasBadge && (
                                    <div className="w-4 h-4 rounded-full bg-orange-400 text-white text-[9px] flex items-center justify-center">
                                      {sub.badge}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer - below buttons, on light blue background */}
            <div className="mt-4 px-3 py-4 flex flex-col items-center rounded-b-2xl ">
              <div className="px-3 py-1 bg-white text-[#0b1e44] rounded-md text-sm font-semibold">
                Dev
              </div>
              <div className="mt-1 text-xs text-white/70">v2.0</div>
            </div>
          </div>
        </aside>

        {/* ===== MAIN CONTENT (marketplace area) ===== */}
        <main className="flex-1">
          <div className="max-w-[1300px] mx-auto py-6 px-6">
            {/* Page title + export */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Marketplace</h2>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Upload size={14} className="text-black" />
                  <span className="text-black">Export</span>
                </div>
              </div>
            </div>

            {/* White shared background container */}
            <div className="bg-white rounded-lg shadow-sm p-4 space-y-6">
              {/* Overview card */}
              <div className="flex justify-between items-center w-full">
                {/* Block 1 */}
                <div className="flex flex-col items-start">
                  <div className="text-xs text-gray-400">Total created</div>
                  <div className="text-xl font-semibold mt-2">107</div>
                </div>

                {/* Divider + next block */}
                <div className="flex items-center">
                  <div className="h-14 border-l border-gray-300 mr-3"></div>
                  <div className="flex flex-col items-start">
                    <div className="text-xs text-gray-400">Total active</div>
                    <div className="text-xl font-semibold mt-2">70</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-14 border-l border-gray-300 mr-3"></div>
                  <div className="flex flex-col items-start">
                    <div className="text-xs text-gray-400">
                      Total Sold with Payment Protection
                    </div>
                    <div className="text-xl font-semibold mt-2">27</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-14 border-l border-gray-300 mr-3"></div>
                  <div className="flex flex-col items-start">
                    <div className="text-xs text-gray-400">
                      Total Sold w/o Payment Protection
                    </div>
                    <div className="text-xl font-semibold mt-2">10</div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Search + controls */}
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center bg-gray-50 border px-3 py-2 rounded-xl flex-1 max-w-[340px]"
                  style={{ borderColor: "var(--card-border)" }}
                >
                  <Search size={16} className="text-gray-400" />
                  <input
                    placeholder="Search assets"
                    className="w-full text-sm bg-transparent outline-none pl-2"
                  />
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600 ml-auto">
                  <button className="flex items-center gap-2">Reset</button>
                  <button className="flex items-center gap-2">
                    <ArrowUpDown size={14} /> Sort
                  </button>
                  <button className="flex items-center gap-2">
                    Advanced filter
                  </button>
                  <button className="flex items-center gap-2">
                    <Columns2 size={14} /> Select Columns
                  </button>
                  <button className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded-lg">
                    <Calendar size={14} /> Date
                  </button>
                </div>
              </div>

              {/* Advanced filters (gray background) */}
              <div
                className="bg-gray-50 border rounded p-4 mt-4"
                style={{ borderColor: "var(--card-border)" }}
              >
                <div className="text-sm font-bold text-black mb-2">
                  Advanced filter
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Item Title</div>
                    <select
                      className="w-full border rounded px-3 py-2 text-sm"
                      style={{ borderColor: "var(--card-border)" }}
                    >
                      <option>Any</option>
                    </select>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Location</div>
                    <select
                      className="w-full border rounded px-3 py-2 text-sm"
                      style={{ borderColor: "var(--card-border)" }}
                    >
                      <option>Any</option>
                    </select>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      Ad Selling Mode
                    </div>
                    <select
                      className="w-full border rounded px-3 py-2 text-sm"
                      style={{ borderColor: "var(--card-border)" }}
                    >
                      <option>Any</option>
                    </select>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Status</div>
                    <select
                      className="w-full border rounded px-3 py-2 text-sm"
                      style={{ borderColor: "var(--card-border)" }}
                    >
                      <option>Any</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      Price Range
                    </div>
                    <input
                      placeholder="From: Minimum Amount"
                      className="w-full border rounded px-3 py-2 text-sm"
                      style={{ borderColor: "var(--card-border)" }}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">&nbsp;</div>
                    <input
                      placeholder="To: Maximum Amount"
                      className="w-full border rounded px-3 py-2 text-sm"
                      style={{ borderColor: "var(--card-border)" }}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      Creation Date Range
                    </div>
                    <input
                      placeholder="From dd/mm/yyyy"
                      className="w-full border rounded px-3 py-2 text-sm"
                      style={{ borderColor: "var(--card-border)" }}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">&nbsp;</div>
                    <input
                      placeholder="To dd/mm/yyyy"
                      className="w-full border rounded px-3 py-2 text-sm"
                      style={{ borderColor: "var(--card-border)" }}
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    className="px-4 py-2 border rounded text-sm"
                    style={{ borderColor: "var(--card-border)" }}
                  >
                    Reset
                  </button>
                  <button className="px-4 py-2 rounded text-sm bg-orange-500 text-white">
                    Apply filter
                  </button>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-[1000px] w-full text-sm">
                  <thead>
                    <tr
                      className="text-left text-xs text-gray-500 border-b"
                      style={{ borderColor: "var(--card-border)" }}
                    >
                      <th className="py-4 pl-4 w-10">
                        <input type="checkbox" />
                      </th>
                      <th className="py-4">Ad ID</th>
                      <th className="py-4">Seller Name</th>
                      <th className="py-4">Asking Price</th>
                      <th className="py-4">Item Location</th>
                      <th className="py-4">Selling Mode</th>
                      <th className="py-4">Ad Title</th>
                      <th className="py-4">Creation Date</th>
                      <th className="py-4">Status</th>
                      <th className="py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row) => (
                      <tr
                        key={row.id}
                        className="align-top border-b"
                        style={{ borderColor: "var(--card-border)" }}
                      >
                        <td className="py-4 pl-4">
                          <input type="checkbox" />
                        </td>
                        <td className="py-4 font-medium">{row.id}</td>
                        <td className="py-4">{row.seller}</td>
                        <td className="py-4">{row.price}</td>
                        <td className="py-4">{row.location}</td>
                        <td className="py-4 text-sm text-gray-600">
                          {row.sellingMode}
                        </td>
                        <td className="py-4">{row.title}</td>
                        <td className="py-4">{row.date}</td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-400" />
                            <div className="text-sm">{row.status}</div>
                          </div>
                        </td>
                        <td className="py-4">
                          <button
                            className="px-3 py-1 border rounded text-xs flex items-center gap-2"
                            style={{ borderColor: "var(--card-border)" }}
                          >
                            <RectangleEllipsis size={14} /> MORE
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table footer */}
              <div className="flex items-center justify-end mt-4 text-sm text-gray-600">
                <div>
                  Items per page{" "}
                  <select
                    className="ml-2 border rounded px-2 py-1"
                    style={{ borderColor: "var(--card-border)" }}
                  >
                    <option>10</option>
                    <option>50</option>
                    <option>1000</option>
                  </select>
                </div>
                <div className="flex items-center gap-3">
                  <div>1 - 10 of 50</div>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 border rounded"
                      style={{ borderColor: "var(--card-border)" }}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      className="p-2 border rounded"
                      style={{ borderColor: "var(--card-border)" }}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
