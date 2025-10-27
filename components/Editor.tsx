"use client";

import { Bold, Check, Edit, Heading2, Italic, List, ListOrdered, Redo, Underline, Undo, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";
import styles from "../css/wysiwyg-editor.module.css";

interface WYSIWYGEditorProps {
  initialContent: string;
  onSave?: (content: string) => void;
  onCancel?: () => void;
  className?: string;
}

export function WYSIWYGEditor({ initialContent, onSave, onCancel, className }: WYSIWYGEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContent(DOMPurify.sanitize(initialContent));
  }, [initialContent]);

  const executeCommand = (commandName: string, valueArgument?: string) => {
    document.execCommand(commandName, false, valueArgument);
    editorRef.current?.focus();
  };

  const handleSave = () => {
    const newContent = DOMPurify.sanitize(editorRef.current?.innerHTML || "");
    setContent(newContent);
    setIsEditing(false);
    onSave?.(newContent);
  };

  const handleCancel = () => {
    if (editorRef.current) {
      editorRef.current.innerHTML = content;
    }
    setIsEditing(false);
    onCancel?.();
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      editorRef.current?.focus();
    }, 0);
  };

  return (
    <div className={`${styles.container} ${className || ""}`}>
      {isEditing && (
        <div className={styles.toolbar}>
          <button type="button" onClick={() => executeCommand("bold")} className={styles.toolbarButton} title="Bold">
            <Bold size={16} />
          </button>
          <button
            type="button"
            onClick={() => executeCommand("italic")}
            className={styles.toolbarButton}
            title="Italic"
          >
            <Italic size={16} />
          </button>
          <button
            type="button"
            onClick={() => executeCommand("underline")}
            className={styles.toolbarButton}
            title="Underline"
          >
            <Underline size={16} />
          </button>

          <div className={styles.divider} />

          <button
            type="button"
            onClick={() => executeCommand("formatBlock", "<h2>")}
            className={styles.toolbarButton}
            title="Heading 2"
          >
            <Heading2 size={16} />
          </button>
          <button
            type="button"
            onClick={() => executeCommand("insertUnorderedList")}
            className={styles.toolbarButton}
            title="Unordered List"
          >
            <List size={16} />
          </button>
          <button
            type="button"
            onClick={() => executeCommand("insertOrderedList")}
            className={styles.toolbarButton}
            title="Ordered List"
          >
            <ListOrdered size={16} />
          </button>

          <div className={styles.divider} />

          <button type="button" onClick={() => executeCommand("undo")} className={styles.toolbarButton} title="Undo">
            <Undo size={16} />
          </button>
          <button type="button" onClick={() => executeCommand("redo")} className={styles.toolbarButton} title="Redo">
            <Redo size={16} />
          </button>
        </div>
      )}

      {/* Editor Content */}
      <div className={styles.editorWrapper}>
        <div
          ref={editorRef}
          contentEditable={isEditing}
          suppressContentEditableWarning
          dangerouslySetInnerHTML={{ __html: content }}
          className={styles.editor}
        />

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          {!isEditing ? (
            <button onClick={handleEdit} className={styles.button}>
              <Edit size={16} className={styles.buttonIcon} />
              Edit
            </button>
          ) : (
            <>
              <button onClick={handleCancel} className={`${styles.button} ${styles.buttonOutline}`}>
                <X size={16} className={styles.buttonIcon} />
                Cancel
              </button>
              <button onClick={handleSave} className={styles.button}>
                <Check size={16} className={styles.buttonIcon} />
                Save
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
