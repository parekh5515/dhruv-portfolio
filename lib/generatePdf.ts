import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { biodata } from "./biodata";

export const generateBiodataPdf = async () => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  // Theme colors
  const primaryColor: [number, number, number] = [122, 31, 61]; // Maroon #7A1F3D
  const accentColor: [number, number, number] = [212, 175, 55]; // Gold #D4AF37
  const textColor: [number, number, number] = [51, 51, 51]; // Charcoal
  const lightBg: [number, number, number] = [255, 248, 240]; // #FFF8F0

  // 1. Draw premium header background
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, 210, 45, "F");
  
  // 2. Draw gold accent strip at the bottom of header
  doc.setFillColor(...accentColor);
  doc.rect(0, 45, 210, 2, "F");

  // Helper to load image properly (SVG or PNG) via canvas with circular clipping and object-fit: cover
  const getBase64ImageFromURL = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const size = 600; // High resolution size for crisp PDF
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        
        if (ctx) {
          // Calculate object-fit: cover dimensions
          const scale = Math.max(size / img.width, size / img.height);
          const drawWidth = img.width * scale;
          const drawHeight = img.height * scale;
          const offsetX = (size - drawWidth) / 2;
          const offsetY = (size - drawHeight) / 2;

          // 1. Create a circular clipping mask
          ctx.beginPath();
          ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();

          // 2. Draw the image (it will be clipped to the circle and keep its aspect ratio)
          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

          // 3. Draw a gold border around the circle
          ctx.beginPath();
          ctx.arc(size / 2, size / 2, (size / 2) - 10, 0, Math.PI * 2);
          ctx.lineWidth = 20;
          ctx.strokeStyle = "#D4AF37"; // Gold border
          ctx.stroke();

          resolve(canvas.toDataURL("image/png"));
        } else {
          reject(new Error("Failed to get canvas context"));
        }
      };
      img.onerror = (error) => reject(error);
      img.src = url;
    });
  };

  try {
    // 3. Load and draw profile image (Top Right)
    try {
      const imgData = await getBase64ImageFromURL("/dhruv.svg");
      // Add a white circle/box behind the image if needed, or just draw
      doc.addImage(imgData, "PNG", 160, 5, 35, 35);
    } catch (e) {
      console.warn("Could not load image into PDF", e);
    }

    // 4. Header Text (Left aligned in the maroon box)
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(26);
    doc.text(biodata.name, 15, 20);

    doc.setFont("helvetica", "italic");
    doc.setTextColor(230, 230, 230);
    doc.setFontSize(12);
    doc.text(`"${biodata.tagline}"`, 15, 30);

    // Initial Y position for content
    let y = 60;

    // Custom table rendering options
    const tableOptions = {
      margin: { left: 15, right: 15 },
      theme: "plain" as const,
      styles: { cellPadding: 3, fontSize: 10, textColor: textColor, lineColor: [220, 220, 220] as [number, number, number], lineWidth: 0.1 },
      columnStyles: {
        0: { fontStyle: "bold" as const, textColor: primaryColor, cellWidth: 55 },
        1: { cellWidth: 110 },
      },
    };

    // --- Section: Contact & Personal Details ---
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...primaryColor);
    doc.setFontSize(14);
    doc.text("Personal & Contact Details", 15, y);
    y += 4;

    const personalData = [
      ["Mobile (Self)", biodata.contactInfo[0].mobile],
      ["Mobile (Father)", biodata.contactInfo[1].mobile],
      ["Email", biodata.contactInfo[0].email],
      ["Date of Birth", biodata.personalDetails.find(d => d.label.includes("Birth"))?.value || ""],
      ["Height", biodata.personalDetails.find(d => d.label === "Height")?.value || ""],
      ["Religion / Caste", `${biodata.personalDetails.find(d => d.label === "Religion")?.value} - ${biodata.personalDetails.find(d => d.label === "Caste")?.value}`],
      ["Native Place", biodata.personalDetails.find(d => d.label === "Native Place")?.value || ""],
      ["Current Residence", biodata.personalDetails.find(d => d.label === "Current Residence")?.value || ""],
      ["Status", biodata.personalDetails.find(d => d.label === "Current Status")?.value || ""]
    ];

    autoTable(doc, {
      ...tableOptions,
      startY: y,
      body: personalData,
    });
    
    y = (doc as any).lastAutoTable.finalY + 12;

    // --- Section: Education & Career ---
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...primaryColor);
    doc.setFontSize(14);
    doc.text("Education & Career", 15, y);
    y += 4;

    const eduBody = biodata.education.map((item) => [
      item.year,
      `${item.degree}\n${item.institution}, ${item.location}`
    ]);
    eduBody.push(["Occupation", biodata.occupation]);

    autoTable(doc, {
      ...tableOptions,
      startY: y,
      body: eduBody,
    });

    y = (doc as any).lastAutoTable.finalY + 12;

    // --- Section: Family Background ---
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...primaryColor);
    doc.setFontSize(14);
    doc.text("Family Background", 15, y);
    y += 4;

    autoTable(doc, {
      ...tableOptions,
      startY: y,
      body: biodata.family.map((item) => [item.relation, `${item.name}\n${item.role}`]),
    });

    // 5. Add a Footer border
    const pageCount = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setDrawColor(...accentColor);
      doc.setLineWidth(1);
      doc.line(15, 285, 195, 285); // Bottom border
    }

    // Output PDF
    doc.save("dhruv_parekh_biodata.pdf");
  } catch (error) {
    console.error("PDF Generation failed:", error);
    alert("Failed to generate PDF. Please try again later.");
  }
};
