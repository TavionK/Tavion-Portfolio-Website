export default function NotFound() {
  return (
    <div className="flex flex-col h-dvh items-center justify-center">
      <h1 className="sr-only">404 error. Page Not Found</h1>
      <div className="flex items-center divide-x divide-gray-300">
        <p className="px-4 text-4xl font-bold">404</p>
        <p className="px-4 text-xl">Page Not Found</p>
      </div>
    </div>
  );
}
