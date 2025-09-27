import Link from "next/link";

const Button = ({ 
  children, 
  href, 
  onClick, 
  variant = "primary", 
  size = "md", 
  icon, 
  iconPosition = "left",
  className = "",
  disabled = false,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl button-font whitespace-nowrap";
  
  const variants = {
    primary: "bg-primary-blue text-white hover:bg-blue-700 hover:shadow-blue-500/25",
    secondary: "bg-white text-primary-blue border-2 border-primary-blue hover:bg-primary-blue hover:text-white",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-blue",
    ghost: "bg-white/10 backdrop-blur-sm text-white border border-white/40 hover:bg-white/20 hover:border-white/60",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-sm",
    xl: "px-6 py-3 text-base"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : "";
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === "left" && (
        <i className={`${icon} ${children ? 'mr-2' : ''} ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-lg' : 'text-sm'}`}></i>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <i className={`${icon} ${children ? 'ml-2' : ''} ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-lg' : 'text-sm'}`}></i>
      )}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {content}
      </Link>
    );
  }
  
  return (
    <button 
      className={buttonClasses} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
