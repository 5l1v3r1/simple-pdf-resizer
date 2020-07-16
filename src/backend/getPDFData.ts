import { getFile } from "./getFile";
import { parsePDF } from "./parsePDF";

export async function getPDFData(filePath: string) {
  const pdfDoc = await getFile(filePath);
  if (pdfDoc.isEncrypted) {
    return { isEncrypted: true };
  }

  const parseData = parsePDF(pdfDoc, filePath);
  return parseData;
}
