import * as fs from "fs";
import * as path from "path";
import ExcelJS from "exceljs";

const REPORT_PATH = path.join(process.cwd(), "reports", "defects.xlsx");

export interface DefectData {
  defectId: string;
  module: string;
  summary: string;
  steps: string;
  expectedResult: string;
  actualResult: string;
  severity: string;
  priority: string;
  status: string;
  screenshot: string;
}

export async function writeDefect(defect: DefectData) {

  const workbook = new ExcelJS.Workbook();

  if (fs.existsSync(REPORT_PATH)) {
    await workbook.xlsx.readFile(REPORT_PATH);
  }

  let sheet = workbook.getWorksheet("Defects");

  if (!sheet) {

    sheet = workbook.addWorksheet("Defects");

    sheet.columns = [
      { header: "Defect ID", key: "defectId", width: 15 },
      { header: "Module", key: "module", width: 20 },
      { header: "Summary", key: "summary", width: 40 },
      { header: "Steps to Reproduce", key: "steps", width: 50 },
      { header: "Expected Result", key: "expectedResult", width: 40 },
      { header: "Actual Result", key: "actualResult", width: 40 },
      { header: "Severity", key: "severity", width: 15 },
      { header: "Priority", key: "priority", width: 15 },
      { header: "Status", key: "status", width: 15 },
      { header: "Screenshot", key: "screenshot", width: 45 }
    ];
  }


  // Avoid duplicate defects
  let existingRow: ExcelJS.Row | undefined;

  if (sheet.rowCount > 1) {

    sheet.eachRow((row, rowNumber) => {

      if (rowNumber === 1) {
        return;
      }

      const moduleValue = row.getCell(2).value?.toString() ?? "";
      const summaryValue = row.getCell(3).value?.toString() ?? "";

      if (
        moduleValue === defect.module &&
        summaryValue === defect.summary
      ) {
        existingRow = row;
      }

    });
  }


  if (existingRow) {

    existingRow.getCell(1).value = defect.defectId;
    existingRow.getCell(2).value = defect.module;
    existingRow.getCell(3).value = defect.summary;
    existingRow.getCell(4).value = defect.steps;
    existingRow.getCell(5).value = defect.expectedResult;
    existingRow.getCell(6).value = defect.actualResult;
    existingRow.getCell(7).value = defect.severity;
    existingRow.getCell(8).value = defect.priority;
    existingRow.getCell(9).value = defect.status;
    existingRow.getCell(10).value = defect.screenshot;

  } else {

    sheet.addRow(defect);

  }


  await workbook.xlsx.writeFile(REPORT_PATH);
}