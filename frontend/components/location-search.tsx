"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { MapPin, Loader2, X } from "lucide-react";

interface LocationSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

interface TomTomResult {
  id: string;
  type: string;
  address: {
    freeformAddress: string;
    municipality?: string;
    countrySubdivision?: string;
    country?: string;
  };
  position: {
    lat: number;
    lon: number;
  };
}

export function LocationSearch({
  value,
  onChange,
  placeholder = "Cari lokasi...",
}: LocationSearchProps) {
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<TomTomResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const API_KEY = process.env.NEXT_PUBLIC_TOMTOM_API_KEY;

  // Sync query with external value changes
  useEffect(() => {
    setQuery(value);
  }, [value]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchLocation = useCallback(
    async (searchQuery: string) => {
      if (!searchQuery || searchQuery.length < 3 || !API_KEY) {
        setResults([]);
        setIsOpen(false);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(
          `https://api.tomtom.com/search/2/search/${encodeURIComponent(
            searchQuery
          )}.json?key=${API_KEY}&language=id-ID&countrySet=ID&limit=5&typeahead=true`
        );
        const data = await res.json();
        if (data.results) {
          setResults(data.results);
          setIsOpen(true);
        }
      } catch (error) {
        console.error("TomTom search error:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    },
    [API_KEY]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    onChange(val);

    // Debounce the API call
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      searchLocation(val);
    }, 400);
  };

  const handleSelect = (result: TomTomResult) => {
    const address = result.address.freeformAddress;
    setQuery(address);
    onChange(address);
    setIsOpen(false);
    setResults([]);
  };

  const handleClear = () => {
    setQuery("");
    onChange("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
          className="pl-9 pr-8"
        />
        {loading && (
          <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
        )}
        {!loading && query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border bg-popover p-1 shadow-md">
          {results.map((result) => (
            <button
              key={result.id}
              type="button"
              className="flex w-full items-start gap-2 rounded-md px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => handleSelect(result)}
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0">
                <p className="font-medium truncate">
                  {result.address.freeformAddress}
                </p>
                {result.address.countrySubdivision && (
                  <p className="text-xs text-muted-foreground truncate">
                    {result.address.municipality
                      ? `${result.address.municipality}, `
                      : ""}
                    {result.address.countrySubdivision}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {!API_KEY && (
        <p className="mt-1 text-xs text-destructive">
          TomTom API Key belum dikonfigurasi. Tambahkan NEXT_PUBLIC_TOMTOM_API_KEY di .env.local
        </p>
      )}
    </div>
  );
}
