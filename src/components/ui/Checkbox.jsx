import React, { useEffect, useRef } from "react";
import { Check, Minus } from "lucide-react";
import { cn } from "../../utils/cn";

const Checkbox = React.forwardRef(function Checkbox(
  {
    className,
    id,
    checked = false,
    indeterminate = false,
    disabled = false,
    required = false,
    label,
    description,
    error,
    size = "default",
    ...props
  },
  ref
) {
  const internalRef = useRef(null);
  const checkboxRef = ref || internalRef;

  const checkboxId =
    id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

  useEffect(() => {
    if (checkboxRef?.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate, checkboxRef]);

  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <div className={cn("flex items-start gap-2", className)}>
      <div className="relative flex items-center">
        <input
          ref={checkboxRef}
          id={checkboxId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          className="peer sr-only"
          {...props}
        />

        <label
          htmlFor={checkboxId}
          className={cn(
            "flex items-center justify-center rounded-sm border cursor-pointer transition-colors",
            "border-input bg-background",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-ring",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            sizeClasses[size],
            checked && "bg-primary text-primary-foreground border-primary",
            indeterminate && "bg-primary text-primary-foreground border-primary",
            error && "border-destructive"
          )}
        >
          {checked && !indeterminate && (
            <Check className="h-3 w-3" />
          )}
          {indeterminate && (
            <Minus className="h-3 w-3" />
          )}
        </label>
      </div>

      {(label || description || error) && (
        <div className="space-y-1">
          {label && (
            <label
              htmlFor={checkboxId}
              className={cn(
                "text-sm font-medium cursor-pointer",
                error ? "text-destructive" : "text-foreground"
              )}
            >
              {label}
              {required && <span className="ml-1 text-destructive">*</span>}
            </label>
          )}

          {description && !error && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}

          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
        </div>
      )}
    </div>
  );
});

const CheckboxGroup = React.forwardRef(function CheckboxGroup(
  {
    className,
    children,
    label,
    description,
    error,
    required = false,
    disabled = false,
    ...props
  },
  ref
) {
  return (
    <fieldset
      ref={ref}
      disabled={disabled}
      className={cn("space-y-3", className)}
      {...props}
    >
      {label && (
        <legend
          className={cn(
            "text-sm font-medium",
            error ? "text-destructive" : "text-foreground"
          )}
        >
          {label}
          {required && <span className="ml-1 text-destructive">*</span>}
        </legend>
      )}

      {description && !error && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      <div className="space-y-2">{children}</div>

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </fieldset>
  );
});

export { Checkbox, CheckboxGroup };
