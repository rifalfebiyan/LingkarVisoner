"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { 
  ImageIcon, 
  Trash2, 
  Loader2, 
  AlertTriangle,
  ExternalLink,
  Search,
  LayoutGrid,
  Info
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type StorageFile = {
  name: string;
  id: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  fullPath: string; // Added to store path including folder
  metadata: {
    size: number;
    mimetype: string;
  };
};

export default function MediaPage() {
  const STORAGE_LIMIT = 1024 * 1024 * 1024; // 1 GB in bytes
  const [files, setFiles] = useState<Record<string, StorageFile[]>>({
    'news-images': [],
    'program-images': []
  });
  const [loading, setLoading] = useState(true);
  const [activeBucket, setActiveBucket] = useState('news-images');
  const [deleteConfirm, setDeleteConfirm] = useState<{bucket: string, name: string, fullPath: string} | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const supabase = createClient();

  const fetchFilesFromFolders = useCallback(async (bucket: string, folders: string[]) => {
    try {
      let allFiles: StorageFile[] = [];
      
      for (const folder of folders) {
        const { data, error } = await supabase.storage.from(bucket).list(folder, {
          limit: 100,
          offset: 0,
          sortBy: { column: 'name', order: 'desc' }
        });

        if (error) {
          console.error(`Error listing ${bucket}/${folder}:`, error);
          continue;
        }
        
        const filteredFiles = (data as any[])
          .filter(f => f.metadata)
          .map(f => ({
            ...f,
            fullPath: folder ? `${folder}/${f.name}` : f.name
          })) as StorageFile[];
          
        allFiles = [...allFiles, ...filteredFiles];
      }
      
      allFiles.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      
      setFiles(prev => ({ ...prev, [bucket]: allFiles }));
    } catch (err) {
      console.error(`Error fetching files from ${bucket}:`, err);
    }
  }, [supabase]);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await Promise.all([
        fetchFilesFromFolders('news-images', ['posts', 'editor', '']),
        fetchFilesFromFolders('program-images', ['programs', ''])
      ]);
      setLoading(false);
    };
    init();
  }, [fetchFilesFromFolders]);

  const handleDelete = async () => {
    if (!deleteConfirm) return;
    
    setIsDeleting(true);
    try {
      const { error } = await supabase.storage
        .from(deleteConfirm.bucket)
        .remove([deleteConfirm.fullPath]);

      if (error) throw error;

      setFiles(prev => ({
        ...prev,
        [deleteConfirm.bucket]: prev[deleteConfirm.bucket].filter(f => f.fullPath !== deleteConfirm.fullPath)
      }));
      setDeleteConfirm(null);
    } catch (err) {
      console.error("Error deleting file:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  const getPublicUrl = (bucket: string, path: string) => {
    return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const filteredFiles = files[activeBucket].filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalUsedBytes = Object.values(files).flat().reduce((acc, f) => acc + (f.metadata?.size || 0), 0);
  const usagePercentage = Math.min((totalUsedBytes / STORAGE_LIMIT) * 100, 100);

  return (
    <div className="space-y-6 flex flex-col">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Kelola Media</h1>
        <p className="text-muted-foreground">
          Kelola semua aset visual yang diunggah ke website di satu tempat.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <Tabs defaultValue="news-images" onValueChange={setActiveBucket} className="w-full">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
              <TabsList>
                <TabsTrigger value="news-images">Berita</TabsTrigger>
                <TabsTrigger value="program-images">Program</TabsTrigger>
              </TabsList>

              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Cari file..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>

            {loading ? (
              <div className="flex h-[450px] items-center justify-center rounded-lg border bg-slate-50/50">
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-sm font-medium text-muted-foreground">Memuat media...</p>
                </div>
              </div>
            ) : filteredFiles.length === 0 ? (
              <div className="flex h-[450px] flex-col items-center justify-center gap-2 rounded-lg border bg-slate-50/50">
                <ImageIcon className="h-10 w-10 text-slate-300" />
                <p className="text-sm font-medium text-muted-foreground">
                  {searchQuery ? "Pencarian tidak ditemukan" : "Belum ada file media"}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
                {filteredFiles.map((file) => (
                  <Card key={file.fullPath} className="overflow-hidden group">
                    <div className="aspect-video relative bg-slate-100 overflow-hidden">
                      <img 
                        src={getPublicUrl(activeBucket, file.fullPath)} 
                        alt={file.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                         <a 
                           href={getPublicUrl(activeBucket, file.fullPath)} 
                           target="_blank" 
                           rel="noreferrer"
                           className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all"
                         >
                            <ExternalLink className="h-4 w-4" />
                         </a>
                      </div>
                    </div>
                    <CardHeader className="p-3 space-y-1">
                      <CardTitle className="text-sm font-bold truncate" title={file.fullPath}>
                        {file.fullPath}
                      </CardTitle>
                      <div className="flex items-center justify-between">
                         <Badge variant="outline" className="text-[10px] h-4 px-1.5 font-normal">
                            {formatSize(file.metadata.size)}
                         </Badge>
                         <Button 
                           size="icon" 
                           variant="ghost" 
                           className="h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10"
                           onClick={() => setDeleteConfirm({ bucket: activeBucket, name: file.name, fullPath: file.fullPath })}
                         >
                           <Trash2 className="h-4 w-4" />
                         </Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            )}
          </Tabs>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-500" />
                Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                Penghapusan media bersifat permanen dan tidak dapat dibatalkan.
              </p>
              <p className="mt-2 pl-6">
                Pastikan gambar tidak lagi digunakan pada berita atau program sebelum menghapusnya.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Statistik</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center justify-between text-sm">
                 <span className="text-muted-foreground">Total Media</span>
                 <span className="font-bold">{files['news-images'].length + files['program-images'].length}</span>
               </div>
               
               <div className="space-y-2">
                 <div className="flex items-center justify-between text-sm">
                   <span className="text-muted-foreground">Penyimpanan Terpakai</span>
                   <span className="font-bold">{formatSize(totalUsedBytes)}</span>
                 </div>
                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800 border">
                    <div 
                      className={`h-full transition-all duration-500 ${usagePercentage > 90 ? 'bg-red-500' : usagePercentage > 70 ? 'bg-amber-500' : 'bg-green-500'}`}
                      style={{ width: `${usagePercentage}%` }}
                    />
                 </div>
                 <p className="text-[10px] text-muted-foreground text-right italic">
                   Batas: {formatSize(STORAGE_LIMIT)} ({usagePercentage.toFixed(1)}%)
                 </p>
               </div>

               <hr className="border-dashed" />
               <div className="flex items-center justify-between text-sm">
                 <span className="text-muted-foreground">Berita</span>
                 <span className="font-bold">{files['news-images'].length}</span>
               </div>
               <div className="flex items-center justify-between text-sm">
                 <span className="text-muted-foreground">Program</span>
                 <span className="font-bold">{files['program-images'].length}</span>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Konfirmasi Hapus</DialogTitle>
            <DialogDescription>
              Apakah Anda yakin ingin menghapus <span className="font-bold text-foreground">{deleteConfirm?.name}</span>? 
              Aksi ini akan menghapus file secara permanen dari server.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirm(null)}>Batal</Button>
            <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Trash2 className="h-4 w-4 mr-2" />}
              Hapus File
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
