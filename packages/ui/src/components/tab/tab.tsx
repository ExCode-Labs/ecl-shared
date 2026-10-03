import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

import { cn } from "../../lib/utils";

import { tabGroupVariants, tabVariants } from "./tab.styles";

import type { TabGroupProps, TabPanelProps, TabProps } from "./tab.types";

interface TabContextValue {
  value?: string;
  onValueChange?: (value: string) => void;

  size: TabGroupProps["size"];
  variant: TabGroupProps["variant"];
  fullWidth: boolean;

  registerTab: (value: string, element: HTMLButtonElement | null) => void;
}

const TabContext = createContext<TabContextValue | null>(null);

function useTabContext() {
  return useContext(TabContext);
}

export function Tab({
  children,
  className,
  value,
  active = false,
  size,
  variant,
  icon,
  disabled,
  onClick,
  ...props
}: TabProps) {
  const context = useTabContext();

  const isActive = context ? context.value === value : active;

  const resolvedSize = size ?? context?.size ?? "md";
  const resolvedVariant = variant ?? context?.variant ?? "line";
  const fullWidth = context?.fullWidth ?? false;

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (context && value) {
      context.registerTab(value, buttonRef.current);
    }
  }, [context, value]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (!event.defaultPrevented && context && value && !disabled) {
      context.onValueChange?.(value);
    }
  };

  return (
    <button
      {...props}
      ref={buttonRef}
      type="button"
      role={context ? "tab" : undefined}
      aria-selected={context ? isActive : undefined}
      disabled={disabled}
      data-active={isActive}
      onClick={handleClick}
      className={cn(
        tabVariants({
          variant: resolvedVariant,
          size: resolvedSize,
          fullWidth,
        }),
        className,
      )}
    >
      {icon && (
        <span aria-hidden="true" className="shrink-0">
          {icon}
        </span>
      )}

      <span>{children}</span>
    </button>
  );
}

export function TabGroup({
  items,
  children,
  value,
  defaultValue,
  onValueChange,
  size = "md",
  variant = "line",
  fullWidth = false,
  className,
}: TabGroupProps) {
  const childArray = Children.toArray(children);

  const tabChildren = childArray.filter((child) => isValidElement(child) && child.type === Tab);

  const panelChildren = childArray.filter(
    (child) => isValidElement(child) && child.type === TabPanel,
  );

  const firstValue = defaultValue ?? items?.[0]?.value ?? getFirstChildValue(children);

  const [internalValue, setInternalValue] = useState(firstValue);

  const activeValue = value !== undefined ? value : internalValue;

  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const registerTab = (tabValue: string, element: HTMLButtonElement | null) => {
    tabRefs.current[tabValue] = element;
  };

  const handleValueChange = (nextValue: string) => {
    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const tabElements = Object.entries(tabRefs.current)
      .filter(([, element]) => element && !element.disabled)
      .map(([value, element]) => ({
        value,
        element: element!,
      }));

    if (!tabElements.length) {
      return;
    }

    const currentIndex = tabElements.findIndex(({ value }) => value === activeValue);

    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabElements.length;
    }

    if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabElements.length) % tabElements.length;
    }

    if (event.key === "Home") {
      nextIndex = 0;
    }

    if (event.key === "End") {
      nextIndex = tabElements.length - 1;
    }

    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
      event.preventDefault();

      const nextTab = tabElements[nextIndex];

      handleValueChange(nextTab.value);
      nextTab.element.focus();
    }
  };

  return (
    <TabContext.Provider
      value={{
        value: activeValue,
        onValueChange: handleValueChange,
        size,
        variant,
        fullWidth,
        registerTab,
      }}
    >
      <div className="flex flex-col gap-4">
        {/* Tab List */}
        <div
          role="tablist"
          aria-orientation="horizontal"
          className={cn(tabGroupVariants({ variant }), fullWidth && "w-full", className)}
          onKeyDown={handleKeyDown}
        >
          {items
            ? items.map((item) => (
                <Tab key={item.value} value={item.value} disabled={item.disabled} icon={item.icon}>
                  {item.label}
                </Tab>
              ))
            : tabChildren}
        </div>

        {/* Tab Panels */}
        {panelChildren}
      </div>
    </TabContext.Provider>
  );
}

export function TabPanel({ value, children, className, keepMounted = false }: TabPanelProps) {
  const context = useTabContext();

  const isActive = context ? context.value === value : false;

  if (!keepMounted && !isActive) {
    return null;
  }

  return (
    <div role="tabpanel" hidden={!isActive} className={cn(className)} tabIndex={0}>
      {children}
    </div>
  );
}

function getFirstChildValue(children: ReactNode): string | undefined {
  const childArray = Children.toArray(children);

  for (const child of childArray) {
    if (isValidElement<TabProps>(child)) {
      if (typeof child.props.value === "string") {
        return child.props.value;
      }
    }
  }

  return undefined;
}
