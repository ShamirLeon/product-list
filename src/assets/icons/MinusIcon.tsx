const MinusIcon = ({className, ...props}: {className: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={2}
    fill="none"
    {...props}
  >
    <path className={className} fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
  </svg>
)
export default MinusIcon