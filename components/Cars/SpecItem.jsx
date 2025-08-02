export default function SpecItem({ label, value }) {
  if (!value) return null;
  
  return (
    <div className="flex flex-col sm:flex-row">
      <span className="text-gray-400 sm:w-32 flex-shrink-0 font-medium">
        {label}:
      </span>
      <span className="text-gray-200 font-medium">
        {value}
      </span>
    </div>
  );
}