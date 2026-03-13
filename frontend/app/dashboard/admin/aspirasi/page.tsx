"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Aspiration } from "@/lib/types/aspirasi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Search,
  Loader2,
  Megaphone,
  Trash2,
  RefreshCw,
  MoreHorizontal,
  Eye,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdminAspirasiPage() {
  const supabase = createClient();
  const [aspirations, setAspirations] = useState<Aspiration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedAspiration, setSelectedAspiration] = useState<Aspiration | null>(null);

  const fetchAspirations = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("aspirations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setAspirations(data || []);
    } catch (error) {
      console.error("Error fetching aspirations:", error);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    fetchAspirations();
  }, [fetchAspirations]);

  const handleDelete = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus aspirasi ini?")) return;

    try {
      const { error } = await supabase.from("aspirations").delete().eq("id", id);
      if (error) throw error;
      setAspirations(aspirations.filter((asp) => asp.id !== id));
    } catch (error) {
      console.error("Error deleting aspiration:", error);
      alert("Gagal menghapus aspirasi.");
    }
  };

  const filteredAspirations = aspirations.filter((asp) => {
    const matchesSearch =
      asp.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asp.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asp.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || asp.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(aspirations.map((asp) => asp.category)));

  if (loading && aspirations.length === 0) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Kelola Aspirasi</h1>
          <p className="text-muted-foreground">
            Monitor dan tinjau semua aspirasi yang masuk dari publik.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Aspirasi</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{aspirations.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Cari aspirasi..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Select value={categoryFilter} onValueChange={(val) => setCategoryFilter(val || "all")}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Semua Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="icon"
                onClick={fetchAspirations}
                disabled={loading}
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pengirim</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead className="max-w-[300px]">Pesan</TableHead>
                  <TableHead>Tanggal</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAspirations.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-24 text-center text-muted-foreground"
                    >
                      Tidak ada aspirasi ditemukan.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredAspirations.map((asp) => (
                    <TableRow key={asp.id}>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium">{asp.full_name}</span>
                          <span className="text-xs text-muted-foreground">{asp.email}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="capitalize">
                          {asp.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-[300px]">
                        <p className="truncate text-muted-foreground">{asp.message}</p>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {new Date(asp.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </TableCell>
                      <TableCell className="text-right">
                        <Dialog>
                          <DropdownMenu>
                            <DropdownMenuTrigger render={<Button variant="ghost" size="icon" />}>
                              <MoreHorizontal className="h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuGroup>
                                <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DialogTrigger 
                                  nativeButton={false}
                                  render={<DropdownMenuItem onClick={() => setSelectedAspiration(asp)} />}
                                >
                                  <div className="flex items-center">
                                    <Eye className="mr-2 h-4 w-4" />
                                    Lihat Detail
                                  </div>
                                </DialogTrigger>
                                <DropdownMenuItem
                                  className="text-destructive focus:text-destructive"
                                  onClick={() => handleDelete(asp.id)}
                                >
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Hapus
                                </DropdownMenuItem>
                              </DropdownMenuGroup>
                            </DropdownMenuContent>
                          </DropdownMenu>

                          <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                              <DialogTitle>Detail Aspirasi</DialogTitle>
                              <DialogDescription>
                                Masuk pada {selectedAspiration && new Date(selectedAspiration.created_at).toLocaleString("id-ID")}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-start gap-4">
                                <Label className="text-right font-bold text-xs uppercase tracking-widest text-muted-foreground">Pengirim</Label>
                                <div className="col-span-3">
                                  <p className="font-medium">{selectedAspiration?.full_name}</p>
                                  <p className="text-sm text-muted-foreground">{selectedAspiration?.email}</p>
                                </div>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-bold text-xs uppercase tracking-widest text-muted-foreground">Kategori</Label>
                                <div className="col-span-3">
                                  <Badge variant="outline">{selectedAspiration?.category}</Badge>
                                </div>
                              </div>
                              <div className="grid grid-cols-4 items-start gap-4">
                                <Label className="text-right font-bold text-xs uppercase tracking-widest text-muted-foreground">Pesan</Label>
                                <div className="col-span-3 rounded-md border p-4 bg-muted/50 max-h-[250px] overflow-y-auto underline-offset-4">
                                  <p className="text-sm leading-relaxed">{selectedAspiration?.message}</p>
                                </div>
                              </div>
                            </div>
                            <DialogFooter>
                              <DialogClose render={<Button type="button" variant="secondary" />}>
                                Tutup
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
