import Link from "next/link";

export default function Button({ 
  href, 
  text, 
  className = "bg-heading-2 border-heading-1/60 hover:bg-heading-3/50 pl-6 pr-1.5 py-1.5 max-w-[250px]", 
  textClassName = "text-sm",
  iconSize = "w-10 h-10",
  svgSize = "w-5 h-5",
  iconBg = "bg-heading-1 text-heading-3"
}) {
  const content = (
    <>
      <span className={`font-bold text-accent mr-4 ${textClassName}`}>{text}</span>
      <div className={`${iconSize} rounded-full ${iconBg} flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-lg shrink-0`}>
        <svg className={svgSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M8 7h9v9" />
        </svg>
      </div>
    </>
  );

  const wrapperClasses = `flex items-center justify-between border rounded-full hover:scale-95 transition-all duration-300 group w-fit inline-flex ${className}`;

  if (href) {
    return (
      <Link href={href} className={wrapperClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={wrapperClasses}>
      {content}
    </button>
  );
}
