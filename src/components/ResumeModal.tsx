/**
 * ResumeModal Component
 *
 * A modal dialog that displays a PDF resume preview.
 * Matches the style of ProjectModal for consistency.
 * Allows users to preview and download the resume.
 *
 * @module components/ResumeModal
 */

import { useEffect, useRef } from 'react';

/** Props for the ResumeModal component */
interface ResumeModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback to close the modal */
  onClose: () => void;
}

/** Resume configuration */
const RESUME_CONFIG = {
  pdfUrl: '/Logan_Winters_Resume.pdf',
  downloadName: 'Logan_Winters_Resume.pdf',
  title: 'Resume',
  subtitle: 'Logan Winters - Software Developer',
};

/**
 * ResumeModal renders a preview of the resume PDF
 *
 * @param props - Component props
 * @returns JSX element or null if closed
 */
export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  /**
   * Handle escape key and click outside to close modal
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111]/95 shadow-2xl backdrop-blur-xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <h2
              id="resume-modal-title"
              className="text-xl font-bold text-white"
            >
              {RESUME_CONFIG.title}
            </h2>
            <p className="text-sm text-white/50">{RESUME_CONFIG.subtitle}</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Download Button */}
            <a
              href={RESUME_CONFIG.pdfUrl}
              download={RESUME_CONFIG.downloadName}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-white/90"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
              aria-label="Close modal"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="flex-1 bg-white/5 p-4">
          <iframe
            src={`${RESUME_CONFIG.pdfUrl}#toolbar=0`}
            className="h-full w-full rounded-lg border border-white/10"
            title="Resume Preview"
          />
        </div>
      </div>
    </div>
  );
}
