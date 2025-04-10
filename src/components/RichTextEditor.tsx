// components/RichTextEditor.tsx
"use client";
import {useState, useRef, useEffect} from "react";
import {Editor, EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import {TextStyle} from "@tiptap/extension-text-style";
import {FontSize} from "@tiptap/extension-font-size";
import {FontFamily} from "@tiptap/extension-font-family";
import Color from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Image from "@tiptap/extension-image";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import {createLowlight} from "lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import {Popover} from "@headlessui/react";
import EmojiPicker from "emoji-picker-react";
import {FormulaNode, KatexExtension} from "./KatexExtension";

// katex css
import "katex/dist/katex.min.css";
import {FormulaModal} from "./FormulaModal";

// Create a lowlight instance
const lowlight = createLowlight();

// Register languages for code highlighting
lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);

type Props = {
  content: string;
  onChange: (content: string) => void;
};

const RichTextEditor = ({content, onChange}: Props) => {
  const [showFormulaModal, setShowFormulaModal] = useState(false);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [currentEditingFormula, setCurrentEditingFormula] = useState<{
    position: number;
    formula: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Underline,
      TextStyle,
      FontSize,
      FontFamily,
      Color,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      TaskList,
      TaskItem,
      FormulaNode,
      KatexExtension,
    ],
    content: content,
    onUpdate: ({editor}) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    // Add this to fix the SSR issue
    immediatelyRender: false,
  });

  useEffect(() => {
    const handleEditFormula = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("formula")) {
        const formula = target.getAttribute("data-formula");
        // Find the position in the document
        const position = editor?.view.posAtDOM(target, 0) || 0;

        if (formula) {
          setCurrentEditingFormula({
            position,
            formula,
          });
          setShowFormulaModal(true);
        }
      }
    };

    // Add event listener to the editor container
    const editorContainer = editorContainerRef.current;
    if (editorContainer) {
      editorContainer.addEventListener("click", handleEditFormula);
    }

    // Clean up
    return () => {
      if (editorContainer) {
        editorContainer.removeEventListener("click", handleEditFormula);
      }
    };
  }, [editor]);

  const addEmoji = (emoji: string) => {
    editor?.chain().focus().insertContent(emoji).run();
  };

  const addFormula = (latex: string) => {
    // Get the human-readable description
    const getFormulaDescription = (formula: string): string => {
      // This is a safer version of the parser
      const descriptions: {[key: string]: string} = {
        "\\times": "times",
        "\\div": "divided by",
        "\\neq": "not equal to",
        "\\leq": "less than or equal to",
        "\\geq": "greater than or equal to",
        "\\frac": "fraction",
        "\\sqrt": "square root of",
        "\\pi": "pi",
        "\\alpha": "alpha",
        "\\beta": "beta",
        "\\gamma": "gamma",
        "\\delta": "delta",
        "\\sum": "sum",
        "\\int": "integral",
        "\\prod": "product",
        "\\lim": "limit",
      };

      // Simple special characters that need escaping in RegExp
      const simpleSymbols: {[key: string]: string} = {
        "+": "plus",
        "-": "minus",
        "=": "equals",
        "<": "less than",
        ">": "greater than",
        "^2": "squared",
        "^3": "cubed",
        "^": "to the power of",
        _: "subscript",
      };

      // Start with a copy of the LaTeX
      let humanReadable = formula;

      // First replace complex expressions (with backslashes)
      Object.entries(descriptions).forEach(([symbol, description]) => {
        // Escape the backslash for regex
        const escapedSymbol = symbol.replace(/\\/g, "\\\\");
        try {
          // Create a global regex to match the symbol
          const regex = new RegExp(escapedSymbol, "g");
          humanReadable = humanReadable.replace(regex, ` ${description} `);
        } catch (error) {
          console.error(`Error creating regex for ${symbol}:`, error);
        }
      });

      // Then replace simple symbols
      Object.entries(simpleSymbols).forEach(([symbol, description]) => {
        try {
          // For simple symbols, escape any special regex characters
          const escapedSymbol = symbol.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const regex = new RegExp(escapedSymbol, "g");
          humanReadable = humanReadable.replace(regex, ` ${description} `);
        } catch (error) {
          console.error(`Error creating regex for ${symbol}:`, error);
        }
      });

      // Clean up multiple spaces
      humanReadable = humanReadable.replace(/\s+/g, " ").trim();

      return humanReadable;
    };

    const humanReadable = getFormulaDescription(latex);

    // Insert the LaTeX formula surrounded by $ symbols
    if (currentEditingFormula) {
      // We're editing an existing formula
      editor
        ?.chain()
        .focus()
        .deleteRange({
          from: currentEditingFormula.position,
          to: currentEditingFormula.position + 1, // Adjust based on your node structure
        })
        .insertContent(
          `<span data-formula="${latex}" class="formula">${humanReadable}</span>`
        )
        .run();
      setCurrentEditingFormula(null);
    } else {
      // We're inserting a new formula
      editor
        ?.chain()
        .focus()
        .insertContent(
          `<span data-formula="${latex}" class="formula">${humanReadable}</span>`
        )
        .run();
    }

    // You could also add the human-readable version in parentheses if desired
    // editor?.chain().focus().insertContent(` (${humanReadable})`).run();
  };

  const addLink = () => {
    if (linkUrl) {
      editor?.chain().focus().setLink({href: linkUrl}).run();
      setLinkUrl("");
      setShowLinkModal(false);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        editor
          ?.chain()
          .focus()
          .setImage({src: e.target?.result as string})
          .run();
      };
      reader.readAsDataURL(file);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const fontSizes = [
    "8px",
    "10px",
    "12px",
    "14px",
    "16px",
    "18px",
    "20px",
    "24px",
    "30px",
    "36px",
    "48px",
    "60px",
    "72px",
  ];
  const fontFamilies = [
    "Arial",
    "Georgia",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "Tahoma",
    "Trebuchet MS",
    "Impact",
    "Comic Sans MS",
  ];

  const colors = [
    "#000000", // Black
    "#434343", // Dark Gray
    "#666666", // Gray
    "#999999", // Light Gray
    "#FFFFFF", // White
    "#FF0000", // Red
    "#FF6600", // Orange
    "#FFFF00", // Yellow
    "#00FF00", // Green
    "#00FFFF", // Cyan
    "#0000FF", // Blue
    "#9900FF", // Purple
    "#FF00FF", // Magenta
  ];

  if (!editor) {
    return (
      <div className="rich-editor border border-gray-300 rounded-md p-4 min-h-64">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="rich-editor border border-gray-300 rounded-md">
      {/* Toolbar */}
      <div className="editor-toolbar p-2 border-b border-gray-300 flex flex-wrap gap-2 bg-gray-50">
        {/* Text Formatting */}
        <div className="flex items-center gap-1 border-r pr-2 border-gray-300">
          <button
            className={`p-1 rounded ${
              editor.isActive("bold") ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
            onClick={() => editor.chain().focus().toggleBold().run()}
            title="Bold"
          >
            <strong>B</strong>
          </button>
          <button
            className={`p-1 rounded ${
              editor.isActive("italic") ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            title="Italic"
          >
            <em>I</em>
          </button>
          <button
            className={`p-1 rounded ${
              editor.isActive("underline") ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            title="Underline"
          >
            <u>U</u>
          </button>
          <button
            className={`p-1 rounded ${
              editor.isActive("strike") ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            title="Strike"
          >
            <s>S</s>
          </button>
        </div>

        {/* Font Size */}
        <div className="border-r pr-2 border-gray-300">
          <select
            className="p-1 rounded border border-gray-300"
            onChange={(e) =>
              editor.chain().focus().setFontSize(e.target.value).run()
            }
            title="Font Size"
          >
            <option value="">Font Size</option>
            {fontSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Font Family */}
        <div className="border-r pr-2 border-gray-300">
          <select
            className="p-1 rounded border border-gray-300"
            onChange={(e) =>
              editor.chain().focus().setFontFamily(e.target.value).run()
            }
            title="Font Family"
          >
            <option value="">Font Family</option>
            {fontFamilies.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>

        {/* Color Picker */}
        <div className="border-r pr-2 border-gray-300">
          <select
            className="p-1 rounded border border-gray-300"
            onChange={(e) =>
              editor.chain().focus().setColor(e.target.value).run()
            }
            title="Text Color"
          >
            <option value="">Text Color</option>
            {colors.map((color) => (
              <option
                key={color}
                value={color}
                style={{backgroundColor: color}}
              >
                {color}
              </option>
            ))}
          </select>
        </div>

        {/* Headings */}
        <div className="border-r pr-2 border-gray-300">
          <select
            className="p-1 rounded border border-gray-300"
            onChange={(e) => {
              const level = parseInt(e.target.value) as 1 | 2 | 3 | 4 | 5 | 6;
              if (level) {
                editor.chain().focus().toggleHeading({level}).run();
              } else {
                editor.chain().focus().setParagraph().run();
              }
            }}
            title="Heading Level"
          >
            <option value="">Normal</option>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="4">Heading 4</option>
            <option value="5">Heading 5</option>
            <option value="6">Heading 6</option>
          </select>
        </div>

        {/* Text Alignment */}
        <div className="flex items-center gap-1 border-r pr-2 border-gray-300">
          <button
            className={`p-1 rounded ${
              editor.isActive({textAlign: "left"})
                ? "bg-gray-200"
                : "hover:bg-gray-100"
            }`}
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            title="Left Align"
          >
            L
          </button>
          <button
            className={`p-1 rounded ${
              editor.isActive({textAlign: "center"})
                ? "bg-gray-200"
                : "hover:bg-gray-100"
            }`}
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            title="Center Align"
          >
            C
          </button>
          <button
            className={`p-1 rounded ${
              editor.isActive({textAlign: "right"})
                ? "bg-gray-200"
                : "hover:bg-gray-100"
            }`}
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            title="Right Align"
          >
            R
          </button>
          <button
            className={`p-1 rounded ${
              editor.isActive({textAlign: "justify"})
                ? "bg-gray-200"
                : "hover:bg-gray-100"
            }`}
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            title="Justify"
          >
            J
          </button>
        </div>

        {/* Lists */}
        <div className="flex items-center gap-1 border-r pr-2 border-gray-300">
          <button
            className={`p-1 rounded ${
              editor.isActive("bulletList")
                ? "bg-gray-200"
                : "hover:bg-gray-100"
            }`}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            title="Bullet List"
          >
            •
          </button>
          <button
            className={`p-1 rounded ${
              editor.isActive("orderedList")
                ? "bg-gray-200"
                : "hover:bg-gray-100"
            }`}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            title="Numbered List"
          >
            1.
          </button>
          <button
            className={`p-1 rounded ${
              editor.isActive("taskList") ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
            onClick={() => editor.chain().focus().toggleTaskList().run()}
            title="Task List"
          >
            ☑
          </button>
        </div>

        {/* Insert Menu */}
        <div className="insert-menu">
          <Popover className="relative">
            <Popover.Button className="p-1 rounded border border-gray-300 hover:bg-gray-100">
              Insert
            </Popover.Button>
            <Popover.Panel className="absolute z-10 mt-1 w-48 bg-white shadow-lg rounded border border-gray-200 p-2 flex flex-col gap-1">
              <button
                className="p-1 text-left hover:bg-gray-100 rounded"
                onClick={() =>
                  editor.chain().focus().insertTable({rows: 3, cols: 3}).run()
                }
              >
                Table
              </button>
              <button
                className="p-1 text-left hover:bg-gray-100 rounded"
                onClick={() => setShowFormulaModal(true)}
              >
                Formula
              </button>
              <button
                className="p-1 text-left hover:bg-gray-100 rounded"
                onClick={() => setEmojiOpen(!emojiOpen)}
              >
                Emoji
              </button>
              <button
                className="p-1 text-left hover:bg-gray-100 rounded"
                onClick={() => setShowLinkModal(true)}
              >
                Link
              </button>
              <button
                className="p-1 text-left hover:bg-gray-100 rounded"
                onClick={triggerImageUpload}
              >
                Image
              </button>
              <button
                className="p-1 text-left hover:bg-gray-100 rounded"
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              >
                Code Block
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{display: "none"}}
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Popover.Panel>
          </Popover>
        </div>

        {/* Table Controls - Only shown when inside a table */}
        {editor.isActive("table") && (
          <div className="flex items-center gap-1 ml-2">
            <button
              className="p-1 rounded hover:bg-gray-100"
              onClick={() => editor.chain().focus().addColumnBefore().run()}
              title="Add Column Before"
            >
              ←Col
            </button>
            <button
              className="p-1 rounded hover:bg-gray-100"
              onClick={() => editor.chain().focus().addColumnAfter().run()}
              title="Add Column After"
            >
              Col→
            </button>
            <button
              className="p-1 rounded hover:bg-gray-100"
              onClick={() => editor.chain().focus().addRowBefore().run()}
              title="Add Row Before"
            >
              ↑Row
            </button>
            <button
              className="p-1 rounded hover:bg-gray-100"
              onClick={() => editor.chain().focus().addRowAfter().run()}
              title="Add Row After"
            >
              Row↓
            </button>
            <button
              className="p-1 rounded hover:bg-gray-100"
              onClick={() => editor.chain().focus().deleteColumn().run()}
              title="Delete Column"
            >
              -Col
            </button>
            <button
              className="p-1 rounded hover:bg-gray-100"
              onClick={() => editor.chain().focus().deleteRow().run()}
              title="Delete Row"
            >
              -Row
            </button>
            <button
              className="p-1 rounded hover:bg-gray-100"
              onClick={() => editor.chain().focus().deleteTable().run()}
              title="Delete Table"
            >
              ⌫Table
            </button>
          </div>
        )}
      </div>

      {/* Emoji Picker Modal */}
      {emojiOpen && (
        <div className="emoji-picker absolute z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={() => setEmojiOpen(false)}
          ></div>
          <div className="absolute z-10">
            <EmojiPicker
              onEmojiClick={(emojiData) => {
                addEmoji(emojiData.emoji);
                setEmojiOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Link Modal */}
      {showLinkModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={() => setShowLinkModal(false)}
          ></div>
          <div className="bg-white p-4 rounded shadow-lg z-10 w-80">
            <h3 className="text-lg font-medium mb-2">Insert Link</h3>
            <input
              type="text"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-3 py-1 bg-gray-200 rounded"
                onClick={() => setShowLinkModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded"
                onClick={addLink}
              >
                Insert
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Formula Modal */}
      {showFormulaModal && (
        <FormulaModal
          onClose={() => setShowFormulaModal(false)}
          onInsert={addFormula}
          initialFormula={currentEditingFormula?.formula || ""}
        />
      )}

      {/* Editor Content */}
      <EditorContent editor={editor} className="editor-content p-4 min-h-64" />
    </div>
  );
};

export default RichTextEditor;