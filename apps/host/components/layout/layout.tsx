import GlobalNav from './globalnav';
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main
        className="flex flex-col h-screen pt-safe"
        style={{ padding: '20px' }}
      >
        <div className="flex flex-1 overflow-hidden p-4">
          <GlobalNav />
          <div className="flex flex-col w-full mx-4 mt-24 md:mt-4">
            <div className="flex flex-col w-full h-screen">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}
