import DocsSidebar from '@/components/DocsSidebar';

export default function DocsLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-950 text-white">
            {/* Sidebar */}
            <aside className="w-full md:max-w-xs md:border-r border-gray-800 p-4 md:p-6">
                <DocsSidebar />
            </aside>

            {/* Inhalt */}
            <main className="flex-1 p-6 md:p-8">
                {children}
            </main>
        </div>
    );
}
