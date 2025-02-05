import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SyntaxBlock = ({ method, url, response }) => (
    <div className="bg-zinc-800 text-xs md:text-base text-white p-4 border rounded-lg overflow-auto">
        <div className="flex gap-4 pb-2 border-b border-gray-700">
            <h4 className="text-green-400">{method}</h4>
            <p className="md:text-sm my-auto">{url}</p>
        </div>
        <SyntaxHighlighter language="json" style={materialDark}>
            {response}
        </SyntaxHighlighter>
    </div>
);

export default SyntaxBlock;
