"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { createClient } from "@/lib/supabase/client";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function MarkdownEditor({
  value,
  onChange,
  placeholder,
}: MarkdownEditorProps) {
  const options = useMemo(() => {
    return {
      placeholder,
      spellChecker: false,
      status: false,
      minHeight: "400px",
      autofocus: false,
      toolbar: [
        "bold", "italic", "heading", "|", 
        "quote", "unordered-list", "ordered-list", "|", 
        "link", "upload-image", "|", 
        "preview", "side-by-side", "fullscreen", "|", 
        "guide"
      ] as any,
      uploadImage: true,
      imageUploadFunction: async (file: File, onSuccess: (url: string) => void, onError: (error: string) => void) => {
        const supabase = createClient();
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `editor/${fileName}`;

        try {
          const { error: uploadError } = await supabase.storage
            .from('news-images')
            .upload(filePath, file);

          if (uploadError) throw uploadError;

          const { data: { publicUrl } } = supabase.storage
            .from('news-images')
            .getPublicUrl(filePath);

          onSuccess(publicUrl);
        } catch (error: any) {
          console.error('Error uploading image to editor:', error);
          onError(error.message || 'Gagal mengunggah gambar');
        }
      }
    };
  }, [placeholder]);

  return (
    <div className="markdown-editor-container border-4 border-slate-900 bg-white dark:border-slate-100 dark:bg-slate-900">
      <SimpleMDE
        value={value}
        onChange={onChange}
        options={options}
      />
      <style jsx global>{`
        .markdown-editor-container .CodeMirror {
          border: none !important;
          border-radius: 0 !important;
          font-family: inherit !important;
          font-size: 16px !important;
          color: inherit !important;
          background: transparent !important;
        }
        .markdown-editor-container .editor-toolbar {
          border: none !important;
          border-bottom: 2px solid #0f172a !important;
          border-radius: 0 !important;
          background: #f8fafc !important;
        }
        .dark .markdown-editor-container .editor-toolbar {
          border-bottom: 2px solid #f1f5f9 !important;
          background: #1e293b !important;
          color: white !important;
        }
        .dark .markdown-editor-container .editor-toolbar button {
          color: white !important;
        }
        .dark .markdown-editor-container .editor-toolbar button.active,
        .dark .markdown-editor-container .editor-toolbar button:hover {
          background: #334155 !important;
        }
      `}</style>
    </div>
  );
}
