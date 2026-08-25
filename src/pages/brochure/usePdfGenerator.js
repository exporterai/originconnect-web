
export const usePdfGenerator = () => {
  // Sanitize unsupported CSS elements like oklch for html2canvas
  const sanitizeNode = (node) => {
    node.querySelectorAll("*").forEach((el) => {
      try {
        const computed = window.getComputedStyle(el);

        if (computed.color?.includes("oklch")) {
          el.style.color = "rgb(0,0,0)";
        }
        if (computed.backgroundColor?.includes("oklch")) {
          el.style.backgroundColor = "rgb(255,255,255)";
        }
        if (computed.borderColor?.includes("oklch")) {
          el.style.borderColor = "rgb(200,200,200)";
        }

        el.style.boxShadow = "none";
        el.style.filter = "none";
        el.style.backdropFilter = "none";
      } catch { }
    });
  };

  // Convert external images to Base64 to prevent canvas tainting CORS issues
  const convertImagesToBase64 = async (node) => {
    const images = node.querySelectorAll("img");

    for (let img of images) {
      const src = img.getAttribute("src");
      if (!src || src.startsWith("data:")) continue;

      try {
        const res = await fetch(src, { mode: "cors" });
        const blob = await res.blob();
        const base64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
        img.src = base64;
      } catch {
        img.style.display = "none";
      }
    }
  };

  const generatePDF = async (ref, filename = "brochure-report.pdf") => {

    const [
      { default: html2canvas },
      { default: jsPDF }
    ] = await Promise.all([
      import("html2canvas"),
      import("jspdf"),
    ]);

    const container = ref.current;
    if (!container) return;

    const clone = container.cloneNode(true);
    clone.style.position = "absolute";
    clone.style.left = "-99999px";
    clone.style.top = "0";
    clone.style.background = "#fff";

    document.body.appendChild(clone);

    sanitizeNode(clone);
    await convertImagesToBase64(clone);

    // Extract pages based on class name '.pdf-page'
    const pages = [...clone.querySelectorAll(".pdf-page")];

    if (pages.length === 0) {
      console.error("No .pdf-page elements found inside reference container.");
      document.body.removeChild(clone);
      return;
    }

    // Initialize jsPDF in Portrait mode (A4: 210mm x 297mm)
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    const pageWidth = 210;
    const pageHeight = 297;

    for (let i = 0; i < pages.length; i++) {
      const pageElement = pages[i];

      // Create an isolated single-page container wrapper
      const singlePageContainer = document.createElement("div");
      singlePageContainer.style.position = "absolute";
      singlePageContainer.style.left = "-99999px";
      singlePageContainer.style.top = "0";
      singlePageContainer.style.background = "#fff";
      singlePageContainer.style.width = "794px"; // Standard A4 Portrait width at 96 DPI
      singlePageContainer.style.height = "1123px"; // Standard A4 Portrait height at 96 DPI

      const clonedPage = pageElement.cloneNode(true);
      clonedPage.style.width = "794px";
      clonedPage.style.height = "1123px";
      clonedPage.style.boxSizing = "border-box";

      singlePageContainer.appendChild(clonedPage);
      document.body.appendChild(singlePageContainer);

      const canvas = await html2canvas(singlePageContainer, {
        scale: 2, // High resolution scale for crisp output
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
        logging: false,
        windowWidth: 794,
        windowHeight: 1123,
      });

      document.body.removeChild(singlePageContainer);

      const imgData = canvas.toDataURL("image/jpeg", 0.85);

      if (i > 0) {
        pdf.addPage("a4", "portrait");
      }

      pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, pageHeight);

      // Clean up canvas memory
      canvas.width = 0;
      canvas.height = 0;
    }

    document.body.removeChild(clone);

    // ✅ Force reliable browser download via Blob URL
    const pdfBlob = pdf.output("blob");
    const blobUrl = URL.createObjectURL(pdfBlob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
  };

  return { generatePDF };
};

export default usePdfGenerator;
