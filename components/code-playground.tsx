'use client';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
// Type assertion to fix TS error from missing declaration
import dracula from 'prism-react-renderer/themes/dracula' as any;

const code = `
function HelloWorld() {
  return <h2 style={{ color: 'purple' }}>Hello, Umar!</h2>;
}
render(<HelloWorld />);
`;

export default function CodePlayground() {
  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-white text-2xl mb-4 font-bold">Live Code Playground</h2>
      <LiveProvider code={code.trim()} theme={dracula} noInline={true}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <LiveEditor className="rounded-md border border-gray-700 text-sm overflow-auto max-h-64" />
            <LiveError className="text-red-500 mt-2" />
          </div>
          <div className="bg-gray-800 p-4 rounded-md">
            <LivePreview />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
}


