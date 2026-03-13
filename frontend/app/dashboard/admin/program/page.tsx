"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Program, ProgramFormData, ProgramStatus } from "@/lib/types/program";
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
import { Textarea } from "@/components/ui/textarea";
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
  Plus,
  Pencil,
  Trash2,
  Search,
  Loader2,
  Briefcase,
  Users,
  CheckCircle2,
  Archive,
  Upload,
  X,
  ImageIcon,
} from "lucide-react";

import { LocationSearch } from "@/components/location-search";

const statusColors: Record<ProgramStatus, string> = {
  draft: "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
  active: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  completed:
    "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  archived:
    "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
};

const statusLabels: Record<ProgramStatus, string> = {
  draft: "Draft",
  active: "Aktif",
  completed: "Selesai",
  archived: "Arsip",
};

const categories = [
  "Leadership",
  "Entrepreneurship",
  "Public Policy",
  "Digital",
  "Mentoring",
  "Webinar",
  "Workshop",
];

const defaultFormData: ProgramFormData = {
  title: "",
  description: "",
  category: "Leadership",
  image_url: "",
  start_date: "",
  status: "draft",
  location: "",
  time_range: "",
  max_participants: 0,
};

export default function AdminProgramPage() {
  const supabase = createClient();
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [deletingProgram, setDeletingProgram] = useState<Program | null>(null);
  const [formData, setFormData] = useState<ProgramFormData>(defaultFormData);

  const fetchPrograms = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("programs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching programs:", error);
    } else {
      setPrograms(data || []);
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchPrograms();
  }, [fetchPrograms]);

  // Stats
  const totalPrograms = programs.length;
  const activePrograms = programs.filter((p) => p.status === "active").length;
  const totalParticipants = programs.reduce(
    (sum, p) => sum + (p.current_participants || 0),
    0
  );
  const archivedPrograms = programs.filter(
    (p) => p.status === "archived"
  ).length;

  // Filtered programs
  const filteredPrograms = programs.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.category || "").toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = filterStatus === "all" || p.status === filterStatus;
    return matchSearch && matchStatus;
  });

  // Form handlers
  const openCreateDialog = () => {
    setEditingProgram(null);
    setFormData(defaultFormData);
    setImageFile(null);
    setImagePreview(null);
    setDialogOpen(true);
  };

  const openEditDialog = (program: Program) => {
    setEditingProgram(program);
    setFormData({
      title: program.title,
      description: program.description || "",
      category: program.category,
      image_url: program.image_url || "",
      start_date: program.start_date || "",
      status: program.status,
      location: program.location || "",
      time_range: program.time_range || "",
      max_participants: program.max_participants || 0,
    });
    setImageFile(null);
    setImagePreview(program.image_url || null);
    setDialogOpen(true);
  };

  const openDeleteDialog = (program: Program) => {
    setDeletingProgram(program);
    setDeleteDialogOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);

    let finalImageUrl = formData.image_url;

    // Upload image if a new file is selected
    if (imageFile) {
      setUploading(true);
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `programs/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("program-images")
        .upload(filePath, imageFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("Error uploading image:", uploadError);
        alert(`Gagal mengupload gambar: ${uploadError.message}`);
        setSaving(false);
        setUploading(false);
        return;
      }

      // Get the public URL
      const { data: urlData } = supabase.storage
        .from("program-images")
        .getPublicUrl(filePath);
      finalImageUrl = urlData.publicUrl;
      setUploading(false);
    }

    if (editingProgram) {
      // Update
      const { error } = await supabase
        .from("programs")
        .update({
          title: formData.title,
          description: formData.description || null,
          category: formData.category,
          image_url: finalImageUrl || null,
          start_date: formData.start_date || null,
          status: formData.status,
          location: formData.location || null,
          time_range: formData.time_range || null,
          max_participants: formData.max_participants,
        })
        .eq("id", editingProgram.id);
      if (error) {
        console.error("Error updating program:", error);
        alert(`Gagal mengupdate: ${error.message}`);
      }
    } else {
      // Create
      const { error } = await supabase.from("programs").insert({
        title: formData.title,
        description: formData.description || null,
        category: formData.category,
        image_url: finalImageUrl || null,
        start_date: formData.start_date || null,
        status: formData.status,
        location: formData.location || null,
        time_range: formData.time_range || null,
        max_participants: formData.max_participants,
      });
      if (error) {
        console.error("Error creating program:", error);
        alert(`Gagal membuat program: ${error.message}`);
      }
    }
    setSaving(false);
    setDialogOpen(false);
    fetchPrograms();
  };

  const handleDelete = async () => {
    if (!deletingProgram) return;
    setSaving(true);
    const { error } = await supabase
      .from("programs")
      .delete()
      .eq("id", deletingProgram.id);
    if (error) {
      console.error("Error deleting program:", error);
      alert(`Gagal menghapus: ${error.message}`);
    }
    setSaving(false);
    setDeleteDialogOpen(false);
    setDeletingProgram(null);
    fetchPrograms();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Kelola Program</h1>
        <p className="text-muted-foreground">
          Buat, edit, dan kelola program Lingkar Visioner.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Program</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPrograms}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Program Aktif</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activePrograms}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Peserta
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalParticipants}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Diarsipkan</CardTitle>
            <Archive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{archivedPrograms}</div>
          </CardContent>
        </Card>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Cari program..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={filterStatus} onValueChange={(val) => setFilterStatus(val ?? "all")}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="active">Aktif</SelectItem>
              <SelectItem value="completed">Selesai</SelectItem>
              <SelectItem value="archived">Arsip</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={openCreateDialog}>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Program
        </Button>
      </div>

      {/* Programs Table */}
      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">
                Memuat data...
              </span>
            </div>
          ) : filteredPrograms.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Briefcase className="mb-4 h-12 w-12 text-muted-foreground/50" />
              <p className="text-lg font-medium text-muted-foreground">
                Belum ada program
              </p>
              <p className="text-sm text-muted-foreground">
                Klik &quot;Tambah Program&quot; untuk membuat program baru.
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Program</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Lokasi</TableHead>
                  <TableHead>Peserta</TableHead>
                  <TableHead>Tanggal Mulai</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPrograms.map((program) => (
                  <TableRow key={program.id}>
                    <TableCell className="font-medium max-w-[250px]">
                      <div className="truncate">{program.title}</div>
                      {program.description && (
                        <div className="truncate text-xs text-muted-foreground">
                          {program.description}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{program.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          statusColors[program.status]
                        }`}
                      >
                        {statusLabels[program.status]}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {program.location || "-"}
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {program.current_participants}
                        {program.max_participants > 0 &&
                          `/${program.max_participants}`}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {program.start_date
                        ? new Date(program.start_date).toLocaleDateString(
                            "id-ID",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )
                        : "-"}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => openEditDialog(program)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => openDeleteDialog(program)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Create / Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProgram ? "Edit Program" : "Tambah Program Baru"}
            </DialogTitle>
            <DialogDescription>
              {editingProgram
                ? "Perbarui detail program yang sudah ada."
                : "Isi detail untuk membuat program baru."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Judul Program *</Label>
              <Input
                id="title"
                placeholder="Contoh: Leadership Bootcamp 2026"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi</Label>
              <Textarea
                id="description"
                placeholder="Deskripsi program..."
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Kategori</Label>
                <Select
                  value={formData.category}
                  onValueChange={(val) =>
                    setFormData({ ...formData, category: val ?? "Leadership" })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(val) =>
                    setFormData({
                      ...formData,
                      status: (val ?? "draft") as ProgramStatus,
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="active">Aktif</SelectItem>
                    <SelectItem value="completed">Selesai</SelectItem>
                    <SelectItem value="archived">Arsip</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Lokasi</Label>
                <LocationSearch
                  value={formData.location || ""}
                  onChange={(val) => setFormData({ ...formData, location: val })}
                  placeholder="Contoh: Jakarta Convention Center"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time_range">Jam Kegiatan</Label>
                <Input
                  id="time_range"
                  placeholder="Contoh: 09:00 - 15:00 WIB"
                  value={formData.time_range}
                  onChange={(e) =>
                    setFormData({ ...formData, time_range: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start_date">Tanggal Mulai</Label>
                <Input
                  id="start_date"
                  type="date"
                  value={formData.start_date}
                  onChange={(e) =>
                    setFormData({ ...formData, start_date: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max_participants">Maks. Peserta</Label>
                <Input
                  id="max_participants"
                  type="number"
                  min={0}
                  value={formData.max_participants}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      max_participants: parseInt(e.target.value) || 0,
                    })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Gambar Program</Label>
              {(imagePreview || formData.image_url) && (
                <div className="relative w-full h-40 rounded-lg overflow-hidden border bg-muted">
                  <img
                    src={imagePreview || formData.image_url}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview(null);
                      setFormData({ ...formData, image_url: "" });
                    }}
                    className="absolute top-2 right-2 rounded-full bg-black/60 p-1 text-white hover:bg-black/80 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              <div className="flex items-center gap-2">
                <label
                  htmlFor="image-upload"
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-muted-foreground/30 px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary w-full justify-center"
                >
                  <Upload className="h-4 w-4" />
                  <span>{imageFile ? imageFile.name : "Pilih gambar (maks. 2MB)"}</span>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    // Validate file size (2MB)
                    if (file.size > 2 * 1024 * 1024) {
                      alert("Ukuran gambar maksimal 2MB!");
                      e.target.value = "";
                      return;
                    }

                    setImageFile(file);
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setImagePreview(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Format: JPG, PNG, WebP, GIF. Maksimal 2MB.
              </p>
            </div>
          </div>

          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Batal
            </DialogClose>
            <Button onClick={handleSave} disabled={saving || !formData.title}>
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {editingProgram ? "Simpan Perubahan" : "Buat Program"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Hapus Program</DialogTitle>
            <DialogDescription>
              Apakah kamu yakin ingin menghapus program{" "}
              <strong>{deletingProgram?.title}</strong>? Tindakan ini tidak bisa
              dibatalkan.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Batal
            </DialogClose>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={saving}
            >
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
