const scriptName = 'SCU_Zhjw_Helper';
let body = $response.body;
let magicJS = MagicJS(scriptName, "INFO");

magicJS.logWarning(`Info: ${body} `);

$done({ body })
