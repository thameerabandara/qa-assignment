import { writeDefect } from "./excelDefectWriter";

let defectNumber = 1;

export async function reportDefect(
  module: string,
  summary: string,
  steps: string,
  expectedResult: string,
  actualResult: string,
  screenshot: string,
  severity: string = "Major",
  priority: string = "High",
  status: string = "Open"
) {

  const defectId = `DEF-${String(defectNumber).padStart(3, "0")}`;

  await writeDefect({

    defectId,

    module,

    summary,

    steps,

    expectedResult,

    actualResult,

    severity,

    priority,

    status,

    screenshot

  });

  defectNumber++;
}


async function main() {

  const [
    ,
    ,
    module,
    summary,
    steps,
    expectedResult,
    actualResult,
    screenshot,
    severity,
    priority,
    status
  ] = process.argv;


  if (
    !module ||
    !summary ||
    !steps ||
    !expectedResult ||
    !actualResult ||
    !screenshot
  ) {

    console.log(
      "Usage: ts-node utils/defectReporter.ts <module> <summary> <steps> <expectedResult> <actualResult> <screenshot> [severity] [priority] [status]"
    );

    return;
  }


  await reportDefect(

    module,

    summary,

    steps,

    expectedResult,

    actualResult,

    screenshot,

    severity ?? "Major",

    priority ?? "High",

    status ?? "Open"

  );
}


if (require.main === module) {

  main().catch((error) => {

    console.error(error);

    process.exit(1);

  });

}