import Title from 'lib/src/components/typography/Title';
import * as React from 'react';

const CreateHeader: React.FC<ContentHeaderProps> = ({ title, children }) => (
    <div className="create-header">
        {title && <Title>{title}</Title>}
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
