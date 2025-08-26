import SlidingNavbar from "@/components/layout/SlidingNavbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen flex bg-charcoal rounded-lg mt-12">
      <SlidingNavbar />
      <div className="p-8 w-full">
        {children}
      </div>
    </div>
  );
}