// src/components/ui/Select.jsx
import React, { useState } from "react";
import { ChevronDown, Check, Search, X } from "lucide-react";
import { cn } from "../../utils/cn";
import Input from "./Input";

const Select = ({
  className,
  options = [],
  value,
  placeholder = "Select an option",
  multiple = false,
  disabled = false,
  required = false,
  label,
  description,
  error,
  searchable = false,
  clearable = false,
  loading = false,
  id,
  name,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const selectId =
    id || `select-${Math.random().toString(36).substring(2, 9)}`;

  const filteredOptions =
    searchable && searchTerm
      ? options.filter(
          (o) =>
            o.label?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(o.value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      : options;

  const isSelected = (val) =>
    multiple ? value?.includes(val) : value === val;

  const displayValue = () => {
    if (!value || (Array.isArray(value) && value.length === 0))
      return placeholder;

    if (multiple) {
      const selected = options.filter((o) => value.includes(o.value));
      return selected.length === 1
        ? selected[0].label
        : `${selected.length} selected`;
    }

    return options.find((o) => o.value === value)?.label || placeholder;
  };

  const handleSelect = (option) => {
    if (option.disabled) return;

    if (multiple) {
      const newValue = value?.includes(option.value)
        ? value.filter((v) => v !== option.value)
        : [...(value || []), option.value];
      onChange?.(newValue);
    } else {
      onChange?.(option.value);
      setIsOpen(false);
    }
  };

  const clearValue = (e) => {
    e.stopPropagation();
    onChange?.(multiple ? [] : "");
  };

  return (
    <div className={cn("relative", className)}>
      {label && (
        <label
          htmlFor={selectId}
          className={cn(
            "block mb-2 text-sm font-medium",
            error ? "text-destructive" : "text-foreground"
          )}
        >
          {label}
          {required && <span className="ml-1 text-destructive">*</span>}
        </label>
      )}

      <div
        id={selectId}
        onClick={() => !disabled && setIsOpen((p) => !p)}
        className={cn(
          "flex h-10 items-center justify-between rounded-md border px-3 text-sm cursor-pointer bg-white",
          error && "border-destructive",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <span className="truncate text-muted-foreground">
          {displayValue()}
        </span>

        <div className="flex items-center gap-2">
          {clearable && value && !disabled && (
            <X
              className="h-4 w-4 cursor-pointer"
              onClick={clearValue}
            />
          )}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </div>

      {/* Hidden select for forms */}
      <select
        name={name}
        value={value || ""}
        multiple={multiple}
        required={required}
        readOnly
        className="sr-only"
      />

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-white shadow-md">
          {searchable && (
            <div className="p-2 border-b">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  className="pl-8"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="max-h-60 overflow-auto">
            {filteredOptions.length === 0 ? (
              <div className="p-3 text-sm text-muted-foreground">
                No options
              </div>
            ) : (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 text-sm cursor-pointer hover:bg-accent",
                    isSelected(option.value) &&
                      "bg-primary text-primary-foreground",
                    option.disabled && "opacity-50 pointer-events-none"
                  )}
                >
                  <span>{option.label}</span>
                  {multiple && isSelected(option.value) && (
                    <Check className="h-4 w-4" />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {description && !error && (
        <p className="mt-1 text-sm text-muted-foreground">
          {description}
        </p>
      )}
      {error && (
        <p className="mt-1 text-sm text-destructive">{error}</p>
      )}
    </div>
  );
};

export default Select;
