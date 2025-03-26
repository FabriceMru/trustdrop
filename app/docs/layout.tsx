import DocsSidebar from '@/components/DocsSidebar';

export default function DocsLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-950 text-white">
            {/* Sidebar */}
            <aside className="w-full max-w-xs p-6 border-r border-gray-800">
                <DocsSidebar />
            </aside>

            {/* Inhalt */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}