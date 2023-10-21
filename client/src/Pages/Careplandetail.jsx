export default function Careplandetail() {
  const data = [
    { "name": "Care Plan 1" },
    { "name": "Vitals 1" },
    { "name": "Modifications 1" },
    { "name": "Procedure 1" },
    { "name": "Diet 1" },
    { "name": "Therapy 1" },
    { "name": "Other Test 1" },
    { "name": "Action 1" },
  ];

  return (
    <div className="p-4">
      <table className="w-full border-collapse border">
        <thead className="text-center bg-blue-300">
          <tr className="p-2 text-white">
            <th className="border">Care Plan</th>
            <th className="border">Vitals To Test</th>
            <th className="border">Modifications</th>
            <th className="border">Procedure</th>
            <th className="border">Diet</th>
            <th className="border">Therapy</th>
            <th className="border">Other Test</th>
            <th className="border">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border">{item.name}</td>
              <td className="border">{item.name}</td>
              <td className="border">{item.name}</td>
              <td className="border">{item.name}</td>
              <td className="border">{item.name}</td>
              <td className="border">{item.name}</td>
              <td className="border">{item.name}</td>
              <td className="border">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="p-4 absolute bottom-0">
        <button className="p-1 text-blue-950 bg-slate-200 border shadow-lg rounded-md">&lt;&lt;</button>
        <span className="border p-2 px-3 bg-blue-950 text-white">1</span>
        <button className="p-1 text-blue-950 bg-slate-200 border shadow-lg rounded-md">&gt;&gt;</button>
      </div>
    </div>
  );
}
