const ContentRow: React.FC<ContentRowProps> = ({ children }) => (
    <div className="flex last:mb-0">{children}</div>
);

interface ContentRowProps {
    children: React.ReactNode;
}

export default ContentRow;
