'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext(null);

let toastId = 0;

const ICONS = {
  success: '✅',
  info: 'ℹ️',
  warning: '⚠️',
};

const TYPE_CLASSES = {
  success: 'toast-success',
  info: 'toast-info',
  warning: 'toast-warning',
};

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((message, type = 'info') => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        <style>{`
          .toast-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
          }

          .toast {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 18px;
            border-radius: 10px;
            background: var(--bg2, #1e1e2e);
            border: 1px solid var(--border, #333);
            color: var(--text, #e0e0e0);
            font-size: 0.95rem;
            min-width: 280px;
            max-width: 400px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
            pointer-events: auto;
            animation: toast-slide-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          .toast-icon {
            font-size: 1.2rem;
            flex-shrink: 0;
          }

          .toast-message {
            flex: 1;
            line-height: 1.4;
          }

          .toast-close {
            background: none;
            border: none;
            color: var(--text2, #aaa);
            cursor: pointer;
            font-size: 1.1rem;
            padding: 2px 6px;
            border-radius: 4px;
            flex-shrink: 0;
            transition: color 0.2s, background 0.2s;
          }

          .toast-close:hover {
            color: var(--text, #fff);
            background: rgba(255, 255, 255, 0.1);
          }

          .toast-success {
            border-left: 3px solid var(--green, #10b981);
          }

          .toast-info {
            border-left: 3px solid var(--blue, #3b82f6);
          }

          .toast-warning {
            border-left: 3px solid var(--orange, #f59e0b);
          }

          @keyframes toast-slide-in {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}</style>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast ${TYPE_CLASSES[toast.type] || 'toast-info'}`}
          >
            <span className="toast-icon">{ICONS[toast.type] || ICONS.info}</span>
            <span className="toast-message">{toast.message}</span>
            <button
              className="toast-close"
              onClick={() => removeToast(toast.id)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
