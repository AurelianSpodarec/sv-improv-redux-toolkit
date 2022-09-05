import * as React from 'react';

const CreateHeader: React.FC<ContentHeaderProps> = ({ title, children }) => (
    <div className="flex justify-between align-start mb-8">
        {title && <h2 className="text-gray-200">{title}</h2>}
        <div>
            {children}
        </div>
    </div>
);

interface ContentHeaderProps {
    title?: string;
    children: React.ReactNode;
}

export default CreateHeader;
