export default function SpecSection({ title, children }) {
  return (
    <section className="bg-gray-800 rounded-lg p-4 border border-gray-700">
      <h3 className="text-lg font-semibold mb-3 text-motorsports-yellow">
        {title}
      </h3>
      <div className="space-y-2">
        {children}
      </div>
    </section>
  );
}