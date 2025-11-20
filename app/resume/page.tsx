import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function ResumePage() {
  const filePath = path.join(process.cwd(), "public", "resume.md");
  const markdown = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 md:p-12">
      <div className="fixed top-4 left-4 z-50">
        <Button asChild variant="secondary" size="sm">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Link>
        </Button>
      </div>
      <div className="prose prose-invert max-w-3xl mx-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </main>
  );
}
