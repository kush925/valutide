'use client';

import { useRouter } from 'next/navigation';

const masterCategories = {
  'Accounting Masters': ['Group', 'Ledger', 'Currency', 'Voucher Type'],
  'Inventory Masters': ['Stock Group', 'Stock Category', 'Stock Item', 'Unit', 'Godown'],
  'Statutory Masters': ['GST Registration', 'GST Classification'],
  'Statutory Details': ['Company GST Details', 'PAN/CIN Details'],
};

export default function AlterMaster() {
  const router = useRouter();

  const handleClick = (type: string) => {
    router.push(`/masters/alter/${type.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10 text-sm font-mono">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-gray-300">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-blue-800">✏️ Alter Master - Valutide</h1>
          <div className="text-right space-x-4 text-xs sm:text-sm text-blue-600 font-semibold">
            <button className="hover:underline" onClick={() => alert('Change Company Coming Soon')}>Change Company</button>
            <button className="hover:underline" onClick={() => alert('Show More Coming Soon')}>Show More</button>
          </div>
        </div>

        {Object.entries(masterCategories).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h2 className="font-bold text-blue-700 mb-2">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {items.map((item) => (
                <button
                  key={item}
                  onClick={() => handleClick(item)}
                  className="bg-white border border-gray-300 hover:border-blue-400 shadow-sm rounded-lg px-4 py-2 text-gray-800 text-sm hover:bg-blue-50 transition font-semibold"
                >
                  ✏️ {item}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/business-dashboard')}
            className="px-6 py-2 bg-red-100 hover:bg-red-200 text-red-700 font-semibold rounded-md"
          >
            ⬅️ Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
