function ArchivePage({ title, children }: ArchivePageProps) {
    return (
        <div className="container py-5 font-inter text-start">
            <h1 className="fw-bold mb-4">{title}</h1>
            {children}
        </div>
    )
}

interface ArchivePageProps {
    title: string;
    children?: React.ReactNode;
}

export default ArchivePage;