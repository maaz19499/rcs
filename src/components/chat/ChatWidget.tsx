"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { MessageSquare, X, Send, RotateCcw, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const t = useTranslations("chatbot");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string>("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize conversation and greeting
  useEffect(() => {
    const greetingText = t("greeting");
    const storedConvId = typeof window !== "undefined" ? sessionStorage.getItem("rcs_chat_conv_id") || "" : "";
    setConversationId(storedConvId);

    // Initial message if empty
    setMessages([
      {
        id: "initial-greeting",
        role: "assistant",
        content: greetingText,
      },
    ]);
  }, [t, locale]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: text,
          conversation_id: conversationId,
          user: `rcs-user-${locale}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed response from chat API");
      }

      const data = await response.json();
      if (data.conversation_id) {
        setConversationId(data.conversation_id);
        sessionStorage.setItem("rcs_chat_conv_id", data.conversation_id);
      }

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.answer || t("error_message"),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: t("error_message"),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setConversationId("");
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("rcs_chat_conv_id");
    }
    setMessages([
      {
        id: "initial-greeting",
        role: "assistant",
        content: t("greeting"),
      },
    ]);
  };

  const quickQuestions: string[] = [
    t("quick_questions.0"),
    t("quick_questions.1"),
    t("quick_questions.2"),
    t("quick_questions.3"),
  ];

  // Helper to render markdown-like content safely
  const renderFormattedText = (text: string) => {
    const paragraphs = text.split("\n\n");
    return paragraphs.map((para, pIdx) => {
      const lines = para.split("\n");
      return (
        <p key={pIdx} className="mb-2 last:mb-0 leading-relaxed text-sm">
          {lines.map((line, lIdx) => {
            // Check for list items
            const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("• ");
            const isNumbered = /^\d+\.\s/.test(line.trim());
            const cleanLine = isBullet ? line.trim().substring(2) : isNumbered ? line.trim().replace(/^\d+\.\s/, "") : line;

            // Simple bold parser
            const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
            const formatted = parts.map((part, partIdx) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={partIdx} className="font-semibold text-text-primary">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              // Detect links or emails
              if (part.includes("@")) {
                const words = part.split(" ");
                return words.map((w, wIdx) => {
                  if (w.includes("@") && !w.startsWith("http")) {
                    return (
                      <a key={wIdx} href={`mailto:${w.replace(/[.,]/g, "")}`} className="text-link underline hover:text-link-hover">
                        {w}{" "}
                      </a>
                    );
                  }
                  return w + " ";
                });
              }
              return part;
            });

            return (
              <span key={lIdx} className={isBullet || isNumbered ? "flex items-start gap-1.5 my-1 ps-2" : "block"}>
                {isBullet && <span className="text-link select-none">•</span>}
                {isNumbered && <span className="text-link select-none font-semibold">{line.trim().match(/^\d+\./)?.[0]}</span>}
                <span>{formatted}</span>
              </span>
            );
          })}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-6 end-6 z-50 font-sans" dir={isRtl ? "rtl" : "ltr"}>
      {/* Floating launcher button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t("launcher_label")}
        aria-expanded={isOpen}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#176FC0] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#2783D5] focus:outline-none focus:ring-4 focus:ring-link/30 active:scale-95"
      >
        <span className="absolute -top-0.5 -end-0.5 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-surface bg-success" />
        </span>
        {isOpen ? (
          <X className="h-6 w-6 transition-transform group-hover:rotate-90 duration-200" />
        ) : (
          <MessageSquare className="h-6 w-6 transition-transform group-hover:scale-110 duration-200" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label={t("title")}
          className="fixed inset-x-3 bottom-24 sm:inset-x-auto sm:end-6 sm:bottom-24 w-auto sm:w-[24.5rem] h-[36rem] max-h-[calc(100vh-7.5rem)] flex flex-col rounded-2xl border border-border bg-surface shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-200 overflow-hidden"
        >
          {/* Header */}
          <div className="relative flex items-center justify-between border-b border-border bg-surface-raised px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176FC0] text-white shadow-md">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-text-primary tracking-tight">{t("title")}</h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-semibold text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                    {t("online_status")}
                  </span>
                </div>
                <p className="text-xs text-text-secondary">{t("subtitle")}</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleClearChat}
                title={t("clear_chat")}
                aria-label={t("clear_chat")}
                className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close"
                aria-label="Close chat"
                className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                    msg.role === "user"
                      ? "bg-[#176FC0] text-white rounded-br-xs"
                      : "bg-surface-raised border border-border text-text-primary rounded-bl-xs"
                  }`}
                  style={{ unicodeBidi: "plaintext" }}
                >
                  {renderFormattedText(msg.content)}
                </div>
              </div>
            ))}

            {/* Quick suggested question chips (show right after greeting) */}
            {messages.length <= 1 && !isLoading && (
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
                  {t("suggested_title")}
                </p>
                <div className="flex flex-col gap-1.5">
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(q)}
                      className="text-start text-xs font-medium text-text-primary bg-surface-raised hover:bg-surface-brand hover:border-border-brand border border-border rounded-xl px-3 py-2 transition-all duration-150 active:scale-[0.98]"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Loading typing indicator */}
            {isLoading && (
              <div className="flex items-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-xs bg-surface-raised border border-border px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-link animate-bounce [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 rounded-full bg-link animate-bounce [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 rounded-full bg-link animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="border-t border-border bg-surface-raised p-3 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("input_placeholder")}
              disabled={isLoading}
              className="flex-1 rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-secondary focus:border-border-brand focus:outline-none focus:ring-1 focus:ring-border-brand disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label={t("send_button")}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#176FC0] text-white hover:bg-[#2783D5] transition-colors disabled:opacity-40 disabled:hover:bg-[#176FC0]"
            >
              <Send className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
