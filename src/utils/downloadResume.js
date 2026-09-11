export function downloadResumePDF(e) {
  // Do not call e.preventDefault() if it's a direct link click.
  // Allow native browser file download of the PDF file.
  const pdfUrl = '/Charu_FullStack_Developer_Resume.pdf';
  const pdfName = 'Charu_FullStack_Developer_Resume.pdf';

  // Native anchor download
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = pdfName;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
