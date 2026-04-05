export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-white">
      <img
        src="/loading.gif"
        alt="Loading..."
        className="w-[80px] h-auto mb-6"
      />
    </div>
  );
}
