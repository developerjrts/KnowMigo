import Nav from "@/components/dashboard/common/Nav";
import Sidebar from "@/components/dashboard/common/Sidabar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Nav />

      <div className="flex flex-1 min-h-0">
        <aside className="hidden md:block h-[calc(100vh-64px)] sticky top-16">
          <Sidebar />
        </aside>

        <main className="flex-1 border-t border-l border-gray-200 rounded-md min-w-0 p-2 md:p-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
