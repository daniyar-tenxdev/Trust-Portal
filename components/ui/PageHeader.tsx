interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative bg-gray-900 py-16 sm:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/90" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
