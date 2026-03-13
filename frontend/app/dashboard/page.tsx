import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Megaphone,
  Briefcase,
  Users,
  ArrowUpRight,
} from "lucide-react"

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const role = user?.user_metadata?.role || "user";

  // Fetch real data from Supabase
  const { count: totalPrograms } = await supabase
    .from("programs")
    .select("*", { count: "exact", head: true });

  const { count: activePrograms } = await supabase
    .from("programs")
    .select("*", { count: "exact", head: true })
    .eq("status", "active");

  const { data: programsData } = await supabase
    .from("programs")
    .select("current_participants");

  const totalParticipants = (programsData || []).reduce(
    (sum, p) => sum + (p.current_participants || 0),
    0
  );

  const { data: recentPrograms } = await supabase
    .from("programs")
    .select("id, title, category, status, start_date")
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">
          {role === "admin" ? "Administrator Overview" : "Overview"}
        </h1>
        <p className="text-muted-foreground">
          Selamat datang, {user.email}.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {role === "admin" ? (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Program</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalPrograms ?? 0}</div>
                <p className="text-xs text-muted-foreground">Semua program terdaftar</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Program Aktif</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activePrograms ?? 0}</div>
                <p className="text-xs text-muted-foreground">Sedang berjalan</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Peserta</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalParticipants}</div>
                <p className="text-xs text-muted-foreground">Dari semua program</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Platform</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <Badge className="bg-green-500 text-base px-2 py-0.5">Online</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Supabase operational</p>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Program Tersedia</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activePrograms ?? 0}</div>
                <p className="text-xs text-muted-foreground">Program yang bisa diikuti</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Peserta</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalParticipants}</div>
                <p className="text-xs text-muted-foreground">Dari semua program</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Aspirasimu</CardTitle>
                <Megaphone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">Belum ada aspirasi</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Status</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <Badge className="bg-green-500 text-base px-2 py-0.5">Aktif</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Akun terverifikasi</p>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Program Terbaru</CardTitle>
            <CardDescription>
              {role === "admin" ? "Program yang baru ditambahkan ke platform." : "Program terbaru yang tersedia."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {(!recentPrograms || recentPrograms.length === 0) ? (
                <p className="text-sm text-muted-foreground py-4 text-center">
                  Belum ada program. {role === "admin" ? "Buat program pertama di menu Kelola Program." : ""}
                </p>
              ) : (
                recentPrograms.map((program) => (
                  <div key={program.id} className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{program.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {program.category}
                        {program.start_date ? ` · ${new Date(program.start_date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}` : ""}
                      </p>
                    </div>
                    <div className="ml-auto font-medium">
                      <Badge variant="outline" className="capitalize">{program.status}</Badge>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>{role === "admin" ? "Platform Health" : "Info Platform"}</CardTitle>
            <CardDescription>
              Status layanan yang digunakan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center rounded-lg border p-3">
                <span className="text-sm font-medium">Supabase Auth</span>
                <Badge className="bg-green-500">Operational</Badge>
              </div>
              <div className="flex justify-between items-center rounded-lg border p-3">
                <span className="text-sm font-medium">Database</span>
                <Badge className="bg-green-500">Operational</Badge>
              </div>
              <div className="flex justify-between items-center rounded-lg border p-3">
                <span className="text-sm font-medium">Storage</span>
                <Badge className="bg-green-500">Operational</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
