/*
  Google Apps Script側コード
  Googleスプレッドシート → 拡張機能 → Apps Script に貼り付けてください。
*/

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("responses");

  if (!sheet) {
    sheet = ss.insertSheet("responses");
    sheet.appendRow([
      "submitted_at",
      "student_id",
      "group_id",
      "condition",
      "public_ip",
      "ip_fetch_status",
      "trial_number",
      "problem_type",
      "question",
      "correct_answer",
      "response",
      "numeric_response",
      "correct",
      "timed_out",
      "rt",
      "time_limit_sec",
      "user_agent",
      "screen_width",
      "screen_height",
      "timezone"
    ]);
  }

  const body = JSON.parse(e.postData.contents);
  const rows = [];

  body.data.forEach(function(trial) {
    rows.push([
      body.submitted_at,
      body.student_id,
      body.group_id,
      body.condition,
      body.public_ip,
      body.ip_fetch_status,
      trial.trial_number,
      trial.problem_type,
      trial.question,
      trial.correct_answer,
      trial.response,
      trial.numeric_response,
      trial.correct,
      trial.timed_out,
      trial.rt,
      trial.time_limit_sec,
      body.user_agent,
      body.screen_width,
      body.screen_height,
      body.timezone
    ]);
  });

  if (rows.length > 0) {
    sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
