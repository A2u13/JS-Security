const scriptName = 'SCU_Zhjw_Helper';
let body = null;
let magicJS = MagicJS(scriptName, "INFO");

let html = magicJS.response.body;
magicJS.logInfo(`Info: ${html} `);

$done({ body })
